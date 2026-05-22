export const menuCategories = [
  {
    id: "rice",
    name: "Rice Dishes",
    emoji: "🍛",
    items: [
      { name: "Jollof Rice", description: "Smoky party-style jollof, cooked to perfection with tomatoes, peppers & spices", price: 2500, popular: true, image: "https://images.unsplash.com/photo-1546833999-b9f581a1996d?w=500&q=80" },
      { name: "Fried Rice", description: "Golden fried rice loaded with veggies, eggs & seasoning", price: 2500, popular: false, image: "https://images.unsplash.com/photo-1603133872878-684f208fb84b?w=500&q=80" },
      { name: "White Rice & Stew", description: "Fluffy white rice served with rich Nigerian tomato stew", price: 2000, popular: false, image: "https://images.unsplash.com/photo-1512058564366-18510be2db19?w=500&q=80" },
    ],
  },
  {
    id: "shawarma",
    name: "Shawarma & Wraps",
    emoji: "🌯",
    items: [
      { name: "Chicken Shawarma", description: "Loaded with juicy grilled chicken, coleslaw, sauce & veggies in a soft wrap", price: 2500, popular: true, image: "https://images.unsplash.com/photo-1561651188-d207bbec4ec3?w=500&q=80" },
      { name: "Beef Shawarma", description: "Tender seasoned beef with fresh salad, special sauce & crispy fries inside", price: 2800, popular: true, image: "https://images.unsplash.com/photo-1529006557810-274b9b2fc783?w=500&q=80" },
      { name: "Combo Shawarma", description: "Chicken + beef together — double the flavour, one amazing wrap", price: 3200, popular: false, image: "https://images.unsplash.com/photo-1550367363-ea12860cc124?w=500&q=80" },
    ],
  },
  {
    id: "protein",
    name: "Proteins & Sides",
    emoji: "🍗",
    items: [
      { name: "Grilled Chicken", description: "Perfectly marinated and grilled chicken — smoky, juicy, addictive", price: 3000, popular: true, image: "https://images.unsplash.com/photo-1598515214211-89d3c73ae83b?w=500&q=80" },
      { name: "Peppered Chicken", description: "Crispy chicken doused in our signature pepper sauce — not for the faint-hearted", price: 3200, popular: false, image: "https://images.unsplash.com/photo-1567620832903-9fc6debc209f?w=500&q=80" },
      { name: "Fried Plantain (Dodo)", description: "Sweet, golden fried plantain — the perfect side to everything", price: 800, popular: false, image: "https://images.unsplash.com/photo-1571167530149-c1105da4c2a8?w=500&q=80" },
    ],
  },
  {
    id: "drinks",
    name: "Drinks & Chills",
    emoji: "🥤",
    items: [
      { name: "Chapman", description: "Refreshing Nigerian Chapman — fruity, fizzy & colourful", price: 1000, popular: true, image: "https://images.unsplash.com/photo-1544145945-f90425340c7e?w=500&q=80" },
      { name: "Fresh Juice", description: "Seasonal fresh-pressed fruit juice — ask what's available today", price: 800, popular: false, image: "https://images.unsplash.com/photo-1600271886742-f049cd451bba?w=500&q=80" },
      { name: "Bottled Water / Soft Drinks", description: "Chilled water, Coke, Fanta, Sprite & more", price: 300, popular: false, image: "https://images.unsplash.com/photo-1553361371-9b22f78e8b1d?w=500&q=80" },
    ],
  },
];

export const reviews = [
  {
    name: "Sam Jenkeo",
    rating: 5,
    text: "Iyadunni Chopz is a rising talent. Great at all food categories you can't even imagine. Very fast delivery, unbelievable. I got exactly what I ordered 💯",
    date: "3 weeks ago",
  },
  {
    name: "Adewale Scott Jnr",
    rating: 5,
    text: "I really enjoyed their Shawarma, my babe went for jollof rice and it was yummy. Fast delivery and the order was accurate.",
    date: "1 month ago",
  },
];

export const info = {
  name: "Iyadunni Chopz",
  tagline: "Taste the Fire. Feel the Love.",
  address: "1b Victory Street, off Onibudo Road, Ajuwon/Akute 112107, Ogun State",
  phone: "0810 524 0202",
  hours: {
    weekdays: "9:00 AM – 10:00 PM",
    weekends: "9:00 AM – 10:00 PM",
  },
  rating: 5.0,
  reviewCount: 2,
  deliveryTime: "20–40 min",
  minOrder: "₦1,500",
};
