import React from 'react';
import { ChevronRight } from 'lucide-react';

const InfoCard = ({ 
  icon, 
  iconBgClass = 'bg-blue', 
  title, 
  titleColorClass = 'text-blue', 
  text, 
  btnText, 
  btnBgClass = 'bg-red-btn', 
  btnId, 
  onBtnClick, 
  borderClass 
}) => {
  return (
    <div className={`info-card glass-panel ${borderClass || ''}`}>
      <div className="card-header">
        <div className={`circle-icon ${iconBgClass}`}>
          {icon}
        </div>
        <h2 className={`card-title ${titleColorClass}`}>{title}</h2>
      </div>
      <p className="card-text">{text}</p>
      {btnText && (
        <button 
          onClick={onBtnClick} 
          className={`card-action-btn ${btnBgClass}`}
          id={btnId}
        >
          <span>{btnText}</span>
          <ChevronRight size={16} />
        </button>
      )}
    </div>
  );
};

export default InfoCard;
