// Zorr Food Delivery Customer Care Bot Logic

const responses = {
  greetings: [
    "Hello! I'm here to help you with your Zorr food delivery experience. What can I assist you with today?",
    "Hi there! Welcome to Zorr customer care. How may I help you?",
    "Hey! I'm your Zorr assistant. What would you like help with today?"
  ],
  
  orderTracking: [
    "I can help you track your order! Please provide your order ID, and I'll get the latest status for you.",
    "To track your order, I'll need your order number. You can find it in your confirmation email or app.",
    "Let me help you track that order. What's your order ID?"
  ],
  
  orderCancellation: [
    "I understand you'd like to cancel your order. If it hasn't been prepared yet, we can cancel it for you. What's your order ID?",
    "I can help with order cancellation. Please note that orders can only be cancelled within 5 minutes of placing them if they haven't started preparation.",
    "Let me check if your order can be cancelled. Please provide your order ID."
  ],
  
  refunds: [
    "I'm sorry to hear you need a refund. I can help process that for you. Could you please tell me your order ID and the reason for the refund?",
    "I'll be happy to help with your refund request. Please provide your order details and let me know what went wrong.",
    "Refund requests are processed within 3-5 business days. What's your order ID and the issue you experienced?"
  ],
  
  delivery: [
    "Our standard delivery time is 30-45 minutes. Delivery times may vary based on location and restaurant preparation time.",
    "We deliver within a 10km radius of our partner restaurants. You can check if we deliver to your area in the app.",
    "Having delivery issues? I can help! What specific problem are you experiencing?"
  ],
  
  payment: [
    "We accept all major credit cards, debit cards, UPI, and digital wallets. You can also pay cash on delivery in select areas.",
    "Payment issues can be frustrating. What specific payment problem are you facing?",
    "Your payment is secure with us. We use encrypted payment gateways for all transactions."
  ],
  
  restaurants: [
    "We partner with over 1000+ restaurants in your city! You can browse by cuisine, rating, or delivery time in the app.",
    "Looking for a specific restaurant? Use the search feature in the app or let me know what cuisine you're craving!",
    "Our restaurant partners are carefully selected to ensure quality food and timely delivery."
  ],
  
  account: [
    "For account-related issues, I can help with profile updates, password resets, and address management.",
    "Having trouble with your account? I can guide you through common account issues.",
    "Your account security is important to us. What account issue can I help you with?"
  ],
  
  complaints: [
    "I'm sorry to hear about your experience. Your feedback is valuable to us. Please share the details so I can help resolve this.",
    "We take all complaints seriously. Could you please provide more details about what happened?",
    "I apologize for any inconvenience. Let me help make this right. What specific issue did you encounter?"
  ],
  
  default: [
    "I'm here to help with your Zorr food delivery needs. Could you please be more specific about what you need assistance with?",
    "I'd be happy to help! Could you clarify what you need help with? I can assist with orders, delivery, payments, and more.",
    "I'm not sure I understand. Could you rephrase your question? I'm here to help with all your Zorr-related queries."
  ]
};

const keywords = {
  greetings: ['hello', 'hi', 'hey', 'good morning', 'good afternoon', 'good evening'],
  orderTracking: ['track', 'tracking', 'order status', 'where is my order', 'order location', 'delivery status'],
  orderCancellation: ['cancel', 'cancellation', 'cancel order', 'dont want', 'change mind'],
  refunds: ['refund', 'money back', 'return money', 'refund request', 'get money back'],
  delivery: ['delivery', 'deliver', 'delivery time', 'how long', 'when will', 'delivery area'],
  payment: ['payment', 'pay', 'card', 'upi', 'wallet', 'payment failed', 'transaction'],
  restaurants: ['restaurant', 'food', 'cuisine', 'menu', 'restaurant list', 'partner'],
  account: ['account', 'profile', 'password', 'login', 'address', 'personal info'],
  complaints: ['complaint', 'problem', 'issue', 'wrong', 'bad', 'terrible', 'awful', 'disappointed']
};

export const getBotResponse = async (userMessage) => {
  const message = userMessage.toLowerCase();
  
  // Check for keywords and return appropriate response
  for (const [category, keywordList] of Object.entries(keywords)) {
    if (keywordList.some(keyword => message.includes(keyword))) {
      const responseList = responses[category];
      return responseList[Math.floor(Math.random() * responseList.length)];
    }
  }
  
  // Default response if no keywords match
  const defaultResponses = responses.default;
  return defaultResponses[Math.floor(Math.random() * defaultResponses.length)];
};