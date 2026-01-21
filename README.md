# Zorr Customer Care Chatbot

A responsive React-based customer care chatbot for Zorr food delivery app with a modern dark theme interface.

## Features

- 🌙 **Dark Theme**: Modern dark UI optimized for all lighting conditions
- 📱 **Responsive Design**: Works seamlessly on desktop, tablet, and mobile devices
- 🤖 **Smart Bot Logic**: Handles common customer care queries for food delivery
- ⚡ **Real-time Chat**: Instant messaging with typing indicators
- 🎯 **Quick Actions**: Pre-defined buttons for common queries
- 🎨 **Modern UI**: Gradient backgrounds, smooth animations, and polished design

## Customer Care Features

The bot can help with:
- Order tracking and status updates
- Order cancellation requests
- Refund processing
- Delivery information and issues
- Payment-related queries
- Restaurant and menu information
- Account management
- Complaint handling

## Installation

1. Clone or download the project
2. Install dependencies:
   ```bash
   npm install
   ```

3. Start the development server:
   ```bash
   npm start
   ```

4. Open [http://localhost:3000](http://localhost:3000) to view it in the browser

## Build for Production

```bash
npm run build
```

## Project Structure

```
src/
├── components/
│   ├── ChatBot.js          # Main chatbot container
│   ├── Header.js           # App header with branding
│   ├── MessageList.js      # Messages container
│   ├── Message.js          # Individual message component
│   ├── MessageInput.js     # Input field and quick actions
│   └── TypingIndicator.js  # Bot typing animation
├── utils/
│   └── botLogic.js         # Bot response logic
└── App.js                  # Main app component
```

## Customization

### Bot Responses
Edit `src/utils/botLogic.js` to customize bot responses and add new keywords.

### Styling
Each component has its own CSS file for easy customization of colors, fonts, and layouts.

### Quick Actions
Modify the quick action buttons in `src/components/MessageInput.js`.

## Browser Support

- Chrome (latest)
- Firefox (latest)
- Safari (latest)
- Edge (latest)
- Mobile browsers (iOS Safari, Chrome Mobile)

## Technologies Used

- React 18
- CSS3 with Flexbox and Grid
- Responsive design principles
- Modern JavaScript (ES6+)