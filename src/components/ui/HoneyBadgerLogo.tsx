import React from 'react';

interface HoneyBadgerLogoProps {
  size?: number;
  className?: string;
  color?: string;
}

const HoneyBadgerLogo: React.FC<HoneyBadgerLogoProps> = ({ 
  size = 32, 
  className = "",
  color = "#a855f7" 
}) => {
  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 100 100"
      className={className}
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      {/* Bal Porsuğu Vücut */}
      <ellipse cx="50" cy="60" rx="25" ry="20" fill={color} opacity="0.9"/>
      
      {/* Bal Porsuğu Kafa */}
      <ellipse cx="50" cy="35" rx="18" ry="15" fill={color}/>
      
      {/* Beyaz Şerit */}
      <path 
        d="M32 25 Q50 20 68 25 Q68 35 50 40 Q32 35 32 25 Z" 
        fill="#ffffff" 
        opacity="0.8"
      />
      
      {/* Gözler */}
      <circle cx="44" cy="32" r="3" fill="#1a0b3d"/>
      <circle cx="56" cy="32" r="3" fill="#1a0b3d"/>
      
      {/* Burun */}
      <ellipse cx="50" cy="38" rx="2" ry="1.5" fill="#1a0b3d"/>
      
      {/* Pençeler */}
      <ellipse cx="35" cy="75" rx="4" ry="8" fill={color} opacity="0.7"/>
      <ellipse cx="45" cy="78" rx="4" ry="8" fill={color} opacity="0.7"/>
      <ellipse cx="55" cy="78" rx="4" ry="8" fill={color} opacity="0.7"/>
      <ellipse cx="65" cy="75" rx="4" ry="8" fill={color} opacity="0.7"/>
      
      {/* Kuyruk */}
      <ellipse cx="75" cy="55" rx="8" ry="4" fill={color} opacity="0.6"/>
      
      {/* Glow Effect */}
      <circle 
        cx="50" 
        cy="50" 
        r="45" 
        fill="none" 
        stroke={color} 
        strokeWidth="1" 
        opacity="0.2"
      />
    </svg>
  );
};

export default HoneyBadgerLogo;
