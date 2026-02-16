import { motion } from 'motion/react';
import { VideoPlayer } from './VideoPlayer';
import { Award, Target, Heart, Globe, Users, Leaf } from 'lucide-react';

export function AboutPage() {
  const values = [
    { icon: Award, title: 'Authenticity', video: 'https://images.unsplash.com/photo-1682482002999-654860dfcb24?w=400', description: 'Ceylon origin verification at every step' },
    { icon: Target, title: 'Quality Excellence', video: 'https://images.unsplash.com/photo-1666039438492-02a95ecd70c3?w=400', description: 'Rigorous quality testing standards' },
    { icon: Leaf, title: 'Sustainability', video: 'https://images.unsplash.com/photo-1640220023829-ee908684d565?w=400', description: 'Ethical and sustainable harvesting' },
    { icon: Globe, title: 'Innovation', video: 'https://images.unsplash.com/photo-1698474922963-a091a8fb4e95?w=400', description: 'Modern packaging and processing' },
    { icon: Users, title: 'Partnership', video: 'https://images.unsplash.com/photo-1649853761620-c6588c980545?w=400', description: 'Building lasting relationships' },
    { icon: Heart, title: 'Heritage', video: 'https://images.unsplash.com/photo-1640220023829-ee908684d565?w=400', description: 'Honoring traditional methods' }
  ];

  const exportCapabilities = [
    { stage: 'Sourcing', description: 'Direct from certified estates', icon: '🌱' },
    { stage: 'Processing', description: 'State-of-the-art facilities', icon: '⚙️' },
    { stage: 'Quality Control', description: 'Multiple inspection points', icon: '✓' },
    { stage: 'Packaging', description: 'Export-grade materials', icon: '📦' },
    { stage: 'Export', description: 'Complete documentation', icon: '📋' },
    { stage: 'Delivery', description: 'Worldwide logistics', icon: '🚢' }
  ];

  return (
    <div className="min-h-screen pt-20">
      {/* Hero Banner with Video */}
      <section className="relative h-[60vh] flex items-center justify-center overflow-hidden">
        <div className="absolute inset-0">
          <img 
            src="https://images.unsplash.com/photo-1698474922963-a091a8fb4e95?w=1920"
            alt="Factory"
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-black/70 to-black/50"></div>
        </div>

        <div className="relative z-10 text-center text-white px-4 max-w-4xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
          >
            <h1 className="text-6xl mb-4" style={{ fontFamily: 'Playfair Display, serif' }}>
              The Story Behind Golden Spices
            </h1>
            <p className="text-2xl text-[#D4AF37]">
              Buddhi Product - Your Trusted Ceylon Spice Partner
            </p>
          </motion.div>
        </div>
      </section>

      {/* Company Narrative Section */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-5 gap-12 items-center">
            {/* Text Column */}
            <div className="md:col-span-2">
              <h2 className="text-4xl mb-6 text-[#7B3F00]" style={{ fontFamily: 'Playfair Display, serif' }}>
                Our Journey
              </h2>
              <p className="text-gray-700 mb-4 leading-relaxed">
                For over 25 years, Buddhi Product has been at the forefront of Ceylon spice exports, 
                combining traditional wisdom with modern excellence. Operating through our Imperial Spices brand, 
                we've built a reputation for delivering authentic, premium-quality spices to discerning buyers worldwide.
              </p>
              <p className="text-gray-700 mb-4 leading-relaxed">
                Our state-of-the-art facilities in Kelaniya, Sri Lanka, are equipped with the latest 
                processing technology while maintaining respect for time-honored cultivation and harvesting methods 
                that have made Ceylon spices legendary for over 2,000 years.
              </p>
              <p className="text-gray-700 mb-6 leading-relaxed">
                We work directly with local farmers and estates, ensuring not only the highest quality products 
                but also fair practices and sustainable sourcing that benefits our entire community.
              </p>
              <div className="flex items-center gap-4 text-[#D4AF37]">
                <div className="text-3xl">✿</div>
                <div className="text-2xl">❀</div>
                <div className="text-3xl">✺</div>
              </div>
            </div>

            {/* Video Column */}
            <div className="md:col-span-3">
              <VideoPlayer 
                thumbnail="https://images.unsplash.com/photo-1649853761620-c6588c980545?w=1200"
                title="Founder's Message: Our Commitment to Excellence"
                duration="3:45"
                className="h-[500px]"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Mission & Vision */}
      <section className="py-20 bg-[#FFF8E7]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-2 gap-8">
            {/* Mission Card */}
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="relative bg-white rounded-2xl p-8 shadow-xl border-2 border-[#D4AF37]"
            >
              <div className="absolute inset-0 opacity-5 rounded-2xl overflow-hidden">
                <img src="https://images.unsplash.com/photo-1682482002999-654860dfcb24?w=600" alt="" className="w-full h-full object-cover" />
              </div>
              <div className="relative z-10">
                <div className="w-16 h-16 bg-[#D4AF37] rounded-full flex items-center justify-center mb-6">
                  <Target className="w-8 h-8 text-white" />
                </div>
                <h3 className="text-3xl mb-4 text-[#7B3F00]" style={{ fontFamily: 'Playfair Display, serif' }}>
                  Our Mission
                </h3>
                <p className="text-gray-700 leading-relaxed">
                  To deliver authentic Ceylon spices of the highest quality to global markets, 
                  preserving traditional methods while embracing modern standards. We are committed 
                  to building lasting partnerships based on trust, quality, and mutual growth.
                </p>
              </div>
            </motion.div>

            {/* Vision Card */}
            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="relative bg-white rounded-2xl p-8 shadow-xl border-2 border-[#D4AF37]"
            >
              <div className="absolute inset-0 opacity-5 rounded-2xl overflow-hidden">
                <img src="https://images.unsplash.com/photo-1649853761620-c6588c980545?w=600" alt="" className="w-full h-full object-cover" />
              </div>
              <div className="relative z-10">
                <div className="w-16 h-16 bg-[#D4AF37] rounded-full flex items-center justify-center mb-6">
                  <Globe className="w-8 h-8 text-white" />
                </div>
                <h3 className="text-3xl mb-4 text-[#7B3F00]" style={{ fontFamily: 'Playfair Display, serif' }}>
                  Our Vision
                </h3>
                <p className="text-gray-700 leading-relaxed">
                  To become the world's most trusted Ceylon spice brand, recognized for unwavering 
                  quality, authenticity, and sustainable practices. We envision a future where every 
                  Golden Spices product represents the pinnacle of Ceylon's spice heritage.
                </p>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Values Grid */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-5xl mb-4 text-[#7B3F00]" style={{ fontFamily: 'Playfair Display, serif' }}>
              Our Core Values
            </h2>
            <p className="text-xl text-gray-700">The principles that guide everything we do</p>
          </div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {values.map((value, index) => {
              const Icon = value.icon;
              return (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ delay: index * 0.1 }}
                  viewport={{ once: true }}
                  className="group relative bg-[#FFF8E7] rounded-xl p-6 hover:shadow-xl transition-all overflow-hidden"
                >
                  {/* Background Video on Hover */}
                  <div className="absolute inset-0 opacity-0 group-hover:opacity-10 transition-opacity">
                    <img src={value.video} alt="" className="w-full h-full object-cover" />
                  </div>

                  <div className="relative z-10">
                    <div className="w-12 h-12 bg-[#D4AF37] rounded-full flex items-center justify-center mb-4 group-hover:scale-110 transition-transform">
                      <Icon className="w-6 h-6 text-white" />
                    </div>
                    <h4 className="text-xl font-bold text-[#7B3F00] mb-2">{value.title}</h4>
                    <p className="text-gray-700 text-sm">{value.description}</p>
                  </div>
                </motion.div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Export Capabilities */}
      <section className="py-20 bg-[#0A2647] text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-5xl mb-4 text-[#D4AF37]" style={{ fontFamily: 'Playfair Display, serif' }}>
              Built for Global Trade
            </h2>
            <p className="text-xl text-gray-300">Complete export capabilities from source to destination</p>
          </div>

          <div className="grid md:grid-cols-2 gap-12 items-center">
            {/* Process Timeline */}
            <div>
              <div className="space-y-4">
                {exportCapabilities.map((stage, index) => (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, x: -30 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    transition={{ delay: index * 0.1 }}
                    viewport={{ once: true }}
                    className="flex items-center gap-4 bg-white/10 backdrop-blur-sm p-4 rounded-lg hover:bg-white/20 transition-all"
                  >
                    <div className="text-4xl">{stage.icon}</div>
                    <div className="flex-1">
                      <h4 className="font-bold text-[#D4AF37] mb-1">{stage.stage}</h4>
                      <p className="text-sm text-gray-300">{stage.description}</p>
                    </div>
                    {index < exportCapabilities.length - 1 && (
                      <div className="text-[#D4AF37] text-2xl">→</div>
                    )}
                  </motion.div>
                ))}
              </div>
            </div>

            {/* Video Section */}
            <div>
              <VideoPlayer 
                thumbnail="https://images.unsplash.com/photo-1739204618173-3e89def7140f?w=800"
                title="Complete Export Process: From Garden to Global"
                duration="5:20"
                className="h-[500px]"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Virtual Facility Tour */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-5xl mb-4 text-[#7B3F00]" style={{ fontFamily: 'Playfair Display, serif' }}>
              Virtual Facility Tour
            </h2>
            <p className="text-xl text-gray-700">Explore our state-of-the-art facilities</p>
          </div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {[
              { title: 'Production Floor', thumb: 'https://images.unsplash.com/photo-1698474922963-a091a8fb4e95?w=400', duration: '3:45' },
              { title: 'Quality Lab', thumb: 'https://images.unsplash.com/photo-1666039438492-02a95ecd70c3?w=400', duration: '2:30' },
              { title: 'Packaging Area', thumb: 'https://images.unsplash.com/photo-1739204618173-3e89def7140f?w=400', duration: '3:15' },
              { title: 'Warehouse', thumb: 'https://images.unsplash.com/photo-1739204618173-3e89def7140f?w=400', duration: '2:45' }
            ].map((tour, index) => (
              <div key={index} className="group cursor-pointer">
                <VideoPlayer 
                  thumbnail={tour.thumb}
                  title={tour.title}
                  duration={tour.duration}
                  className="h-56"
                />
                <h4 className="mt-3 text-lg font-semibold text-[#7B3F00] group-hover:text-[#D4AF37] transition-colors">
                  {tour.title}
                </h4>
              </div>
            ))}
          </div>

          <div className="text-center mt-12">
            <button className="bg-[#D4AF37] hover:bg-[#C09F2F] text-white px-8 py-4 rounded-full text-lg font-semibold transition-all hover:scale-105 shadow-xl">
              Take Complete 360° Virtual Tour
            </button>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-[#FFF8E7]">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-4xl md:text-5xl mb-6 text-[#7B3F00]" style={{ fontFamily: 'Playfair Display, serif' }}>
            Partner With Us
          </h2>
          <p className="text-xl text-gray-700 mb-8">
            Join the growing family of global businesses who trust Golden Spices for authentic Ceylon quality
          </p>
          <button className="bg-[#D4AF37] hover:bg-[#C09F2F] text-white px-10 py-4 rounded-full text-lg font-semibold transition-all hover:scale-105 shadow-xl">
            Contact Our Team
          </button>
        </div>
      </section>
    </div>
  );
}
