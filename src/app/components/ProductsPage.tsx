import { useState } from 'react';
import { Play, Search, Filter } from 'lucide-react';
import { motion } from 'motion/react';

interface Product {
  id: number;
  name: string;
  category: string;
  description: string;
  image: string;
  videoThumb: string;
  sizes: string[];
  badge?: string;
}

export function ProductsPage() {
  const [selectedCategory, setSelectedCategory] = useState<string>('all');
  const [hoveredProduct, setHoveredProduct] = useState<number | null>(null);
  const [searchQuery, setSearchQuery] = useState('');

  const products: Product[] = [
    // Ceylon Golden Spices
    { id: 1, name: 'Pure Ceylon Whole Cinnamon', category: 'spices', description: 'Premium authentic Ceylon cinnamon quills', image: 'https://images.unsplash.com/photo-1682482002999-654860dfcb24?w=400', videoThumb: 'https://images.unsplash.com/photo-1640220023829-ee908684d565?w=400', sizes: ['25g', '50g', '75g', '100g'], badge: 'Bestseller' },
    { id: 2, name: 'Ceylon Cinnamon Powder', category: 'spices', description: 'Finely ground pure Ceylon cinnamon', image: 'https://images.unsplash.com/photo-1682482002999-654860dfcb24?w=400', videoThumb: 'https://images.unsplash.com/photo-1631021967400-fbd3f722101c?w=400', sizes: ['25g', '50g', '100g'] },
    { id: 3, name: 'Pure Ceylon Black Pepper Whole', category: 'spices', description: 'Premium whole black peppercorns', image: 'https://images.unsplash.com/photo-1649951806971-ad0e00408773?w=400', videoThumb: 'https://images.unsplash.com/photo-1631021967400-fbd3f722101c?w=400', sizes: ['25g', '50g', '100g'] },
    { id: 4, name: 'Ceylon Black Pepper Powder', category: 'spices', description: 'Freshly ground black pepper', image: 'https://images.unsplash.com/photo-1649951806971-ad0e00408773?w=400', videoThumb: 'https://images.unsplash.com/photo-1640220023829-ee908684d565?w=400', sizes: ['25g', '50g', '100g'] },
    { id: 5, name: 'Ceylon Cloves Whole', category: 'spices', description: 'Aromatic whole cloves', image: 'https://images.unsplash.com/photo-1623307645573-7f856d37f470?w=400', videoThumb: 'https://images.unsplash.com/photo-1631021967400-fbd3f722101c?w=400', sizes: ['25g', '50g', '75g'] },
    { id: 6, name: 'Ceylon Green Cardamom', category: 'spices', description: 'Premium green cardamom pods', image: 'https://images.unsplash.com/photo-1763558049571-a6d12a85472e?w=400', videoThumb: 'https://images.unsplash.com/photo-1640220023829-ee908684d565?w=400', sizes: ['25g', '50g', '75g'], badge: 'Premium' },
    { id: 7, name: 'Ceylon Nutmeg & Mace', category: 'spices', description: 'Whole nutmeg with mace', image: 'https://images.unsplash.com/photo-1640017679257-187c9303c7c2?w=400', videoThumb: 'https://images.unsplash.com/photo-1631021967400-fbd3f722101c?w=400', sizes: ['25g', '50g'] },
    { id: 8, name: 'Ceylon Curry Powder', category: 'spices', description: 'Traditional blend of spices', image: 'https://images.unsplash.com/photo-1631021967400-fbd3f722101c?w=400', videoThumb: 'https://images.unsplash.com/photo-1640220023829-ee908684d565?w=400', sizes: ['50g', '100g'] },
    
    // Ceylon Golden Herbal
    { id: 9, name: 'Organic Moringa Powder', category: 'herbal', description: 'Pure organic moringa leaf powder', image: 'https://images.unsplash.com/photo-1656850815262-2eed4ed82625?w=400', videoThumb: 'https://images.unsplash.com/photo-1640220023829-ee908684d565?w=400', sizes: ['50g', '100g'], badge: 'Organic' },
    { id: 10, name: 'Dried Curry Leaves', category: 'herbal', description: 'Premium dried curry leaves', image: 'https://images.unsplash.com/photo-1656850815262-2eed4ed82625?w=400', videoThumb: 'https://images.unsplash.com/photo-1631021967400-fbd3f722101c?w=400', sizes: ['25g', '50g'] },
    { id: 11, name: 'Ceylon Coffee Powder', category: 'herbal', description: 'Pure Ceylon coffee blend', image: 'https://images.unsplash.com/photo-1656850815262-2eed4ed82625?w=400', videoThumb: 'https://images.unsplash.com/photo-1640220023829-ee908684d565?w=400', sizes: ['100g', '200g'] },
    { id: 12, name: 'Turmeric Powder', category: 'herbal', description: 'Organic turmeric powder', image: 'https://images.unsplash.com/photo-1631021967400-fbd3f722101c?w=400', videoThumb: 'https://images.unsplash.com/photo-1640220023829-ee908684d565?w=400', sizes: ['50g', '100g'] },
    
    // Pure Ceylon Tea
    { id: 13, name: 'Pure Ceylon Black Tea', category: 'tea', description: 'Premium black tea leaves', image: 'https://images.unsplash.com/photo-1722653510627-29f99f804efd?w=400', videoThumb: 'https://images.unsplash.com/photo-1649853761620-c6588c980545?w=400', sizes: ['50g', '100g'], badge: 'Premium' },
    { id: 14, name: 'Ceylon Green Tea', category: 'tea', description: 'Organic green tea', image: 'https://images.unsplash.com/photo-1722653510627-29f99f804efd?w=400', videoThumb: 'https://images.unsplash.com/photo-1640220023829-ee908684d565?w=400', sizes: ['50g', '100g'] },
    { id: 15, name: 'Ceylon White Tea', category: 'tea', description: 'Rare white tea variety', image: 'https://images.unsplash.com/photo-1722653510627-29f99f804efd?w=400', videoThumb: 'https://images.unsplash.com/photo-1649853761620-c6588c980545?w=400', sizes: ['25g', '50g'], badge: 'Rare' },
    { id: 16, name: 'Ceylon Herbal Tea Blend', category: 'tea', description: 'Natural herbal infusion', image: 'https://images.unsplash.com/photo-1722653510627-29f99f804efd?w=400', videoThumb: 'https://images.unsplash.com/photo-1640220023829-ee908684d565?w=400', sizes: ['50g', '100g'] },
    
    // Dehydrated Fruits
    { id: 17, name: 'Dehydrated Mango', category: 'fruits', description: 'Sweet dried mango slices', image: 'https://images.unsplash.com/photo-1633706974456-f24d52958708?w=400', videoThumb: 'https://images.unsplash.com/photo-1698474922963-a091a8fb4e95?w=400', sizes: ['50g', '100g'] },
    { id: 18, name: 'Dehydrated Pineapple', category: 'fruits', description: 'Tangy pineapple rings', image: 'https://images.unsplash.com/photo-1633706974456-f24d52958708?w=400', videoThumb: 'https://images.unsplash.com/photo-1698474922963-a091a8fb4e95?w=400', sizes: ['50g', '100g'] },
    { id: 19, name: 'Dehydrated Papaya', category: 'fruits', description: 'Tropical papaya chunks', image: 'https://images.unsplash.com/photo-1633706974456-f24d52958708?w=400', videoThumb: 'https://images.unsplash.com/photo-1698474922963-a091a8fb4e95?w=400', sizes: ['50g', '100g'] },
    { id: 20, name: 'Premium Cashew Nuts', category: 'fruits', description: 'Roasted cashew nuts', image: 'https://images.unsplash.com/photo-1633706974456-f24d52958708?w=400', videoThumb: 'https://images.unsplash.com/photo-1698474922963-a091a8fb4e95?w=400', sizes: ['100g', '200g'], badge: 'Premium' }
  ];

  const categories = [
    { value: 'all', label: 'All Products', count: products.length },
    { value: 'spices', label: 'Ceylon Golden Spices', count: products.filter(p => p.category === 'spices').length },
    { value: 'herbal', label: 'Ceylon Golden Herbal', count: products.filter(p => p.category === 'herbal').length },
    { value: 'tea', label: 'Pure Ceylon Tea', count: products.filter(p => p.category === 'tea').length },
    { value: 'fruits', label: 'Dehydrated Fruits & Cashew', count: products.filter(p => p.category === 'fruits').length }
  ];

  const filteredProducts = products.filter(product => {
    const matchesCategory = selectedCategory === 'all' || product.category === selectedCategory;
    const matchesSearch = product.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
                         product.description.toLowerCase().includes(searchQuery.toLowerCase());
    return matchesCategory && matchesSearch;
  });

  return (
    <div className="min-h-screen bg-[#FFF8E7] pt-24 pb-16">
      {/* Header */}
      <div className="bg-white shadow-md mb-8">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
          <h1 className="text-5xl mb-4 text-[#7B3F00]" style={{ fontFamily: 'Playfair Display, serif' }}>
            Premium Ceylon Product Range
          </h1>
          <p className="text-xl text-gray-700">Every Product Tells a Story of Heritage and Quality</p>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col lg:flex-row gap-8">
          {/* Left Sidebar - Filters */}
          <aside className="lg:w-1/4">
            <div className="bg-white rounded-lg shadow-md p-6 sticky top-28">
              <div className="flex items-center gap-2 mb-6">
                <Filter className="w-5 h-5 text-[#D4AF37]" />
                <h3 className="text-lg font-bold text-[#7B3F00]">Filter Products</h3>
              </div>

              {/* Search */}
              <div className="mb-6">
                <label className="text-sm font-semibold text-[#7B3F00] mb-2 block">Search</label>
                <div className="relative">
                  <input
                    type="text"
                    value={searchQuery}
                    onChange={(e) => setSearchQuery(e.target.value)}
                    placeholder="Search products..."
                    className="w-full px-4 py-2 pl-10 border border-gray-300 rounded-lg focus:outline-none focus:border-[#D4AF37]"
                  />
                  <Search className="w-4 h-4 text-gray-400 absolute left-3 top-1/2 transform -translate-y-1/2" />
                </div>
              </div>

              {/* Categories */}
              <div>
                <label className="text-sm font-semibold text-[#7B3F00] mb-3 block">Categories</label>
                <div className="space-y-2">
                  {categories.map((cat) => (
                    <button
                      key={cat.value}
                      onClick={() => setSelectedCategory(cat.value)}
                      className={`w-full flex items-center justify-between px-4 py-3 rounded-lg transition-all text-left ${
                        selectedCategory === cat.value
                          ? 'bg-[#D4AF37] text-white'
                          : 'bg-gray-50 text-[#7B3F00] hover:bg-[#FFF8E7]'
                      }`}
                    >
                      <span className="text-sm">{cat.label}</span>
                      <span className={`text-xs px-2 py-1 rounded-full ${
                        selectedCategory === cat.value ? 'bg-white/20' : 'bg-[#D4AF37]/20'
                      }`}>
                        {cat.count}
                      </span>
                    </button>
                  ))}
                </div>
              </div>

              {/* Info Box */}
              <div className="mt-6 p-4 bg-[#FFF8E7] rounded-lg border border-[#D4AF37]/20">
                <p className="text-sm text-[#7B3F00]">
                  <strong>Export Ready:</strong> All products available in bulk quantities with complete documentation.
                </p>
              </div>
            </div>
          </aside>

          {/* Main Product Grid */}
          <main className="lg:w-3/4">
            <div className="mb-6 flex items-center justify-between">
              <p className="text-gray-700">
                Showing <span className="font-semibold text-[#D4AF37]">{filteredProducts.length}</span> products
              </p>
            </div>

            <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
              {filteredProducts.map((product) => (
                <motion.div
                  key={product.id}
                  initial={{ opacity: 0, scale: 0.95 }}
                  animate={{ opacity: 1, scale: 1 }}
                  onHoverStart={() => setHoveredProduct(product.id)}
                  onHoverEnd={() => setHoveredProduct(null)}
                  className="bg-white rounded-xl overflow-hidden shadow-md hover:shadow-2xl transition-all duration-300 group"
                >
                  {/* Product Image/Video */}
                  <div className="relative h-64 overflow-hidden">
                    <img
                      src={hoveredProduct === product.id ? product.videoThumb : product.image}
                      alt={product.name}
                      className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                    />
                    
                    {/* Badge */}
                    {product.badge && (
                      <div className="absolute top-3 left-3 bg-[#D4AF37] text-white px-3 py-1 rounded-full text-xs font-semibold">
                        {product.badge}
                      </div>
                    )}
                    
                    {/* Video Badge */}
                    <div className="absolute top-3 right-3 bg-black/70 text-white px-2 py-1 rounded-full text-xs flex items-center gap-1">
                      <Play className="w-3 h-3" fill="white" />
                      Video
                    </div>

                    {/* Hover Overlay */}
                    {hoveredProduct === product.id && (
                      <motion.div
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        className="absolute inset-0 bg-black/40 flex items-center justify-center"
                      >
                        <div className="w-16 h-16 bg-[#D4AF37] rounded-full flex items-center justify-center">
                          <Play className="w-8 h-8 text-white ml-1" fill="white" />
                        </div>
                      </motion.div>
                    )}
                  </div>

                  {/* Product Info */}
                  <div className="p-5">
                    <h3 className="text-lg font-bold text-[#7B3F00] mb-2 group-hover:text-[#D4AF37] transition-colors">
                      {product.name}
                    </h3>
                    <p className="text-sm text-gray-600 mb-4">{product.description}</p>

                    {/* Available Sizes */}
                    <div className="mb-4">
                      <p className="text-xs text-gray-500 mb-2">Available Sizes:</p>
                      <div className="flex flex-wrap gap-2">
                        {product.sizes.map((size) => (
                          <span key={size} className="text-xs bg-[#FFF8E7] text-[#7B3F00] px-3 py-1 rounded-full border border-[#D4AF37]/30">
                            ✓ {size}
                          </span>
                        ))}
                      </div>
                    </div>

                    {/* Buttons */}
                    <div className="flex gap-2">
                      <button className="flex-1 bg-[#D4AF37] hover:bg-[#C09F2F] text-white px-4 py-2 rounded-lg text-sm font-semibold transition-all">
                        Request Quote
                      </button>
                      <button className="px-4 py-2 border-2 border-[#D4AF37] text-[#D4AF37] hover:bg-[#D4AF37] hover:text-white rounded-lg text-sm font-semibold transition-all">
                        Details
                      </button>
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>

            {filteredProducts.length === 0 && (
              <div className="text-center py-16">
                <div className="text-6xl mb-4">🔍</div>
                <h3 className="text-2xl text-[#7B3F00] mb-2">No products found</h3>
                <p className="text-gray-600">Try adjusting your search or filters</p>
              </div>
            )}
          </main>
        </div>
      </div>
    </div>
  );
}
