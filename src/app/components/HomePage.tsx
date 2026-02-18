import { motion, useInView } from 'motion/react';
import { ChevronDown, Leaf, Award, Globe, Package, ChevronLeft, ChevronRight } from 'lucide-react';
import { useState, useEffect, useRef } from 'react';

//Images imports
import Image01 from "../components/assets/Home/image01.jpg";
import Image02 from "../components/assets/Home/image02.jpg";
import Image03 from "../components/assets/Home/image03.jpg";
import Image04 from "../components/assets/Home/image04.jpg";
import Image05 from "../components/assets/Home/image05.jpg";
import Image06 from "../components/assets/Home/image06.jpg";
import Image07 from "../components/assets/Home/image07.jpg";
import Image08 from "../components/assets/Home/image08.jpg";
import Image09 from "../components/assets/Home/image09.jpg";
import Image10 from "../components/assets/Home/image10.jpg";

import Video01 from "../components/assets/Home/video01.mp4";
import Video02 from "../components/assets/Home/video02.mp4";

interface HomePageProps {
  onNavigate: (page: string) => void;
}
interface CounterProps {
  target: number;
  suffix?: string;
  duration?: number; // ms
}

function AnimatedCounter({ target, suffix = '', duration = 2000 }: CounterProps) {
  const [count, setCount] = useState(0);
  const ref = useRef<HTMLDivElement>(null);
  const isInView = useInView(ref, { once: true, margin: '-50px' });

  useEffect(() => {
    if (!isInView) return;

    let startTime: number | null = null;
    const startValue = 0;

    const step = (timestamp: number) => {
      if (!startTime) startTime = timestamp;
      const progress = Math.min((timestamp - startTime) / duration, 1);
      // Ease-out cubic
      const eased = 1 - Math.pow(1 - progress, 3);
      setCount(Math.floor(eased * (target - startValue) + startValue));
      if (progress < 1) requestAnimationFrame(step);
      else setCount(target);
    };

    requestAnimationFrame(step);
  }, [isInView, target, duration]);

  return (
    <div ref={ref} className="text-3xl sm:text-4xl font-bold mb-2">
      {count}{suffix}
    </div>
  );
}
const STATS = [
  { value: 25, suffix: '+', label: 'Years Experience' },
  { value: 50, suffix: '+', label: 'Countries Served' },
  { value: 25, suffix: '+', label: 'Premium Products' },
];

export function HomePage({ onNavigate }: HomePageProps) {
  const [currentSlide, setCurrentSlide] = useState(0);

  const products = [
    {
      title: 'Ceylon Golden Spices',
      count: '8 Premium Varieties',
      image: { src: Image02, alt: 'Ceylon Golden Spices' },
      icons: ['Cinnamon', 'Clove', 'Pepper', 'Cardamom']
    },
    {
      title: 'Ceylon Golden Herbal',
      count: '5 Wellness Essentials',
      image: { src: Image03, alt: 'Ceylon Golden Herbal' },
      icons: ['Moringa', 'Curry Leaves', 'Coffee']
    },
    {
      title: 'Pure Ceylon Tea',
      count: '5 Exquisite Blends',
      image: { src: Image04, alt: 'Pure Ceylon Tea' },
      icons: ['Black Tea', 'Green Tea', 'Herbal']
    },
    {
      title: 'Dehydrated Fruits',
      count: '5 Exotic Flavors + Cashews',
      image: { src: Image05, alt: 'Dehydrated Fruits' },
      icons: ['Mango', 'Pineapple', 'Papaya']
    }
  ];

  const carouselSlides = [
    {
      image: { src: Image06, alt: 'Spice cultivation in traditional Ceylon gardens' },
      title: 'Cultivation',
      description: 'Spice Cultivation In Traditional Ceylon Gardens'
    },
    {
      image: { src: Image07, alt: 'Harvesting spices in Ceylon' },
      title: 'Harvesting',
      description: 'Hand Picking Premium Quality Spices'
    },
    {
      image: { src: Image08, alt: 'Traditional drying and processing of spices in Ceylon' },
      title: 'Processing',
      description: 'Traditional Drying And Processing Methods'
    },
    {
      image: { src: Image09, alt: 'Quality control and grading of Ceylon spices' },
      title: 'Quality Control',
      description: 'Rigorous Quality Inspection And Grading'
    },
    {
      image: { src: Image10, alt: 'Export packaging of Ceylon spices ready for global markets' },
      title: 'Export Ready',
      description: 'Premium Packaging For Global Markets'
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

  const nextSlide = () => {
    setCurrentSlide((prev) => (prev + 1) % carouselSlides.length);
  };

  const prevSlide = () => {
    setCurrentSlide((prev) => (prev - 1 + carouselSlides.length) % carouselSlides.length);
  };

  // Auto-play carousel
  useEffect(() => {
    const interval = setInterval(() => {
      nextSlide();
    }, 5000);

    return () => clearInterval(interval);
  }, [currentSlide]);

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="relative h-screen flex items-center justify-center overflow-hidden">

        <div className="absolute inset-0">
          <video
            autoPlay
            loop
            muted
            playsInline
            className="w-full h-full object-cover"
            poster="https://images.unsplash.com/photo-1640220023829-ee908684d565?w=1920"
          >
            {/* Replace src with your imported video or URL */}
            <source src={Video01} type="video/mp4" />

            {/* Fallback if browser can't play video */}
            <img
              src="https://images.unsplash.com/photo-1640220023829-ee908684d565?w=1920"
              alt="Spice plantation"
              className="w-full h-full object-cover"
            />
          </video>

          {/* Overlay — unchanged */}
          <div className="absolute inset-0 bg-gradient-to-b from-black/50 via-black/40 to-black/60"></div>
        </div>

        <div className="relative z-10 text-center text-white px-4 max-w-5xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1 }}
          >
            <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-8xl mb-4 sm:mb-6 leading-tight" style={{ fontFamily: 'Playfair Display, serif' }}>
              Ceylon Golden Spices
            </h1>
            <p className="text-lg sm:text-xl md:text-2xl mb-2 sm:mb-3 text-[#D4AF37]">
              Authentic Ceylon Heritage | Export Excellence Since Ages
            </p>
            <p className="text-base sm:text-lg md:text-xl mb-6 sm:mb-8 text-gray-200">
              Nature's Gold from the Pearl of the Indian Ocean
            </p>
            <div className="flex flex-col sm:flex-row items-center justify-center gap-3 sm:gap-4">
              <button
                onClick={() => onNavigate('products')}
                className="w-full sm:w-auto bg-[#D4AF37] hover:bg-[#C09F2F] text-white px-6 sm:px-8 py-3 sm:py-4 rounded-full text-base sm:text-lg font-semibold transition-all hover:scale-105 shadow-2xl"
              >
                Explore Our Collection
              </button>
              <button
                onClick={() => onNavigate('contact')}
                className="w-full sm:w-auto border-2 border-white text-white hover:bg-white hover:text-[#7B3F00] px-6 sm:px-8 py-3 sm:py-4 rounded-full text-base sm:text-lg font-semibold transition-all hover:scale-105"
              >
                Request Export Quote
              </button>
            </div>
          </motion.div>
        </div>

        <motion.div
          animate={{ y: [0, 10, 0] }}
          transition={{ repeat: Infinity, duration: 2 }}
          className="absolute bottom-8 left-1/2 transform -translate-x-1/2 text-white hidden sm:block"
        >
          <ChevronDown className="w-8 h-8" />
        </motion.div>
      </section>

      {/* Heritage Statement with Static Image */}
      <section className="py-12 sm:py-16 md:py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-5 gap-8 sm:gap-10 md:gap-12 items-center">
            <div className="md:col-span-3">
              <div className="relative rounded-2xl overflow-hidden shadow-2xl h-[300px] sm:h-[400px] md:h-[500px]">
                <img
                  src={Image01}
                  alt="Traditional Ceylon spice heritage"
                  className="w-full h-full object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/40 to-transparent"></div>
                <div className="absolute bottom-6 left-6 text-white">
                  <h3 className="text-2xl sm:text-3xl font-bold mb-2" style={{ fontFamily: 'Playfair Display, serif' }}>
                    2,000 Years of Heritage
                  </h3>
                  <p className="text-sm sm:text-base text-gray-200">The legacy of Ceylon spice trade</p>
                </div>
              </div>
            </div>

            <div className="md:col-span-2">
              <div className="border-l-4 border-[#D4AF37] pl-4 sm:pl-6">
                <h2 className="text-3xl sm:text-4xl mb-4 sm:mb-6 text-[#7B3F00]" style={{ fontFamily: 'Playfair Display, serif' }}>
                  The Spice Route Heritage
                </h2>
                <p className="text-gray-700 mb-4 sm:mb-6 leading-relaxed text-justify">
                  For over 2,000 years, Ceylon (Sri Lanka) has been the world's most coveted source of authentic spices. Our spices carry the legacy of ancient spice traders who traversed oceans to bring the treasures of our island to the world.
                </p>
                <p className="text-gray-700 mb-6 sm:mb-8 leading-relaxed text-justify">
                  Today, we continue this proud tradition, combining time honored cultivation methods with modern quality standards to deliver premium Ceylon spices to discerning global buyers.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Product Universe */}
      <section className="py-12 sm:py-16 md:py-20 bg-[#FFF8E7]">
        <div className="max-w-[1400px] mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-10 sm:mb-12 md:mb-16">
            <h2 className="text-3xl sm:text-4xl md:text-5xl mb-3 sm:mb-4 text-[#7B3F00]" style={{ fontFamily: 'Playfair Display, serif' }}>
              Our Premium Collection
            </h2>
            <p className="text-lg sm:text-xl text-gray-700">Authentic Ceylon Products For Global Markets</p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 lg:gap-6">
            {products.map((product, index) => (
              <motion.div
                key={index}
                className="bg-white rounded-2xl overflow-hidden shadow-xl hover:shadow-2xl transition-all duration-300 group cursor-pointer w-full"
                whileHover={{ y: -8 }}
              >
                <div className="relative h-64 overflow-hidden">
                  <img
                    src={typeof product.image === 'string' ? product.image : String(product.image.src)}
                    alt={typeof product.image === 'string' ? product.title : (product.image.alt || product.title)}
                    className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent"></div>
                </div>

                <div className="p-6 h-60 flex flex-col">
                  <h3 className="text-lg lg:text-xl mb-2 text-[#7B3F00] leading-tight whitespace-nowrap overflow-hidden text-ellipsis" style={{ fontFamily: 'Playfair Display, serif' }}>
                    {product.title}
                  </h3>
                  <br />
                  <p className="text-[#D4AF37] font-semibold mb-3 text-sm">{product.count}</p>

                  <div className="flex flex-wrap gap-1 mb-auto">
                    {product.icons.map((icon, i) => (
                      <span key={i} className="text-[11.5px] bg-[#FFF8E7] text-[#7B3F00] px-1.5 py-1 rounded-full whitespace-nowrap flex items-center justify-center">
                        {icon}
                      </span>
                    ))}
                  </div>

                  <button
                    onClick={() => onNavigate('products')}
                    className="flex items-center gap-2 text-[#D4AF37] hover:text-[#C09F2F] font-semibold transition-all group-hover:translate-x-2 text-sm"
                  >
                    Discover More
                    <span>→</span>
                  </button>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Image Carousel - From Garden to Global Markets */}
      <section className="py-12 sm:py-16 md:py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-8 sm:mb-10 md:mb-12">
            <h2 className="text-3xl sm:text-4xl md:text-5xl mb-3 sm:mb-4 text-[#7B3F00]" style={{ fontFamily: 'Playfair Display, serif' }}>
              From Garden to Global Markets
            </h2>
            <p className="text-lg sm:text-xl text-gray-700">Experience our complete quality journey</p>
          </div>

          <div className="max-w-6xl mx-auto">
            <div className="relative">
              <div className="relative h-[400px] sm:h-[500px] md:h-[600px] rounded-2xl overflow-hidden shadow-2xl">
                <motion.img
                  key={currentSlide}
                  src={typeof carouselSlides[currentSlide].image === 'string' ? carouselSlides[currentSlide].image : carouselSlides[currentSlide].image.src}
                  alt={typeof carouselSlides[currentSlide].image === 'string' ? carouselSlides[currentSlide].title : (carouselSlides[currentSlide].image.alt || carouselSlides[currentSlide].title)}
                  className="w-full h-full object-cover"
                  initial={{ opacity: 0, scale: 1.1 }}
                  animate={{ opacity: 1, scale: 1 }}
                  exit={{ opacity: 0 }}
                  transition={{ duration: 0.7, ease: "easeInOut" }}
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/20 to-transparent"></div>

                <motion.div
                  key={`content-${currentSlide}`}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.3, duration: 0.5 }}
                  className="absolute bottom-0 left-0 right-0 p-6 sm:p-8 text-white"
                >
                  <h3 className="text-2xl sm:text-3xl md:text-4xl font-bold mb-2 sm:mb-3" style={{ fontFamily: 'Playfair Display, serif' }}>
                    {carouselSlides[currentSlide].title}
                  </h3>
                  <p className="text-base sm:text-lg text-gray-200">{carouselSlides[currentSlide].description}</p>
                </motion.div>
              </div>

              <button
                onClick={prevSlide}
                className="absolute left-2 sm:left-4 top-1/2 transform -translate-y-1/2 bg-white/90 hover:bg-white text-[#7B3F00] p-2 sm:p-3 rounded-full shadow-lg transition-all hover:scale-110"
                aria-label="Previous slide"
              >
                <ChevronLeft className="w-5 h-5 sm:w-6 sm:h-6" />
              </button>
              <button
                onClick={nextSlide}
                className="absolute right-2 sm:right-4 top-1/2 transform -translate-y-1/2 bg-white/90 hover:bg-white text-[#7B3F00] p-2 sm:p-3 rounded-full shadow-lg transition-all hover:scale-110"
                aria-label="Next slide"
              >
                <ChevronRight className="w-5 h-5 sm:w-6 sm:h-6" />
              </button>

              <div className="absolute bottom-6 sm:bottom-8 left-1/2 transform -translate-x-1/2 flex gap-2">
                {carouselSlides.map((_, index) => (
                  <button
                    key={index}
                    onClick={() => setCurrentSlide(index)}
                    className={`w-2 h-2 sm:w-3 sm:h-3 rounded-full transition-all ${currentSlide === index ? 'bg-[#D4AF37] w-6 sm:w-8' : 'bg-white/60 hover:bg-white/80'
                      }`}
                    aria-label={`Go to slide ${index + 1}`}
                  />
                ))}
              </div>
            </div>

            <div className="mt-4 sm:mt-6 grid grid-cols-5 gap-2 sm:gap-4">
              {carouselSlides.map((slide, index) => (
                <button
                  key={index}
                  onClick={() => setCurrentSlide(index)}
                  className={`relative h-16 sm:h-20 md:h-24 rounded-lg overflow-hidden transition-all ${currentSlide === index ? 'ring-4 ring-[#D4AF37] scale-105' : 'opacity-60 hover:opacity-100'
                    }`}
                >
                  <img
                    src={typeof slide.image === 'string' ? slide.image : String(slide.image.src)}
                    alt={typeof slide.image === 'string' ? slide.title : (slide.image.alt || slide.title)}
                    className="w-full h-full object-cover"
                  />
                  <div className="absolute inset-0 bg-black/20"></div>
                </button>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Why Golden Spices - USP Section */}
      <section className="py-20 bg-[#0A2647] text-white relative overflow-hidden">
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
              Why Ceylon Golden Spices?
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
                  <div className="absolute inset-0 rounded-2xl overflow-hidden opacity-20 group-hover:opacity-30 transition-opacity">
                    <img src={usp.video} alt="" className="w-full h-full object-cover" />
                  </div>

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

      {/* Quality Promise Banner — Animated Counters */}
      <section className="py-10 sm:py-12 bg-gradient-to-r from-[#D4AF37] to-[#C09F2F] text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h3 className="text-2xl sm:text-3xl md:text-4xl mb-4 sm:mb-6 px-2" style={{ fontFamily: 'Playfair Display, serif' }}>
              From Sri Lanka's Ancient Spice Gardens to Your Global Markets
            </h3>
            <div className="flex flex-wrap justify-center gap-6 sm:gap-8 md:gap-12">
              {STATS.map((stat, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ delay: index * 0.15, duration: 0.5 }}
                  viewport={{ once: true }}
                >
                  <AnimatedCounter
                    target={stat.value}
                    suffix={stat.suffix}
                    duration={2000}
                  />
                  <div className="text-xs sm:text-sm">{stat.label}</div>
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-12 sm:py-16 md:py-20 bg-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <Package className="w-12 h-12 sm:w-16 sm:h-16 text-[#D4AF37] mx-auto mb-4 sm:mb-6" />
            <h2 className="text-3xl sm:text-4xl md:text-5xl mb-4 sm:mb-6 text-[#7B3F00] px-2" style={{ fontFamily: 'Playfair Display, serif' }}>
              Ready to Experience Authentic Ceylon Spices?
            </h2>
            <p className="text-lg sm:text-xl text-gray-700 mb-6 sm:mb-8 text-center px-2">
              Connect with our export team to discuss your requirements
            </p>
            <button
              onClick={() => onNavigate('contact')}
              className="bg-[#D4AF37] hover:bg-[#C09F2F] text-white px-8 sm:px-10 py-3 sm:py-4 rounded-full text-base sm:text-lg font-semibold transition-all hover:scale-105 shadow-xl"
            >
              Request Export Quote Now
            </button>
          </motion.div>
        </div>
      </section>
    </div>
  );
}