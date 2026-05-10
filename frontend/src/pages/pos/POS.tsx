import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { 
  Search, 
  ShoppingCart, 
  Trash2, 
  Minus, 
  Plus, 
  CreditCard
} from 'lucide-react';

// Mock Data
const categories = ["All Items", "Starters", "Mains", "Desserts", "Beverages", "Wine List"];

interface MenuItem {
  id: number;
  name: string;
  price: number;
  category: string;
  desc: string;
  image: string;
  isFeatured?: boolean;
}

const menuItems: MenuItem[] = [
  { id: 1, name: "Avocado Citrus Salad", price: 14.50, category: "Starters", desc: "Fresh hass avocado, baby spinach, orange segments.", image: "https://images.unsplash.com/photo-1512621776951-a57141f2eefd?auto=format&fit=crop&w=500&q=80" },
  { id: 2, name: "Wild Atlantic Salmon", price: 28.00, category: "Mains", desc: "Sustainably sourced salmon, herb crust, lemon-butter.", image: "https://images.unsplash.com/photo-1485921325833-c519f76c4927?auto=format&fit=crop&w=500&q=80", isFeatured: true },
  { id: 3, name: "Prime Ribeye Steak", price: 34.00, category: "Mains", desc: "12oz grass-fed ribeye, hand-cut frites, truffle aioli.", image: "https://images.unsplash.com/photo-1600891964599-f61ba0e24092?auto=format&fit=crop&w=500&q=80" },
  { id: 4, name: "Margherita Verace", price: 18.50, category: "Mains", desc: "San Marzano DOP, buffalo mozzarella, fresh basil.", image: "https://images.unsplash.com/photo-1574071318508-1cdbab80d002?auto=format&fit=crop&w=500&q=80" },
  { id: 5, name: "Molten Lava Cake", price: 12.00, category: "Desserts", desc: "70% Valrhona chocolate, Tahitian vanilla bean gelato.", image: "https://images.unsplash.com/photo-1606313564200-e75d5e30476c?auto=format&fit=crop&w=500&q=80" },
  { id: 6, name: "Gourmet Old Fashioned", price: 16.00, category: "Beverages", desc: "Barrel-aged bourbon, house-made bitters.", image: "https://images.unsplash.com/photo-1551538827-9c037cb4f32a?auto=format&fit=crop&w=500&q=80" },
];

interface CartItem extends MenuItem {
  quantity: number;
}

export const POS: React.FC = () => {
  const [activeCategory, setActiveCategory] = useState("All Items");
  const [cart, setCart] = useState<CartItem[]>([
    { ...menuItems[1], quantity: 1 },
    { ...menuItems[0], quantity: 2 }
  ]);

  const addToCart = (item: MenuItem) => {
    setCart(prev => {
      const existing = prev.find(i => i.id === item.id);
      if (existing) {
        return prev.map(i => i.id === item.id ? { ...i, quantity: i.quantity + 1 } : i);
      }
      return [...prev, { ...item, quantity: 1 }];
    });
  };

  const updateQuantity = (id: number, delta: number) => {
    setCart(prev => prev.map(i => {
      if (i.id === id) {
        const newQty = i.quantity + delta;
        return newQty > 0 ? { ...i, quantity: newQty } : i;
      }
      return i;
    }).filter(i => i.quantity > 0));
  };

  const subtotal = cart.reduce((sum, i) => sum + (i.price * i.quantity), 0);
  const tax = subtotal * 0.085;
  const serviceFee = 2.50;
  const total = subtotal + tax + serviceFee;

  const filteredItems = menuItems.filter(i => activeCategory === "All Items" || i.category === activeCategory);

  return (
    <div className="flex h-[calc(100vh-44px-theme(spacing.lg)*2)] -mx-lg -my-lg bg-background overflow-hidden animate-fade-in">
      {/* Product Grid Area */}
      <div className="flex-1 flex flex-col overflow-hidden">
        {/* Filter Header */}
        <div className="sticky top-0 z-20 bg-background/95 backdrop-blur-md px-lg py-md border-b border-outline-variant flex justify-between items-center gap-lg">
          <div className="relative w-64 group">
            <Search className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-on-surface-variant" />
            <input 
              type="text" 
              placeholder="Search menu items..."
              className="w-full bg-surface border border-outline-variant rounded-full py-2 pl-10 pr-4 text-label-md focus:ring-2 focus:ring-primary outline-none transition-all"
            />
          </div>
          <div className="flex gap-sm overflow-x-auto no-scrollbar scroll-smooth flex-1 justify-end">
            {categories.map(cat => (
              <button
                key={cat}
                onClick={() => setActiveCategory(cat)}
                className={`px-6 py-2 rounded-full text-label-md font-medium transition-all whitespace-nowrap ${
                  activeCategory === cat 
                  ? 'bg-primary text-white shadow-lg shadow-primary/20' 
                  : 'bg-white text-on-surface-variant border border-outline-variant hover:bg-surface-variant'
                }`}
              >
                {cat}
              </button>
            ))}
          </div>
        </div>

        {/* Items Scroll Area */}
        <div className="flex-1 overflow-y-auto p-lg no-scrollbar">
          <motion.div 
            layout
            className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-lg"
          >
            <AnimatePresence mode='popLayout'>
              {filteredItems.map(item => (
                <motion.div
                  layout
                  key={item.id}
                  initial={{ opacity: 0, scale: 0.9 }}
                  animate={{ opacity: 1, scale: 1 }}
                  exit={{ opacity: 0, scale: 0.9 }}
                  whileTap={{ scale: 0.98 }}
                  onClick={() => addToCart(item)}
                  className={`item-card bg-white rounded-xl overflow-hidden cursor-pointer flex flex-col group border ${
                    item.isFeatured ? 'border-t-4 border-primary border-t-primary' : 'border-transparent'
                  }`}
                >
                  <div className="relative h-40 bg-surface-variant overflow-hidden">
                    <img src={item.image} alt={item.name} className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500" />
                    <div className="absolute top-2 right-2 bg-white/90 backdrop-blur px-2 py-1 rounded-lg font-bold text-primary text-label-sm shadow-sm">
                      ${item.price.toFixed(2)}
                    </div>
                  </div>
                  <div className="p-md flex flex-col flex-1 bg-white">
                    <h3 className="font-headline-md text-lg text-on-surface mb-xs group-hover:text-primary transition-colors">{item.name}</h3>
                    <p className="text-on-surface-variant text-sm line-clamp-2 font-body-md">{item.desc}</p>
                  </div>
                </motion.div>
              ))}
            </AnimatePresence>
          </motion.div>
        </div>
      </div>

      {/* Cart Side Panel */}
      <div className="w-96 bg-white border-l border-outline-variant flex flex-col glass-panel relative z-10">
        <div className="p-lg border-b border-outline-variant flex justify-between items-center bg-surface">
          <div>
            <h2 className="font-headline-md text-xl text-on-surface flex items-center gap-2">
              Current Order
            </h2>
            <p className="text-label-sm text-on-surface-variant">Table 12 • Server: Alex</p>
          </div>
          <button 
            onClick={() => setCart([])}
            className="p-2 hover:bg-red/10 text-red rounded-full transition-colors"
          >
            <Trash2 className="w-5 h-5" />
          </button>
        </div>

        {/* Scrollable List */}
        <div className="flex-1 overflow-y-auto p-md space-y-md no-scrollbar">
          <AnimatePresence>
            {cart.map(item => (
              <motion.div
                key={item.id}
                initial={{ opacity: 0, x: 20 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: 20 }}
                className="flex items-center gap-md p-md bg-surface-variant/50 rounded-xl border border-outline-variant"
              >
                <div className="w-16 h-16 rounded-lg overflow-hidden flex-shrink-0 border border-outline-variant">
                  <img src={item.image} alt={item.name} className="w-full h-full object-cover" />
                </div>
                <div className="flex-1 min-w-0">
                  <h4 className="font-label-md text-on-surface truncate">{item.name}</h4>
                  <p className="text-primary font-price-display text-sm font-bold mt-0.5">
                    ${(item.price * item.quantity).toFixed(2)}
                  </p>
                  <div className="flex items-center gap-2 mt-2">
                    <button 
                      onClick={() => updateQuantity(item.id, -1)}
                      className="w-7 h-7 flex items-center justify-center rounded-full bg-white border border-outline-variant text-on-surface hover:bg-surface-variant"
                    >
                      <Minus className="w-3 h-3" />
                    </button>
                    <span className="font-bold w-4 text-center text-sm">{item.quantity}</span>
                    <button 
                      onClick={() => updateQuantity(item.id, 1)}
                      className="w-7 h-7 flex items-center justify-center rounded-full bg-primary-container text-primary hover:bg-primary hover:text-white transition-colors"
                    >
                      <Plus className="w-3 h-3" />
                    </button>
                  </div>
                </div>
              </motion.div>
            ))}
          </AnimatePresence>
          {cart.length === 0 && (
            <div className="h-full flex flex-col items-center justify-center text-center opacity-50">
              <ShoppingCart className="w-12 h-12 mb-2 text-on-surface-variant" />
              <p className="font-body-md text-on-surface-variant">Cart is empty</p>
            </div>
          )}
        </div>

        {/* Totals & Action */}
        <div className="p-lg border-t border-outline-variant bg-surface-variant/20 space-y-sm">
          <div className="flex justify-between text-on-surface-variant font-body-md text-sm">
            <span>Subtotal</span>
            <span>${subtotal.toFixed(2)}</span>
          </div>
          <div className="flex justify-between text-on-surface-variant font-body-md text-sm">
            <span>Tax (8.5%)</span>
            <span>${tax.toFixed(2)}</span>
          </div>
          <div className="flex justify-between text-on-surface-variant font-body-md text-sm">
            <span>Service Fee</span>
            <span>${serviceFee.toFixed(2)}</span>
          </div>
          <div className="flex justify-between items-center text-on-surface mt-2 pt-2 border-t border-dashed border-outline-variant">
            <span className="font-bold text-lg">Total</span>
            <span className="font-price-display text-2xl font-bold text-primary">${total.toFixed(2)}</span>
          </div>
          <div className="grid grid-cols-2 gap-md mt-lg">
            <button className="py-3 border border-outline-variant bg-white text-on-surface-variant font-bold rounded-xl hover:bg-surface-variant transition-all active:scale-95">
              Save
            </button>
            <button className="py-3 bg-primary text-white font-bold rounded-xl shadow-lg shadow-primary/30 hover:opacity-90 transition-all active:scale-95 flex items-center justify-center gap-2">
              <CreditCard className="w-4 h-4" />
              Pay Now
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};
