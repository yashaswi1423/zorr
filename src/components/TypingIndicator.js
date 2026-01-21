import React from 'react';
import './TypingIndicator.css';

const TypingIndicator = () => {
  return (
    <div className="message bot">
      <div className="message-content">
        <div className="bot-avatar">
          <span>Z</span>
        </div>
        <div className="typing-bubble">
          <div className="typing-dots">
            <span></span>
            <span></span>
            <span></span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default TypingIndicator;