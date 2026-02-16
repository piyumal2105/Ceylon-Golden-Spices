import { useState } from 'react';
import { MessageCircle, X, Minimize2, Send, Home, Video, Package, Ship, Award, Users } from 'lucide-react';
import { motion, AnimatePresence } from 'motion/react';

interface Message {
  type: 'bot' | 'user';
  content: string;
  options?: ChatOption[];
  video?: { thumbnail: string; title: string; duration: string };
}

interface ChatOption {
  icon: any;
  label: string;
  action: string;
}

export function Chatbot() {
  const [isOpen, setIsOpen] = useState(false);
  const [isMinimized, setIsMinimized] = useState(false);
  const [messages, setMessages] = useState<Message[]>([
    {
      type: 'bot',
      content: '👋 Welcome to Golden Spices!\n\nI\'m your product specialist ready to help!',
      options: [
        { icon: Package, label: 'Explore Products', action: 'products' },
        { icon: Package, label: 'Packaging & Sizes', action: 'packaging' },
        { icon: Ship, label: 'Export Information', action: 'export' },
        { icon: Award, label: 'Quality & Heritage', action: 'quality' },
        { icon: Video, label: 'Watch Our Videos', action: 'videos' },
        { icon: Users, label: 'Speak to Sales Team', action: 'sales' }
      ]
    }
  ]);
  const [inputValue, setInputValue] = useState('');

  const handleOptionClick = (action: string) => {
    // Add user message
    const userMessage: Message = {
      type: 'user',
      content: messages[messages.length - 1].options?.find(opt => opt.action === action)?.label || ''
    };

    let botResponse: Message;

    switch (action) {
      case 'products':
        botResponse = {
          type: 'bot',
          content: '🌿 Our Premium Product Categories:',
          options: [
            { icon: Package, label: 'Ceylon Golden Spices', action: 'spices' },
            { icon: Package, label: 'Ceylon Golden Herbal', action: 'herbal' },
            { icon: Package, label: 'Pure Ceylon Tea', action: 'tea' },
            { icon: Package, label: 'Dehydrated Fruits', action: 'fruits' },
            { icon: Home, label: 'Back to Main Menu', action: 'main' }
          ]
        };
        break;

      case 'videos':
        botResponse = {
          type: 'bot',
          content: '🎥 Video Library\n\nChoose what you\'d like to watch:',
          options: [
            { icon: Video, label: 'Virtual Factory Tour (360°)', action: 'factory-tour' },
            { icon: Video, label: 'Heritage Documentary', action: 'heritage-doc' },
            { icon: Video, label: 'Product Close-ups', action: 'product-videos' },
            { icon: Video, label: 'Meet Our Farmers', action: 'farmers' },
            { icon: Video, label: 'Quality Process', action: 'quality-video' },
            { icon: Home, label: 'Back to Main Menu', action: 'main' }
          ]
        };
        break;

      case 'spices':
        botResponse = {
          type: 'bot',
          content: '🌿 Pure Ceylon Whole Cinnamon\n\nPremium authentic Ceylon cinnamon quills (not cassia).\n\n📹 Available Videos:\n• Harvesting process\n• Quality inspection\n• Packaging showcase\n\n✅ Available Sizes: 25g, 50g, 75g, 100g\n📦 Export-ready packaging\n🌍 100% Ceylon estates',
          video: {
            thumbnail: 'https://images.unsplash.com/photo-1682482002999-654860dfcb24?w=400',
            title: 'Ceylon Cinnamon Harvesting',
            duration: '2:30'
          },
          options: [
            { icon: Package, label: 'Request Quote', action: 'quote' },
            { icon: Package, label: 'See Other Spices', action: 'products' },
            { icon: Home, label: 'Back to Main Menu', action: 'main' }
          ]
        };
        break;

      case 'export':
        botResponse = {
          type: 'bot',
          content: '🚢 Export Information\n\n• Minimum Order: 50kg per product\n• Lead Time: 2-3 weeks\n• Shipping: Worldwide via air/sea freight\n• Documentation: Complete export paperwork provided\n• Payment: LC, TT available\n\nWould you like to request a quote?',
          options: [
            { icon: Package, label: 'Request Export Quote', action: 'quote' },
            { icon: Video, label: 'Watch Export Process', action: 'export-video' },
            { icon: Home, label: 'Back to Main Menu', action: 'main' }
          ]
        };
        break;

      case 'quality':
        botResponse = {
          type: 'bot',
          content: '✨ Quality & Heritage\n\n• 2,000 years of Ceylon spice tradition\n• 100% authentic Ceylon origin\n• Working towards ISO 22000, HACCP certifications\n• Complete traceability\n• Premium export grade\n\nWatch our quality journey in our videos!',
          options: [
            { icon: Video, label: 'Watch Quality Process', action: 'quality-video' },
            { icon: Video, label: 'Watch Heritage Documentary', action: 'heritage-doc' },
            { icon: Home, label: 'Back to Main Menu', action: 'main' }
          ]
        };
        break;

      case 'sales':
        botResponse = {
          type: 'bot',
          content: '👨‍💼 Contact Our Sales Team\n\n📧 Email: sales@imperialspices.lk\n📞 Tel: +94 11 290 4000\n📱 Mobile: +94 71 489 3350\n\nOr fill out our inquiry form and we\'ll get back to you within 24 hours!',
          options: [
            { icon: Package, label: 'Fill Inquiry Form', action: 'inquiry' },
            { icon: Home, label: 'Back to Main Menu', action: 'main' }
          ]
        };
        break;

      default:
        botResponse = {
          type: 'bot',
          content: '👋 Welcome back! How can I help you today?',
          options: [
            { icon: Package, label: 'Explore Products', action: 'products' },
            { icon: Package, label: 'Packaging & Sizes', action: 'packaging' },
            { icon: Ship, label: 'Export Information', action: 'export' },
            { icon: Award, label: 'Quality & Heritage', action: 'quality' },
            { icon: Video, label: 'Watch Our Videos', action: 'videos' },
            { icon: Users, label: 'Speak to Sales Team', action: 'sales' }
          ]
        };
    }

    setMessages([...messages, userMessage, botResponse]);
  };

  const handleSendMessage = () => {
    if (!inputValue.trim()) return;
    
    const userMessage: Message = {
      type: 'user',
      content: inputValue
    };
    
    const botResponse: Message = {
      type: 'bot',
      content: 'Thank you for your message! Our team will provide detailed information. Would you like to explore our products or contact our sales team?',
      options: [
        { icon: Package, label: 'Explore Products', action: 'products' },
        { icon: Users, label: 'Contact Sales', action: 'sales' },
        { icon: Home, label: 'Main Menu', action: 'main' }
      ]
    };
    
    setMessages([...messages, userMessage, botResponse]);
    setInputValue('');
  };

  return (
    <>
      {/* Floating Chat Button */}
      <AnimatePresence>
        {!isOpen && (
          <motion.button
            initial={{ scale: 0, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            exit={{ scale: 0, opacity: 0 }}
            onClick={() => setIsOpen(true)}
            data-chatbot-button
            className="fixed bottom-6 right-6 w-16 h-16 bg-gradient-to-r from-[#D4AF37] to-[#C09F2F] rounded-full shadow-2xl flex items-center justify-center hover:scale-110 transition-transform z-50 group"
          >
            <MessageCircle className="w-8 h-8 text-white" />
            <span className="absolute -top-1 -right-1 w-5 h-5 bg-red-500 rounded-full flex items-center justify-center text-white text-xs animate-pulse">
              1
            </span>
            <div className="absolute right-20 bg-black/80 text-white px-4 py-2 rounded-lg opacity-0 group-hover:opacity-100 transition-opacity whitespace-nowrap">
              Chat with us
            </div>
          </motion.button>
        )}
      </AnimatePresence>

      {/* Chat Window */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ scale: 0.8, opacity: 0, y: 50 }}
            animate={{ scale: 1, opacity: 1, y: 0 }}
            exit={{ scale: 0.8, opacity: 0, y: 50 }}
            className="fixed bottom-6 right-6 w-[400px] h-[650px] bg-white rounded-2xl shadow-2xl flex flex-col overflow-hidden z-50"
          >
            {/* Header */}
            <div className="bg-gradient-to-r from-[#0A2647] to-[#2A4A5A] text-white p-4 flex items-center justify-between">
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 bg-[#D4AF37] rounded-full flex items-center justify-center">
                  🌿
                </div>
                <div>
                  <h3 className="font-semibold">Golden Spices Assistant</h3>
                  <div className="flex items-center gap-1 text-xs text-green-300">
                    <div className="w-2 h-2 bg-green-400 rounded-full animate-pulse"></div>
                    <span>Online - Instant Replies</span>
                  </div>
                </div>
              </div>
              <div className="flex items-center gap-2">
                <button
                  onClick={() => setIsMinimized(!isMinimized)}
                  className="hover:bg-white/10 p-1 rounded transition-colors"
                >
                  <Minimize2 className="w-5 h-5" />
                </button>
                <button
                  onClick={() => setIsOpen(false)}
                  className="hover:bg-white/10 p-1 rounded transition-colors"
                >
                  <X className="w-5 h-5" />
                </button>
              </div>
            </div>

            {/* Messages Area */}
            {!isMinimized && (
              <>
                <div className="flex-1 overflow-y-auto p-4 space-y-4 bg-[#FFF8E7]">
                  {messages.map((message, index) => (
                    <div
                      key={index}
                      className={`flex ${message.type === 'user' ? 'justify-end' : 'justify-start'}`}
                    >
                      <div
                        className={`max-w-[80%] p-3 rounded-lg ${
                          message.type === 'user'
                            ? 'bg-[#D4AF37] text-white'
                            : 'bg-white shadow-md'
                        }`}
                      >
                        <p className="whitespace-pre-line text-sm">{message.content}</p>
                        
                        {/* Video Preview */}
                        {message.video && (
                          <div className="mt-3 relative rounded-lg overflow-hidden group cursor-pointer">
                            <img
                              src={message.video.thumbnail}
                              alt={message.video.title}
                              className="w-full h-32 object-cover"
                            />
                            <div className="absolute inset-0 bg-black/40 flex items-center justify-center">
                              <div className="w-12 h-12 bg-[#D4AF37] rounded-full flex items-center justify-center">
                                <Video className="w-6 h-6 text-white" />
                              </div>
                            </div>
                            <div className="absolute bottom-2 left-2 text-white text-xs bg-black/70 px-2 py-1 rounded">
                              {message.video.duration}
                            </div>
                          </div>
                        )}
                        
                        {/* Options */}
                        {message.options && (
                          <div className="mt-3 space-y-2">
                            {message.options.map((option, optIndex) => {
                              const Icon = option.icon;
                              return (
                                <button
                                  key={optIndex}
                                  onClick={() => handleOptionClick(option.action)}
                                  className="w-full flex items-center gap-2 p-2 bg-[#FFF8E7] hover:bg-[#D4AF37] hover:text-white rounded-lg transition-all text-sm text-left border border-[#D4AF37]/20"
                                >
                                  <Icon className="w-4 h-4" />
                                  <span>{option.label}</span>
                                </button>
                              );
                            })}
                          </div>
                        )}
                      </div>
                    </div>
                  ))}
                </div>

                {/* Input Area */}
                <div className="p-4 bg-white border-t border-gray-200">
                  <div className="flex items-center gap-2">
                    <input
                      type="text"
                      value={inputValue}
                      onChange={(e) => setInputValue(e.target.value)}
                      onKeyPress={(e) => e.key === 'Enter' && handleSendMessage()}
                      placeholder="Type your question..."
                      className="flex-1 px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:border-[#D4AF37]"
                    />
                    <button
                      onClick={handleSendMessage}
                      className="bg-[#D4AF37] hover:bg-[#C09F2F] text-white p-2 rounded-lg transition-colors"
                    >
                      <Send className="w-5 h-5" />
                    </button>
                  </div>
                </div>
              </>
            )}
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
