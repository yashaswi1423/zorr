// Demo data for testing the advanced customer care bot

export const demoCustomers = {
  // You can test with these sample customers
  'john@email.com': {
    name: 'John Smith',
    phone: '+91-9876543210',
    address: '123 MG Road, Bangalore, Karnataka 560001',
    currentOrder: {
      orderId: 'ZR2024001',
      items: [
        { name: 'Chicken Biryani', quantity: 2, price: 299 },
        { name: 'Raita', quantity: 1, price: 49 },
        { name: 'Gulab Jamun', quantity: 4, price: 120 }
      ],
      restaurant: 'Biryani Palace',
      restaurantAddress: 'Brigade Road, Bangalore',
      status: 'out_for_delivery',
      orderTime: '2024-01-21T19:30:00Z',
      estimatedDelivery: '2024-01-21T20:15:00Z',
      deliveryBoy: 'Raj Kumar',
      deliveryBoyPhone: '+91-8765432109',
      total: 468,
      paymentMethod: 'UPI'
    }
  }
};

// Test these messages to see the advanced responses:
export const testMessages = [
  "Track my order ZR2024001",
  "My phone number is 9876543210",
  "Emergency - my delivery is very late",
  "Cancel order ZR2024001",
  "My food arrived cold and wrong items",
  "I need a refund for my order",
  "Do you deliver to Koramangala?",
  "Update my account details",
  "Recommend good restaurants"
];

// Instructions for testing:
// 1. Use order ID: ZR2024001
// 2. Use phone: 9876543210
// 3. Try the test messages above
// 4. The bot will respond with personalized, detailed information