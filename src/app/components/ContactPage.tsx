import { useState } from 'react';
import { VideoPlayer } from './VideoPlayer';
import { Mail, Phone, MapPin, Send, User, Package, MessageSquare, Building, Globe, ChevronDown } from 'lucide-react';
import { motion } from 'motion/react';

// Product categories and their products
const productCategories = {
  'spices': {
    name: 'Ceylon Golden Spices',
    products: ['Ceylon Cinnamon', 'Black Pepper', 'Cloves', 'Cardamom', 'Nutmeg & Mace', 'Turmeric', 'Ginger', 'Curry Leaves']
  },
  'herbal': {
    name: 'Ceylon Golden Herbal',
    products: ['Moringa', 'Gotukola (Centella)', 'Venivel', 'Karapincha', 'Turmeric Powder', 'Ginger Powder', 'Cinnamon Powder']
  },
  'tea': {
    name: 'Pure Ceylon Tea',
    products: ['Black Tea', 'Green Tea', 'White Tea', 'Flavored Tea', 'Herbal Tea Blends', 'Organic Tea']
  },
  'fruits': {
    name: 'Dehydrated Fruits',
    products: ['Pineapple', 'Mango', 'Papaya', 'Banana', 'Wood Apple', 'Mixed Fruit']
  },
  'cashew': {
    name: 'Ceylon Cashew',
    products: ['W320 Cashew', 'W240 Cashew', 'Cashew Pieces', 'Roasted Cashew']
  }
};

// Common country codes with phone number specifications
const countryCodes = [
  { code: '+1', country: 'USA/Canada', flag: '🇺🇸', digits: 10, placeholder: '234 567 8900', format: 'XXX XXX XXXX' },
  { code: '+44', country: 'UK', flag: '🇬🇧', digits: 10, placeholder: '20 1234 5678', format: 'XX XXXX XXXX' },
  { code: '+61', country: 'Australia', flag: '🇦🇺', digits: 9, placeholder: '412 345 678', format: 'XXX XXX XXX' },
  { code: '+81', country: 'Japan', flag: '🇯🇵', digits: 10, placeholder: '90 1234 5678', format: 'XX XXXX XXXX' },
  { code: '+86', country: 'China', flag: '🇨🇳', digits: 11, placeholder: '138 0013 8000', format: 'XXX XXXX XXXX' },
  { code: '+91', country: 'India', flag: '🇮🇳', digits: 10, placeholder: '98765 43210', format: 'XXXXX XXXXX' },
  { code: '+971', country: 'UAE', flag: '🇦🇪', digits: 9, placeholder: '50 123 4567', format: 'XX XXX XXXX' },
  { code: '+966', country: 'Saudi Arabia', flag: '🇸🇦', digits: 9, placeholder: '50 123 4567', format: 'XX XXX XXXX' },
  { code: '+65', country: 'Singapore', flag: '🇸🇬', digits: 8, placeholder: '8123 4567', format: 'XXXX XXXX' },
  { code: '+60', country: 'Malaysia', flag: '🇲🇾', digits: 9, placeholder: '12 345 6789', format: 'XX XXX XXXX' },
  { code: '+49', country: 'Germany', flag: '🇩🇪', digits: 10, placeholder: '30 12345678', format: 'XX XXXXXXXX' },
  { code: '+33', country: 'France', flag: '🇫🇷', digits: 9, placeholder: '6 12 34 56 78', format: 'X XX XX XX XX' },
  { code: '+39', country: 'Italy', flag: '🇮🇹', digits: 10, placeholder: '312 345 6789', format: 'XXX XXX XXXX' },
  { code: '+34', country: 'Spain', flag: '🇪🇸', digits: 9, placeholder: '612 34 56 78', format: 'XXX XX XX XX' },
  { code: '+31', country: 'Netherlands', flag: '🇳🇱', digits: 9, placeholder: '6 12345678', format: 'X XXXXXXXX' },
  { code: '+7', country: 'Russia', flag: '🇷🇺', digits: 10, placeholder: '912 345 6789', format: 'XXX XXX XXXX' },
  { code: '+82', country: 'South Korea', flag: '🇰🇷', digits: 10, placeholder: '10 1234 5678', format: 'XX XXXX XXXX' },
  { code: '+62', country: 'Indonesia', flag: '🇮🇩', digits: 10, placeholder: '812 3456 789', format: 'XXX XXXX XXX' },
  { code: '+94', country: 'Sri Lanka', flag: '🇱🇰', digits: 10, placeholder: '71 234 5678', format: 'XX XXX XXXX' },
  { code: '+27', country: 'South Africa', flag: '🇿🇦', digits: 9, placeholder: '82 123 4567', format: 'XX XXX XXXX' },
  { code: '+64', country: 'New Zealand', flag: '🇳🇿', digits: 9, placeholder: '21 123 4567', format: 'XX XXX XXXX' },
  { code: '+55', country: 'Brazil', flag: '🇧🇷', digits: 11, placeholder: '11 98765 4321', format: 'XX XXXXX XXXX' },
  { code: '+52', country: 'Mexico', flag: '🇲🇽', digits: 10, placeholder: '55 1234 5678', format: 'XX XXXX XXXX' },
  { code: '+66', country: 'Thailand', flag: '🇹🇭', digits: 9, placeholder: '81 234 5678', format: 'XX XXX XXXX' },
  { code: '+84', country: 'Vietnam', flag: '🇻🇳', digits: 9, placeholder: '91 234 5678', format: 'XX XXX XXXX' },
];

// Popular countries for dropdown
const countries = [
  'United States', 'United Kingdom', 'Germany', 'France', 'Italy', 'Spain', 'Netherlands', 
  'Canada', 'Australia', 'Japan', 'China', 'India', 'UAE', 'Saudi Arabia', 'Singapore',
  'Malaysia', 'Indonesia', 'South Korea', 'Russia', 'South Africa', 'New Zealand',
  'Belgium', 'Switzerland', 'Austria', 'Sweden', 'Norway', 'Denmark', 'Poland',
  'Turkey', 'Egypt', 'Kenya', 'Nigeria', 'Brazil', 'Mexico', 'Argentina', 'Chile',
  'Thailand', 'Vietnam', 'Philippines', 'Pakistan', 'Bangladesh', 'Sri Lanka'
].sort();

interface ContactPageProps {
  onOpenChatbot?: () => void;
}

export function ContactPage({ onOpenChatbot }: ContactPageProps) {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    countryCode: '+94',
    phone: '',
    country: '',
    productCategory: '',
    specificProducts: [] as string[],
    packageSize: '',
    quantityValue: '',
    message: ''
  });

  const [submitted, setSubmitted] = useState(false);
  const [showCountryDropdown, setShowCountryDropdown] = useState(false);
  const [countrySearch, setCountrySearch] = useState('');
  
  // Get package sizes based on product category
  const getPackageSizes = () => {
    const category = formData.productCategory;
    if (category === 'tea') {
      return ['2g (10 bags)', '2g (20 bags)'];
    } else if (category && category !== 'multiple') {
      return ['25g', '50g', '75g', '100g'];
    }
    return [];
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
    setTimeout(() => setSubmitted(false), 5000);
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    const { name, value } = e.target;
    
    if (name === 'productCategory') {
      // Reset specific products and quantity when category changes
      setFormData({ ...formData, productCategory: value, specificProducts: [], packageSize: '', quantityValue: '' });
    } else if (name === 'countryCode') {
      // Reset phone number when country code changes
      setFormData({ ...formData, countryCode: value, phone: '' });
    } else if (name === 'phone') {
      // Only allow digits and limit based on country code
      const digits = value.replace(/\D/g, '');
      const selectedCountry = countryCodes.find(c => c.code === formData.countryCode);
      const maxDigits = selectedCountry?.digits || 15;
      
      if (digits.length <= maxDigits) {
        setFormData({ ...formData, [name]: digits });
      }
    } else {
      setFormData({ ...formData, [name]: value });
    }
  };

  const handleProductSelection = (product: string) => {
    const currentProducts = formData.specificProducts;
    if (currentProducts.includes(product)) {
      setFormData({
        ...formData,
        specificProducts: currentProducts.filter(p => p !== product)
      });
    } else {
      setFormData({
        ...formData,
        specificProducts: [...currentProducts, product]
      });
    }
  };

  const filteredCountries = countries.filter(country =>
    country.toLowerCase().includes(countrySearch.toLowerCase())
  );

  const handleWhatsAppClick = () => {
    const whatsappNumber = '94714893350';
    const message = 'Hello Golden Spices! I would like to inquire about your premium Ceylon spices.';
    const url = `https://wa.me/${whatsappNumber}?text=${encodeURIComponent(message)}`;
    window.open(url, '_blank');
  };

  return (
    <div className="min-h-screen pt-20">
      {/* Hero with Video Background */}
      <section className="relative h-[50vh] flex items-center justify-center overflow-hidden">
        <div className="absolute inset-0">
          <img 
            src="https://images.unsplash.com/photo-1649853761620-c6588c980545?w=1920"
            alt="Contact us"
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-black/70 to-black/60"></div>
        </div>

        <div className="relative z-10 text-center text-white px-4 max-w-4xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
          >
            <h1 className="text-6xl mb-4" style={{ fontFamily: 'Playfair Display, serif' }}>
              Let's Start Your Ceylon Spice Journey
            </h1>
            <p className="text-2xl text-[#D4AF37]">
              Connect with Our Export Team
            </p>
          </motion.div>
        </div>
      </section>

      {/* Main Contact Section */}
      <section className="py-20 bg-[#FFF8E7]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-5 gap-12">
            {/* Left Column - Inquiry Form */}
            <div className="lg:col-span-3">
              <div className="bg-white rounded-2xl shadow-xl p-8">
                <h2 className="text-3xl mb-6 text-[#7B3F00]" style={{ fontFamily: 'Playfair Display, serif' }}>
                  Export Inquiry Form
                </h2>
                <p className="text-gray-700 mb-8">
                  Fill out the form below and our export team will get back to you within 24 hours with detailed information and quotation.
                </p>

                <form onSubmit={handleSubmit} className="space-y-6">
                  {/* Name (Full Width) */}
                  <div>
                    <label className="block text-sm font-semibold text-[#7B3F00] mb-2">
                      Full Name *
                    </label>
                    <div className="relative">
                      <User className="w-5 h-5 text-gray-400 absolute left-3 top-1/2 transform -translate-y-1/2" />
                      <input
                        type="text"
                        name="name"
                        value={formData.name}
                        onChange={handleChange}
                        required
                        className="w-full pl-10 pr-4 py-3 border-2 border-gray-300 rounded-lg focus:outline-none focus:border-[#D4AF37] transition-colors"
                        placeholder="John Smith"
                      />
                    </div>
                  </div>

                  {/* Email */}
                  <div>
                    <label className="block text-sm font-semibold text-[#7B3F00] mb-2">
                      Email Address *
                    </label>
                    <div className="relative">
                      <Mail className="w-5 h-5 text-gray-400 absolute left-3 top-1/2 transform -translate-y-1/2" />
                      <input
                        type="email"
                        name="email"
                        value={formData.email}
                        onChange={handleChange}
                        required
                        className="w-full pl-10 pr-4 py-3 border-2 border-gray-300 rounded-lg focus:outline-none focus:border-[#D4AF37] transition-colors"
                        placeholder="john@company.com"
                      />
                    </div>
                  </div>

                  {/* Phone Number (Full Width) - Split into Country Code + Number */}
                  <div>
                    <label className="block text-sm font-semibold text-[#7B3F00] mb-2">
                      Phone Number *
                    </label>
                    <div className="flex gap-3">
                      <select
                        name="countryCode"
                        value={formData.countryCode}
                        onChange={handleChange}
                        className="w-40 px-3 py-3 border-2 border-gray-300 rounded-lg focus:outline-none focus:border-[#D4AF37] transition-colors text-sm font-semibold"
                      >
                        {countryCodes.map((item) => (
                          <option key={item.code} value={item.code}>
                            {item.flag} {item.code}
                          </option>
                        ))}
                      </select>
                      <div className="relative flex-1">
                        <Phone className="w-5 h-5 text-gray-400 absolute left-3 top-1/2 transform -translate-y-1/2" />
                        <input
                          type="tel"
                          name="phone"
                          value={formData.phone}
                          onChange={handleChange}
                          required
                          maxLength={countryCodes.find(c => c.code === formData.countryCode)?.digits}
                          className="w-full pl-10 pr-20 py-3 border-2 border-gray-300 rounded-lg focus:outline-none focus:border-[#D4AF37] transition-colors"
                          placeholder={countryCodes.find(c => c.code === formData.countryCode)?.placeholder || '123456789'}
                        />
                        <div className="absolute right-3 top-1/2 transform -translate-y-1/2 text-xs text-gray-500">
                          {formData.phone.length}/{countryCodes.find(c => c.code === formData.countryCode)?.digits}
                        </div>
                      </div>
                    </div>
                  </div>

                  {/* Country with Search */}
                  <div>
                    <label className="block text-sm font-semibold text-[#7B3F00] mb-2">
                      Country *
                    </label>
                    <div className="relative">
                      <MapPin className="w-5 h-5 text-gray-400 absolute left-3 top-1/2 transform -translate-y-1/2 z-10" />
                      <Globe className="w-5 h-5 text-gray-400 absolute right-3 top-1/2 transform -translate-y-1/2 z-10" />
                      <select
                        name="country"
                        value={formData.country}
                        onChange={handleChange}
                        required
                        className="w-full pl-10 pr-10 py-3 border-2 border-gray-300 rounded-lg focus:outline-none focus:border-[#D4AF37] transition-colors appearance-none cursor-pointer"
                      >
                        <option value="">Select Your Country</option>
                        {countries.map((country) => (
                          <option key={country} value={country}>
                            {country}
                          </option>
                        ))}
                      </select>
                    </div>
                  </div>

                  {/* Product Category & Specific Products */}
                  <div className="grid md:grid-cols-2 gap-4">
                    <div>
                      <label className="block text-sm font-semibold text-[#7B3F00] mb-2">
                        Product Category *
                      </label>
                      <div className="relative">
                        <Package className="w-5 h-5 text-gray-400 absolute left-3 top-1/2 transform -translate-y-1/2" />
                        <select
                          name="productCategory"
                          value={formData.productCategory}
                          onChange={handleChange}
                          required
                          className="w-full pl-10 pr-4 py-3 border-2 border-gray-300 rounded-lg focus:outline-none focus:border-[#D4AF37] transition-colors appearance-none"
                        >
                          <option value="">Select Category</option>
                          {Object.entries(productCategories).map(([key, category]) => (
                            <option key={key} value={key}>
                              {category.name}
                            </option>
                          ))}
                          <option value="multiple">Multiple Categories</option>
                        </select>
                      </div>
                    </div>
                    <div>
                      <label className="block text-sm font-semibold text-[#7B3F00] mb-2">
                        Estimated Quantity
                      </label>
                      {formData.productCategory && formData.productCategory !== 'multiple' ? (
                        <div className="grid grid-cols-2 gap-3">
                          <select
                            name="packageSize"
                            value={formData.packageSize}
                            onChange={handleChange}
                            required
                            className="px-4 py-3 border-2 border-gray-300 rounded-lg focus:outline-none focus:border-[#D4AF37] transition-colors"
                          >
                            <option value="">Package Size *</option>
                            {getPackageSizes().map((size) => (
                              <option key={size} value={size}>{size}</option>
                            ))}
                          </select>
                          <input
                            type="number"
                            name="quantityValue"
                            value={formData.quantityValue}
                            onChange={handleChange}
                            required
                            min="1"
                            className="px-4 py-3 border-2 border-gray-300 rounded-lg focus:outline-none focus:border-[#D4AF37] transition-colors"
                            placeholder="Quantity *"
                          />
                        </div>
                      ) : (
                        <input
                          type="text"
                          name="quantityValue"
                          value={formData.quantityValue}
                          onChange={handleChange}
                          className="w-full px-4 py-3 border-2 border-gray-300 rounded-lg focus:outline-none focus:border-[#D4AF37] transition-colors"
                          placeholder="e.g., 500kg monthly"
                        />
                      )}
                    </div>
                  </div>

                  {/* Specific Products (appears when category is selected) */}
                  {formData.productCategory && formData.productCategory !== 'multiple' && productCategories[formData.productCategory as keyof typeof productCategories] && (
                    <div>
                      <label className="block text-sm font-semibold text-[#7B3F00] mb-3">
                        Select Specific Products (Optional)
                      </label>
                      <div className="grid grid-cols-2 gap-3">
                        {productCategories[formData.productCategory as keyof typeof productCategories].products.map((product) => (
                          <label
                            key={product}
                            className="flex items-center gap-2 p-3 border-2 border-gray-300 rounded-lg cursor-pointer hover:border-[#D4AF37] transition-colors"
                          >
                            <input
                              type="checkbox"
                              checked={formData.specificProducts.includes(product)}
                              onChange={() => handleProductSelection(product)}
                              className="w-4 h-4 text-[#D4AF37] border-gray-300 rounded focus:ring-[#D4AF37]"
                            />
                            <span className="text-sm text-gray-700">{product}</span>
                          </label>
                        ))}
                      </div>
                    </div>
                  )}

                  {/* Message */}
                  <div>
                    <label className="block text-sm font-semibold text-[#7B3F00] mb-2">
                      Message / Specific Requirements
                    </label>
                    <div className="relative">
                      <MessageSquare className="w-5 h-5 text-gray-400 absolute left-3 top-4" />
                      <textarea
                        name="message"
                        value={formData.message}
                        onChange={handleChange}
                        rows={4}
                        className="w-full pl-10 pr-4 py-3 border-2 border-gray-300 rounded-lg focus:outline-none focus:border-[#D4AF37] transition-colors"
                        placeholder="Tell us about your requirements, packaging preferences, target markets, etc."
                      />
                    </div>
                  </div>

                  {/* Submit Button */}
                  <button
                    type="submit"
                    className="w-full bg-[#D4AF37] hover:bg-[#C09F2F] text-white py-4 rounded-lg font-semibold text-lg flex items-center justify-center gap-3 transition-all hover:scale-105 shadow-xl"
                  >
                    <Send className="w-5 h-5" />
                    Submit Inquiry
                  </button>

                  {/* Success Message */}
                  {submitted && (
                    <motion.div
                      initial={{ opacity: 0, y: -10 }}
                      animate={{ opacity: 1, y: 0 }}
                      className="bg-green-50 border-2 border-green-500 text-green-800 p-4 rounded-lg text-center"
                    >
                      ✓ Thank you! Your inquiry has been received. We'll contact you within 24 hours.
                    </motion.div>
                  )}
                </form>
              </div>
            </div>

            {/* Right Column - Contact Info & Video */}
            <div className="lg:col-span-2 space-y-6">
              {/* Video Introduction */}
              <div className="bg-white rounded-2xl shadow-xl p-6">
                <h3 className="text-2xl mb-4 text-[#7B3F00]" style={{ fontFamily: 'Playfair Display, serif' }}>
                  Meet Our Export Team
                </h3>
                <VideoPlayer 
                  thumbnail="https://images.unsplash.com/photo-1649853761620-c6588c980545?w=600"
                  title="Meet Our Export Team - 60 Second Introduction"
                  duration="1:00"
                  className="h-48"
                />
                <p className="text-sm text-gray-600 mt-4">
                  Watch our team introduce themselves and learn about our export capabilities
                </p>
              </div>

              {/* WhatsApp Contact Card */}
              <div className="bg-gradient-to-br from-[#25D366] to-[#20BA5A] rounded-2xl shadow-xl p-6 text-white">
                <div className="flex items-center gap-3 mb-4">
                  <div className="w-12 h-12 bg-white rounded-full flex items-center justify-center">
                    <svg
                      className="w-7 h-7 text-[#25D366]"
                      fill="currentColor"
                      viewBox="0 0 24 24"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z"/>
                    </svg>
                  </div>
                  <div>
                    <h3 className="text-xl font-bold">Chat on WhatsApp</h3>
                    <p className="text-sm text-white/90">Get instant responses</p>
                  </div>
                </div>
                <p className="text-sm mb-4 text-white/95">
                  Prefer WhatsApp? Chat directly with our export team for quick inquiries about products, pricing, and availability.
                </p>
                <button
                  onClick={handleWhatsAppClick}
                  className="w-full bg-white hover:bg-gray-100 text-[#25D366] py-3 rounded-lg font-semibold transition-all hover:scale-105 shadow-lg flex items-center justify-center gap-2"
                >
                  <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z"/>
                  </svg>
                  Start WhatsApp Chat
                </button>
              </div>

              {/* Company Details */}
              <div className="bg-white rounded-2xl shadow-xl p-6">
                <h3 className="text-2xl mb-6 text-[#7B3F00]" style={{ fontFamily: 'Playfair Display, serif' }}>
                  Contact Information
                </h3>

                <div className="space-y-6">
                  {/* Head Office */}
                  <div>
                    <h4 className="font-bold text-[#D4AF37] mb-3 flex items-center gap-2">
                      <Building className="w-5 h-5" />
                      Head Office
                    </h4>
                    <div className="pl-7 space-y-2 text-sm text-gray-700">
                      <p className="font-semibold">Buddhi Product</p>
                      <p>Imperial Spices (Pvt) Ltd</p>
                      <p>121 A, Biyagama Road</p>
                      <p>Kelaniya, Sri Lanka</p>
                    </div>
                  </div>

                  {/* Factory */}
                  <div>
                    <h4 className="font-bold text-[#D4AF37] mb-3 flex items-center gap-2">
                      <Building className="w-5 h-5" />
                      Factory
                    </h4>
                    <div className="pl-7 space-y-2 text-sm text-gray-700">
                      <p>151, Biyagama Road</p>
                      <p>Kelaniya, Sri Lanka</p>
                    </div>
                  </div>

                  {/* Contact Details */}
                  <div className="pt-4 border-t border-gray-200">
                    <div className="space-y-4">
                      <div className="flex items-start gap-3">
                        <Mail className="w-5 h-5 text-[#D4AF37] flex-shrink-0 mt-0.5" />
                        <div className="text-sm">
                          <p className="font-semibold text-[#7B3F00] mb-1">Email</p>
                          <a href="mailto:jayanthak@impratea.lk" className="text-[#D4AF37] hover:underline block">
                            jayanthak@impratea.lk
                          </a>
                          <a href="mailto:imperialspices@imperialspices.lk" className="text-[#D4AF37] hover:underline block">
                            imperialspices@imperialspices.lk
                          </a>
                          <a href="mailto:sales@imperialspices.lk" className="text-[#D4AF37] hover:underline block">
                            sales@imperialspices.lk
                          </a>
                        </div>
                      </div>

                      <div className="flex items-start gap-3">
                        <Phone className="w-5 h-5 text-[#D4AF37] flex-shrink-0 mt-0.5" />
                        <div className="text-sm">
                          <p className="font-semibold text-[#7B3F00] mb-1">Phone</p>
                          <a href="tel:+94112904000" className="text-[#D4AF37] hover:underline block">
                            +94 11 290 4000
                          </a>
                          <a href="tel:+94112904034" className="text-[#D4AF37] hover:underline block">
                            +94 11 290 4034
                          </a>
                        </div>
                      </div>

                      <div className="flex items-start gap-3">
                        <Phone className="w-5 h-5 text-[#D4AF37] flex-shrink-0 mt-0.5" />
                        <div className="text-sm">
                          <p className="font-semibold text-[#7B3F00] mb-1">Mobile</p>
                          <a href="tel:+94714893350" className="text-[#D4AF37] hover:underline">
                            +94 71 489 3350
                          </a>
                        </div>
                      </div>

                      <div className="flex items-start gap-3">
                        <Phone className="w-5 h-5 text-[#D4AF37] flex-shrink-0 mt-0.5" />
                        <div className="text-sm">
                          <p className="font-semibold text-[#7B3F00] mb-1">Fax</p>
                          <p className="text-gray-700">+94 11 290 9988</p>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              {/* Business Hours */}
              <div className="bg-[#D4AF37] rounded-2xl shadow-xl p-6 text-white">
                <h4 className="font-bold mb-4 text-xl">Business Hours</h4>
                <div className="space-y-2 text-sm">
                  <div className="flex justify-between">
                    <span>Monday - Friday:</span>
                    <span className="font-semibold">8:00 AM - 5:00 PM</span>
                  </div>
                  <div className="flex justify-between">
                    <span>Saturday:</span>
                    <span className="font-semibold">8:00 AM - 1:00 PM</span>
                  </div>
                  <div className="flex justify-between">
                    <span>Sunday:</span>
                    <span className="font-semibold">Closed</span>
                  </div>
                  <p className="text-xs pt-3 border-t border-white/30">
                    Sri Lanka Time (GMT+5:30)
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 bg-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h3 className="text-3xl mb-4 text-[#7B3F00]" style={{ fontFamily: 'Playfair Display, serif' }}>
            Prefer Instant Chat?
          </h3>
          <p className="text-lg text-gray-700 mb-6">
            Our chatbot is available 24/7 for quick questions about products, packaging, and export information
          </p>
          <button 
            onClick={onOpenChatbot}
            className="bg-[#D4AF37] hover:bg-[#C09F2F] text-white px-8 py-3 rounded-full font-semibold transition-all hover:scale-105 shadow-lg"
          >
            Start Live Chat
          </button>
        </div>
      </section>
    </div>
  );
}
