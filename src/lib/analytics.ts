declare global {
  interface Window {
    gtag?: (command: string, action: string, params?: Record<string, any>) => void;
    plausible?: (eventName: string, options?: { props: Record<string, any> }) => void;
    va?: (event: string, options: { name: string; data: Record<string, any> }) => void;
  }
}

/**
 * Lightweight analytics utility to track conversion events and interactions.
 * Supports Google Analytics (gtag), Plausible, and Vercel Analytics (va).
 */
export function trackEvent(
  eventName: string, 
  properties?: Record<string, string | number | boolean | null | undefined>
): void {
  try {
    // Clean properties: remove undefined values
    const cleanedProperties: Record<string, string | number | boolean | null> = {};
    if (properties) {
      Object.entries(properties).forEach(([key, value]) => {
        if (value !== undefined) {
          cleanedProperties[key] = value;
        }
      });
    }

    // Log in development for debugging
    if (import.meta.env.DEV) {
      console.info(`[Analytics] Event: ${eventName}`, cleanedProperties);
    }

    // Google Analytics
    if (typeof window.gtag === 'function') {
      window.gtag("event", eventName, cleanedProperties);
    }

    // Plausible
    if (typeof window.plausible === 'function') {
      window.plausible(eventName, { props: cleanedProperties });
    }

    // Vercel Analytics
    if (typeof window.va === 'function') {
      window.va("event", { name: eventName, data: cleanedProperties });
    }
  } catch (error) {
    // Never throw in production
    if (import.meta.env.DEV) {
      console.error("[Analytics] Tracking error:", error);
    }
  }
}
