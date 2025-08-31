import React from 'react';

interface RatelLogoProps {
  width?: number;
  height?: number;
  className?: string;
  animated?: boolean;
  variant?: 'full' | 'icon' | 'text';
}

const RatelLogo: React.FC<RatelLogoProps> = ({
  width = 200,
  height = 80,
  className = '',
  animated = true,
  variant = 'full'
}) => {
  if (variant === 'icon') {
    return (
      <svg
        width={width}
        height={height}
        viewBox="0 0 120 120"
        className={className}
        xmlns="http://www.w3.org/2000/svg"
      >
        <defs>
          <linearGradient id="badger-body" x1="0%" y1="0%" x2="100%" y2="100%">
            <stop offset="0%" stopColor="#4A4A4A" />
            <stop offset="50%" stopColor="#2C2C2C" />
            <stop offset="100%" stopColor="#1A1A1A" />
          </linearGradient>
          <linearGradient id="badger-stripe" x1="0%" y1="0%" x2="0%" y2="100%">
            <stop offset="0%" stopColor="#FFFFFF" />
            <stop offset="100%" stopColor="#E8E8E8" />
          </linearGradient>
          <linearGradient id="glow-effect" x1="0%" y1="0%" x2="100%" y2="100%">
            <stop offset="0%" stopColor="#8400FF" stopOpacity="0.6" />
            <stop offset="50%" stopColor="#FF0080" stopOpacity="0.4" />
            <stop offset="100%" stopColor="#FFC107" stopOpacity="0.6" />
          </linearGradient>
          <filter id="glow">
            <feGaussianBlur stdDeviation="3" result="coloredBlur"/>
            <feMerge> 
              <feMergeNode in="coloredBlur"/>
              <feMergeNode in="SourceGraphic"/>
            </feMerge>
          </filter>
        </defs>

        {/* Glow Ring */}
        <circle 
          cx="60" 
          cy="60" 
          r="50" 
          fill="none" 
          stroke="url(#glow-effect)" 
          strokeWidth="2" 
          opacity={animated ? "0.8" : "0.3"}
          className={animated ? "animate-pulse" : ""}
        />

        {/* Realistic Honey Badger */}
        <g transform="translate(60,60)" filter="url(#glow)">
          {/* Body Shadow */}
          <ellipse cx="0" cy="20" rx="25" ry="6" fill="rgba(0,0,0,0.3)" opacity="0.5" />
          
          {/* Main Body */}
          <ellipse cx="0" cy="10" rx="22" ry="15" fill="url(#badger-body)" />
          
          {/* Body Details */}
          <path 
            d="M-20 5 Q-18 0, -10 -2 L10 -2 Q18 0, 20 5 L20 18 Q18 22, 10 24 L-10 24 Q-18 22, -20 18 Z"
            fill="url(#badger-body)"
          />
          
          {/* White Stripe - More Realistic */}
          <path 
            d="M-18 2 Q-16 -3, -8 -5 L8 -5 Q16 -3, 18 2 L18 8 Q16 12, 8 14 L-8 14 Q-16 12, -18 8 Z"
            fill="url(#badger-stripe)"
            opacity="0.9"
          />
          
          {/* Head */}
          <ellipse cx="0" cy="-8" rx="12" ry="10" fill="url(#badger-body)" />
          
          {/* Head Stripe */}
          <ellipse cx="0" cy="-10" rx="10" ry="6" fill="url(#badger-stripe)" opacity="0.9" />
          
          {/* Snout - More Detailed */}
          <path 
            d="M-6 2 Q-4 4, 0 4 Q4 4, 6 2 Q6 6, 4 8 L-4 8 Q-6 6, -6 2 Z"
            fill="#2C2C2C"
          />
          
          {/* Nose */}
          <ellipse cx="0" cy="5" rx="2" ry="1.5" fill="#000000" />
          <ellipse cx="0" cy="4.5" rx="1" ry="0.8" fill="#333333" />
          
          {/* Eyes - More Expressive */}
          <g className={animated ? "animate-pulse" : ""}>
            <ellipse cx="-5" cy="-8" rx="2.5" ry="3" fill="#000000" />
            <ellipse cx="5" cy="-8" rx="2.5" ry="3" fill="#000000" />
            <circle cx="-5" cy="-9" r="1.2" fill="#8400FF" className={animated ? "animate-pulse" : ""} />
            <circle cx="5" cy="-9" r="1.2" fill="#8400FF" className={animated ? "animate-pulse" : ""} />
            <circle cx="-4.2" cy="-9.5" r="0.5" fill="#FFFFFF" />
            <circle cx="5.8" cy="-9.5" r="0.5" fill="#FFFFFF" />
          </g>
          
          {/* Ears - More Realistic Shape */}
          <path 
            d="M-10 -15 Q-12 -18, -8 -16 Q-6 -14, -8 -12 Z"
            fill="url(#badger-body)"
            className={animated ? "animate-bounce" : ""}
            style={{ transformOrigin: '-8px -14px', animationDuration: '3s' }}
          />
          <path 
            d="M10 -15 Q12 -18, 8 -16 Q6 -14, 8 -12 Z"
            fill="url(#badger-body)"
            className={animated ? "animate-bounce" : ""}
            style={{ transformOrigin: '8px -14px', animationDuration: '3s', animationDelay: '0.1s' }}
          />
          
          {/* Paws - More Detailed */}
          <ellipse cx="-12" cy="20" rx="4" ry="3" fill="#1A1A1A" />
          <ellipse cx="12" cy="20" rx="4" ry="3" fill="#1A1A1A" />
          <ellipse cx="-8" cy="24" rx="3" ry="2" fill="#1A1A1A" />
          <ellipse cx="8" cy="24" rx="3" ry="2" fill="#1A1A1A" />
          
          {/* Claws */}
          <g fill="#333333">
            <ellipse cx="-14" cy="22" rx="1" ry="2" transform="rotate(-20)" />
            <ellipse cx="-10" cy="22" rx="1" ry="2" transform="rotate(0)" />
            <ellipse cx="14" cy="22" rx="1" ry="2" transform="rotate(20)" />
            <ellipse cx="10" cy="22" rx="1" ry="2" transform="rotate(0)" />
          </g>
          
          {/* Whiskers */}
          <g stroke="#333333" strokeWidth="0.8" fill="none">
            <line x1="-8" y1="0" x2="-15" y2="-2" />
            <line x1="-8" y1="2" x2="-15" y2="2" />
            <line x1="8" y1="0" x2="15" y2="-2" />
            <line x1="8" y1="2" x2="15" y2="2" />
          </g>
          
          {/* Fur Texture Details */}
          <g fill="#666666" opacity="0.3">
            <circle cx="-8" cy="5" r="0.5" />
            <circle cx="8" cy="5" r="0.5" />
            <circle cx="-12" cy="12" r="0.3" />
            <circle cx="12" cy="12" r="0.3" />
            <circle cx="0" cy="15" r="0.4" />
          </g>
        </g>
      </svg>
    );
  }

  if (variant === 'text') {
    return (
      <svg
        width={width}
        height={height}
        viewBox="0 0 200 40"
        className={className}
        xmlns="http://www.w3.org/2000/svg"
      >
        <defs>
          <linearGradient id="text-gradient" x1="0%" y1="0%" x2="100%" y2="0%">
            <stop offset="0%" stopColor="#8400FF" />
            <stop offset="50%" stopColor="#FF0080" />
            <stop offset="100%" stopColor="#FFC107" />
          </linearGradient>
        </defs>
        <text 
          x="100" 
          y="25" 
          textAnchor="middle" 
          fontSize="24" 
          fontWeight="bold" 
          fontFamily="Arial, sans-serif"
          fill="url(#text-gradient)"
          className={animated ? "animate-pulse" : ""}
        >
          RATEL AJANS
        </text>
      </svg>
    );
  }

  // Full variant - Logo + Text
  return (
    <svg
      width={width}
      height={height}
      viewBox="0 0 300 80"
      className={className}
      xmlns="http://www.w3.org/2000/svg"
    >
      <defs>
        <linearGradient id="full-badger-body" x1="0%" y1="0%" x2="100%" y2="100%">
          <stop offset="0%" stopColor="#4A4A4A" />
          <stop offset="50%" stopColor="#2C2C2C" />
          <stop offset="100%" stopColor="#1A1A1A" />
        </linearGradient>
        <linearGradient id="full-badger-stripe" x1="0%" y1="0%" x2="0%" y2="100%">
          <stop offset="0%" stopColor="#FFFFFF" />
          <stop offset="100%" stopColor="#E8E8E8" />
        </linearGradient>
        <linearGradient id="full-text-gradient" x1="0%" y1="0%" x2="100%" y2="0%">
          <stop offset="0%" stopColor="#8400FF" />
          <stop offset="30%" stopColor="#FF0080" />
          <stop offset="70%" stopColor="#FFC107" />
          <stop offset="100%" stopColor="#8400FF" />
        </linearGradient>
        <linearGradient id="full-glow-effect" x1="0%" y1="0%" x2="100%" y2="100%">
          <stop offset="0%" stopColor="#8400FF" stopOpacity="0.4" />
          <stop offset="50%" stopColor="#FF0080" stopOpacity="0.2" />
          <stop offset="100%" stopColor="#FFC107" stopOpacity="0.4" />
        </linearGradient>
        <filter id="full-glow">
          <feGaussianBlur stdDeviation="2" result="coloredBlur"/>
          <feMerge> 
            <feMergeNode in="coloredBlur"/>
            <feMergeNode in="SourceGraphic"/>
          </feMerge>
        </filter>
      </defs>

      {/* Logo Background Glow */}
      <circle 
        cx="40" 
        cy="40" 
        r="35" 
        fill="url(#full-glow-effect)" 
        opacity={animated ? "0.6" : "0.3"}
        className={animated ? "animate-pulse" : ""}
        style={{ animationDuration: '2s' }}
      />

      {/* Honey Badger Icon */}
      <g transform="translate(40,40)" filter="url(#full-glow)">
        {/* Body Shadow */}
        <ellipse cx="0" cy="15" rx="18" ry="4" fill="rgba(0,0,0,0.3)" opacity="0.5" />
        
        {/* Main Body */}
        <ellipse cx="0" cy="8" rx="16" ry="11" fill="url(#full-badger-body)" />
        
        {/* Body Shape */}
        <path 
          d="M-14 3 Q-12 -1, -7 -3 L7 -3 Q12 -1, 14 3 L14 13 Q12 17, 7 19 L-7 19 Q-12 17, -14 13 Z"
          fill="url(#full-badger-body)"
        />
        
        {/* White Stripe */}
        <path 
          d="M-12 1 Q-10 -4, -5 -6 L5 -6 Q10 -4, 12 1 L12 6 Q10 10, 5 12 L-5 12 Q-10 10, -12 6 Z"
          fill="url(#full-badger-stripe)"
          opacity="0.9"
        />
        
        {/* Head */}
        <ellipse cx="0" cy="-6" rx="9" ry="7" fill="url(#full-badger-body)" />
        
        {/* Head Stripe */}
        <ellipse cx="0" cy="-8" rx="7" ry="4" fill="url(#full-badger-stripe)" opacity="0.9" />
        
        {/* Snout */}
        <path 
          d="M-4 1 Q-3 3, 0 3 Q3 3, 4 1 Q4 5, 3 6 L-3 6 Q-4 5, -4 1 Z"
          fill="#2C2C2C"
        />
        
        {/* Nose */}
        <ellipse cx="0" cy="4" rx="1.5" ry="1" fill="#000000" />
        
        {/* Eyes */}
        <g className={animated ? "animate-pulse" : ""} style={{ animationDuration: '1.5s' }}>
          <ellipse cx="-3.5" cy="-6" rx="1.8" ry="2" fill="#000000" />
          <ellipse cx="3.5" cy="-6" rx="1.8" ry="2" fill="#000000" />
          <circle cx="-3.5" cy="-7" r="0.8" fill="#8400FF" />
          <circle cx="3.5" cy="-7" r="0.8" fill="#8400FF" />
          <circle cx="-3" cy="-7.5" r="0.3" fill="#FFFFFF" />
          <circle cx="4" cy="-7.5" r="0.3" fill="#FFFFFF" />
        </g>
        
        {/* Ears */}
        <path 
          d="M-7 -12 Q-9 -14, -6 -13 Q-4 -11, -6 -10 Z"
          fill="url(#full-badger-body)"
          className={animated ? "animate-bounce" : ""}
          style={{ transformOrigin: '-6px -12px', animationDuration: '2.5s' }}
        />
        <path 
          d="M7 -12 Q9 -14, 6 -13 Q4 -11, 6 -10 Z"
          fill="url(#full-badger-body)"
          className={animated ? "animate-bounce" : ""}
          style={{ transformOrigin: '6px -12px', animationDuration: '2.5s', animationDelay: '0.2s' }}
        />
        
        {/* Paws */}
        <ellipse cx="-9" cy="16" rx="3" ry="2" fill="#1A1A1A" />
        <ellipse cx="9" cy="16" rx="3" ry="2" fill="#1A1A1A" />
        <ellipse cx="-6" cy="19" rx="2" ry="1.5" fill="#1A1A1A" />
        <ellipse cx="6" cy="19" rx="2" ry="1.5" fill="#1A1A1A" />
      </g>

      {/* Company Name */}
      <g transform="translate(90,25)">
        <text 
          x="0" 
          y="0" 
          fontSize="28" 
          fontWeight="bold" 
          fontFamily="Arial, sans-serif"
          fill="url(#full-text-gradient)"
          className={animated ? "animate-pulse" : ""}
          style={{ animationDuration: '3s', animationDelay: '0.5s' }}
        >
          RATEL
        </text>
        <text 
          x="0" 
          y="25" 
          fontSize="16" 
          fontWeight="600" 
          fontFamily="Arial, sans-serif"
          fill="url(#full-text-gradient)"
          opacity="0.8"
        >
          AJANS
        </text>
      </g>

      {/* Tagline */}
      <text 
        x="95" 
        y="65" 
        fontSize="9" 
        fontWeight="400" 
        fontFamily="Arial, sans-serif"
        fill="#8400FF"
        opacity="0.7"
      >
        Digital Innovation Agency
      </text>
    </svg>
  );
};

export default RatelLogo;