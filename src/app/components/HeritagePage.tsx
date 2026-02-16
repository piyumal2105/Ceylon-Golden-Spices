import { motion } from 'motion/react';
import { VideoPlayer } from './VideoPlayer';
import { Play, Award, Leaf, Globe, CheckCircle } from 'lucide-react';

export function HeritagePage() {
  const timelineEras = [
    { era: 'Ancient Era', period: 'Before 500 AD', thumb: 'https://images.unsplash.com/photo-1640220023829-ee908684d565?w=400', duration: '2:30' },
    { era: 'Colonial Era', period: '1500-1948', thumb: 'https://images.unsplash.com/photo-1649853761620-c6588c980545?w=400', duration: '3:15' },
    { era: 'Independence Era', period: '1948-2000', thumb: 'https://images.unsplash.com/photo-1682482002999-654860dfcb24?w=400', duration: '2:45' },
    { era: 'Modern Era', period: '2000-Present', thumb: 'https://images.unsplash.com/photo-1698474922963-a091a8fb4e95?w=400', duration: '3:00' }
  ];

  const geographicAdvantages = [
    { title: 'Perfect Climate', description: 'Tropical monsoon patterns ideal for spice cultivation', icon: '☀️', video: 'https://images.unsplash.com/photo-1649853761620-c6588c980545?w=600' },
    { title: 'Rich Volcanic Soil', description: 'Nutrient-dense soil from ancient geological activity', icon: '🌋', video: 'https://images.unsplash.com/photo-1640220023829-ee908684d565?w=600' },
    { title: 'Traditional Methods', description: '2,000 years of refined cultivation expertise', icon: '👨‍🌾', video: 'https://images.unsplash.com/photo-1640220023829-ee908684d565?w=600' },
    { title: 'Biodiversity', description: 'Unique ecosystem supporting premium spice varieties', icon: '🌿', video: 'https://images.unsplash.com/photo-1649853761620-c6588c980545?w=600' }
  ];

  const processStages = [
    { stage: 'Sourcing', description: 'Direct partnerships with certified estates and farmers', thumb: 'https://images.unsplash.com/photo-1640220023829-ee908684d565?w=400', duration: '1:30' },
    { stage: 'Harvesting', description: 'Traditional hand-picking methods for premium quality', thumb: 'https://images.unsplash.com/photo-1640220023829-ee908684d565?w=400', duration: '2:15' },
    { stage: 'Processing', description: 'State-of-the-art facilities maintaining purity', thumb: 'https://images.unsplash.com/photo-1698474922963-a091a8fb4e95?w=400', duration: '3:00' },
    { stage: 'Quality Control', description: 'Rigorous testing at multiple checkpoints', thumb: 'https://images.unsplash.com/photo-1666039438492-02a95ecd70c3?w=400', duration: '2:45' },
    { stage: 'Packaging', description: 'Export-grade materials preserving freshness', thumb: 'https://images.unsplash.com/photo-1739204618173-3e89def7140f?w=400', duration: '2:00' },
    { stage: 'Documentation', description: 'Complete traceability from farm to container', thumb: 'https://images.unsplash.com/photo-1739204618173-3e89def7140f?w=400', duration: '1:45' }
  ];

  const qualityVideos = [
    { title: 'Hygiene Protocols', duration: '2:30', thumb: 'https://images.unsplash.com/photo-1698474922963-a091a8fb4e95?w=400' },
    { title: 'Processing Standards', duration: '3:15', thumb: 'https://images.unsplash.com/photo-1698474922963-a091a8fb4e95?w=400' },
    { title: 'Storage Conditions', duration: '2:00', thumb: 'https://images.unsplash.com/photo-1739204618173-3e89def7140f?w=400' },
    { title: 'Packaging Materials', duration: '1:45', thumb: 'https://images.unsplash.com/photo-1739204618173-3e89def7140f?w=400' },
    { title: 'Export Compliance', duration: '2:45', thumb: 'https://images.unsplash.com/photo-1739204618173-3e89def7140f?w=400' },
    { title: 'Team Training', duration: '3:00', thumb: 'https://images.unsplash.com/photo-1649853761620-c6588c980545?w=400' }
  ];

  return (
    <div className="min-h-screen pt-20">
      {/* Hero with Cinematic Video */}
      <section className="relative h-screen flex items-center justify-center overflow-hidden">
        <div className="absolute inset-0">
          <img 
            src="https://images.unsplash.com/photo-1640220023829-ee908684d565?w=1920"
            alt="Spice heritage"
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-b from-black/70 via-black/50 to-black/70"></div>
        </div>

        <div className="relative z-10 text-center text-white px-4 max-w-5xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
          >
            <h1 className="text-7xl mb-6" style={{ fontFamily: 'Playfair Display, serif' }}>
              2,000 Years of Ceylon Spice Excellence
            </h1>
            <p className="text-2xl mb-8 text-[#D4AF37]">
              Discover Why Ceylon Spices Are the World's Finest
            </p>
            <button className="flex items-center gap-3 mx-auto bg-[#D4AF37] hover:bg-[#C09F2F] text-white px-8 py-4 rounded-full text-lg font-semibold transition-all hover:scale-105 shadow-2xl">
              <Play className="w-6 h-6" fill="white" />
              Watch Our Heritage Story
            </button>
          </motion.div>
        </div>
      </section>

      {/* Heritage Documentary */}
      <section className="py-20 bg-white">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-5xl mb-4 text-[#7B3F00]" style={{ fontFamily: 'Playfair Display, serif' }}>
              The Ceylon Spice Legacy: A Journey Through Time
            </h2>
            <p className="text-xl text-gray-700">12-minute documentary</p>
          </div>

          <VideoPlayer 
            thumbnail="https://images.unsplash.com/photo-1649853761620-c6588c980545?w=1600"
            title="Complete Ceylon Spice Heritage Documentary"
            duration="12:45"
            className="h-[700px]"
          />

          {/* Chapter Markers */}
          <div className="mt-8 grid grid-cols-2 md:grid-cols-5 gap-4">
            {[
              { chapter: 'Ancient Origins', time: '0:00' },
              { chapter: 'The Spice Route Era', time: '2:30' },
              { chapter: 'Ceylon\'s Geographic Gift', time: '5:00' },
              { chapter: 'Traditional Wisdom', time: '7:00' },
              { chapter: 'Modern Excellence', time: '9:30' }
            ].map((chapter, index) => (
              <button
                key={index}
                className="bg-[#FFF8E7] hover:bg-[#D4AF37] hover:text-white p-3 rounded-lg transition-all text-center group"
              >
                <div className="text-sm font-semibold text-[#D4AF37] group-hover:text-white mb-1">{chapter.time}</div>
                <div className="text-xs text-[#7B3F00] group-hover:text-white">{chapter.chapter}</div>
              </button>
            ))}
          </div>
        </div>
      </section>

      {/* Interactive Timeline */}
      <section className="py-20 bg-[#FFF8E7]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-5xl mb-4 text-[#7B3F00]" style={{ fontFamily: 'Playfair Display, serif' }}>
              Ceylon Spice History Timeline
            </h2>
            <p className="text-xl text-gray-700">Click each era to explore its story</p>
          </div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {timelineEras.map((era, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.1 }}
                viewport={{ once: true }}
                className="group cursor-pointer"
              >
                <div className="relative">
                  <VideoPlayer 
                    thumbnail={era.thumb}
                    title={era.era}
                    duration={era.duration}
                    className="h-64"
                  />
                </div>
                <div className="mt-4 text-center">
                  <h3 className="text-xl font-bold text-[#7B3F00] group-hover:text-[#D4AF37] transition-colors mb-1">
                    {era.era}
                  </h3>
                  <p className="text-sm text-gray-600">{era.period}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Geographic Advantage */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-5xl mb-4 text-[#7B3F00]" style={{ fontFamily: 'Playfair Display, serif' }}>
              Why Sri Lanka Produces Superior Spices
            </h2>
            <p className="text-xl text-gray-700">Nature's perfect recipe for excellence</p>
          </div>

          <div className="grid md:grid-cols-2 gap-12">
            {/* Map Video */}
            <div>
              <VideoPlayer 
                thumbnail="https://images.unsplash.com/photo-1649853761620-c6588c980545?w=800"
                title="Ceylon's Geographic Advantages - Animated Map"
                duration="4:30"
                className="h-[500px]"
              />
            </div>

            {/* Benefits */}
            <div className="space-y-4">
              {geographicAdvantages.map((advantage, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, x: 30 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  transition={{ delay: index * 0.1 }}
                  viewport={{ once: true }}
                  className="relative bg-[#FFF8E7] p-6 rounded-xl hover:shadow-lg transition-all group overflow-hidden"
                >
                  <div className="absolute inset-0 opacity-0 group-hover:opacity-10 transition-opacity">
                    <img src={advantage.video} alt="" className="w-full h-full object-cover" />
                  </div>
                  <div className="relative z-10 flex items-start gap-4">
                    <div className="text-4xl">{advantage.icon}</div>
                    <div>
                      <h4 className="text-xl font-bold text-[#7B3F00] mb-2">{advantage.title}</h4>
                      <p className="text-gray-700">{advantage.description}</p>
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Ceylon vs Others Comparison */}
      <section className="py-20 bg-[#0A2647] text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-5xl mb-4 text-[#D4AF37]" style={{ fontFamily: 'Playfair Display, serif' }}>
              The Ceylon Difference
            </h2>
            <p className="text-xl text-gray-300">Side-by-side comparison reveals the quality gap</p>
          </div>

          <div className="max-w-5xl mx-auto">
            <div className="grid md:grid-cols-2 gap-6 mb-12">
              <div>
                <h3 className="text-xl font-bold text-[#D4AF37] mb-4 text-center">Ceylon Cinnamon</h3>
                <VideoPlayer 
                  thumbnail="https://images.unsplash.com/photo-1682482002999-654860dfcb24?w=800"
                  title="Authentic Ceylon Cinnamon Process"
                  duration="3:20"
                  className="h-80"
                />
              </div>
              <div>
                <h3 className="text-xl font-bold text-gray-400 mb-4 text-center">Cassia (Comparison)</h3>
                <VideoPlayer 
                  thumbnail="https://images.unsplash.com/photo-1631021967400-fbd3f722101c?w=800"
                  title="Standard Cassia Processing"
                  duration="3:20"
                  className="h-80"
                />
              </div>
            </div>

            <div className="bg-white/10 backdrop-blur-sm p-8 rounded-2xl">
              <h4 className="text-2xl font-bold text-[#D4AF37] mb-6 text-center">Key Differences</h4>
              <div className="grid md:grid-cols-3 gap-6">
                <div className="text-center">
                  <div className="text-3xl mb-2">👃</div>
                  <h5 className="font-bold mb-2">Aroma</h5>
                  <p className="text-sm text-gray-300">Delicate, sweet fragrance vs. strong, sharp scent</p>
                </div>
                <div className="text-center">
                  <div className="text-3xl mb-2">🎯</div>
                  <h5 className="font-bold mb-2">Quality</h5>
                  <p className="text-sm text-gray-300">Multiple thin layers vs. thick single bark</p>
                </div>
                <div className="text-center">
                  <div className="text-3xl mb-2">💊</div>
                  <h5 className="font-bold mb-2">Health</h5>
                  <p className="text-sm text-gray-300">Low coumarin (safe) vs. high coumarin content</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Quality Journey */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-5xl mb-4 text-[#7B3F00]" style={{ fontFamily: 'Playfair Display, serif' }}>
              From Garden to Global Standards
            </h2>
            <p className="text-xl text-gray-700">Interactive process flow - Click each stage</p>
          </div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {processStages.map((stage, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, scale: 0.95 }}
                whileInView={{ opacity: 1, scale: 1 }}
                transition={{ delay: index * 0.1 }}
                viewport={{ once: true }}
                className="group cursor-pointer"
              >
                <VideoPlayer 
                  thumbnail={stage.thumb}
                  title={stage.stage}
                  duration={stage.duration}
                  className="h-56"
                />
                <div className="mt-4">
                  <h4 className="text-lg font-bold text-[#7B3F00] group-hover:text-[#D4AF37] transition-colors mb-2">
                    {index + 1}. {stage.stage}
                  </h4>
                  <p className="text-sm text-gray-600">{stage.description}</p>
                </div>
              </motion.div>
            ))}
          </div>

          <div className="text-center mt-12">
            <button className="bg-[#D4AF37] hover:bg-[#C09F2F] text-white px-8 py-4 rounded-full font-semibold transition-all hover:scale-105 shadow-xl">
              Watch Complete Process (All Stages)
            </button>
          </div>
        </div>
      </section>

      {/* Quality Standards Behind-the-Scenes */}
      <section className="py-20 bg-[#FFF8E7]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-5xl mb-4 text-[#7B3F00]" style={{ fontFamily: 'Playfair Display, serif' }}>
              Inside Our Quality Commitment
            </h2>
            <p className="text-xl text-gray-700">Behind-the-scenes video gallery</p>
          </div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {qualityVideos.map((video, index) => (
              <div key={index} className="group cursor-pointer">
                <VideoPlayer 
                  thumbnail={video.thumb}
                  title={video.title}
                  duration={video.duration}
                  className="h-56"
                />
                <h4 className="mt-3 text-lg font-semibold text-[#7B3F00] group-hover:text-[#D4AF37] transition-colors">
                  {video.title}
                </h4>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Certifications Roadmap */}
      <section className="py-20 bg-white">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-5xl mb-4 text-[#7B3F00]" style={{ fontFamily: 'Playfair Display, serif' }}>
              Our Commitment to Excellence
            </h2>
            <p className="text-xl text-gray-700">Building Trust Through International Standards</p>
          </div>

          <div className="space-y-6">
            {[
              { name: 'ISO 22000', status: 'In Progress', progress: 75, target: '2025 Q2' },
              { name: 'HACCP', status: 'Preparing', progress: 45, target: '2026' },
              { name: 'Organic Certification', status: 'Evaluation', progress: 30, target: 'Future' },
              { name: 'Fair Trade', status: 'Goal', progress: 15, target: 'Future' }
            ].map((cert, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, x: -30 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ delay: index * 0.1 }}
                viewport={{ once: true }}
                className="bg-[#FFF8E7] p-6 rounded-xl"
              >
                <div className="flex items-center justify-between mb-3">
                  <div className="flex items-center gap-3">
                    <Award className="w-6 h-6 text-[#D4AF37]" />
                    <h4 className="text-xl font-bold text-[#7B3F00]">{cert.name}</h4>
                  </div>
                  <div className="text-right">
                    <div className="text-sm font-semibold text-[#D4AF37]">{cert.status}</div>
                    <div className="text-xs text-gray-600">Target: {cert.target}</div>
                  </div>
                </div>
                <div className="h-2 bg-gray-200 rounded-full overflow-hidden">
                  <motion.div
                    initial={{ width: 0 }}
                    whileInView={{ width: `${cert.progress}%` }}
                    transition={{ duration: 1, delay: index * 0.1 }}
                    viewport={{ once: true }}
                    className="h-full bg-[#D4AF37]"
                  />
                </div>
                <div className="text-xs text-gray-600 mt-1">{cert.progress}% Complete</div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Virtual 360 Tour CTA */}
      <section className="py-20 bg-gradient-to-r from-[#D4AF37] to-[#C09F2F] text-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <Globe className="w-16 h-16 mx-auto mb-6" />
          <h2 className="text-4xl md:text-5xl mb-6" style={{ fontFamily: 'Playfair Display, serif' }}>
            Experience Our Facilities in 360°
          </h2>
          <p className="text-xl mb-8">
            Take an immersive virtual tour of our production facilities
          </p>
          <button className="bg-white text-[#7B3F00] hover:bg-gray-100 px-10 py-4 rounded-full text-lg font-semibold transition-all hover:scale-105 shadow-xl">
            Start Virtual Tour
          </button>
        </div>
      </section>
    </div>
  );
}
