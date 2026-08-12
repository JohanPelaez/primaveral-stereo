import React from 'react';

const TikTokIcon = ({ size = 20, className = '' }) => (
  <svg 
    width={size} 
    height={size} 
    viewBox="0 0 24 24" 
    fill="currentColor" 
    className={className}
    style={{ display: 'inline-block', verticalAlign: 'middle' }}
  >
    <path d="M19.589 6.686a4.793 4.793 0 0 1-3.77-4.245V2h-3.445v13.672a2.896 2.896 0 0 1-2.886 2.882 2.89 2.89 0 0 1-2.886-2.882 2.89 2.89 0 0 1 2.886-2.882c.445 0 .866.103 1.242.285V9.499a6.31 6.31 0 0 0-1.242-.124 6.336 6.336 0 0 0-6.33 6.335 6.336 6.336 0 0 0 6.33 6.335 6.336 6.336 0 0 0 6.33-6.335V8.657a8.21 8.21 0 0 0 4.771 1.48V6.686h-.004z" />
  </svg>
);

export default TikTokIcon;
