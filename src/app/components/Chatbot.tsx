import { useState, useRef, useEffect } from 'react';
import {
  MessageCircle, X, Minimize2, Send, Home, Package, Ship, Award, Users,
  Leaf, Coffee, Apple, ChevronRight, FileText, Globe, Phone,
  Circle, Droplets, Wind, Zap, Flame, Star, Flower, Layers,
  TreePine, Sprout, Bean, Grape, Banana, Citrus,
  Box, BadgeCheck, MapPin, Instagram, Facebook,
} from 'lucide-react';
import { motion, AnimatePresence } from 'motion/react';

import Image01 from "../components/assets/Global/logo01.jpeg"

interface Message {
  type: 'bot' | 'user';
  content: string;
  options?: ChatOption[];
  productGrid?: ProductItem[];
}

interface ChatOption {
  icon: any;
  label: string;
  action: string;
  color?: string;
}

interface ProductItem {
  name: string;
  sizes: string;
  icon: any;
  iconColor: string;
}

const BRAND = 'Ceylon Golden Spices';
const DOMAIN = 'ceylongoldenspices.com';

// ── Updated Contact Details ──
const CONTACT = {
  email: 'info@ceylongoldenspices.com',
  hotline: '+94 71 565 5855',
  whatsapp: '+94 71 565 5855',
  address: '392/A, Jayamawatha, Andiambalama, Sri Lanka. Po.C. 11558',
  facebook: 'https://www.facebook.com/profile.php?id=100090809895923',
  instagram: 'https://www.instagram.com/buddhiproduct/',
  pinterest: 'https://www.pinterest.com/Wddb1234/',
};

const PRODUCTS: Record<string, ProductItem[]> = {
  spices: [
    { name: 'Pure Ceylon Whole Clove', sizes: '25g · 50g · 75g · 100g', icon: Flower, iconColor: '#8B4513' },
    { name: 'Pure Ceylon Whole Cinnamon', sizes: '25g · 50g · 75g · 100g', icon: Layers, iconColor: '#A0522D' },
    { name: 'Pure Ceylon Whole White Pepper', sizes: '25g · 50g · 75g · 100g', icon: Circle, iconColor: '#9E9E9E' },
    { name: 'Pure Ceylon Whole Black Pepper', sizes: '25g · 50g · 75g · 100g', icon: Circle, iconColor: '#424242' },
    { name: 'Pure Ceylon Turmeric Powder', sizes: '25g · 50g · 75g · 100g', icon: Zap, iconColor: '#DAA520' },
    { name: 'Pure Ceylon Black Pepper Powder', sizes: '25g · 50g · 75g · 100g', icon: Wind, iconColor: '#616161' },
    { name: 'Pure Ceylon Whole Garcinia', sizes: '25g · 50g · 75g · 100g', icon: Citrus, iconColor: '#FF8C00' },
    { name: 'Pure Ceylon Whole Cardamom', sizes: '25g · 50g · 75g · 100g', icon: Sprout, iconColor: '#2E7D32' },
  ],
  herbal: [
    { name: 'Moringa Powder', sizes: '25g · 50g · 75g · 100g', icon: Leaf, iconColor: '#388E3C' },
    { name: 'Cinnamon Powder', sizes: '25g · 50g · 75g · 100g', icon: Layers, iconColor: '#A0522D' },
    { name: 'Curry Leaves Powder', sizes: '25g · 50g · 75g · 100g', icon: TreePine, iconColor: '#2E7D32' },
    { name: 'Butterfly Pea Flowers Powder', sizes: '25g · 50g · 75g · 100g', icon: Flower, iconColor: '#5C35CC' },
    { name: 'Ceylon Pure Roast Coffee', sizes: '25g · 50g · 75g · 100g', icon: Coffee, iconColor: '#4E342E' },
  ],
  tea: [
    { name: 'Pure Ceylon Black Tea', sizes: '2g × 10 bags · 2g × 20 bags', icon: Bean, iconColor: '#3E2723' },
    { name: 'Green Tea', sizes: '2g × 10 bags · 2g × 20 bags', icon: Leaf, iconColor: '#388E3C' },
    { name: 'Moringa Tea', sizes: '2g × 10 bags · 2g × 20 bags', icon: Sprout, iconColor: '#2E7D32' },
    { name: 'Cinnamon Tea', sizes: '2g × 10 bags · 2g × 20 bags', icon: Layers, iconColor: '#A0522D' },
    { name: 'Ginger Tea', sizes: '2g × 10 bags · 2g × 20 bags', icon: Flame, iconColor: '#E65100' },
  ],
  fruits: [
    { name: 'Dehydrated Watermelon', sizes: '25g · 50g · 75g · 100g', icon: Droplets, iconColor: '#E53935' },
    { name: 'Dehydrated Mango', sizes: '25g · 50g · 75g · 100g', icon: Star, iconColor: '#FB8C00' },
    { name: 'Dehydrated Papaya', sizes: '25g · 50g · 75g · 100g', icon: Apple, iconColor: '#FF7043' },
    { name: 'Dehydrated Pineapple', sizes: '25g · 50g · 75g · 100g', icon: Banana, iconColor: '#FDD835' },
    { name: 'Dehydrated Mix Fruit', sizes: '25g · 50g · 75g · 100g', icon: Grape, iconColor: '#8E24AA' },
  ],
  cashew: [
    { name: 'Ceylon Whole Oven Cashew Nut', sizes: '25g · 50g · 75g · 100g', icon: Bean, iconColor: '#C8A882' },
    { name: 'Ceylon Whole Roast Cashew Nut', sizes: '25g · 50g · 75g · 100g', icon: Flame, iconColor: '#A67C52' },
  ],
};

export function Chatbot() {
  const [isOpen, setIsOpen] = useState(false);
  const [isMinimized, setIsMinimized] = useState(false);
  const [messages, setMessages] = useState<Message[]>([
    {
      type: 'bot',
      content: `Welcome to ${BRAND}!\n\nI'm your product specialist. I can help with our 25 premium products across 5 categories, export details, packaging sizes, and more.`,
      options: [
        { icon: Package, label: 'Explore All Products', action: 'products', color: '#2E7D32' },
        { icon: Box, label: 'Packaging & Sizes', action: 'packaging', color: '#1565C0' },
        { icon: Ship, label: 'Export Information', action: 'export', color: '#4527A0' },
        { icon: Award, label: 'Quality & Heritage', action: 'quality', color: '#E65100' },
        { icon: Users, label: 'Speak to Sales Team', action: 'sales', color: '#00695C' },
      ],
    },
  ]);
  const [inputValue, setInputValue] = useState('');
  const messagesEndRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    messagesEndRef.current?.scrollIntoView({ behavior: 'smooth' });
  }, [messages]);

  const mainMenuOptions: ChatOption[] = [
    { icon: Package, label: 'Explore All Products', action: 'products', color: '#2E7D32' },
    { icon: Box, label: 'Packaging & Sizes', action: 'packaging', color: '#1565C0' },
    { icon: Ship, label: 'Export Information', action: 'export', color: '#4527A0' },
    { icon: Award, label: 'Quality & Heritage', action: 'quality', color: '#E65100' },
    { icon: Users, label: 'Speak to Sales Team', action: 'sales', color: '#00695C' },
  ];

  const backOptions: ChatOption[] = [
    { icon: ChevronRight, label: 'View All Categories', action: 'products', color: '#546E7A' },
    { icon: Home, label: 'Back to Main Menu', action: 'main', color: '#546E7A' },
  ];

  const quoteOption: ChatOption = { icon: FileText, label: 'Request Quote', action: 'quote', color: '#B8860B' };

  const handleOptionClick = (action: string, label: string) => {
    let botResponse: Message;

    switch (action) {
      case 'products':
        botResponse = {
          type: 'bot',
          content: 'Our Premium Product Range\n\n25 products across 5 categories — all export-ready from Ceylon:',
          options: [
            { icon: Flame, label: 'Ceylon Golden Spices  (8 products)', action: 'spices', color: '#BF360C' },
            { icon: Leaf, label: 'Ceylon Golden Herbal  (5 products)', action: 'herbal', color: '#2E7D32' },
            { icon: Coffee, label: 'Pure Ceylon Tea  (5 products)', action: 'tea', color: '#4E342E' },
            { icon: Apple, label: 'Dehydrated Fruits  (5 products)', action: 'fruits', color: '#AD1457' },
            { icon: Bean, label: 'Ceylon Cashew  (2 products)', action: 'cashew', color: '#F57F17' },
            { icon: Home, label: 'Back to Main Menu', action: 'main', color: '#546E7A' },
          ],
        };
        break;

      case 'spices':
        botResponse = {
          type: 'bot',
          content: 'Ceylon Golden Spices\n8 premium whole & powdered spices\n\nSizes: 25g · 50g · 75g · 100g\nExport-ready packaging · 100% Ceylon estates',
          productGrid: PRODUCTS.spices,
          options: [quoteOption, ...backOptions],
        };
        break;

      case 'herbal':
        botResponse = {
          type: 'bot',
          content: 'Ceylon Golden Herbal\n5 premium herbal products\n\nSizes: 25g · 50g · 75g · 100g\n100% natural · Premium export grade',
          productGrid: PRODUCTS.herbal,
          options: [quoteOption, ...backOptions],
        };
        break;

      case 'tea':
        botResponse = {
          type: 'bot',
          content: 'Pure Ceylon Tea\n5 premium tea varieties\n\nSizes: 2g × 10 bags · 2g × 20 bags\nAuthentic Ceylon tea gardens',
          productGrid: PRODUCTS.tea,
          options: [quoteOption, ...backOptions],
        };
        break;

      case 'fruits':
        botResponse = {
          type: 'bot',
          content: 'Ceylon Golden Dehydrated Fruits\n5 premium products\n\nSizes: 25g · 50g · 75g · 100g\nSun-kissed Ceylon fruits',
          productGrid: PRODUCTS.fruits,
          options: [quoteOption, ...backOptions],
        };
        break;

      case 'cashew':
        botResponse = {
          type: 'bot',
          content: 'Ceylon Cashew\n2 premium cashew nut products\n\nSizes: 25g · 50g · 75g · 100g\nOven-roasted perfection',
          productGrid: PRODUCTS.cashew,
          options: [quoteOption, ...backOptions],
        };
        break;

      case 'packaging':
        botResponse = {
          type: 'bot',
          content: 'Packaging & Sizes\n\nSpices · Herbal · Fruits · Cashew:\n25g · 50g · 75g · 100g\nResealable premium export pouches\n\nTeas:\n2g × 10 tea bags\n2g × 20 tea bags\nIndividually sealed bags\n\nAll packaging:\n· Export-ready labelling\n· Custom branding available (MOQ applies)\n· Barcode & nutritional info available',
          options: [
            { icon: FileText, label: 'Request Custom Quote', action: 'quote', color: '#B8860B' },
            { icon: Package, label: 'See Product Range', action: 'products', color: '#2E7D32' },
            { icon: Home, label: 'Back to Main Menu', action: 'main', color: '#546E7A' },
          ],
        };
        break;

      case 'export':
        botResponse = {
          type: 'bot',
          content: 'Export Information\n\nOrder Requirements:\n· Minimum Order: 50kg per product\n· Lead Time: 2–3 weeks\n\nShipping:\n· Worldwide via air & sea freight\n· FCL & LCL options available\n\nDocumentation:\n· Certificate of Origin\n· Phytosanitary Certificate\n· Quality inspection reports\n\nPayment Terms:\n· Letter of Credit (LC)\n· Telegraphic Transfer (TT)',
          options: [
            { icon: FileText, label: 'Request Export Quote', action: 'quote', color: '#B8860B' },
            { icon: Home, label: 'Back to Main Menu', action: 'main', color: '#546E7A' },
          ],
        };
        break;

      case 'quality':
        botResponse = {
          type: 'bot',
          content: 'Quality & Heritage\n\nHeritage:\n· 2,000 years of Ceylon spice tradition\n· 100% authentic Ceylon origin\n· Direct estate to export\n\nCertifications:\n· Working towards ISO 22000\n· HACCP compliance in progress\n· Complete traceability system\n\nQuality Process:\n· Lab-tested every batch\n· Moisture & purity controlled\n· International food safety standards',
          options: [
            { icon: Package, label: 'See Our Products', action: 'products', color: '#2E7D32' },
            { icon: FileText, label: 'Request Quote', action: 'quote', color: '#B8860B' },
            { icon: Home, label: 'Back to Main Menu', action: 'main', color: '#546E7A' },
          ],
        };
        break;

      case 'sales':
        botResponse = {
          type: 'bot',
          content: `Contact Our Team\n\n📧 Email:\n${CONTACT.email}\n\n📞 Hotline / WhatsApp:\n${CONTACT.hotline}\n\n📍 Address:\n${CONTACT.address}\n\n🌐 Website:\n${DOMAIN}\n\n📱 Follow Us:\nFacebook · Instagram · Pinterest\n\nWe respond within 24 hours.`,
          options: [
            { icon: FileText, label: 'Fill Inquiry Form', action: 'inquiry', color: '#B8860B' },
            { icon: Package, label: 'See Our Products', action: 'products', color: '#2E7D32' },
            { icon: Home, label: 'Back to Main Menu', action: 'main', color: '#546E7A' },
          ],
        };
        break;

      case 'quote':
        botResponse = {
          type: 'bot',
          content: `Request a Quote\n\nContact our team:\n\n📧 ${CONTACT.email}\n📞 ${CONTACT.hotline}\n\nPlease include:\n· Product(s) required\n· Quantity needed\n· Destination country\n· Preferred packaging size\n\nWe respond within 24 hours.`,
          options: [
            { icon: Users, label: 'Contact Sales Team', action: 'sales', color: '#B8860B' },
            { icon: Package, label: 'Browse Products', action: 'products', color: '#2E7D32' },
            { icon: Home, label: 'Back to Main Menu', action: 'main', color: '#546E7A' },
          ],
        };
        break;

      case 'inquiry':
        botResponse = {
          type: 'bot',
          content: `Inquiry Form\n\nVisit our website:\n${DOMAIN}/contact\n\nOr reach us directly:\n📧 ${CONTACT.email}\n📞 ${CONTACT.hotline}\n\n📍 ${CONTACT.address}\n\nWe look forward to hearing from you.`,
          options: [{ icon: Home, label: 'Back to Main Menu', action: 'main', color: '#546E7A' }],
        };
        break;

      default:
        botResponse = {
          type: 'bot',
          content: 'How can I help you today?',
          options: mainMenuOptions,
        };
    }

    const userMessage: Message = { type: 'user', content: label };
    setMessages(prev => [...prev, userMessage, botResponse]);
  };

  const handleSendMessage = () => {
    if (!inputValue.trim()) return;
    const text = inputValue.toLowerCase();
    const originalInput = inputValue;
    setInputValue('');

    let botResponse: Message;

    if (text.match(/spice|cinnamon|pepper|clove|cardamom|turmeric|garcinia/)) {
      botResponse = { type: 'bot', content: 'Ceylon Golden Spices — 8 premium products:', productGrid: PRODUCTS.spices, options: [quoteOption, { icon: Home, label: 'Back to Main Menu', action: 'main', color: '#546E7A' }] };
    } else if (text.includes('tea')) {
      botResponse = { type: 'bot', content: 'Pure Ceylon Tea — 5 varieties:', productGrid: PRODUCTS.tea, options: [quoteOption, { icon: Home, label: 'Back to Main Menu', action: 'main', color: '#546E7A' }] };
    } else if (text.match(/herbal|moringa|curry|butterfly|coffee/)) {
      botResponse = { type: 'bot', content: 'Ceylon Golden Herbal — 5 products:', productGrid: PRODUCTS.herbal, options: [quoteOption, { icon: Home, label: 'Back to Main Menu', action: 'main', color: '#546E7A' }] };
    } else if (text.match(/fruit|mango|pineapple|papaya|watermelon/)) {
      botResponse = { type: 'bot', content: 'Dehydrated Fruits — 5 products:', productGrid: PRODUCTS.fruits, options: [quoteOption, { icon: Home, label: 'Back to Main Menu', action: 'main', color: '#546E7A' }] };
    } else if (text.match(/cashew|nut/)) {
      botResponse = { type: 'bot', content: 'Ceylon Cashew — 2 premium products:', productGrid: PRODUCTS.cashew, options: [quoteOption, { icon: Home, label: 'Back to Main Menu', action: 'main', color: '#546E7A' }] };
    } else if (text.match(/export|shipping|freight|ship/)) {
      botResponse = { type: 'bot', content: 'Export Info\n\nMin. Order: 50kg · Lead Time: 2–3 weeks\nWorldwide air & sea freight\nFull documentation provided\nPayment: LC / TT', options: [{ icon: Ship, label: 'Full Export Details', action: 'export', color: '#4527A0' }, { icon: Home, label: 'Back to Main Menu', action: 'main', color: '#546E7A' }] };
    } else if (text.match(/price|cost|quote|rate/)) {
      botResponse = { type: 'bot', content: `For pricing and quotes:\n\n📧 ${CONTACT.email}\n📞 ${CONTACT.hotline}\n\nInclude product, quantity, and destination for a personalised quote.`, options: [{ icon: Users, label: 'Contact Sales', action: 'sales', color: '#B8860B' }, { icon: Home, label: 'Back to Main Menu', action: 'main', color: '#546E7A' }] };
    } else if (text.match(/size|pack|weight|gram/)) {
      botResponse = { type: 'bot', content: 'Packaging Sizes\n\nSpices / Herbal / Fruits / Cashew:\n25g · 50g · 75g · 100g\n\nTeas:\n2g × 10 bags · 2g × 20 bags\n\nCustom branding available on request.', options: [{ icon: Box, label: 'Full Packaging Details', action: 'packaging', color: '#1565C0' }, { icon: Home, label: 'Back to Main Menu', action: 'main', color: '#546E7A' }] };
    } else if (text.match(/email|contact|phone|whatsapp|address|social|facebook|instagram|pinterest/)) {
      botResponse = { type: 'bot', content: `Contact Details\n\n📧 ${CONTACT.email}\n📞 ${CONTACT.hotline}\n\n📍 ${CONTACT.address}\n\n🌐 ${DOMAIN}\n\n📱 Social Media:\nFacebook · Instagram · Pinterest`, options: [{ icon: Users, label: 'More Contact Options', action: 'sales', color: '#B8860B' }, { icon: Home, label: 'Back to Main Menu', action: 'main', color: '#546E7A' }] };
    } else {
      botResponse = { type: 'bot', content: 'Thank you for your message. Our team will follow up shortly.\n\nMeanwhile, feel free to explore our products or contact sales.', options: [{ icon: Package, label: 'Explore Products', action: 'products', color: '#2E7D32' }, { icon: Users, label: 'Contact Sales', action: 'sales', color: '#B8860B' }, { icon: Home, label: 'Main Menu', action: 'main', color: '#546E7A' }] };
    }

    const quoteOptionLocal: ChatOption = { icon: FileText, label: 'Request Quote', action: 'quote', color: '#B8860B' };
    const userMsg: Message = { type: 'user', content: originalInput };
    setMessages(prev => [...prev, userMsg, botResponse]);
  };

  return (
    <>
      {/* Floating Button */}
      <AnimatePresence>
        {!isOpen && (
          <motion.button
            initial={{ scale: 0, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            exit={{ scale: 0, opacity: 0 }}
            whileHover={{ scale: 1.08 }}
            whileTap={{ scale: 0.95 }}
            onClick={() => setIsOpen(true)}
            className="fixed bottom-6 right-6 w-16 h-16 rounded-full shadow-2xl flex items-center justify-center z-50 group"
            style={{ background: 'linear-gradient(135deg, #D4AF37, #A67C00)', filter: 'drop-shadow(0 4px 20px rgba(212,175,55,0.45))' }}
          >
            <MessageCircle className="w-7 h-7 text-white" />
            <motion.span
              animate={{ scale: [1, 1.25, 1] }}
              transition={{ repeat: Infinity, duration: 2.2 }}
              className="absolute -top-1 -right-1 w-5 h-5 bg-red-500 rounded-full flex items-center justify-center text-white text-xs font-bold shadow"
            >
              1
            </motion.span>
            <div className="absolute right-[72px] bg-[#0A2647] text-white text-xs px-3 py-2 rounded-xl opacity-0 group-hover:opacity-100 transition-opacity whitespace-nowrap shadow-xl pointer-events-none">
              Ask about our products
            </div>
          </motion.button>
        )}
      </AnimatePresence>

      {/* Chat Window */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ scale: 0.88, opacity: 0, y: 36 }}
            animate={{ scale: 1, opacity: 1, y: 0 }}
            exit={{ scale: 0.88, opacity: 0, y: 36 }}
            transition={{ type: 'spring', stiffness: 280, damping: 28 }}
            className="fixed bottom-6 right-6 flex flex-col overflow-hidden z-50 rounded-2xl shadow-2xl bg-white"
            style={{
              width: 'min(440px, calc(100vw - 24px))',
              height: isMinimized ? 'auto' : 'min(660px, calc(100dvh - 96px))',
            }}
          >
            {/* ── Header ── */}
            <div className="flex-shrink-0" style={{ background: 'linear-gradient(135deg, #0A2647 0%, #0D3060 100%)' }}>

              {/* Title row */}
              <div className="px-4 py-3 flex items-center justify-between">
                <div className="flex items-center gap-3">
                  <div
                    className="w-10 h-10 rounded-full flex items-center justify-center flex-shrink-0 shadow-md"
                    style={{ background: 'linear-gradient(135deg, #D4AF37, #A67C00)' }}
                  >
                    <img src={Image01} alt="Logo" className="w-5 h-5 object-contain" />
                  </div>
                  <div>
                    <p className="text-white font-bold text-sm leading-tight">{BRAND}</p>
                    <div className="flex items-center gap-1.5 mt-0.5">
                      <span className="w-1.5 h-1.5 bg-emerald-400 rounded-full inline-block animate-pulse" />
                      <span className="text-emerald-300 text-xs">Product Specialist · Online</span>
                    </div>
                  </div>
                </div>
                <div className="flex items-center gap-1">
                  <button
                    onClick={() => setIsMinimized(!isMinimized)}
                    className="p-1.5 rounded-lg text-white/70 hover:text-white hover:bg-white/10 transition-colors"
                  >
                    <Minimize2 className="w-4 h-4" />
                  </button>
                  <button
                    onClick={() => setIsOpen(false)}
                    className="p-1.5 rounded-lg text-white/70 hover:text-white hover:bg-white/10 transition-colors"
                  >
                    <X className="w-4 h-4" />
                  </button>
                </div>
              </div>

              {/* Quick action buttons */}
              {!isMinimized && (
                <div className="px-3 pb-3 grid grid-cols-4 gap-1.5">
                  {[
                    { label: 'Products', action: 'products', icon: Package },
                    { label: 'Sizes', action: 'packaging', icon: Box },
                    { label: 'Export', action: 'export', icon: Ship },
                    { label: 'Contact', action: 'sales', icon: Phone },
                  ].map(btn => {
                    const Icon = btn.icon;
                    return (
                      <button
                        key={btn.action}
                        onClick={() => handleOptionClick(btn.action, btn.label)}
                        className="flex flex-col items-center gap-1 py-2 rounded-xl text-white text-xs font-medium transition-all hover:scale-105 active:scale-95"
                        style={{ background: 'rgba(255,255,255,0.1)', border: '1px solid rgba(255,255,255,0.15)' }}
                      >
                        <Icon className="w-4 h-4" />
                        <span>{btn.label}</span>
                      </button>
                    );
                  })}
                </div>
              )}
            </div>

            {/* ── Messages ── */}
            {!isMinimized && (
              <>
                <div
                  className="flex-1 overflow-y-auto p-3 space-y-3"
                  style={{ background: 'linear-gradient(180deg, #FFF8E7 0%, #FFFDF5 100%)' }}
                >
                  {messages.map((message, index) => (
                    <motion.div
                      key={index}
                      initial={{ opacity: 0, y: 10 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ duration: 0.22 }}
                      className={`flex ${message.type === 'user' ? 'justify-end' : 'justify-start'}`}
                    >
                      {/* Bot avatar */}
                      {message.type === 'bot' && (
                        <div
                          className="w-7 h-7 rounded-full flex items-center justify-center flex-shrink-0 mt-1 mr-2 shadow-sm"
                          style={{ background: 'linear-gradient(135deg, #D4AF37, #A67C00)' }}
                        >
                          <Leaf className="w-3.5 h-3.5 text-white" />
                        </div>
                      )}

                      <div className="max-w-[82%]">
                        <div
                          className="px-3.5 py-2.5"
                          style={
                            message.type === 'user'
                              ? {
                                background: 'linear-gradient(135deg, #D4AF37, #A67C00)',
                                color: 'white',
                                borderRadius: '18px 18px 4px 18px',
                                boxShadow: '0 2px 10px rgba(212,175,55,0.3)',
                              }
                              : {
                                background: 'white',
                                color: '#1a1a1a',
                                borderRadius: '4px 18px 18px 18px',
                                boxShadow: '0 2px 10px rgba(0,0,0,0.07)',
                              }
                          }
                        >
                          <p className="whitespace-pre-line text-sm leading-relaxed">{message.content}</p>

                          {/* Product grid */}
                          {message.productGrid && (
                            <div className="mt-2.5 space-y-1.5">
                              {message.productGrid.map((product, i) => {
                                const Icon = product.icon;
                                return (
                                  <div
                                    key={i}
                                    className="flex items-center gap-2.5 rounded-xl px-2.5 py-2"
                                    style={{ background: '#FFF8E7', border: '1px solid rgba(212,175,55,0.2)' }}
                                  >
                                    <div
                                      className="w-8 h-8 rounded-lg flex items-center justify-center flex-shrink-0"
                                      style={{ background: `${product.iconColor}18` }}
                                    >
                                      <Icon className="w-4 h-4" style={{ color: product.iconColor }} />
                                    </div>
                                    <div className="min-w-0">
                                      <p className="text-xs font-semibold text-[#0A2647] leading-tight">{product.name}</p>
                                      <p className="text-[10px] text-gray-500 mt-0.5">{product.sizes}</p>
                                    </div>
                                  </div>
                                );
                              })}
                            </div>
                          )}

                          {/* Options */}
                          {message.options && (
                            <div className="mt-2.5 space-y-1.5">
                              {message.options.map((option, optIndex) => {
                                const Icon = option.icon;
                                return (
                                  <button
                                    key={optIndex}
                                    onClick={() => handleOptionClick(option.action, option.label)}
                                    className="w-full flex items-center gap-2.5 px-3 py-2 rounded-xl text-sm font-medium text-left transition-all hover:scale-[1.015] active:scale-[0.985]"
                                    style={{
                                      background: `${option.color || '#D4AF37'}12`,
                                      border: `1px solid ${option.color || '#D4AF37'}28`,
                                      color: option.color || '#D4AF37',
                                    }}
                                  >
                                    <Icon className="w-4 h-4 flex-shrink-0" />
                                    <span className="leading-tight truncate whitespace-nowrap overflow-hidden">{option.label}</span>
                                  </button>
                                );
                              })}
                            </div>
                          )}
                        </div>
                      </div>
                    </motion.div>
                  ))}
                  <div ref={messagesEndRef} />
                </div>

                {/* ── Input ── */}
                <div className="flex-shrink-0 bg-white border-t px-3 py-3" style={{ borderColor: 'rgba(212,175,55,0.15)' }}>
                  <div className="flex items-center gap-2">
                    <input
                      type="text"
                      value={inputValue}
                      onChange={e => setInputValue(e.target.value)}
                      onKeyDown={e => e.key === 'Enter' && handleSendMessage()}
                      placeholder="Ask about products, export, pricing..."
                      className="flex-1 pl-4 pr-3 py-2.5 text-sm rounded-xl focus:outline-none transition-all placeholder-gray-400"
                      style={{
                        background: '#FFF8E7',
                        border: '1px solid rgba(212,175,55,0.3)',
                      }}
                    />
                    <button
                      onClick={handleSendMessage}
                      disabled={!inputValue.trim()}
                      className="w-10 h-10 rounded-xl flex items-center justify-center flex-shrink-0 transition-all hover:scale-105 active:scale-95 disabled:opacity-40 disabled:cursor-not-allowed text-white shadow-md"
                      style={{ background: 'linear-gradient(135deg, #D4AF37, #A67C00)' }}
                    >
                      <Send className="w-4 h-4" />
                    </button>
                  </div>
                  <p className="text-center text-[10px] text-gray-400 mt-2 flex items-center justify-center gap-1">
                    <Globe className="w-3 h-3" />
                    {BRAND} · {DOMAIN}
                  </p>
                </div>
              </>
            )}
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}