import { useState } from 'react';
import { Mail, Phone, MapPin, Send, User, Package, MessageSquare, Building, ChevronDown, Check } from 'lucide-react';
import { motion, AnimatePresence } from 'motion/react';

const WEB3FORMS_KEY = '679a3d9c-2184-4cc0-b50d-03a9176da07c';

const productCategories = {
  spices: {
    name: 'Ceylon Golden Spices',
    packageSizes: ['25g', '50g', '75g', '100g'],
    products: [
      'Pure Ceylon Whole Clove', 'Pure Ceylon Whole Cinnamon', 'Pure Ceylon Whole White Pepper',
      'Pure Ceylon Whole Black Pepper', 'Pure Ceylon Whole Turmeric Powder',
      'Pure Ceylon Whole Black Pepper Powder', 'Pure Ceylon Whole Garcinia', 'Pure Ceylon Whole Cardamom',
    ],
  },
  herbal: {
    name: 'Ceylon Golden Herbal',
    packageSizes: ['25g', '50g', '75g', '100g'],
    products: ['Moringa Powder', 'Cinnamon Powder', 'Curry Leaves or Powder', 'Butterfly Pea Flowers Powder', 'Ceylon Pure Roast Coffee'],
  },
  tea: {
    name: 'Pure Ceylon Tea',
    packageSizes: ['2g × 10 bags', '2g × 20 bags'],
    products: ['Classic Black Tea: Pure Ceylon Black Tea', 'Green Tea', 'Moringa Tea', 'Cinnamon Tea', 'Ginger Tea'],
  },
  fruits: {
    name: 'Ceylon Golden Dehydrated Fruit',
    packageSizes: ['25g', '50g', '75g', '100g'],
    products: ['Dehydrated Watermelon', 'Dehydrated Mango', 'Dehydrated Papaya', 'Dehydrated Pineapple', 'Dehydrated Mix Fruit'],
  },
  cashew: {
    name: 'Ceylon Cashew',
    packageSizes: ['25g', '50g', '75g', '100g'],
    products: ['Ceylon Whole Oven Cashew Nut', 'Ceylon Whole Roast Cashew Nut'],
  },
};

const countryCodes = [
  { code: '+1', country: 'USA/Canada', flag: '🇺🇸', digits: 10, placeholder: '234 567 8900' },
  { code: '+44', country: 'UK', flag: '🇬🇧', digits: 10, placeholder: '20 1234 5678' },
  { code: '+61', country: 'Australia', flag: '🇦🇺', digits: 9, placeholder: '412 345 678' },
  { code: '+81', country: 'Japan', flag: '🇯🇵', digits: 10, placeholder: '90 1234 5678' },
  { code: '+86', country: 'China', flag: '🇨🇳', digits: 11, placeholder: '138 0013 8000' },
  { code: '+91', country: 'India', flag: '🇮🇳', digits: 10, placeholder: '98765 43210' },
  { code: '+971', country: 'UAE', flag: '🇦🇪', digits: 9, placeholder: '50 123 4567' },
  { code: '+966', country: 'Saudi Arabia', flag: '🇸🇦', digits: 9, placeholder: '50 123 4567' },
  { code: '+65', country: 'Singapore', flag: '🇸🇬', digits: 8, placeholder: '8123 4567' },
  { code: '+60', country: 'Malaysia', flag: '🇲🇾', digits: 9, placeholder: '12 345 6789' },
  { code: '+49', country: 'Germany', flag: '🇩🇪', digits: 10, placeholder: '30 12345678' },
  { code: '+33', country: 'France', flag: '🇫🇷', digits: 9, placeholder: '6 12 34 56 78' },
  { code: '+39', country: 'Italy', flag: '🇮🇹', digits: 10, placeholder: '312 345 6789' },
  { code: '+34', country: 'Spain', flag: '🇪🇸', digits: 9, placeholder: '612 34 56 78' },
  { code: '+31', country: 'Netherlands', flag: '🇳🇱', digits: 9, placeholder: '6 12345678' },
  { code: '+7', country: 'Russia', flag: '🇷🇺', digits: 10, placeholder: '912 345 6789' },
  { code: '+82', country: 'South Korea', flag: '🇰🇷', digits: 10, placeholder: '10 1234 5678' },
  { code: '+62', country: 'Indonesia', flag: '🇮🇩', digits: 10, placeholder: '812 3456 789' },
  { code: '+94', country: 'Sri Lanka', flag: '🇱🇰', digits: 10, placeholder: '71 234 5678' },
  { code: '+27', country: 'South Africa', flag: '🇿🇦', digits: 9, placeholder: '82 123 4567' },
  { code: '+64', country: 'New Zealand', flag: '🇳🇿', digits: 9, placeholder: '21 123 4567' },
  { code: '+55', country: 'Brazil', flag: '🇧🇷', digits: 11, placeholder: '11 98765 4321' },
  { code: '+52', country: 'Mexico', flag: '🇲🇽', digits: 10, placeholder: '55 1234 5678' },
  { code: '+66', country: 'Thailand', flag: '🇹🇭', digits: 9, placeholder: '81 234 5678' },
  { code: '+84', country: 'Vietnam', flag: '🇻🇳', digits: 9, placeholder: '91 234 5678' },
  { code: '+32', country: 'Belgium', flag: '🇧🇪', digits: 9, placeholder: '470 12 34 56' },
  { code: '+41', country: 'Switzerland', flag: '🇨🇭', digits: 9, placeholder: '78 123 45 67' },
  { code: '+46', country: 'Sweden', flag: '🇸🇪', digits: 9, placeholder: '70 123 45 67' },
  { code: '+47', country: 'Norway', flag: '🇳🇴', digits: 8, placeholder: '412 34 567' },
  { code: '+45', country: 'Denmark', flag: '🇩🇰', digits: 8, placeholder: '20 12 34 56' },
  { code: '+48', country: 'Poland', flag: '🇵🇱', digits: 9, placeholder: '512 345 678' },
  { code: '+90', country: 'Turkey', flag: '🇹🇷', digits: 10, placeholder: '532 123 4567' },
  { code: '+20', country: 'Egypt', flag: '🇪🇬', digits: 10, placeholder: '100 123 4567' },
  { code: '+254', country: 'Kenya', flag: '🇰🇪', digits: 9, placeholder: '712 345 678' },
  { code: '+234', country: 'Nigeria', flag: '🇳🇬', digits: 10, placeholder: '802 345 6789' },
  { code: '+56', country: 'Chile', flag: '🇨🇱', digits: 9, placeholder: '9 1234 5678' },
  { code: '+54', country: 'Argentina', flag: '🇦🇷', digits: 10, placeholder: '9 11 1234 5678' },
  { code: '+63', country: 'Philippines', flag: '🇵🇭', digits: 10, placeholder: '917 123 4567' },
  { code: '+92', country: 'Pakistan', flag: '🇵🇰', digits: 10, placeholder: '312 345 6789' },
  { code: '+880', country: 'Bangladesh', flag: '🇧🇩', digits: 10, placeholder: '171 234 5678' },
];

const countries = [
  'United States', 'United Kingdom', 'Germany', 'France', 'Italy', 'Spain', 'Netherlands', 'Canada',
  'Australia', 'Japan', 'China', 'India', 'UAE', 'Saudi Arabia', 'Singapore', 'Malaysia', 'Indonesia',
  'South Korea', 'Russia', 'South Africa', 'New Zealand', 'Belgium', 'Switzerland', 'Austria',
  'Sweden', 'Norway', 'Denmark', 'Poland', 'Turkey', 'Egypt', 'Kenya', 'Nigeria', 'Brazil', 'Mexico',
  'Argentina', 'Chile', 'Thailand', 'Vietnam', 'Philippines', 'Pakistan', 'Bangladesh', 'Sri Lanka',
].sort();

type CategoryKey = keyof typeof productCategories;

interface FormData {
  name: string; email: string; countryCode: string; phone: string; country: string;
  productCategory: CategoryKey | 'multiple' | ''; specificProducts: string[];
  packageSize: string; quantityValue: string; message: string;
}

interface ContactPageProps { onOpenChatbot?: () => void; }

// ─── Defined OUTSIDE ContactPage to prevent focus loss on re-render ───
const FieldWrapper = ({ label, error, children }: { label: string; error?: string; children: React.ReactNode }) => (
  <div>
    <label className="block text-sm font-semibold text-[#7B3F00] mb-1.5">{label}</label>
    {children}
    {error && <p className="mt-1 text-xs text-red-600 flex items-center gap-1"><span>⚠</span> {error}</p>}
  </div>
);

const inputClass = (field: keyof FormData, errors: Partial<Record<keyof FormData, string>>) =>
  `w-full py-3 px-4 border-2 rounded-xl transition-colors focus:outline-none focus:border-[#D4AF37] text-gray-800 text-sm ${errors[field] ? 'border-red-400 bg-red-50' : 'border-gray-200 bg-white hover:border-gray-300'}`;
// ─────────────────────────────────────────────────────────────────────

const SpicePattern = () => (
  <svg className="absolute inset-0 w-full h-full opacity-10 pointer-events-none" xmlns="http://www.w3.org/2000/svg" aria-hidden="true">
    <defs>
      <pattern id="spice-pattern" x="0" y="0" width="120" height="120" patternUnits="userSpaceOnUse">
        <rect x="10" y="15" width="4" height="22" rx="2" fill="currentColor" transform="rotate(-30 12 26)" />
        <rect x="16" y="18" width="4" height="22" rx="2" fill="currentColor" transform="rotate(-30 18 29)" />
        <circle cx="70" cy="20" r="4" fill="currentColor" /><circle cx="78" cy="16" r="3" fill="currentColor" /><circle cx="76" cy="26" r="3.5" fill="currentColor" />
        <ellipse cx="40" cy="70" rx="3" ry="8" fill="currentColor" transform="rotate(20 40 70)" /><circle cx="41" cy="62" r="4" fill="currentColor" />
        <ellipse cx="100" cy="60" rx="5" ry="9" fill="currentColor" />
        <line x1="100" y1="51" x2="100" y2="69" stroke="white" strokeWidth="1" />
        <line x1="96" y1="55" x2="104" y2="55" stroke="white" strokeWidth="0.8" />
        <line x1="96" y1="60" x2="104" y2="60" stroke="white" strokeWidth="0.8" />
        <line x1="96" y1="65" x2="104" y2="65" stroke="white" strokeWidth="0.8" />
        <g transform="translate(30, 95)">
          {[0, 45, 90, 135, 180, 225, 270, 315].map((deg, i) => (<ellipse key={i} cx="0" cy="-7" rx="2" ry="5" fill="currentColor" transform={`rotate(${deg})`} />))}
          <circle cx="0" cy="0" r="3" fill="currentColor" />
        </g>
        <path d="M85 90 Q95 80 105 90 Q95 100 85 90Z" fill="currentColor" />
      </pattern>
    </defs>
    <rect width="100%" height="100%" fill="url(#spice-pattern)" />
  </svg>
);

const WaIcon = () => (
  <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24">
    <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z" />
  </svg>
);

export function ContactPage({ onOpenChatbot }: ContactPageProps) {
  const [formData, setFormData] = useState<FormData>({
    name: '', email: '', countryCode: '+94', phone: '', country: '',
    productCategory: '', specificProducts: [], packageSize: '', quantityValue: '', message: '',
  });
  const [submitted, setSubmitted] = useState(false);
  const [sending, setSending] = useState(false);
  const [sendError, setSendError] = useState<string | null>(null);
  const [errors, setErrors] = useState<Partial<Record<keyof FormData, string>>>({});

  const selectedCategoryData = formData.productCategory && formData.productCategory !== 'multiple'
    ? productCategories[formData.productCategory as CategoryKey] : null;
  const packageSizes = selectedCategoryData?.packageSizes ?? [];
  const availableProducts = selectedCategoryData?.products ?? [];
  const selectedCC = countryCodes.find(c => c.code === formData.countryCode) ?? countryCodes[18];

  const validate = (): boolean => {
    const e: typeof errors = {};
    if (!formData.name.trim()) e.name = 'Full name is required';
    if (!formData.email.match(/^[^\s@]+@[^\s@]+\.[^\s@]+$/)) e.email = 'Valid email is required';
    if (formData.phone.length < 6) e.phone = 'Valid phone number required';
    if (!formData.country) e.country = 'Please select your country';
    if (!formData.productCategory) e.productCategory = 'Please select a product category';
    setErrors(e);
    return Object.keys(e).length === 0;
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!validate()) return;
    setSending(true);
    setSendError(null);

    const categoryLabel = formData.productCategory === 'multiple' ? 'Multiple Categories'
      : formData.productCategory ? productCategories[formData.productCategory as CategoryKey].name : '—';

    try {
      const response = await fetch('https://api.web3forms.com/submit', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          access_key: WEB3FORMS_KEY,
          subject: `New Export Inquiry from ${formData.name} — Ceylon Golden Spices`,
          from_name: formData.name,
          email: formData.email,
          phone: `${formData.countryCode} ${formData.phone}`,
          country: formData.country,
          product_category: categoryLabel,
          specific_products: formData.specificProducts.length ? formData.specificProducts.join(', ') : '—',
          package_size: formData.packageSize || '—',
          quantity: formData.quantityValue || '—',
          message: formData.message || '—',
          botcheck: '',
        }),
      });
      const data = await response.json();
      if (data.success) {
        setFormData({
          name: '', email: '', countryCode: '+94', phone: '', country: '',
          productCategory: '', specificProducts: [], packageSize: '', quantityValue: '', message: ''
        });
        setSubmitted(true);
        setTimeout(() => setSubmitted(false), 6000);
      } else {
        throw new Error(data.message || 'Submission failed');
      }
    } catch (err) {
      console.error('Web3Forms error:', err);
      setSendError('Sorry, something went wrong. Please try again or contact us directly on WhatsApp.');
    } finally {
      setSending(false);
    }
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    const { name, value } = e.target;
    setErrors(prev => ({ ...prev, [name]: undefined }));
    setSendError(null);
    if (name === 'productCategory') {
      setFormData(prev => ({ ...prev, productCategory: value as FormData['productCategory'], specificProducts: [], packageSize: '', quantityValue: '' }));
    } else if (name === 'countryCode') {
      setFormData(prev => ({ ...prev, countryCode: value, phone: '' }));
    } else if (name === 'phone') {
      const digits = value.replace(/\D/g, '');
      if (digits.length <= selectedCC.digits) setFormData(prev => ({ ...prev, phone: digits }));
    } else {
      setFormData(prev => ({ ...prev, [name]: value }));
    }
  };

  const toggleProduct = (product: string) => {
    setFormData(prev => ({
      ...prev,
      specificProducts: prev.specificProducts.includes(product)
        ? prev.specificProducts.filter(p => p !== product)
        : [...prev.specificProducts, product],
    }));
  };

  const handleWhatsAppClick = () => {
    window.open(`https://wa.me/94715655855?text=${encodeURIComponent('Hello Ceylon Golden Spices! I would like to inquire about your premium products.')}`, '_blank');
  };





  return (
    <div className="min-h-screen pt-20 font-sans">
      {/* Hero */}
      <section className="relative h-[52vh] min-h-[320px] flex items-center justify-center overflow-hidden">
        <div className="absolute inset-0">
          <img src="https://images.unsplash.com/photo-1596040033229-a9821ebd058d?w=1920&auto=format&fit=crop" alt="Premium Ceylon spices" className="w-full h-full object-cover" />
          <div className="absolute inset-0 bg-gradient-to-br from-black/80 via-black/60 to-[#7B3F00]/50" />
        </div>
        <div className="relative z-10 text-center text-white px-4 max-w-3xl mx-auto">
          <motion.p initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.1 }} className="text-[#D4AF37] text-sm uppercase tracking-widest mb-3 font-medium">ceylongoldenspices.com</motion.p>
          <motion.h1 initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.2 }} style={{ fontFamily: 'Georgia,"Times New Roman",serif' }} className="text-4xl sm:text-5xl lg:text-6xl font-bold leading-tight mb-4">Start Your Ceylon Spice Journey</motion.h1>
          <motion.p initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.35 }} className="text-xl text-[#D4AF37] font-light">Connect with Our Export Team</motion.p>
        </div>
      </section>

      {/* Main Content */}
      <section className="py-16 sm:py-20 bg-[#FFF8E7]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-5 gap-10 xl:gap-14">

            {/* Inquiry Form */}
            <div className="lg:col-span-3">
              <motion.div initial={{ opacity: 0, y: 24 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.15 }} className="bg-white rounded-3xl shadow-2xl p-6 sm:p-8 border border-amber-100">
                <div className="mb-7">
                  <h2 style={{ fontFamily: 'Georgia,"Times New Roman",serif' }} className="text-3xl text-[#7B3F00] mb-2">Export Inquiry Form</h2>
                  <p className="text-gray-600 text-sm leading-relaxed text-justify">Fill out the form below and our export team will get back to you within 24 hours with detailed information and a personalised quotation.</p>
                </div>

                <form onSubmit={handleSubmit} className="space-y-5" noValidate>
                  {/* Honeypot */}
                  <input type="checkbox" name="botcheck" className="hidden" style={{ display: 'none' }} />

                  <FieldWrapper label="Full Name *" error={errors.name}>
                    <div className="relative">
                      <User className="w-4 h-4 text-gray-400 absolute left-3.5 top-1/2 -translate-y-1/2" />
                      <input type="text" name="name" value={formData.name} onChange={handleChange} className={`${inputClass('name', errors)} pl-10`} placeholder="John Smith" autoComplete="name" />
                    </div>
                  </FieldWrapper>

                  <FieldWrapper label="Email Address *" error={errors.email}>
                    <div className="relative">
                      <Mail className="w-4 h-4 text-gray-400 absolute left-3.5 top-1/2 -translate-y-1/2" />
                      <input type="email" name="email" value={formData.email} onChange={handleChange} className={`${inputClass('email', errors)} pl-10`} placeholder="john@company.com" autoComplete="email" />
                    </div>
                  </FieldWrapper>

                  <FieldWrapper label="Phone Number *" error={errors.phone}>
                    <div className="flex gap-2 sm:gap-3">
                      <div className="relative shrink-0">
                        <select name="countryCode" value={formData.countryCode} onChange={handleChange} aria-label="Country dialling code"
                          className="appearance-none h-full py-3 pl-3 pr-7 border-2 border-gray-200 rounded-xl focus:outline-none focus:border-[#D4AF37] transition-colors text-sm font-medium bg-white text-gray-800 cursor-pointer hover:border-gray-300" style={{ minWidth: '5.5rem' }}>
                          {countryCodes.map(item => <option key={item.code} value={item.code}>{item.flag} {item.code}</option>)}
                        </select>
                        <ChevronDown className="w-3.5 h-3.5 text-gray-500 absolute right-2 top-1/2 -translate-y-1/2 pointer-events-none" />
                      </div>
                      <div className="relative flex-1">
                        <Phone className="w-4 h-4 text-gray-400 absolute left-3.5 top-1/2 -translate-y-1/2" />
                        <input type="tel" name="phone" value={formData.phone} onChange={handleChange} maxLength={selectedCC.digits}
                          className={`${inputClass('phone', errors)} pl-10 pr-16`} placeholder={selectedCC.placeholder} autoComplete="tel-national" />
                        <span className="absolute right-3 top-1/2 -translate-y-1/2 text-xs text-gray-400 tabular-nums select-none">{formData.phone.length}/{selectedCC.digits}</span>
                      </div>
                    </div>
                  </FieldWrapper>

                  <FieldWrapper label="Country *" error={errors.country}>
                    <div className="relative">
                      <MapPin className="w-4 h-4 text-gray-400 absolute left-3.5 top-1/2 -translate-y-1/2 z-10" />
                      <select name="country" value={formData.country} onChange={handleChange} className={`${inputClass('country', errors)} pl-10 pr-9 appearance-none cursor-pointer`}>
                        <option value="">Select Your Country</option>
                        {countries.map(c => <option key={c} value={c}>{c}</option>)}
                      </select>
                      <ChevronDown className="w-4 h-4 text-gray-400 absolute right-3 top-1/2 -translate-y-1/2 pointer-events-none" />
                    </div>
                  </FieldWrapper>

                  <FieldWrapper label="Product Category *" error={errors.productCategory}>
                    <div className="relative">
                      <Package className="w-4 h-4 text-gray-400 absolute left-3.5 top-1/2 -translate-y-1/2" />
                      <select name="productCategory" value={formData.productCategory} onChange={handleChange} className={`${inputClass('productCategory', errors)} pl-10 pr-9 appearance-none cursor-pointer`}>
                        <option value="">Select Category</option>
                        {Object.entries(productCategories).map(([key, cat]) => <option key={key} value={key}>{cat.name}</option>)}
                        <option value="multiple">Multiple Categories</option>
                      </select>
                      <ChevronDown className="w-4 h-4 text-gray-400 absolute right-3 top-1/2 -translate-y-1/2 pointer-events-none" />
                    </div>
                  </FieldWrapper>

                  <AnimatePresence>
                    {selectedCategoryData && (
                      <motion.div key="products" initial={{ opacity: 0, height: 0 }} animate={{ opacity: 1, height: 'auto' }} exit={{ opacity: 0, height: 0 }} transition={{ duration: 0.25 }} className="overflow-hidden">
                        <label className="block text-sm font-semibold text-[#7B3F00] mb-2">Select Specific Products <span className="font-normal text-gray-500">(optional)</span></label>
                        <div className="grid grid-cols-1 sm:grid-cols-2 gap-2">
                          {availableProducts.map(product => {
                            const checked = formData.specificProducts.includes(product);
                            return (
                              <button key={product} type="button" onClick={() => toggleProduct(product)}
                                className={`flex items-center gap-2.5 p-3 rounded-xl border-2 text-left text-sm transition-all ${checked ? 'border-[#D4AF37] bg-amber-50 text-[#7B3F00] font-medium' : 'border-gray-200 hover:border-[#D4AF37]/60 text-gray-700'}`} aria-pressed={checked}>
                                <span className={`flex-shrink-0 w-5 h-5 rounded-md border-2 flex items-center justify-center transition-colors ${checked ? 'border-[#D4AF37] bg-[#D4AF37]' : 'border-gray-300'}`}>
                                  {checked && <Check className="w-3 h-3 text-white" strokeWidth={3} />}
                                </span>
                                {product}
                              </button>
                            );
                          })}
                        </div>
                      </motion.div>
                    )}
                  </AnimatePresence>

                  <AnimatePresence>
                    {formData.productCategory && (
                      <motion.div key="quantity" initial={{ opacity: 0, height: 0 }} animate={{ opacity: 1, height: 'auto' }} exit={{ opacity: 0, height: 0 }} transition={{ duration: 0.25 }} className="overflow-hidden">
                        <label className="block text-sm font-semibold text-[#7B3F00] mb-2">Estimated Quantity</label>
                        {formData.productCategory !== 'multiple' && packageSizes.length > 0 ? (
                          <div className="grid grid-cols-2 gap-3">
                            <div className="relative">
                              <select name="packageSize" value={formData.packageSize} onChange={handleChange} className="w-full py-3 pl-4 pr-9 border-2 border-gray-200 rounded-xl focus:outline-none focus:border-[#D4AF37] transition-colors text-sm bg-white text-gray-800 appearance-none cursor-pointer hover:border-gray-300">
                                <option value="">Package Size</option>
                                {packageSizes.map(s => <option key={s} value={s}>{s}</option>)}
                              </select>
                              <ChevronDown className="w-4 h-4 text-gray-400 absolute right-3 top-1/2 -translate-y-1/2 pointer-events-none" />
                            </div>
                            <input type="number" name="quantityValue" value={formData.quantityValue} onChange={handleChange} min="1"
                              className="py-3 px-4 border-2 border-gray-200 rounded-xl focus:outline-none focus:border-[#D4AF37] transition-colors text-sm bg-white text-gray-800 hover:border-gray-300" placeholder="Qty (e.g. 500)" />
                          </div>
                        ) : (
                          <input type="text" name="quantityValue" value={formData.quantityValue} onChange={handleChange}
                            className="w-full py-3 px-4 border-2 border-gray-200 rounded-xl focus:outline-none focus:border-[#D4AF37] transition-colors text-sm bg-white text-gray-800 hover:border-gray-300"
                            placeholder="e.g. 500 kg/month across multiple categories" />
                        )}
                      </motion.div>
                    )}
                  </AnimatePresence>

                  <FieldWrapper label="Message / Specific Requirements">
                    <div className="relative">
                      <MessageSquare className="w-4 h-4 text-gray-400 absolute left-3.5 top-4" />
                      <textarea name="message" value={formData.message} onChange={handleChange} rows={4}
                        className="w-full pl-10 pr-4 py-3 border-2 border-gray-200 rounded-xl focus:outline-none focus:border-[#D4AF37] transition-colors text-sm bg-white text-gray-800 hover:border-gray-300 resize-none"
                        placeholder="Tell us about your requirements, packaging preferences, target markets, certification needs, etc." />
                    </div>
                  </FieldWrapper>

                  <button type="submit" disabled={sending}
                    className="w-full bg-[#D4AF37] hover:bg-[#C09F2F] active:scale-95 disabled:opacity-60 disabled:cursor-not-allowed text-white py-4 rounded-2xl font-bold text-base flex items-center justify-center gap-2.5 transition-all shadow-lg shadow-amber-200 hover:shadow-amber-300 mt-2">
                    {sending ? (
                      <><svg className="animate-spin w-5 h-5" viewBox="0 0 24 24" fill="none"><circle className="opacity-25" cx="12" cy="12" r="10" stroke="white" strokeWidth="4" /><path className="opacity-75" fill="white" d="M4 12a8 8 0 018-8v8H4z" /></svg>Sending…</>
                    ) : (
                      <><Send className="w-5 h-5" />Submit Export Inquiry</>
                    )}
                  </button>

                  <AnimatePresence>
                    {submitted && (
                      <motion.div initial={{ opacity: 0, y: -10, scale: 0.97 }} animate={{ opacity: 1, y: 0, scale: 1 }} exit={{ opacity: 0, scale: 0.97 }} className="bg-emerald-50 border-2 border-emerald-400 text-emerald-800 p-4 rounded-xl text-center text-sm font-medium">
                        ✓ Thank you! Your inquiry has been received. We'll contact you within 24 hours.
                      </motion.div>
                    )}
                  </AnimatePresence>

                  <AnimatePresence>
                    {sendError && (
                      <motion.div initial={{ opacity: 0, y: -10, scale: 0.97 }} animate={{ opacity: 1, y: 0, scale: 1 }} exit={{ opacity: 0, scale: 0.97 }} className="bg-red-50 border-2 border-red-400 text-red-800 p-4 rounded-xl text-center text-sm font-medium">
                        ⚠ {sendError}
                      </motion.div>
                    )}
                  </AnimatePresence>
                </form>
              </motion.div>
            </div>

            {/* Right Column */}
            <div className="lg:col-span-2 flex flex-col gap-6">

              {/* WhatsApp */}
              <motion.div initial={{ opacity: 0, y: 24 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.25 }} className="rounded-3xl shadow-xl overflow-hidden">
                <div className="bg-gradient-to-br from-[#25D366] to-[#1da851] p-6 text-white">
                  <div className="flex items-center gap-3 mb-4">
                    <div className="w-12 h-12 bg-white/20 rounded-2xl flex items-center justify-center shrink-0">
                      <svg className="w-6 h-6" fill="white" viewBox="0 0 24 24"><path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z" /></svg>
                    </div>
                    <div><h3 className="text-lg font-bold">Chat on WhatsApp</h3><p className="text-white/80 text-xs">Get instant responses</p></div>
                  </div>
                  <p className="text-sm text-white/90 mb-3 text-justify leading-relaxed">Prefer WhatsApp? Chat directly with our export team for quick inquiries about products, pricing, and availability.</p>
                  <div className="flex items-center gap-2 mb-4 bg-white/15 rounded-xl px-3 py-2">
                    <WaIcon />
                    <span className="text-sm font-bold tracking-wide">Hotline: +94 71 565 5855</span>
                  </div>
                  <button onClick={handleWhatsAppClick} className="w-full bg-white hover:bg-gray-50 active:scale-95 text-[#25D366] py-3 rounded-2xl font-bold text-sm transition-all shadow-lg flex items-center justify-center gap-2">
                    <WaIcon />Start WhatsApp Chat
                  </button>
                </div>
              </motion.div>

              {/* Contact Information */}
              <motion.div initial={{ opacity: 0, y: 24 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.35 }} className="bg-white rounded-3xl shadow-xl p-6 border border-amber-100">
                <h3 style={{ fontFamily: 'Georgia,"Times New Roman",serif' }} className="text-2xl text-[#7B3F00] mb-5">Contact Information</h3>
                <div className="space-y-5 text-sm">
                  <div className="flex gap-3">
                    <div className="w-9 h-9 bg-amber-50 rounded-xl flex items-center justify-center shrink-0 mt-0.5"><Building className="w-4 h-4 text-[#D4AF37]" /></div>
                    <div>
                      <p className="font-bold text-[#D4AF37] text-xs uppercase tracking-wider mb-1">Address</p>
                      <p className="font-semibold text-gray-800">Buddhi Product</p>
                      <p className="text-gray-500 text-xs italic mb-1">Pure Ceylon Excellence</p>
                      <p className="text-gray-600">392/A, Jayamawatha, Andiambalama,</p>
                      <p className="text-gray-600">Sri Lanka. P.O.C. 11558</p>
                    </div>
                  </div>
                  <hr className="border-gray-100" />
                  <div className="flex gap-3">
                    <div className="w-9 h-9 bg-amber-50 rounded-xl flex items-center justify-center shrink-0 mt-0.5"><Mail className="w-4 h-4 text-[#D4AF37]" /></div>
                    <div>
                      <p className="font-bold text-[#D4AF37] text-xs uppercase tracking-wider mb-1">Email</p>
                      <a href="mailto:info@ceylongoldenspices.com" className="block text-[#D4AF37] hover:text-[#B8860B] underline underline-offset-2 transition-colors">info@ceylongoldenspices.com</a>
                    </div>
                  </div>
                  <div className="flex gap-3">
                    <div className="w-9 h-9 bg-amber-50 rounded-xl flex items-center justify-center shrink-0 mt-0.5"><Phone className="w-4 h-4 text-[#D4AF37]" /></div>
                    <div>
                      <p className="font-bold text-[#D4AF37] text-xs uppercase tracking-wider mb-1">Hotline</p>
                      <a href="https://wa.me/94715655855" target="_blank" rel="noopener noreferrer" className="flex items-center gap-1.5 text-[#D4AF37] hover:text-[#B8860B] transition-colors">
                        +94 71 565 5855<span className="text-[10px] bg-green-600 text-white px-1.5 py-0.5 rounded-full font-semibold">WhatsApp</span>
                      </a>
                      <p className="font-bold text-[#D4AF37] text-xs uppercase tracking-wider mt-2 mb-1">Phone</p>
                      <a href="tel:+94704342820" className="block text-[#D4AF37] hover:text-[#B8860B] transition-colors">+94 70 434 2820</a>
                    </div>
                  </div>
                  <div className="flex gap-3">
                    <div className="w-9 h-9 bg-amber-50 rounded-xl flex items-center justify-center shrink-0 mt-0.5">
                      <svg className="w-4 h-4 text-[#D4AF37]" fill="currentColor" viewBox="0 0 24 24"><path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z" /></svg>
                    </div>
                    <div>
                      <p className="font-bold text-[#D4AF37] text-xs uppercase tracking-wider mb-1">Facebook</p>
                      <a href="https://www.facebook.com/profile.php?id=100090809895923" target="_blank" rel="noopener noreferrer" className="text-[#D4AF37] hover:text-[#B8860B] underline underline-offset-2 transition-colors break-all">Ceylon Golden Spices</a>
                    </div>
                  </div>
                </div>
              </motion.div>

              {/* Business Hours */}
              <motion.div initial={{ opacity: 0, y: 24 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.45 }} className="relative bg-[#7B3F00] rounded-3xl shadow-xl p-6 text-white overflow-hidden">
                <SpicePattern />
                <div className="relative z-10">
                  <h4 className="font-bold text-lg mb-4 text-[#D4AF37]">Business Hours</h4>
                  <div className="space-y-2.5 text-sm">
                    {[{ day: 'Monday – Friday', hours: '8:00 AM – 5:00 PM' }, { day: 'Saturday', hours: '8:00 AM – 1:00 PM' }, { day: 'Sunday', hours: 'Closed' }].map(({ day, hours }) => (
                      <div key={day} className="flex justify-between items-center">
                        <span className="text-white/80">{day}</span>
                        <span className={`font-semibold ${hours === 'Closed' ? 'text-red-300' : 'text-white'}`}>{hours}</span>
                      </div>
                    ))}
                    <p className="text-white/50 text-xs pt-3 border-t border-white/20">Sri Lanka Time (GMT+5:30)</p>
                  </div>
                </div>
              </motion.div>
            </div>
          </div>
        </div>
      </section>

      {/* Live Chat CTA */}
      <section className="py-16 bg-white">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }}>
            <h3 style={{ fontFamily: 'Georgia,"Times New Roman",serif' }} className="text-3xl text-[#7B3F00] mb-3">Prefer Instant Chat?</h3>
            <p className="text-gray-600 mb-6 text-justify sm:text-center leading-relaxed">Our chatbot is available 24/7 for quick questions about products, packaging, certifications, and export information.</p>
            <button onClick={onOpenChatbot} className="bg-[#D4AF37] hover:bg-[#C09F2F] active:scale-95 text-white px-10 py-4 rounded-full font-bold text-base transition-all shadow-lg shadow-amber-200 hover:shadow-amber-300 inline-flex items-center gap-2">
              <MessageSquare className="w-5 h-5" />Start Live Chat
            </button>
          </motion.div>
        </div>
      </section>
    </div>
  );
}