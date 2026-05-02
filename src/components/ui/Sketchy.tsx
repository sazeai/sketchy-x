import React, { ReactNode } from 'react';

export const WobblyFilter = () => (
  <svg style={{ position: 'absolute', width: 0, height: 0, pointerEvents: 'none' }}>
    <defs>
      <filter id="wobbly-border" x="-10%" y="-10%" width="120%" height="120%">
        <feTurbulence type="fractalNoise" baseFrequency="0.04" numOctaves="3" result="noise" />
        <feDisplacementMap in="SourceGraphic" in2="noise" scale="3" xChannelSelector="R" yChannelSelector="G" />
      </filter>
      <filter id="wobbly-icon" x="-20%" y="-20%" width="140%" height="140%">
        <feTurbulence type="fractalNoise" baseFrequency="0.03" numOctaves="2" result="noise" />
        <feDisplacementMap in="SourceGraphic" in2="noise" scale="1.5" xChannelSelector="R" yChannelSelector="G" />
      </filter>
    </defs>
  </svg>
);

interface SketchBoxProps extends React.HTMLAttributes<HTMLDivElement> {
  children: ReactNode;
  borderWidth?: number;
  borderRadius?: string;
  className?: string;
  innerClassName?: string;
}

export const SketchBox = ({ 
  children, 
  borderWidth = 2, 
  borderRadius = '8px',
  className = '',
  innerClassName = '',
  ...props 
}: SketchBoxProps) => {
  return (
    <div className={`relative ${className}`} {...props}>
      <div 
        className="absolute inset-0 pointer-events-none border-black"
        style={{ 
          borderWidth: `${borderWidth}px`, 
          borderStyle: 'solid',
          borderRadius,
          filter: 'url(#wobbly-border)' 
        }} 
      />
      <div className={`relative z-10 ${innerClassName}`}>
        {children}
      </div>
    </div>
  );
};

export const SketchDivider = ({ vertical = false, className = '' }) => {
  if (vertical) {
    return (
      <div className={`relative h-full ${className}`}>
        <div 
          className="absolute inset-y-0 left-1/2 -translate-x-1/2 border-l-2 border-black pointer-events-none" 
          style={{ filter: 'url(#wobbly-border)' }} 
        />
      </div>
    );
  }
  return (
    <div className={`relative w-full ${className}`}>
      <div 
        className="absolute inset-x-0 top-1/2 -translate-y-1/2 border-t-2 border-black pointer-events-none" 
        style={{ filter: 'url(#wobbly-border)' }} 
      />
    </div>
  );
};

// Wrapper for Lucide icons to make them sketchy
export const SketchIcon = ({ Icon, className = '', ...props }: any) => {
  return (
    <div className={`inline-flex ${className}`} style={{ filter: 'url(#wobbly-icon)' }}>
      <Icon {...props} />
    </div>
  );
};
