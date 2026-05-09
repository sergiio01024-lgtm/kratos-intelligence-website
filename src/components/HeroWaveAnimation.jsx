import React from 'react';
import './HeroWaveAnimation.css';

const HeroWaveAnimation = () => {
    return (
        <div className="hwa-wrapper" aria-hidden="true">
            <div className="hwa-bg"></div>

            <div className="hwa-orb hwa-orb-1"></div>
            <div className="hwa-orb hwa-orb-2"></div>
            <div className="hwa-orb hwa-orb-3"></div>

            <svg
                className="hwa-svg"
                viewBox="0 0 2400 1000"
                preserveAspectRatio="xMidYMid slice"
                xmlns="http://www.w3.org/2000/svg"
            >
                <defs>
                    <linearGradient id="hwa-grad-purple" x1="0%" y1="0%" x2="100%" y2="0%">
                        <stop offset="0%" stopColor="#667eea" stopOpacity="0" />
                        <stop offset="20%" stopColor="#667eea" stopOpacity="0.9" />
                        <stop offset="50%" stopColor="#a78bfa" stopOpacity="1" />
                        <stop offset="80%" stopColor="#c084fc" stopOpacity="0.9" />
                        <stop offset="100%" stopColor="#c084fc" stopOpacity="0" />
                    </linearGradient>

                    <linearGradient id="hwa-grad-pink" x1="0%" y1="0%" x2="100%" y2="0%">
                        <stop offset="0%" stopColor="#f093fb" stopOpacity="0" />
                        <stop offset="30%" stopColor="#f093fb" stopOpacity="0.85" />
                        <stop offset="70%" stopColor="#ec4899" stopOpacity="0.85" />
                        <stop offset="100%" stopColor="#ec4899" stopOpacity="0" />
                    </linearGradient>

                    <linearGradient id="hwa-grad-blue" x1="0%" y1="0%" x2="100%" y2="0%">
                        <stop offset="0%" stopColor="#60a5fa" stopOpacity="0" />
                        <stop offset="40%" stopColor="#60a5fa" stopOpacity="0.95" />
                        <stop offset="60%" stopColor="#38bdf8" stopOpacity="0.95" />
                        <stop offset="100%" stopColor="#38bdf8" stopOpacity="0" />
                    </linearGradient>

                    <linearGradient id="hwa-grad-magenta" x1="0%" y1="0%" x2="100%" y2="0%">
                        <stop offset="0%" stopColor="#d946ef" stopOpacity="0" />
                        <stop offset="50%" stopColor="#d946ef" stopOpacity="0.8" />
                        <stop offset="100%" stopColor="#d946ef" stopOpacity="0" />
                    </linearGradient>

                    <linearGradient id="hwa-grad-white" x1="0%" y1="0%" x2="100%" y2="0%">
                        <stop offset="0%" stopColor="#ffffff" stopOpacity="0" />
                        <stop offset="50%" stopColor="#ffffff" stopOpacity="0.6" />
                        <stop offset="100%" stopColor="#ffffff" stopOpacity="0" />
                    </linearGradient>

                    <filter id="hwa-glow-filter" x="-20%" y="-20%" width="140%" height="140%">
                        <feGaussianBlur stdDeviation="3" result="blur" />
                        <feMerge>
                            <feMergeNode in="blur" />
                            <feMergeNode in="SourceGraphic" />
                        </feMerge>
                    </filter>
                </defs>

                <g filter="url(#hwa-glow-filter)">
                    <path className="hwa-ribbon hwa-r1" d="M-800,650 Q-400,500 0,650 Q400,800 800,650 Q1200,500 1600,650 Q2000,800 2400,650 Q2800,500 3200,650" stroke="url(#hwa-grad-purple)" strokeWidth="2" fill="none" />
                    <path className="hwa-ribbon hwa-r2" d="M-800,680 Q-400,820 0,680 Q400,540 800,680 Q1200,820 1600,680 Q2000,540 2400,680 Q2800,820 3200,680" stroke="url(#hwa-grad-blue)" strokeWidth="2.5" fill="none" />
                    <path className="hwa-ribbon hwa-r3" d="M-800,700 Q-400,560 0,700 Q400,840 800,700 Q1200,560 1600,700 Q2000,840 2400,700 Q2800,560 3200,700" stroke="url(#hwa-grad-pink)" strokeWidth="3" fill="none" />
                    <path className="hwa-ribbon hwa-r4" d="M-800,720 Q-400,860 0,720 Q400,580 800,720 Q1200,860 1600,720 Q2000,580 2400,720 Q2800,860 3200,720" stroke="url(#hwa-grad-magenta)" strokeWidth="2.5" fill="none" />
                    <path className="hwa-ribbon hwa-r5" d="M-800,740 Q-400,600 0,740 Q400,880 800,740 Q1200,600 1600,740 Q2000,880 2400,740 Q2800,600 3200,740" stroke="url(#hwa-grad-purple)" strokeWidth="3.5" fill="none" />
                    <path className="hwa-ribbon hwa-r6" d="M-800,770 Q-400,900 0,770 Q400,640 800,770 Q1200,900 1600,770 Q2000,640 2400,770 Q2800,900 3200,770" stroke="url(#hwa-grad-white)" strokeWidth="1.5" fill="none" />
                </g>
            </svg>
        </div>
    );
};

export default HeroWaveAnimation;