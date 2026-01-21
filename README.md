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

The bot acts like a real customer care agent with comprehensive knowledge:

### 🔍 **Real-time Order Tracking**
- Live order status updates
- Delivery partner details and contact
- Estimated delivery times
- Restaurant preparation status

### 👤 **Customer Profile Access**
- Complete order history
- Personal details and preferences
- Delivery addresses
- Payment methods

### 🚨 **Emergency Support**
- Immediate escalation for urgent issues
- Direct contact with delivery partners
- Emergency hotline connections
- Priority support activation

### 💰 **Smart Refund Processing**
- Instant refund calculations
- Multiple refund options (money/credits)
- Compensation for issues
- Automatic quality feedback

### 📍 **Location Intelligence**
- Coverage area information
- Restaurant availability by location
- Delivery radius and timing
- Area-specific recommendations

### 🍽️ **Food Quality Management**
- Issue reporting and resolution
- Restaurant quality feedback
- Replacement order processing
- Compensation for poor experiences

## Test the Advanced Bot

Try these sample interactions:
- "Track my order ZR2024001"
- "My phone number is 9876543210"
- "Emergency - delivery is very late"
- "My food arrived cold"
- "Cancel order ZR2024001"
- "Do you deliver to Koramangala?"

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
