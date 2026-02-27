import { motion } from 'motion/react';
import { Award, Target, Heart, Globe, Users, Leaf, Package, Ship, FlaskConical, CheckCircle2, Sprout, Settings } from 'lucide-react';

import Image01 from "../components/assets/Aboutus/image00.jpg"
import Image02 from "../components/assets/Global/logo01.jpeg"
import Image03 from "../components/assets/Global/logo02.jpeg"
import Image04 from "../components/assets/Aboutus/image01.jpg"

export function AboutPage({ onNavigate }) {
  const values = [
    {
      icon: Award,
      title: 'Authenticity',
      image: 'https://images.unsplash.com/photo-1596040033229-a9821ebd058d?w=600',
      description: 'Ceylon origin verification at every step'
    },
    {
      icon: Target,
      title: 'Quality Excellence',
      image: 'https://images.unsplash.com/photo-1579621970563-ebec7560ff3e?w=600',
      description: 'Rigorous quality testing standards'
    },
    {
      icon: Leaf,
      title: 'Sustainability',
      image: 'https://images.unsplash.com/photo-1542601906990-b4d3fb778b09?w=600',
      description: 'Ethical and sustainable harvesting'
    },
    {
      icon: Globe,
      title: 'Innovation',
      image: 'https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=600',
      description: 'Modern packaging and processing'
    },
    {
      icon: Users,
      title: 'Partnership',
      image: 'https://images.unsplash.com/photo-1521737604893-d14cc237f11d?w=600',
      description: 'Building lasting relationships'
    },
    {
      icon: Heart,
      title: 'Heritage',
      image: 'https://images.unsplash.com/photo-1506905925346-21bda4d32df4?w=600',
      description: 'Honoring traditional methods'
    }
  ];

  const missionPoints = [
    {
      number: '01',
      title: 'Deliver Superior Quality',
      description: 'Produce and export high-quality, value-added agricultural products that comply with international food safety and export standards.'
    },
    {
      number: '02',
      title: 'Add Value at Source',
      description: 'Transform raw Sri Lankan spices and agricultural produce into premium, processed, hygienically packed products that meet global retail and bulk market requirements.'
    },
    {
      number: '03',
      title: 'Ensure Food Safety & Compliance',
      description: 'Maintain strict quality control, hygienic processing environments, and internationally accepted food safety practices to ensure consistency and customer confidence.'
    },
    {
      number: '04',
      title: 'Promote Sustainable Agriculture',
      description: 'Support local farmers, encourage responsible sourcing, and promote environmentally sustainable practices throughout our supply chain.'
    },
    {
      number: '05',
      title: 'Build Long-Term Global Partnerships',
      description: 'Develop transparent, reliable, and mutually beneficial relationships with international buyers, distributors, and retail partners.'
    },
    {
      number: '06',
      title: 'Innovate for Global Markets',
      description: 'Continuously improve product development, packaging design, and branding strategies to compete effectively in European, Middle Eastern, African, Asian, and Australian markets.'
    },
    {
      number: '07',
      title: 'Represent Sri Lanka with Pride',
      description: 'Promote Sri Lanka as a trusted global source of premium spices, herbal products, teas, dehydrated fruits, and cashew products.'
    }
  ];

  const exportCapabilities = [
    {
      stage: 'Sourcing',
      description: 'Direct from certified estates',
      icon: <Sprout className="w-6 h-6 text-[#D4AF37]" />
    },
    {
      stage: 'Processing',
      description: 'State-of-the-art facilities',
      icon: <Settings className="w-6 h-6 text-[#D4AF37]" />
    },
    {
      stage: 'Quality Control',
      description: 'Multiple inspection points',
      icon: <CheckCircle2 className="w-6 h-6 text-[#D4AF37]" />
    },
    {
      stage: 'Packaging',
      description: 'Export-grade materials',
      icon: <Package className="w-6 h-6 text-[#D4AF37]" />
    },
    {
      stage: 'Export',
      description: 'Complete documentation',
      icon: <FlaskConical className="w-6 h-6 text-[#D4AF37]" />
    },
    {
      stage: 'Delivery',
      description: 'Worldwide logistics',
      icon: <Ship className="w-6 h-6 text-[#D4AF37]" />
    }
  ];

  const tradeImages = [
    {
      src: 'https://images.unsplash.com/photo-1586528116311-ad8dd3c8310d?w=600',
      label: 'Export Facilities'
    },
    {
      src: 'https://images.unsplash.com/photo-1578574577315-3fbeb0cecdc2?w=600',
      label: 'International Certifications'
    },
    {
      src: Image04,
      label: 'Professional Packaging'
    },
    {
      src: 'https://images.unsplash.com/photo-1601584115197-04ecc0da31d7?w=600',
      label: 'Shipping & Logistics'
    },
    {
      src: 'https://images.unsplash.com/photo-1579621970795-87facc2f976d?w=600',
      label: 'Quality Testing Labs'
    },
    {
      src: 'https://images.unsplash.com/photo-1556761175-b413da4baf72?w=600',
      label: 'Global Partnerships'
    }
  ];

  return (
    <div className="pt-20">
      {/* Hero Banner */}
      <section className="relative h-[60vh] flex items-center justify-center overflow-hidden">
        <div className="absolute inset-0">
          <img
            src={Image01}
            alt="Ceylon Golden Spices Factory"
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-black/70 to-black/50"></div>
        </div>

        <div className="relative z-10 text-center text-white px-4 max-w-4xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
          >
            <h1 className="text-4xl md:text-6xl mb-4" style={{ fontFamily: 'Playfair Display, serif' }}>
              The Story Behind Ceylon Golden Spices
            </h1>
            <p className="text-xl md:text-2xl text-[#D4AF37]">
              Buddhi Product - Your Trusted Ceylon Spice Partner
            </p>
          </motion.div>
        </div>
      </section>

      {/* Company Narrative Section */}
      <section className="py-16 md:py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-5 gap-8 md:gap-12 items-center">
            {/* Text Column */}
            <div className="md:col-span-2 order-2 md:order-1">
              <h2 className="text-3xl md:text-4xl mb-6 text-[#7B3F00]" style={{ fontFamily: 'Playfair Display, serif' }}>
                Our Journey
              </h2>
              <p className="text-gray-700 mb-4 leading-relaxed text-justify">
                For over 25 years, Buddhi Product has been at the forefront of Ceylon spice exports,
                combining traditional wisdom with modern excellence. Operating through our Buddhi Product brand,
                we've built a reputation for delivering authentic, premium-quality spices to discerning buyers worldwide.
              </p>
              <p className="text-gray-700 mb-4 leading-relaxed text-justify">
                Our state-of-the-art facilities in Andiambelame, Sri Lanka, are equipped with the latest
                processing technology while maintaining respect for time-honored cultivation and harvesting methods
                that have made Ceylon spices legendary for over 2,000 years.
              </p>
              <p className="text-gray-700 mb-6 leading-relaxed text-justify">
                We work directly with local farmers and estates, ensuring not only the highest quality products
                but also fair practices and sustainable sourcing that benefits our entire community.
              </p>
            </div>

            {/* Static Heritage Image Column */}
            <div className="md:col-span-3 order-1 md:order-2">
              <div className="relative rounded-2xl overflow-hidden shadow-2xl h-[320px] md:h-[500px]">
                <img
                  src="https://images.unsplash.com/photo-1596040033229-a9821ebd058d?w=1200"
                  alt="Ceylon Golden Spices Heritage - Traditional Spice Farming"
                  className="w-full h-full object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent"></div>
                <div className="absolute bottom-6 left-6 right-6">
                  <p className="text-white text-lg md:text-xl font-semibold" style={{ fontFamily: 'Playfair Display, serif' }}>
                    Over 25 Years of Ceylon Spice Excellence
                  </p>
                  <p className="text-[#D4AF37] text-sm mt-1">Andiambelame, Sri Lanka</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Mission & Vision — Fully Updated */}
      <section className="py-16 md:py-20 bg-[#FFF8E7]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12 md:mb-16">
            <h2 className="text-4xl md:text-5xl mb-4 text-[#7B3F00]" style={{ fontFamily: 'Playfair Display, serif' }}>
              Mission & Vision
            </h2>
            <p className="text-lg text-gray-600">The purpose and direction that drive everything we do</p>
          </div>

          {/* Vision Card */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="group relative bg-white rounded-2xl p-8 md:p-10 shadow-xl border-2 border-[#D4AF37] hover:shadow-2xl transition-all duration-300 overflow-hidden mb-8"
          >
            {/* Decorative background image on hover */}
            <div className="absolute inset-0 opacity-0 group-hover:opacity-10 transition-opacity duration-500 rounded-2xl overflow-hidden">
              <img src="https://images.unsplash.com/photo-1649853761620-c6588c980545?w=600" alt="" className="w-full h-full object-cover" />
            </div>
            <div className="absolute inset-0 bg-gradient-to-br from-[#D4AF37]/0 to-[#D4AF37]/0 group-hover:from-[#D4AF37]/5 group-hover:to-transparent transition-all duration-500 rounded-2xl"></div>

            <div className="relative z-10">
              <div className="flex items-center gap-4 mb-6">
                <div className="w-14 h-14 md:w-16 md:h-16 bg-[#D4AF37] rounded-full flex items-center justify-center flex-shrink-0 group-hover:scale-110 group-hover:shadow-lg transition-transform duration-300">
                  <Globe className="w-7 h-7 md:w-8 md:h-8 text-white" />
                </div>
                <h3 className="text-2xl md:text-3xl text-[#7B3F00] group-hover:text-[#5C2E00] transition-colors duration-300" style={{ fontFamily: 'Playfair Display, serif' }}>
                  Our Vision
                </h3>
              </div>
              <p className="text-gray-700 leading-relaxed text-justify text-base md:text-lg mb-4">
                To become a globally trusted Sri Lankan export brand, recognized for delivering premium value-added
                spices, dehydrated fruits, teas, herbal products, and cashew items — setting international standards
                in quality, authenticity, sustainability, and innovation.
              </p>
              <p className="text-gray-700 leading-relaxed text-justify text-base md:text-lg">
                We envision bringing the true taste, purity, and natural richness of Sri Lanka to global markets
                while building a brand that represents excellence, reliability, and long-term partnerships.
              </p>
            </div>
          </motion.div>

          {/* Mission Card */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="group relative bg-white rounded-2xl p-8 md:p-10 shadow-xl border-2 border-[#D4AF37] hover:shadow-2xl transition-all duration-300 overflow-hidden"
          >
            {/* Decorative background image on hover */}
            <div className="absolute inset-0 opacity-0 group-hover:opacity-10 transition-opacity duration-500 rounded-2xl overflow-hidden">
              <img src="https://images.unsplash.com/photo-1596040033229-a9821ebd058d?w=600" alt="" className="w-full h-full object-cover" />
            </div>
            <div className="absolute inset-0 bg-gradient-to-br from-[#D4AF37]/0 to-[#D4AF37]/0 group-hover:from-[#D4AF37]/5 group-hover:to-transparent transition-all duration-500 rounded-2xl"></div>

            <div className="relative z-10">
              <div className="flex items-center gap-4 mb-4">
                <div className="w-14 h-14 md:w-16 md:h-16 bg-[#D4AF37] rounded-full flex items-center justify-center flex-shrink-0 group-hover:scale-110 group-hover:shadow-lg transition-transform duration-300">
                  <Target className="w-7 h-7 md:w-8 md:h-8 text-white" />
                </div>
                <div>
                  <h3 className="text-2xl md:text-3xl text-[#7B3F00] group-hover:text-[#5C2E00] transition-colors duration-300" style={{ fontFamily: 'Playfair Display, serif' }}>
                    Our Mission
                  </h3>
                  <p className="text-gray-500 text-sm mt-1">At Golden Spices – A Brand of Buddhi Product, our mission is to:</p>
                </div>
              </div>

              <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4 mt-6">
                {missionPoints.map((point, index) => (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ delay: index * 0.07 }}
                    viewport={{ once: true }}
                    className="flex gap-3 bg-[#FFF8E7] rounded-xl p-4 hover:bg-[#FFF0CC] transition-colors duration-200"
                  >
                    <span className="text-2xl font-bold text-[#D4AF37] leading-none flex-shrink-0 mt-0.5" style={{ fontFamily: 'Playfair Display, serif' }}>
                      {point.number}
                    </span>
                    <div>
                      <h4 className="font-semibold text-[#7B3F00] text-sm mb-1">{point.title}</h4>
                      <p className="text-gray-600 text-xs leading-relaxed text-justify">{point.description}</p>
                    </div>
                  </motion.div>
                ))}
              </div>
            </div>
          </motion.div>

        </div>
      </section>

      {/* Values Grid */}
      <section className="py-16 md:py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12 md:mb-16">
            <h2 className="text-4xl md:text-5xl mb-4 text-[#7B3F00]" style={{ fontFamily: 'Playfair Display, serif' }}>
              Our Core Values
            </h2>
            <p className="text-lg md:text-xl text-gray-700">The principles that guide everything we do</p>
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
                  {/* Background Image on Hover */}
                  <div className="absolute inset-0 opacity-0 group-hover:opacity-15 transition-opacity duration-500">
                    <img src={value.image} alt="" className="w-full h-full object-cover" />
                  </div>

                  <div className="relative z-10">
                    <div className="w-12 h-12 bg-[#D4AF37] rounded-full flex items-center justify-center mb-4 group-hover:scale-110 transition-transform">
                      <Icon className="w-6 h-6 text-white" />
                    </div>
                    <h4 className="text-xl font-bold text-[#7B3F00] mb-2">{value.title}</h4>
                    <p className="text-gray-700 text-sm text-justify">{value.description}</p>
                  </div>
                </motion.div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Export Capabilities / Built for Global Trade */}
      <section className="py-16 md:py-20 bg-[#0A2647] text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12 md:mb-16">
            <h2 className="text-4xl md:text-5xl mb-4 text-[#D4AF37]" style={{ fontFamily: 'Playfair Display, serif' }}>
              Built for Global Trade
            </h2>
            <p className="text-lg md:text-xl text-gray-300">Complete export capabilities from source to destination</p>
          </div>

          <div className="grid md:grid-cols-2 gap-8 items-stretch">
            {/* Process Timeline */}
            <div className="flex flex-col gap-3">
              {exportCapabilities.map((stage, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, x: -30 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  transition={{ delay: index * 0.1 }}
                  viewport={{ once: true }}
                  className="flex items-center gap-4 bg-white/10 backdrop-blur-sm p-4 rounded-lg hover:bg-white/20 transition-all flex-1"
                >
                  <div className="flex-shrink-0 w-10 h-10 bg-white/10 rounded-full flex items-center justify-center">
                    {stage.icon}
                  </div>
                  <div className="flex-1">
                    <h4 className="font-bold text-[#D4AF37] mb-0.5">{stage.stage}</h4>
                    <p className="text-sm text-gray-300">{stage.description}</p>
                  </div>
                </motion.div>
              ))}
            </div>

            {/* Image Grid — 2 cols × 3 rows, stretches to match left column */}
            <div className="grid grid-cols-2 gap-3 h-full" style={{ gridTemplateRows: 'repeat(3, 1fr)', minHeight: '480px' }}>
              {tradeImages.map((img, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, scale: 0.9 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  transition={{ delay: index * 0.08 }}
                  viewport={{ once: true }}
                  className="relative rounded-xl overflow-hidden group"
                >
                  <img
                    src={img.src}
                    alt={img.label}
                    className="absolute inset-0 w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/75 to-transparent"></div>
                  <p className="absolute bottom-2 left-2 right-2 text-white text-xs font-semibold leading-tight">
                    {img.label}
                  </p>
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Partner With Us CTA — last section, no bottom margin */}
      <section className="py-16 md:py-20 bg-[#FFF8E7] [&+*]:mt-0">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl md:text-5xl mb-6 text-[#7B3F00]" style={{ fontFamily: 'Playfair Display, serif' }}>
            Partner With Us
          </h2>
          <p className="text-lg md:text-xl text-gray-700 mb-10 text-justify md:text-center">
            Join the Growing Family of Global Businesses Who Trust Ceylon Golden Spices for Authentic Ceylon Quality
          </p>

          {/* Dual Logo Display */}
          <div className="flex flex-col sm:flex-row items-center justify-center gap-6 sm:gap-16 mb-10">

            {/* Logo 1 — Ceylon Golden Spices */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.1 }}
              viewport={{ once: true }}
              className="flex flex-col items-center gap-3"
            >
              <div className="w-28 h-28 md:w-36 md:h-36 rounded-full border-4 border-[#D4AF37] bg-white shadow-xl overflow-hidden hover:shadow-2xl hover:scale-105 transition-all duration-300">
                <img
                  src={Image02}
                  alt="Ceylon Golden Spices"
                  className="w-full h-full object-cover"
                />
              </div>
              <p className="text-sm font-bold text-[#7B3F00] tracking-widest uppercase">Ceylon Golden Spices</p>
            </motion.div>

            {/* Divider */}
            <div className="flex sm:flex-col items-center gap-3 text-[#D4AF37]">
              <div className="w-10 sm:w-px h-px sm:h-10 bg-[#D4AF37]/50"></div>
              <span className="text-2xl font-light opacity-60">&</span>
              <div className="w-10 sm:w-px h-px sm:h-10 bg-[#D4AF37]/50"></div>
            </div>

            {/* Logo 2 — Buddhi Product */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2 }}
              viewport={{ once: true }}
              className="flex flex-col items-center gap-3"
            >
              <div className="w-28 h-28 md:w-36 md:h-36 rounded-full border-4 border-[#D4AF37] bg-white shadow-xl overflow-hidden hover:shadow-2xl hover:scale-105 transition-all duration-300">
                <img
                  src={Image03}
                  alt="Buddhi Product"
                  className="w-full h-full object-cover"
                />
              </div>
              <p className="text-sm font-bold text-[#7B3F00] tracking-widest uppercase">Buddhi Product</p>
            </motion.div>
          </div>

          <button
            onClick={() => onNavigate && onNavigate('contact')}
            className="bg-[#D4AF37] hover:bg-[#C09F2F] text-white px-8 md:px-10 py-4 rounded-full text-lg font-semibold transition-all hover:scale-105 shadow-xl inline-flex items-center gap-2"
          >
            Contact Our Team
            <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
            </svg>
          </button>
        </div>
      </section>
    </div>
  );
}