import React from 'react';
import './Message.css';

const Message = ({ message }) => {
  const formatTime = (timestamp) => {
    return timestamp.toLocaleTimeString([], { 
      hour: '2-digit', 
      minute: '2-digit' 
    });
  };

  return (
    <div className={`message ${message.sender}`}>
      <div className="message-content">
        {message.sender === 'bot' && (
          <div className="bot-avatar">
            <span>Z</span>
          </div>
        )}
        <div className="message-bubble">
          <p className="message-text">{message.text}</p>
          <span className="message-time">{formatTime(message.timestamp)}</span>
        </div>
        {message.sender === 'user' && (
          <div className="user-avatar">
            <span>U</span>
          </div>
        )}
      </div>
    </div>
  );
};

export default Message;