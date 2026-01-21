// Zorr Food Delivery Customer Care Bot Logic - Advanced AI Assistant

// Mock customer database with real-time order tracking
const customerDatabase = {
  // Sample customers with active orders
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
    },
    orderHistory: [
      { orderId: 'ZR2024000', date: '2024-01-20', restaurant: 'Pizza Corner', total: 350 }
    ]
  },
  'sarah@email.com': {
    name: 'Sarah Johnson',
    phone: '+91-9123456789',
    address: '456 Koramangala, Bangalore, Karnataka 560034',
    currentOrder: {
      orderId: 'ZR2024002',
      items: [
        { name: 'Margherita Pizza', quantity: 1, price: 250 },
        { name: 'Garlic Bread', quantity: 1, price: 120 }
      ],
      restaurant: 'Pizza Corner',
      restaurantAddress: 'Koramangala 5th Block, Bangalore',
      status: 'preparing',
      orderTime: '2024-01-21T19:45:00Z',
      estimatedDelivery: '2024-01-21T20:30:00Z',
      total: 370,
      paymentMethod: 'Credit Card'
    }
  }
};

// Zorr service locations
const zorrLocations = {
  bangalore: {
    areas: ['MG Road', 'Brigade Road', 'Koramangala', 'Indiranagar', 'Whitefield', 'Electronic City', 'HSR Layout', 'BTM Layout'],
    restaurants: 1200,
    deliveryRadius: '15km',
    avgDeliveryTime: '35 minutes'
  },
  mumbai: {
    areas: ['Bandra', 'Andheri', 'Powai', 'Lower Parel', 'Worli', 'Juhu', 'Malad', 'Thane'],
    restaurants: 1500,
    deliveryRadius: '12km',
    avgDeliveryTime: '40 minutes'
  },
  delhi: {
    areas: ['Connaught Place', 'Karol Bagh', 'Lajpat Nagar', 'Dwarka', 'Gurgaon', 'Noida', 'Rohini'],
    restaurants: 1300,
    deliveryRadius: '18km',
    avgDeliveryTime: '38 minutes'
  }
};

// Emergency contact information
const emergencyContacts = {
  customerCare: '+91-1800-ZORR-HELP (1800-9677-4357)',
  emergencyHotline: '+91-9999-ZORR-911',
  email: 'help@zorr.com',
  whatsapp: '+91-9876-ZORR-WA'
};

// Advanced response system
export const getBotResponse = async (userMessage) => {
  const message = userMessage.toLowerCase();
  
  // Extract order ID if mentioned
  const orderIdMatch = message.match(/zr\d{7}|order.*?(\d{7})/i);
  const orderId = orderIdMatch ? (orderIdMatch[0].toUpperCase().includes('ZR') ? orderIdMatch[0].toUpperCase() : `ZR${orderIdMatch[1]}`) : null;
  
  // Extract phone number if mentioned
  const phoneMatch = message.match(/\+?91[-\s]?\d{10}|\d{10}/);
  const phone = phoneMatch ? phoneMatch[0] : null;
  
  // Find customer by order ID or phone
  let customer = null;
  if (orderId || phone) {
    for (const [email, customerData] of Object.entries(customerDatabase)) {
      if ((orderId && customerData.currentOrder?.orderId === orderId) || 
          (phone && customerData.phone.includes(phone))) {
        customer = customerData;
        break;
      }
    }
  }
  
  // Greeting responses
  if (message.match(/hello|hi|hey|good morning|good afternoon|good evening/)) {
    return "Hello! I'm your Zorr customer care assistant. I have access to all your order details, delivery status, and can help with any concerns. How may I assist you today?";
  }
  
  // Order tracking with real-time information
  if (message.match(/track|where.*order|order.*status|delivery.*status/)) {
    if (customer && customer.currentOrder) {
      const order = customer.currentOrder;
      const statusMessages = {
        'confirmed': '✅ Order confirmed and sent to restaurant',
        'preparing': '👨‍🍳 Your food is being prepared at the restaurant',
        'ready_for_pickup': '📦 Food is ready, our delivery partner is picking it up',
        'out_for_delivery': '🚗 Your order is on the way!',
        'delivered': '✅ Order delivered successfully'
      };
      
      const timeRemaining = Math.max(0, Math.floor((new Date(order.estimatedDelivery) - new Date()) / 60000));
      
      return `Hi ${customer.name}! Here's your order status:

📋 **Order ID:** ${order.orderId}
🍽️ **Items:** ${order.items.map(item => `${item.name} x${item.quantity}`).join(', ')}
🏪 **Restaurant:** ${order.restaurant}
📍 **Status:** ${statusMessages[order.status]}
⏰ **Estimated delivery:** ${timeRemaining > 0 ? `${timeRemaining} minutes` : 'Any moment now!'}
${order.deliveryBoy ? `🚗 **Delivery partner:** ${order.deliveryBoy} (${order.deliveryBoyPhone})` : ''}

Your food will be delivered to: ${customer.address}

Need anything else? I'm here to help!`;
    }
    
    return "I'd be happy to track your order! Please provide your order ID (starts with ZR) or the phone number used for the order, and I'll get you real-time updates.";
  }
  
  // Order cancellation with personalized response
  if (message.match(/cancel|cancellation|dont want|change mind/)) {
    if (customer && customer.currentOrder) {
      const order = customer.currentOrder;
      const canCancel = ['confirmed', 'preparing'].includes(order.status);
      
      if (canCancel) {
        return `Hi ${customer.name}, I can help cancel your order ${order.orderId}.

Current status: ${order.status === 'confirmed' ? 'Order confirmed' : 'Being prepared'}

✅ **Good news!** Your order can still be cancelled as it hasn't been dispatched yet.

Would you like me to:
1. Cancel the order and process a full refund (₹${order.total})
2. Modify the order instead
3. Keep the order but change delivery address

The refund will be processed to your ${order.paymentMethod} within 2-3 business days.

Shall I proceed with the cancellation?`;
      } else {
        return `Hi ${customer.name}, I see your order ${order.orderId} is currently "${order.status}". 

Unfortunately, the order cannot be cancelled as it's already ${order.status === 'out_for_delivery' ? 'out for delivery' : 'been processed'}.

However, I can help you with:
- Refusing the delivery for a full refund
- Reporting any issues for compensation
- Rescheduling delivery if needed

Your delivery partner ${order.deliveryBoy} is reachable at ${order.deliveryBoyPhone}.

What would you prefer?`;
      }
    }
    
    return "I can help you cancel your order. Please provide your order ID or phone number, and I'll check the current status and cancellation options for you.";
  }
  
  // Emergency situations
  if (message.match(/emergency|urgent|help.*now|immediate|asap|stuck|lost.*delivery/)) {
    if (customer && customer.currentOrder) {
      return `🚨 **Emergency Support Activated**

Hi ${customer.name}, I understand this is urgent regarding order ${customer.currentOrder.orderId}.

**Immediate Actions:**
📞 **Call our emergency hotline:** ${emergencyContacts.emergencyHotline}
💬 **WhatsApp support:** ${emergencyContacts.whatsapp}

**Your delivery partner:** ${customer.currentOrder.deliveryBoy || 'Being assigned'}
📱 **Partner contact:** ${customer.currentOrder.deliveryBoyPhone || 'Will be shared shortly'}

**Current location:** Your order is ${customer.currentOrder.status}

I'm escalating this to our priority support team. You'll receive a call within 2 minutes.

What specific emergency can I help resolve right now?`;
    }
    
    return `🚨 **Emergency Support**

I'm here to help immediately! 

📞 **Emergency hotline:** ${emergencyContacts.emergencyHotline}
💬 **WhatsApp:** ${emergencyContacts.whatsapp}

Please share your order ID or phone number so I can access your details and provide immediate assistance.

What's the emergency situation?`;
  }
  
  // Location and coverage queries
  if (message.match(/location|area|deliver.*to|coverage|available.*in/)) {
    const cityMatch = message.match(/bangalore|mumbai|delhi|hyderabad|chennai|pune/i);
    const city = cityMatch ? cityMatch[0].toLowerCase() : null;
    
    if (city && zorrLocations[city]) {
      const location = zorrLocations[city];
      return `🏙️ **Zorr in ${city.charAt(0).toUpperCase() + city.slice(1)}:**

📍 **Coverage areas:** ${location.areas.join(', ')}
🏪 **Partner restaurants:** ${location.restaurants}+
🚗 **Delivery radius:** ${location.deliveryRadius}
⏰ **Average delivery time:** ${location.avgDeliveryTime}

We're constantly expanding! If your area isn't listed, we might still deliver there. Share your pincode and I'll check for you.

Looking to order from a specific area?`;
    }
    
    return `🗺️ **Zorr Coverage:**

We deliver across major cities:
🏙️ **Bangalore** - 1200+ restaurants
🏙️ **Mumbai** - 1500+ restaurants  
🏙️ **Delhi NCR** - 1300+ restaurants

Share your location/pincode and I'll confirm if we deliver to your area and show you nearby restaurants!`;
  }
  
  // Refund requests with order details
  if (message.match(/refund|money back|return.*money|compensation/)) {
    if (customer && customer.currentOrder) {
      return `Hi ${customer.name}, I'm sorry you need a refund for order ${customer.currentOrder.orderId}.

**Order details:**
- Amount: ₹${customer.currentOrder.total}
- Payment: ${customer.currentOrder.paymentMethod}
- Items: ${customer.currentOrder.items.map(item => item.name).join(', ')}

**Refund options:**
1. **Full refund** - ₹${customer.currentOrder.total} (if order issue)
2. **Partial refund** - For specific items
3. **Zorr credits** - Get 110% value for future orders

**Processing time:**
- ${customer.currentOrder.paymentMethod}: 2-3 business days
- Zorr credits: Instant

What went wrong with your order? This helps us improve and process your refund faster.`;
    }
    
    return "I'll help process your refund request. Please share your order ID or phone number so I can pull up your order details and refund options.";
  }
  
  // Food quality or delivery issues
  if (message.match(/cold.*food|late.*delivery|wrong.*order|missing.*item|bad.*food|quality.*issue/)) {
    if (customer) {
      return `Hi ${customer.name}, I sincerely apologize for this experience with order ${customer.currentOrder?.orderId || 'your recent order'}.

**Immediate resolution:**
✅ Full refund: ₹${customer.currentOrder?.total || 'Order amount'}
✅ Fresh order: We'll send a replacement immediately
✅ Zorr credits: 150% of order value for future use

**What I'm doing right now:**
1. Flagging ${customer.currentOrder?.restaurant || 'the restaurant'} for quality review
2. Providing feedback to delivery partner
3. Adding compensation to your account

**Your options:**
- Get fresh food delivered in 20 minutes (no charge)
- Full refund + ₹100 Zorr credits for the trouble
- Keep the order + 50% refund for inconvenience

Which option works best for you? I want to make this right immediately.`;
    }
    
    return "I'm really sorry about this experience! Please share your order details so I can immediately process compensation and ensure this doesn't happen again.";
  }
  
  // Account and profile queries
  if (message.match(/account|profile|address|phone.*number|email|password/)) {
    if (customer) {
      return `Hi ${customer.name}! Here are your account details:

👤 **Profile:**
- Name: ${customer.name}
- Phone: ${customer.phone}
- Address: ${customer.address}

📊 **Account summary:**
- Total orders: ${customer.orderHistory.length + 1}
- Favorite restaurant: ${customer.currentOrder?.restaurant}
- Zorr credits: ₹150

**I can help you:**
- Update delivery address
- Change phone number
- Reset password
- Add new addresses
- Update payment methods

What would you like to modify?`;
    }
    
    return "I can help with account management! Please provide your phone number or email to access your profile securely.";
  }
  
  // Restaurant and menu queries
  if (message.match(/restaurant|menu|food.*options|cuisine|recommend/)) {
    return `🍽️ **Zorr Restaurant Network:**

**Popular cuisines:**
🍕 Italian - 200+ restaurants
🍛 Indian - 400+ restaurants  
🍜 Chinese - 180+ restaurants
🍔 Fast Food - 150+ restaurants
🥗 Healthy - 120+ restaurants

**Top rated restaurants:**
⭐ Biryani Palace (4.8/5) - Indian
⭐ Pizza Corner (4.7/5) - Italian  
⭐ Wok Express (4.6/5) - Chinese

**Special features:**
- Live kitchen tracking
- 30-min guarantee
- Chef recommendations
- Dietary filters (vegan, gluten-free)

What cuisine are you craving? I can recommend the best restaurants in your area!`;
  }
  
  // Default intelligent response
  return `I'm your dedicated Zorr customer care assistant with access to:

🔍 **Real-time order tracking**
👤 **Your complete profile & history**  
📍 **Live delivery locations**
🏪 **Restaurant details & menus**
💳 **Payment & refund processing**
🚨 **Emergency support**

I can help with orders, deliveries, refunds, account issues, restaurant recommendations, and any Zorr-related concerns.

What specific help do you need today? Feel free to share your order ID, phone number, or just tell me what's on your mind!`;
};

// Utility function to get customer by identifier
export const getCustomerData = (identifier) => {
  for (const [email, customer] of Object.entries(customerDatabase)) {
    if (customer.phone.includes(identifier) || 
        customer.currentOrder?.orderId === identifier ||
        email === identifier) {
      return customer;
    }
  }
  return null;
};