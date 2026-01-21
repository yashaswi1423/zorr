import React, { useState } from 'react';
import './MessageInput.css';

const MessageInput = ({ onSendMessage }) => {
  const [message, setMessage] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    if (message.trim()) {
      onSendMessage(message);
      setMessage('');
    }
  };

  const handleKeyPress = (e) => {
    if (e.key === 'Enter' && !e.shiftKey) {
      e.preventDefault();
      handleSubmit(e);
    }
  };

  return (
    <div className="message-input-container">
      <form onSubmit={handleSubmit} className="message-form">
        <div className="input-wrapper">
          <textarea
            value={message}
            onChange={(e) => setMessage(e.target.value)}
            onKeyPress={handleKeyPress}
            placeholder="Type your message here..."
            className="message-textarea"
            rows="1"
            maxLength="500"
          />
          <button 
            type="submit" 
            className="send-button"
            disabled={!message.trim()}
            aria-label="Send message"
          >
            <svg width="20" height="20" viewBox="0 0 24 24" fill="none">
              <path 
                d="M2 21L23 12L2 3V10L17 12L2 14V21Z" 
                fill="currentColor"
              />
            </svg>
          </button>
        </div>
      </form>
      <div className="quick-actions">
        <button 
          className="quick-action-btn"
          onClick={() => onSendMessage("Track my order ZR2024001")}
        >
          Track Order
        </button>
        <button 
          className="quick-action-btn"
          onClick={() => onSendMessage("Cancel my order")}
        >
          Cancel Order
        </button>
        <button 
          className="quick-action-btn"
          onClick={() => onSendMessage("My food is cold and late")}
        >
          Food Issue
        </button>
        <button 
          className="quick-action-btn"
          onClick={() => onSendMessage("Emergency - delivery partner is lost")}
        >
          Emergency
        </button>
        <button 
          className="quick-action-btn"
          onClick={() => onSendMessage("Refund request for my order")}
        >
          Refund
        </button>
        <button 
          className="quick-action-btn"
          onClick={() => onSendMessage("Update my delivery address")}
        >
          Update Address
        </button>
      </div>
    </div>
  );
};

export default MessageInput;