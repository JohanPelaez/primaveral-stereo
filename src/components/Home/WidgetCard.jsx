import React from 'react';

const WidgetCard = ({ title, icon, children }) => {
  return (
    <div className="widget-card glass-panel">
      <div className="widget-header">
        {icon}
        <h3>{title}</h3>
      </div>
      {children}
    </div>
  );
};

export default WidgetCard;
