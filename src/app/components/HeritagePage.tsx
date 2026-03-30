import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { Award, Sun, Layers, Clock, ShieldCheck, ChevronLeft, ChevronRight, Leaf, Wind, Star } from 'lucide-react';

import Image01 from "../components/assets/Heritage/image00.png";
import Image02 from "../components/assets/Heritage/image01.jpg";
import Image04 from "../components/assets/Heritage/image03.jpg";
import Image06 from "../components/assets/Global/image01.png";
import Image07 from "../components/assets/Heritage/image06.jpg";
import Image08 from "../components/assets/Heritage/image07.webp";
import Image09 from "../components/assets/Heritage/image08.jpg";
// @ts-ignore
import Video01 from "../components/assets/Heritage/video01.MOV";

interface SliderImage {
  src: string;
  alt: string;
  caption: string;
}

function ImageSlider({ images, autoPlayInterval = 4000 }: { images: SliderImage[]; autoPlayInterval?: number }) {
  const [current, setCurrent] = useState(0);
  const prev = () => setCurrent((c) => (c - 1 + images.length) % images.length);
  const next = () => setCurrent((c) => (c + 1) % images.length);

  useEffect(() => {
    const timer = setInterval(() => setCurrent((c) => (c + 1) % images.length), autoPlayInterval);
    return () => clearInterval(timer);
  }, [images.length, autoPlayInterval]);

  return (
    <div className="relative w-full h-full overflow-hidden rounded-2xl">
      <AnimatePresence mode="wait">
        <motion.img
          key={current}
          src={images[current].src}
          alt={images[current].alt}
          initial={{ opacity: 0, x: 40 }}
          animate={{ opacity: 1, x: 0 }}
          exit={{ opacity: 0, x: -40 }}
          transition={{ duration: 0.45 }}
          className="w-full h-full object-cover"
        />
      </AnimatePresence>
      <div className="absolute inset-0 bg-gradient-to-t from-black/40 to-transparent pointer-events-none rounded-2xl" />
      <div className="absolute bottom-4 left-1/2 -translate-x-1/2 text-white text-sm font-medium bg-black/40 backdrop-blur-sm px-4 py-1.5 rounded-full whitespace-nowrap">
        {images[current].caption}
      </div>
      <button onClick={prev} aria-label="Previous image" className="absolute left-3 top-1/2 -translate-y-1/2 bg-white/20 hover:bg-white/40 backdrop-blur-sm text-white rounded-full p-2 transition-all">
        <ChevronLeft className="w-5 h-5" />
      </button>
      <button onClick={next} aria-label="Next image" className="absolute right-3 top-1/2 -translate-y-1/2 bg-white/20 hover:bg-white/40 backdrop-blur-sm text-white rounded-full p-2 transition-all">
        <ChevronRight className="w-5 h-5" />
      </button>
      <div className="absolute bottom-12 left-1/2 -translate-x-1/2 flex gap-2">
        {images.map((_, i) => (
          <button
            key={i}
            onClick={() => setCurrent(i)}
            aria-label={`Go to slide ${i + 1}`}
            className={`transition-all duration-300 rounded-full h-2 ${i === current ? 'w-6 bg-[#D4AF37]' : 'w-2 bg-white/60 hover:bg-white/90'}`}
          />
        ))}
      </div>
    </div>
  );
}

export function HeritagePage() {

  const geographicAdvantages = [
    { title: 'Perfect Climate', description: 'Tropical monsoon patterns create the ideal humidity and temperature cycles for premium spice cultivation year-round.', icon: Sun, bgImage: 'https://images.unsplash.com/photo-1649853761620-c6588c980545?w=600' },
    { title: 'Rich Volcanic Soil', description: 'Mineral-dense soil from ancient geological activity delivers unmatched flavour depth and essential oil concentration.', icon: Layers, bgImage: 'https://images.unsplash.com/photo-1640220023829-ee908684d565?w=600' },
    { title: 'Ancient Cultivation Heritage', description: 'Over 2,000 years of continuously refined growing and harvesting expertise passed through generations of master cultivators.', icon: Clock, bgImage: 'https://images.unsplash.com/photo-1640220023829-ee908684d565?w=600' },
    { title: 'Certified Biodiversity', description: 'A unique highland ecosystem nurtures rare spice varieties with superior aromatic profiles not replicable elsewhere.', icon: ShieldCheck, bgImage: 'https://images.unsplash.com/photo-1649853761620-c6588c980545?w=600' },
  ];

  const ceylonSliderImages: SliderImage[] = [
    { src: Image02, alt: 'Ceylon cinnamon quills', caption: 'Hand Rolled Ceylon Cinnamon Quills' },
    { src: Image08, alt: 'Spice harvesting', caption: 'Traditional Harvest Methods' },
    { src: Image04, alt: 'Tea plantation', caption: 'Sri Lankan Tea Plantations' },
    { src: Image09, alt: 'Spice processing', caption: 'Meticulous Quality Processing' },
    { src: Image06, alt: 'Ceylon spice quality', caption: 'Export Grade Premium Quality' },
  ];

  return (
    <div className="min-h-screen pt-20" style={{ fontFamily: "'Georgia', serif" }}>

      <section className="relative h-screen flex items-center justify-center overflow-hidden">
        <div className="absolute inset-0">
          <img src={Image01} alt="Ancient Ceylon spice heritage" className="w-full h-full object-cover object-top" />
          <div className="absolute inset-0" style={{ background: 'linear-gradient(to bottom, rgba(0,0,0,0.30) 0%, rgba(0,0,0,0.42) 30%, rgba(0,0,0,0.62) 65%, rgba(0,0,0,0.80) 100%)' }} />
        </div>
        <div className="relative z-10 text-center text-white px-4 max-w-5xl mx-auto py-32 mt-10">
          <motion.div initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.8 }}>
            <div className="inline-flex items-center gap-2 mb-6">
              <span className="w-8 h-px bg-[#D4AF37]"></span>
              <p className="text-white font-bold text-sm uppercase tracking-[0.3em] font-sans drop-shadow-lg" style={{ textShadow: '0 2px 8px rgba(0,0,0,0.9)' }}>
                Ceylon Golden Spices
              </p>
              <span className="w-8 h-px bg-[#D4AF37]"></span>
            </div>
            <h1 className="text-6xl md:text-7xl mb-6 leading-tight drop-shadow-2xl text-white" style={{ fontFamily: 'Playfair Display, serif', textShadow: '0 4px 20px rgba(0,0,0,0.8)' }}>
              2,000 Years of Ceylon<br />Spice Excellence
            </h1>
            <p className="text-xl md:text-2xl mb-10 font-sans font-semibold text-white drop-shadow-xl" style={{ textShadow: '0 3px 16px rgba(0,0,0,0.95)' }}>
              Discover Why Ceylon Spices Are the World's Finest
            </p>
            <a href="#heritage-story" className="inline-block bg-[#D4AF37] hover:bg-[#C09F2F] text-white px-10 py-4 rounded-full text-lg font-semibold transition-all hover:scale-105 shadow-2xl font-sans">
              Explore Our Heritage
            </a>
          </motion.div>
        </div>
      </section>

      <section id="heritage-story" className="py-20 bg-white">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <p className="text-[#D4AF37] text-sm uppercase tracking-[0.3em] mb-3 font-sans">Our Story</p>
            <h2 className="text-5xl mb-4 text-[#7B3F00]" style={{ fontFamily: 'Playfair Display, serif' }}>
              The Ceylon Spice Legacy:<br />A Journey Through Time
            </h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto text-justify font-sans">
              From ancient trade routes to modern global markets, the story of Ceylon spices is one of extraordinary quality, cultural richness, and enduring excellence.
            </p>
          </div>
          <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.7 }} className="relative rounded-2xl overflow-hidden shadow-2xl">
            <video src={Video01} controls playsInline preload="metadata" className="w-full h-[500px] md:h-[650px] object-cover rounded-2xl" style={{ background: '#000' }}>
              Your browser does not support the video tag.
            </video>
          </motion.div>
        </div>
      </section>

      <section className="py-20 bg-[#FFF8E7]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <p className="text-[#D4AF37] text-sm uppercase tracking-[0.3em] mb-3 font-sans">Geographic Advantage</p>
            <h2 className="text-5xl mb-4 text-[#7B3F00]" style={{ fontFamily: 'Playfair Display, serif' }}>
              Why Sri Lanka Produces Superior Spices
            </h2>
            <p className="text-xl text-gray-700 font-sans">Nature's perfect recipe for excellence</p>
          </div>
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <motion.div initial={{ opacity: 0, x: -30 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }} transition={{ duration: 0.7 }} className="relative rounded-2xl overflow-hidden shadow-2xl">
              <img src={Image07} alt="Sri Lanka's lush highland spice growing regions" className="w-full h-[500px] object-cover" />
              <div className="absolute inset-0 bg-gradient-to-t from-[#7B3F00]/20 to-transparent" />
              <div className="absolute bottom-6 left-6 text-white">
                <p className="text-sm uppercase tracking-widest text-[#D4AF37] font-sans mb-1">Growing Region</p>
                <p className="text-2xl font-bold" style={{ fontFamily: 'Playfair Display, serif' }}>Highland Sri Lanka</p>
              </div>
            </motion.div>
            <div className="space-y-4">
              {geographicAdvantages.map((advantage, index) => {
                const Icon = advantage.icon;
                return (
                  <motion.div key={index} initial={{ opacity: 0, x: 30 }} whileInView={{ opacity: 1, x: 0 }} transition={{ delay: index * 0.1, duration: 0.6 }} viewport={{ once: true }} className="relative bg-white p-6 rounded-xl hover:shadow-xl transition-all group overflow-hidden border border-[#E8D5B0]/60">
                    <div className="absolute inset-0 opacity-0 group-hover:opacity-[0.06] transition-opacity duration-500">
                      <img src={advantage.bgImage} alt="" aria-hidden="true" className="w-full h-full object-cover" />
                    </div>
                    <div className="relative z-10 flex items-start gap-4">
                      <div className="flex-shrink-0 w-12 h-12 bg-[#FFF8E7] rounded-xl flex items-center justify-center border border-[#D4AF37]/30 group-hover:bg-[#D4AF37] transition-colors duration-300">
                        <Icon className="w-6 h-6 text-[#D4AF37] group-hover:text-white transition-colors duration-300" />
                      </div>
                      <div>
                        <h4 className="text-xl font-bold text-[#7B3F00] mb-2" style={{ fontFamily: 'Playfair Display, serif' }}>{advantage.title}</h4>
                        <p className="text-gray-600 text-justify font-sans leading-relaxed">{advantage.description}</p>
                      </div>
                    </div>
                  </motion.div>
                );
              })}
            </div>
          </div>
        </div>
      </section>

      <section className="py-20 bg-[#0A2647] text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <p className="text-[#D4AF37]/80 text-sm uppercase tracking-[0.3em] mb-3 font-sans">Quality Comparison</p>
            <h2 className="text-5xl mb-4 text-[#D4AF37]" style={{ fontFamily: 'Playfair Display, serif' }}>The Ceylon Difference</h2>
            <p className="text-xl text-gray-300 font-sans">Visual evidence of a quality standard unmatched anywhere in the world</p>
          </div>
          <div className="max-w-5xl mx-auto">
            <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.7 }} className="h-80 md:h-[460px] mb-12">
              <ImageSlider images={ceylonSliderImages} autoPlayInterval={4000} />
            </motion.div>
            <div className="bg-white/10 backdrop-blur-sm p-8 rounded-2xl border border-white/10">
              <h4 className="text-2xl font-bold text-[#D4AF37] mb-8 text-center" style={{ fontFamily: 'Playfair Display, serif' }}>Key Differences</h4>
              <div className="grid md:grid-cols-3 gap-6">
                <div className="text-center group">
                  <div className="w-14 h-14 bg-[#D4AF37]/20 rounded-2xl flex items-center justify-center mx-auto mb-4 group-hover:bg-[#D4AF37]/40 transition-colors">
                    <Wind className="w-7 h-7 text-[#D4AF37]" />
                  </div>
                  <h5 className="font-bold mb-2 text-lg font-sans">Aroma</h5>
                  <p className="text-sm text-gray-300 text-justify font-sans leading-relaxed">Ceylon spices carry a delicate, naturally sweet fragrance — a hallmark of the island's unique terroir — versus the sharp, overpowering scent of commodity alternatives.</p>
                </div>
                <div className="text-center group">
                  <div className="w-14 h-14 bg-[#D4AF37]/20 rounded-2xl flex items-center justify-center mx-auto mb-4 group-hover:bg-[#D4AF37]/40 transition-colors">
                    <Star className="w-7 h-7 text-[#D4AF37]" />
                  </div>
                  <h5 className="font-bold mb-2 text-lg font-sans">Quality</h5>
                  <p className="text-sm text-gray-300 text-justify font-sans leading-relaxed">Multiple paper-thin inner bark layers hand-rolled into delicate quills — a structural distinction that signals authentic Ceylon origin and superior grade.</p>
                </div>
                <div className="text-center group">
                  <div className="w-14 h-14 bg-[#D4AF37]/20 rounded-2xl flex items-center justify-center mx-auto mb-4 group-hover:bg-[#D4AF37]/40 transition-colors">
                    <ShieldCheck className="w-7 h-7 text-[#D4AF37]" />
                  </div>
                  <h5 className="font-bold mb-2 text-lg font-sans">Health</h5>
                  <p className="text-sm text-gray-300 text-justify font-sans leading-relaxed">Ceylon cinnamon contains naturally low coumarin levels, making it safe for regular daily consumption — unlike cassia varieties with significantly higher concentrations.</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="py-20 bg-white">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <p className="text-[#D4AF37] text-sm uppercase tracking-[0.3em] mb-3 font-sans">Standards</p>
            <h2 className="text-5xl mb-4 text-[#7B3F00]" style={{ fontFamily: 'Playfair Display, serif' }}>Our Commitment to Excellence</h2>
            <p className="text-xl text-gray-700 font-sans">Building Trust Through International Standards</p>
            <p className="text-base text-gray-500 mt-3 max-w-2xl mx-auto font-sans">We are actively working towards internationally recognised certifications to ensure our products meet the highest global standards.</p>
          </div>
          <div className="grid sm:grid-cols-2 gap-5">
            {[
              { name: 'ISO 22000', description: 'Food Safety Management System — ensuring our processes meet international food safety requirements from farm to export.', icon: ShieldCheck, status: 'In Progress', statusStyle: 'bg-amber-100 text-amber-700 border border-amber-300' },
              { name: 'HACCP', description: 'Hazard Analysis & Critical Control Points — a systematic preventive approach to food safety throughout our supply chain.', icon: Award, status: 'In Progress', statusStyle: 'bg-amber-100 text-amber-700 border border-amber-300' },
              { name: 'Organic Certification', description: 'Recognising our commitment to natural, chemical-free cultivation methods that protect both our products and the environment.', icon: Leaf, status: 'In Progress', statusStyle: 'bg-amber-100 text-amber-700 border border-amber-300' },
              { name: 'Fair Trade', description: 'Affirming our dedication to fair wages, ethical sourcing, and sustainable livelihoods for our farming communities.', icon: Star, status: 'In Progress', statusStyle: 'bg-amber-100 text-amber-700 border border-amber-300' },
            ].map((cert, index) => {
              const Icon = cert.icon;
              return (
                <motion.div key={index} initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} transition={{ delay: index * 0.1, duration: 0.6 }} viewport={{ once: true }} className="bg-[#FFF8E7] p-6 rounded-xl border border-[#E8D5B0]/60 hover:shadow-lg transition-all group">
                  <div className="flex items-start justify-between gap-4">
                    <div className="flex items-start gap-4 flex-1">
                      <div className="flex-shrink-0 w-12 h-12 bg-white rounded-xl flex items-center justify-center border border-[#D4AF37]/30 group-hover:bg-[#D4AF37] transition-colors duration-300">
                        <Icon className="w-5 h-5 text-[#D4AF37] group-hover:text-white transition-colors duration-300" />
                      </div>
                      <div className="flex-1">
                        <h4 className="text-xl font-bold text-[#7B3F00] mb-2" style={{ fontFamily: 'Playfair Display, serif' }}>{cert.name}</h4>
                        <p className="text-gray-600 text-sm font-sans leading-relaxed">{cert.description}</p>
                      </div>
                    </div>
                    <span className={`flex-shrink-0 text-xs font-semibold px-3 py-1.5 rounded-full font-sans whitespace-nowrap ${cert.statusStyle}`}>{cert.status}</span>
                  </div>
                </motion.div>
              );
            })}
          </div>
          <motion.p initial={{ opacity: 0 }} whileInView={{ opacity: 1 }} viewport={{ once: true }} transition={{ delay: 0.5 }} className="text-center text-sm text-gray-400 mt-8 font-sans">
            Our ISO 22000 certification process is currently underway. All other certifications are on our roadmap as we continue to grow.
          </motion.p>
        </div>
      </section>

    </div>
  );
}