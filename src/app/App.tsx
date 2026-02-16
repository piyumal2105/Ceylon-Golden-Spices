import { useState, useEffect } from 'react';
import { HelmetProvider, Helmet } from 'react-helmet-async';
import { Navigation } from './components/Navigation';
import { HomePage } from './components/HomePage';
import { AboutPage } from './components/AboutPage';
import { ProductsPage } from './components/ProductsPage';
import { HeritagePage } from './components/HeritagePage';
import { ContactPage } from './components/ContactPage';
import { PrivacyPolicyPage } from './components/PrivacyPolicyPage';
import { TermsOfServicePage } from './components/TermsOfServicePage';
import { CookiePolicyPage } from './components/CookiePolicyPage';
import { Footer } from './components/Footer';
import { Chatbot } from './components/Chatbot';
import { CookieBanner } from './components/CookieBanner';

export default function App() {
  const [currentPage, setCurrentPage] = useState('home');

  // Get page metadata for SEO
  const getPageMeta = () => {
    const baseMeta = {
      siteName: 'Ceylon Golden Spices',
      domain: 'ceylongoldenspices.com',
      description: 'Premium Ceylon spices exporter from Sri Lanka. Authentic Ceylon cinnamon, black pepper, cloves, cardamom, and more. B2B spice supplier for international markets.',
      keywords: 'Ceylon spices, Sri Lankan spices, Ceylon cinnamon, spice exporter, authentic spices, premium spices, B2B spices, Ceylon tea, dehydrated fruits'
    };

    switch (currentPage) {
      case 'home':
        return { ...baseMeta, title: 'Ceylon Golden Spices - Premium Sri Lankan Spice Exporter', description: 'Leading exporter of authentic Ceylon spices from Sri Lanka. Premium quality Ceylon cinnamon, black pepper, cardamom, and more. Trusted B2B spice supplier worldwide.' };
      case 'about':
      case 'about-us':
        return { ...baseMeta, title: 'About Us - Ceylon Golden Spices', description: 'Learn about Ceylon Golden Spices, Sri Lanka\'s trusted spice exporter. Our heritage, values, and commitment to authentic Ceylon spices for global markets.' };
      case 'products':
        return { ...baseMeta, title: 'Our Products - Ceylon Golden Spices', description: 'Browse our premium Ceylon spices collection: Ceylon cinnamon, black pepper, cloves, cardamom, turmeric, Ceylon tea, and dehydrated fruits. Export-ready quality.' };
      case 'heritage':
      case 'heritage-quality':
      case 'heritage-&-quality':
        return { ...baseMeta, title: 'Heritage & Quality - Ceylon Golden Spices', description: 'Discover the Ceylon spice legacy and why Sri Lankan spices are world-renowned. Our quality standards and traditional cultivation methods.' };
      case 'contact':
      case 'contact-us':
        return { ...baseMeta, title: 'Contact Us - Ceylon Golden Spices', description: 'Get in touch with Ceylon Golden Spices for export inquiries. Request quotes for premium Ceylon spices. B2B spice supplier contact.' };
      case 'privacy':
      case 'privacy-policy':
        return { ...baseMeta, title: 'Privacy Policy - Ceylon Golden Spices', description: 'Privacy policy for Ceylon Golden Spices. How we collect, use, and protect your personal information.' };
      case 'terms':
      case 'terms-of-service':
        return { ...baseMeta, title: 'Terms and Conditions - Ceylon Golden Spices', description: 'Terms and conditions for Ceylon Golden Spices. Purchase terms, shipping, and policies.' };
      case 'cookie-policy':
        return { ...baseMeta, title: 'Cookie Policy - Ceylon Golden Spices', description: 'Cookie policy for Ceylon Golden Spices. Learn how we use cookies and manage your preferences.' };
      default:
        return baseMeta;
    }
  };

  const pageMeta = getPageMeta();

  return (
    <HelmetProvider>
      <Helmet>
        <title>{pageMeta.title}</title>
        <meta name="description" content={pageMeta.description} />
        <meta name="keywords" content={pageMeta.keywords} />
        
        {/* Open Graph / Facebook */}
        <meta property="og:type" content="website" />
        <meta property="og:url" content={`https://www.${pageMeta.domain}/`} />
        <meta property="og:title" content={pageMeta.title} />
        <meta property="og:description" content={pageMeta.description} />
        <meta property="og:site_name" content={pageMeta.siteName} />
        
        {/* Twitter */}
        <meta property="twitter:card" content="summary_large_image" />
        <meta property="twitter:url" content={`https://www.${pageMeta.domain}/`} />
        <meta property="twitter:title" content={pageMeta.title} />
        <meta property="twitter:description" content={pageMeta.description} />
        
        {/* Additional SEO */}
        <meta name="robots" content="index, follow" />
        <meta name="language" content="English" />
        <meta name="revisit-after" content="7 days" />
        <meta name="author" content="Ceylon Golden Spices" />
        <link rel="canonical" href={`https://www.${pageMeta.domain}/`} />
      </Helmet>

      <div className="min-h-screen bg-white">
        <Navigation currentPage={currentPage} onNavigate={setCurrentPage} />
        <main>
          {(() => {
            switch (currentPage) {
              case 'home':
                return <HomePage onNavigate={setCurrentPage} />;
              case 'about':
              case 'about-us':
                return <AboutPage onNavigate={setCurrentPage} />;
              case 'products':
                return <ProductsPage onNavigate={setCurrentPage} />;
              case 'heritage':
              case 'heritage-quality':
              case 'heritage-&-quality':
                return <HeritagePage />;
              case 'contact':
              case 'contact-us':
                return <ContactPage onOpenChatbot={() => {
                  const chatbotButton = document.querySelector('[data-chatbot-button]') as HTMLButtonElement;
                  if (chatbotButton) chatbotButton.click();
                }} />;
              case 'privacy':
              case 'privacy-policy':
                return <PrivacyPolicyPage onNavigate={setCurrentPage} />;
              case 'terms':
              case 'terms-of-service':
                return <TermsOfServicePage onNavigate={setCurrentPage} />;
              case 'cookie-policy':
                return <CookiePolicyPage onNavigate={setCurrentPage} />;
              default:
                return <HomePage onNavigate={setCurrentPage} />;
            }
          })()}
        </main>
        <Footer onNavigate={setCurrentPage} />
        <Chatbot />
        <CookieBanner onNavigate={setCurrentPage} />
      </div>
    </HelmetProvider>
  );
}
