import React, { useState, useEffect } from 'react';
import { Phone, MessageCircle, Settings, Target, Globe, Video, Star, Check, LucideIcon } from 'lucide-react';
import './PhoneServicesCarousel.css';

interface Service {
    id: number;
    Icon: LucideIcon;
    pain: string;
    name: string;
    description: string;
    proof: string;
    benefit: string;
    price: string;
    cta: string;
    color: string;
}

const PhoneServicesCarousel: React.FC = () => {
    const [currentIndex, setCurrentIndex] = useState(0);
    const [autoPlay, setAutoPlay] = useState(true);
    const [isHovered, setIsHovered] = useState(false);
    const [touchStart, setTouchStart] = useState<number | null>(null);
    const [touchEnd, setTouchEnd] = useState<number | null>(null);

    const services: Service[] = [
        {
            id: 1,
            Icon: Phone,
            pain: 'Missing 8-12 calls per week?',
            name: 'AI Phone Agent',
            description: 'AI answers every call, qualifies the lead, and texts you instantly.',
            proof: '47 leads captured for LTE Electric',
            benefit: '4-minute average response time',
            price: 'Included in Starter Pack',
            cta: 'Stop Missing Calls',
            color: '#667eea',
        },
        {
            id: 2,
            Icon: MessageCircle,
            pain: 'Customers asking the same questions?',
            name: 'AI Chatbot',
            description: 'Trained on your services, hours, and pricing. Answers 24/7.',
            proof: 'Books appointments while you sleep',
            benefit: 'Lead capture to Airtable',
            price: 'Included in Starter Pack',
            cta: 'Get a Chatbot',
            color: '#764ba2',
        },
        {
            id: 3,
            Icon: Settings,
            pain: 'Drowning in admin work?',
            name: 'Workflow Automation',
            description: 'Lead scoring, SMS alerts, CRM updates — all automatic.',
            proof: 'Save 10+ hours per week',
            benefit: 'Hot/warm/cold qualification',
            price: 'Custom pricing',
            cta: 'Automate My Workflow',
            color: '#f093fb',
        },
        {
            id: 4,
            Icon: Target,
            pain: 'Need more qualified leads?',
            name: 'Lead Generation',
            description: 'Targeted Google Maps scraping + cold email campaigns.',
            proof: 'Verified contacts in your service area',
            benefit: 'Predictable lead pipeline',
            price: 'Lead Gen Pack: $1,000+',
            cta: 'Get More Leads',
            color: '#4facfe',
        },
        {
            id: 5,
            Icon: Globe,
            pain: 'Outdated or no website?',
            name: 'Custom Websites',
            description: 'Mobile-first sites built fast and deployed in days.',
            proof: 'Built for AIRMAKERS & LTE Electric',
            benefit: '5-7 page responsive sites',
            price: 'Trades Starter Pack: $1,500+',
            cta: 'Build My Website',
            color: '#43e97b',
        },
        {
            id: 6,
            Icon: Video,
            pain: 'No time for social media?',
            name: 'AI Video & Content',
            description: 'Auto-generated videos and posts to keep your brand active.',
            proof: '8-16 content pieces/month',
            benefit: 'Branded graphics & captions',
            price: 'Content Bundle: $2,000+',
            cta: 'Boost My Brand',
            color: '#fa709a',
        },
    ];

    useEffect(() => {
        if (!autoPlay || isHovered) return;
        const interval = setInterval(() => {
            setCurrentIndex((prev) => (prev + 1) % services.length);
        }, 6000);
        return () => clearInterval(interval);
    }, [autoPlay, isHovered, services.length]);

    useEffect(() => {
        const handleKey = (e: KeyboardEvent) => {
            if (e.key === 'ArrowLeft') handlePrev();
            if (e.key === 'ArrowRight') handleNext();
        };
        window.addEventListener('keydown', handleKey);
        return () => window.removeEventListener('keydown', handleKey);
    }, []);

    const handlePrev = () => {
        setCurrentIndex((prev) => (prev - 1 + services.length) % services.length);
        setAutoPlay(false);
    };

    const handleNext = () => {
        setCurrentIndex((prev) => (prev + 1) % services.length);
        setAutoPlay(false);
    };

    const handleTouchStart = (e: React.TouchEvent) => {
        setTouchEnd(null);
        setTouchStart(e.targetTouches[0].clientX);
    };

    const handleTouchMove = (e: React.TouchEvent) => {
        setTouchEnd(e.targetTouches[0].clientX);
    };

    const handleTouchEnd = () => {
        if (touchStart === null || touchEnd === null) return;
        const distance = touchStart - touchEnd;
        if (distance > 50) handleNext();
        if (distance < -50) handlePrev();
    };

    const scrollToContact = () => {
        const contact = document.getElementById('contact');
        if (contact) contact.scrollIntoView({ behavior: 'smooth' });
    };

    return (
        <div id="services" className="psc-container">
            <div className="psc-content">
                <div className="psc-trust-badge">
                    <Star size={14} fill="#fbbf24" color="#fbbf24" />
                    <span>Trusted by trade businesses in San Diego</span>
                </div>

                <h2 className="psc-heading">Built for HVAC, Electrical & Plumbing</h2>
                <p className="psc-subheading">Pick the service that solves your biggest problem — or get the full stack.</p>

                <div
                    className="psc-phone-wrapper"
                    onMouseEnter={() => setIsHovered(true)}
                    onMouseLeave={() => setIsHovered(false)}
                >
                    <div
                        className="psc-iphone-frame"
                        onTouchStart={handleTouchStart}
                        onTouchMove={handleTouchMove}
                        onTouchEnd={handleTouchEnd}
                    >
                        <div className="psc-iphone-notch"></div>
                        <div className="psc-iphone-button psc-silent"></div>
                        <div className="psc-iphone-button psc-volume-up"></div>
                        <div className="psc-iphone-button psc-volume-down"></div>
                        <div className="psc-iphone-button psc-power"></div>

                        <div className="psc-iphone-screen">
                            <div className="psc-status-bar">
                                <span className="psc-time">9:41</span>
                                <div className="psc-status-icons">
                                    <div className="psc-signal-bars">
                                        <div className="psc-bar"></div>
                                        <div className="psc-bar"></div>
                                        <div className="psc-bar"></div>
                                        <div className="psc-bar"></div>
                                    </div>
                                    <div className="psc-battery">
                                        <div className="psc-battery-fill"></div>
                                    </div>
                                </div>
                            </div>

                            <div className="psc-service-carousel">
                                {services.map((service, index) => {
                                    const ServiceIcon = service.Icon;
                                    return (
                                        <div
                                            key={service.id}
                                            className={`psc-service-slide ${index === currentIndex ? 'psc-active' : ''} ${index < currentIndex ? 'psc-prev' : 'psc-next'
                                                }`}
                                            style={{ '--service-color': service.color } as React.CSSProperties}
                                        >
                                            <div className="psc-slide-content">
                                                <div className="psc-pain-badge">
                                                    <span>{service.pain}</span>
                                                </div>
                                                <div className="psc-service-icon-wrapper">
                                                    <ServiceIcon size={48} strokeWidth={1.5} />
                                                </div>
                                                <h3 className="psc-slide-title">{service.name}</h3>
                                                <p className="psc-slide-description">{service.description}</p>
                                                <div className="psc-proof-row">
                                                    <Check size={14} className="psc-proof-icon" />
                                                    <span className="psc-proof-text">{service.proof}</span>
                                                </div>
                                                <div className="psc-proof-row">
                                                    <Check size={14} className="psc-proof-icon" />
                                                    <span className="psc-proof-text">{service.benefit}</span>
                                                </div>
                                                <div className="psc-price-tag">{service.price}</div>
                                                <button className="psc-cta-button" onClick={scrollToContact}>
                                                    {service.cta} →
                                                </button>
                                            </div>
                                        </div>
                                    );
                                })}
                            </div>

                            <div className="psc-indicators">
                                {services.map((_, index) => (
                                    <button
                                        key={index}
                                        className={`psc-indicator ${index === currentIndex ? 'psc-active' : ''}`}
                                        onClick={() => {
                                            setCurrentIndex(index);
                                            setAutoPlay(false);
                                        }}
                                        aria-label={`Go to service ${index + 1}`}
                                    ></button>
                                ))}
                            </div>
                        </div>

                        <div className="psc-home-indicator"></div>
                    </div>

                    <button className="psc-nav psc-nav-prev" onClick={handlePrev} aria-label="Previous service">
                        ←
                    </button>
                    <button className="psc-nav psc-nav-next" onClick={handleNext} aria-label="Next service">
                        →
                    </button>
                </div>

                <p className="psc-hint-text">
                    ← Swipe, tap dots, or use arrow keys to explore →
                </p>

                <div className="psc-bottom-cta">
                    <p>Not sure which service fits?</p>
                    <button className="psc-bottom-cta-button" onClick={scrollToContact}>
                        Book a Free 20-Min Audit Call
                    </button>
                </div>
            </div>
        </div>
    );
};

export default PhoneServicesCarousel;
