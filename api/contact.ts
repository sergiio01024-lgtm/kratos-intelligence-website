import type { VercelRequest, VercelResponse } from '@vercel/node';

export default async function handler(
  request: VercelRequest,
  response: VercelResponse
) {
  if (request.method !== 'POST') {
    return response.status(405).json({ error: 'Method not allowed' });
  }

  const webhookUrl = process.env.CONTACT_WEBHOOK_URL;

  if (!webhookUrl) {
    console.error('CONTACT_WEBHOOK_URL environment variable is missing');
    return response.status(500).json({ error: 'Configuration error' });
  }

  try {
    const res = await fetch(webhookUrl, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(request.body),
    });

    if (!res.ok) {
      const errorText = await res.text();
      console.error('Webhook responded with error:', errorText);
      return response.status(res.status).json({ error: 'Failed to forward message' });
    }

    return response.status(200).json({ message: 'Success' });
  } catch (error) {
    console.error('Error forwarding to webhook:', error);
    return response.status(500).json({ error: 'Internal server error' });
  }
}
