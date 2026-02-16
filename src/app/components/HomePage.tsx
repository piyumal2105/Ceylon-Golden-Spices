import { motion } from 'motion/react';
import { VideoPlayer } from './VideoPlayer';
import { ChevronDown, Leaf, Award, Globe, Package, Play } from 'lucide-react';
import { useState } from 'react';

export function HomePage() {
  const [hoveredProduct, setHoveredProduct] = useState<number | null>(null);

  const products = [
    {
      title: 'Ceylon Golden Spices',
      count: '8 Premium Varieties',
      image: 'https://images.unsplash.com/photo-1682482002999-654860dfcb24?w=600',
      hoverVideo: 'https://images.unsplash.com/photo-1631021967400-fbd3f722101c?w=600',
      icons: ['Cinnamon', 'Clove', 'Pepper', 'Cardamom']
    },
    {
      title: 'Ceylon Golden Herbal',
      count: '5 Wellness Essentials',
      image: 'https://images.unsplash.com/photo-1656850815262-2eed4ed82625?w=600',
      hoverVideo: 'https://images.unsplash.com/photo-1640220023829-ee908684d565?w=600',
      icons: ['Moringa', 'Curry Leaves', 'Coffee']
    },
    {
      title: 'Pure Ceylon Tea',
      count: '5 Exquisite Blends',
      image: 'https://images.unsplash.com/photo-1722653510627-29f99f804efd?w=600',
      hoverVideo: 'https://images.unsplash.com/photo-1649853761620-c6588c980545?w=600',
      icons: ['Black Tea', 'Green Tea', 'Herbal']
    },
    {
      title: 'Dehydrated Tropical Fruits',
      count: '5 Exotic Flavors + Cashews',
      image: 'https://images.unsplash.com/photo-1633706974456-f24d52958708?w=600',
      hoverVideo: 'https://images.unsplash.com/photo-1698474922963-a091a8fb4e95?w=600',
      icons: ['Mango', 'Pineapple', 'Papaya']
    }
  ];

  const usps = [
    {
      title: 'Pure Ceylon Origin',
      description: 'Sourced directly from authentic Sri Lankan estates',
      video: 'https://images.unsplash.com/photo-1649853761620-c6588c980545?w=800',
      icon: Leaf
    },
    {
      title: 'Export Quality Standards',
      description: 'Working towards ISO 22000 & HACCP certification',
      video: 'https://images.unsplash.com/photo-1666039438492-02a95ecd70c3?w=800',
      icon: Award
    },
    {
      title: 'Global Partnership Ready',
      description: 'Complete export documentation and worldwide shipping',
      video: 'https://images.unsplash.com/photo-1739204618173-3e89def7140f?w=800',
      icon: Globe
    }
  ];

  return (
    <div className="min-h-screen">
      {/* Hero Section with Video Background */}
      <section className="relative h-screen flex items-center justify-center overflow-hidden">
        {/* Video Background */}
        <div className="absolute inset-0">
          <img
            src="https://images.unsplash.com/photo-1640220023829-ee908684d565?w=1920"
            alt="Spice plantation"
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-b from-black/50 via-black/40 to-black/60"></div>
        </div>

        {/* Hero Content */}
        <div className="relative z-10 text-center text-white px-4 max-w-5xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1 }}
          >
            <h1 className="text-6xl md:text-7xl lg:text-8xl mb-6" style={{ fontFamily: 'Playfair Display, serif' }}>
              Ceylon Golden Spices
            </h1>
            <p className="text-xl md:text-2xl mb-3 text-[#D4AF37]">
              Authentic Ceylon Heritage | Export Excellence Since Ages
            </p>
            <p className="text-lg md:text-xl mb-8 text-gray-200">
              Nature's Gold from the Pearl of the Indian Ocean
            </p>
            <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
              <button className="bg-[#D4AF37] hover:bg-[#C09F2F] text-white px-8 py-4 rounded-full text-lg font-semibold transition-all hover:scale-105 shadow-2xl">
                Explore Our Collection
              </button>
              <button className="border-2 border-white text-white hover:bg-white hover:text-[#7B3F00] px-8 py-4 rounded-full text-lg font-semibold transition-all hover:scale-105">
                Request Export Quote
              </button>
            </div>
          </motion.div>
        </div>

        {/* Scroll Indicator */}
        <motion.div
          animate={{ y: [0, 10, 0] }}
          transition={{ repeat: Infinity, duration: 2 }}
          className="absolute bottom-8 left-1/2 transform -translate-x-1/2 text-white"
        >
          <ChevronDown className="w-8 h-8" />
        </motion.div>

        {/* Mute/Unmute Button */}
        <button className="absolute bottom-8 right-8 bg-black/50 hover:bg-black/70 text-white px-4 py-2 rounded-full text-sm transition-all">
          🔇 Tap to unmute
        </button>
      </section>

      {/* Heritage Statement with Video */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-5 gap-12 items-center">
            {/* Video Section */}
            <div className="md:col-span-3">
              <VideoPlayer
                thumbnail="https://images.unsplash.com/photo-1640220023829-ee908684d565?w=1200"
                title="2,000 Years of Ceylon Spice Legacy"
                duration="12:45"
                className="h-[500px]"
              />
            </div>

            {/* Text Section */}
            <div className="md:col-span-2">
              <div className="border-l-4 border-[#D4AF37] pl-6">
                <h2 className="text-4xl mb-6 text-[#7B3F00]" style={{ fontFamily: 'Playfair Display, serif' }}>
                  The Spice Route Heritage
                </h2>
                <p className="text-gray-700 mb-6 leading-relaxed">
                  For over 2,000 years, Ceylon (Sri Lanka) has been the world's most coveted source of authentic spices.
                  Our spices carry the legacy of ancient spice traders who traversed oceans to bring the treasures of our island to the world.
                </p>
                <p className="text-gray-700 mb-8 leading-relaxed">
                  Today, we continue this proud tradition, combining time-honored cultivation methods with modern quality standards
                  to deliver premium Ceylon spices to discerning global buyers.
                </p>
                <button className="flex items-center gap-2 text-[#D4AF37] hover:text-[#C09F2F] font-semibold transition-colors">
                  <Play className="w-5 h-5" />
                  Watch Our Story
                </button>
              </div>

              {/* Decorative Element */}
              <div className="mt-8 flex items-center gap-3">
                <div className="text-[#D4AF37] text-3xl">✿</div>
                <div className="text-[#D4AF37] text-2xl">❀</div>
                <div className="text-[#D4AF37] text-3xl">✺</div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Product Universe */}
      <section className="py-20 bg-[#FFF8E7]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-5xl mb-4 text-[#7B3F00]" style={{ fontFamily: 'Playfair Display, serif' }}>
              Our Premium Collection
            </h2>
            <p className="text-xl text-gray-700">Authentic Ceylon products for global markets</p>
          </div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-8">
            {products.map((product, index) => (
              <motion.div
                key={index}
                onHoverStart={() => setHoveredProduct(index)}
                onHoverEnd={() => setHoveredProduct(null)}
                className="bg-white rounded-2xl overflow-hidden shadow-xl hover:shadow-2xl transition-all duration-300 group cursor-pointer"
              >
                {/* Product Image/Video */}
                <div className="relative h-64 overflow-hidden">
                  <img
                    src={hoveredProduct === index ? product.hoverVideo : product.image}
                    alt={product.title}
                    className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent"></div>

                  {/* Video Badge */}
                  {hoveredProduct === index && (
                    <motion.div
                      initial={{ opacity: 0 }}
                      animate={{ opacity: 1 }}
                      className="absolute top-4 right-4 bg-[#D4AF37] text-white px-3 py-1 rounded-full text-xs flex items-center gap-1"
                    >
                      <Play className="w-3 h-3" fill="white" />
                      Preview
                    </motion.div>
                  )}
                </div>

                {/* Content */}
                <div className="p-6">
                  <h3 className="text-2xl mb-2 text-[#7B3F00]" style={{ fontFamily: 'Playfair Display, serif' }}>
                    {product.title}
                  </h3>
                  <p className="text-[#D4AF37] font-semibold mb-4">{product.count}</p>

                  {/* Icons */}
                  <div className="flex flex-wrap gap-2 mb-4">
                    {product.icons.map((icon, i) => (
                      <span key={i} className="text-xs bg-[#FFF8E7] text-[#7B3F00] px-3 py-1 rounded-full">
                        {icon}
                      </span>
                    ))}
                  </div>

                  <button className="flex items-center gap-2 text-[#D4AF37] hover:text-[#C09F2F] font-semibold transition-colors group-hover:translate-x-2 transition-transform">
                    Discover More
                    <span>→</span>
                  </button>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Process Video Showcase */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-5xl mb-4 text-[#7B3F00]" style={{ fontFamily: 'Playfair Display, serif' }}>
              From Garden to Global Markets
            </h2>
            <p className="text-xl text-gray-700">Experience our complete quality journey</p>
          </div>

          {/* Large Video Player */}
          <div className="max-w-6xl mx-auto">
            <VideoPlayer
              thumbnail="https://images.unsplash.com/photo-1698474922963-a091a8fb4e95?w=1600"
              title="Complete Production Journey: 60-Second Tour"
              duration="1:30"
              className="h-[600px]"
            />

            {/* Process Timeline */}
            <div className="mt-8 grid grid-cols-2 md:grid-cols-6 gap-4">
              {[
                { time: '0:00', label: 'Cultivation' },
                { time: '0:15', label: 'Harvesting' },
                { time: '0:30', label: 'Quality Check' },
                { time: '0:45', label: 'Processing' },
                { time: '1:00', label: 'Packaging' },
                { time: '1:15', label: 'Export' }
              ].map((stage, index) => (
                <button
                  key={index}
                  className="bg-[#FFF8E7] hover:bg-[#D4AF37] hover:text-white p-3 rounded-lg transition-all text-center group"
                >
                  <div className="text-sm font-semibold text-[#D4AF37] group-hover:text-white">{stage.time}</div>
                  <div className="text-xs text-[#7B3F00] group-hover:text-white">{stage.label}</div>
                </button>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Why Golden Spices - USP Section */}
      <section className="py-20 bg-[#0A2647] text-white relative overflow-hidden">
        {/* Background Pattern */}
        <div className="absolute inset-0 opacity-5">
          <div className="grid grid-cols-8 gap-8 transform rotate-12">
            {[...Array(64)].map((_, i) => (
              <div key={i} className="text-[#D4AF37] text-4xl">✿</div>
            ))}
          </div>
        </div>

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="text-center mb-16">
            <h2 className="text-5xl mb-4 text-[#D4AF37]" style={{ fontFamily: 'Playfair Display, serif' }}>
              Why Golden Spices?
            </h2>
            <p className="text-xl text-gray-300">Your trusted partner for authentic Ceylon spices</p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {usps.map((usp, index) => {
              const Icon = usp.icon;
              return (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ delay: index * 0.2 }}
                  viewport={{ once: true }}
                  className="relative group"
                >
                  {/* Video Background */}
                  <div className="absolute inset-0 rounded-2xl overflow-hidden opacity-20 group-hover:opacity-30 transition-opacity">
                    <img src={usp.video} alt="" className="w-full h-full object-cover" />
                  </div>

                  {/* Content */}
                  <div className="relative bg-white/10 backdrop-blur-sm p-8 rounded-2xl border border-[#D4AF37]/30 hover:border-[#D4AF37] transition-all">
                    <div className="w-16 h-16 bg-[#D4AF37] rounded-full flex items-center justify-center mb-6 group-hover:scale-110 transition-transform">
                      <Icon className="w-8 h-8 text-white" />
                    </div>
                    <h3 className="text-2xl font-bold mb-4 text-[#D4AF37]">{usp.title}</h3>
                    <p className="text-gray-300 leading-relaxed">{usp.description}</p>
                  </div>
                </motion.div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Quality Promise Banner */}
      <section className="py-12 bg-gradient-to-r from-[#D4AF37] to-[#C09F2F] text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h3 className="text-3xl md:text-4xl mb-6" style={{ fontFamily: 'Playfair Display, serif' }}>
              From Sri Lanka's Ancient Spice Gardens to Your Global Markets
            </h3>
            <div className="flex flex-wrap justify-center gap-12">
              <div>
                <div className="text-4xl font-bold mb-2">25+</div>
                <div className="text-sm">Years Experience</div>
              </div>
              <div>
                <div className="text-4xl font-bold mb-2">50+</div>
                <div className="text-sm">Countries Served</div>
              </div>
              <div>
                <div className="text-4xl font-bold mb-2">27</div>
                <div className="text-sm">Premium Products</div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Video Gallery Section */}
      <section className="py-20 bg-[#FFF8E7]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-5xl mb-4 text-[#7B3F00]" style={{ fontFamily: 'Playfair Display, serif' }}>
              Behind the Scenes
            </h2>
            <p className="text-xl text-gray-700">Explore our heritage and process</p>
          </div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {[
              { thumb: 'https://images.unsplash.com/photo-1649853761620-c6588c980545?w=400', title: 'Plantation Tours', duration: '3:20' },
              { thumb: 'https://images.unsplash.com/photo-1640220023829-ee908684d565?w=400', title: 'Harvesting Process', duration: '2:45' },
              { thumb: 'https://images.unsplash.com/photo-1666039438492-02a95ecd70c3?w=400', title: 'Quality Control', duration: '4:15' },
              { thumb: 'https://images.unsplash.com/photo-1698474922963-a091a8fb4e95?w=400', title: 'Factory Tour', duration: '5:30' }
            ].map((video, index) => (
              <div key={index} className="group cursor-pointer">
                <VideoPlayer
                  thumbnail={video.thumb}
                  title={video.title}
                  duration={video.duration}
                  className="h-48"
                />
                <h4 className="mt-3 text-lg font-semibold text-[#7B3F00] group-hover:text-[#D4AF37] transition-colors">
                  {video.title}
                </h4>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <Package className="w-16 h-16 text-[#D4AF37] mx-auto mb-6" />
            <h2 className="text-4xl md:text-5xl mb-6 text-[#7B3F00]" style={{ fontFamily: 'Playfair Display, serif' }}>
              Ready to Experience Authentic Ceylon Spices?
            </h2>
            <p className="text-xl text-gray-700 mb-8">
              Connect with our export team to discuss your requirements
            </p>
            <button className="bg-[#D4AF37] hover:bg-[#C09F2F] text-white px-10 py-4 rounded-full text-lg font-semibold transition-all hover:scale-105 shadow-xl">
              Request Export Quote Now
            </button>
          </motion.div>
        </div>
      </section>
    </div>
  );
}
