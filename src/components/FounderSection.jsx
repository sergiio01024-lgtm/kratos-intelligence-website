import React from 'react';
import { MapPin, Briefcase, TrendingUp, Calendar } from 'lucide-react';
import './FounderSection.css';

const FounderSection = () => {
    const stats = [
        { Icon: Calendar, value: '1+ Year', label: 'Building Trade Automation' },
        { Icon: Briefcase, value: '2 Live Systems', label: 'Currently Running 24/7' },
        { Icon: TrendingUp, value: '47+ Leads', label: 'Captured in 90 Days for LTE' },
        { Icon: MapPin, value: 'San Diego', label: 'Local & Focused on Trades' },
    ];

    const scrollToContact = () => {
        const contact = document.getElementById('contact');
        if (contact) contact.scrollIntoView({ behavior: 'smooth' });
    };

    return (
        <section className="kf-section" id="about-founder">
            <div className="kf-container">
                <div className="kf-grid">
                    <div className="kf-photo-column">
                        <div className="kf-photo-wrapper">
                            <div className="kf-photo-placeholder">
                                <span className="kf-initial">S</span>
                            </div>

                            <div className="kf-badge">
                                <span className="kf-badge-dot"></span>
                                <span>Available for new projects</span>
                            </div>
                        </div>
                    </div>

                    <div className="kf-content-column">
                        <div className="kf-eyebrow">Meet the Founder</div>

                        <h2 className="kf-heading">
                            Hey, I'm Sergio.
                        </h2>

                        <div className="kf-story">
                            <p>
                                I'm 20, based in San Diego, and I've spent the last year obsessing
                                over one problem: <strong>trade businesses losing real money to missed
                                    calls and manual lead chasing.</strong>
                            </p>

                            <p>
                                After watching electricians and HVAC techs grind through 60-hour weeks
                                just to keep up with calls and paperwork, I built systems that handle
                                that stuff automatically. Now my clients capture every lead, qualify
                                them in seconds, and focus on what actually pays — working the job.
                            </p>

                            <p>
                                Trade businesses are the backbone of every neighborhood. They deserve
                                the same automation big tech companies use — without the bloated SaaS
                                costs or 6-month implementation timelines.
                            </p>
                        </div>

                        <div className="kf-stats">
                            {stats.map((stat, index) => {
                                const StatIcon = stat.Icon;
                                return (
                                    <div key={index} className="kf-stat">
                                        <div className="kf-stat-icon">
                                            <StatIcon size={18} strokeWidth={2} />
                                        </div>
                                        <div className="kf-stat-content">
                                            <div className="kf-stat-value">{stat.value}</div>
                                            <div className="kf-stat-label">{stat.label}</div>
                                        </div>
                                    </div>
                                );
                            })}
                        </div>

                        <div className="kf-cta-row">
                            <button className="kf-cta-button" onClick={scrollToContact}>
                                Let's Talk →
                            </button>
                            <p className="kf-cta-note">
                                Free 20-min audit call. No pitch — just real talk about your business.
                            </p>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default FounderSection;