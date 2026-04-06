import { Cookie, ChevronRight, Check, Settings, BarChart, Target } from 'lucide-react';

interface CookiePolicyPageProps {
  onNavigate: (page: string) => void;
}

export function CookiePolicyPage({ onNavigate }: CookiePolicyPageProps) {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const cookieTypes = [
    {
      name: 'Essential Cookies',
      icon: Check,
      description: 'These cookies are necessary for the website to function properly. They enable basic features like page navigation, security, and access to secure areas.',
      examples: 'Session cookies, security cookies, load balancing cookies',
      canDisable: false
    },
    {
      name: 'Analytics Cookies',
      icon: BarChart,
      description: 'These cookies help us understand how visitors interact with our website by collecting and reporting information anonymously.',
      examples: 'Google Analytics, page visit tracking, user behavior analysis',
      canDisable: true
    },
    {
      name: 'Marketing Cookies',
      icon: Target,
      description: 'These cookies track your online activity to help advertisers deliver more relevant advertising or to limit how many times you see an ad.',
      examples: 'Social media cookies, advertising cookies, retargeting pixels',
      canDisable: true
    },
    {
      name: 'Preference Cookies',
      icon: Settings,
      description: 'These cookies allow the website to remember choices you make and provide enhanced, more personalized features.',
      examples: 'Language preferences, region settings, display preferences',
      canDisable: true
    }
  ];

  return (
    <div className="min-h-screen pt-20 bg-gradient-to-b from-white to-[#FFF8E7]">
      <br />
      {/* Breadcrumb */}
      <div className="bg-[#0A2647] py-4">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center gap-2 text-sm text-gray-300">
            <button
              onClick={() => {
                onNavigate('home');
                scrollToTop();
              }}
              className="hover:text-[#D4AF37] transition-colors"
            >
              Home
            </button>
            <ChevronRight className="w-4 h-4" />
            <span className="text-[#D4AF37]">Cookie Policy</span>
          </div>
        </div>
      </div>

      {/* Header */}
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="flex items-center gap-4 mb-6">
          <div className="w-16 h-16 bg-gradient-to-br from-[#D4AF37] to-[#C09F2F] rounded-full flex items-center justify-center">
            <Cookie className="w-8 h-8 text-white" />
          </div>
          <div>
            <h1 className="text-3xl md:text-4xl font-bold text-[#7B3F00]">Cookie Policy</h1>
            <p className="text-gray-600">Ceylon Golden Spices</p>
          </div>
        </div>

        <div className="bg-white rounded-2xl shadow-lg p-6 md:p-10 space-y-8">
          {/* Effective Date */}
          <div className="bg-[#FFF8E7] border-l-4 border-[#D4AF37] p-4 rounded">
            <p className="text-sm text-[#7B3F00]">
              <strong>Effective Date:</strong> February 15, 2026
            </p>
          </div>

          {/* Introduction */}
          <div>
            <h2 className="text-2xl font-bold text-[#7B3F00] mb-4 flex items-center gap-2">
              <span className="text-[#D4AF37]">1.</span> What Are Cookies?
            </h2>
            <p className="text-gray-700 leading-relaxed text-justify mb-4">
              Cookies are small text files that are placed on your computer or mobile device when you visit a website. They are widely used to make websites work more efficiently and provide information to website owners.
            </p>
            <p className="text-gray-700 leading-relaxed text-justify">
              At Ceylon Golden Spices (www.ceylongoldenspices.com), we use cookies to enhance your browsing experience, analyze site traffic, and understand where our visitors are coming from. This Cookie Policy explains how we use cookies and similar technologies.
            </p>
          </div>

          {/* Types of Cookies */}
          <div>
            <h2 className="text-2xl font-bold text-[#7B3F00] mb-6 flex items-center gap-2">
              <span className="text-[#D4AF37]">2.</span> Types of Cookies We Use
            </h2>

            <div className="space-y-6">
              {cookieTypes.map((type, index) => {
                const IconComponent = type.icon;
                return (
                  <div key={index} className="bg-gradient-to-r from-[#FFF8E7] to-white border-l-4 border-[#D4AF37] rounded-lg p-6">
                    <div className="flex items-start gap-4">
                      <div className="w-12 h-12 bg-gradient-to-br from-[#D4AF37] to-[#C09F2F] rounded-full flex items-center justify-center flex-shrink-0">
                        <IconComponent className="w-6 h-6 text-white" />
                      </div>
                      <div className="flex-1">
                        <div className="flex items-center justify-between mb-2">
                          <h3 className="text-lg font-bold text-[#7B3F00]">{type.name}</h3>
                          <span className={`text-xs px-3 py-1 rounded-full ${type.canDisable ? 'bg-green-100 text-green-700' : 'bg-gray-100 text-gray-700'}`}>
                            {type.canDisable ? 'Can Disable' : 'Required'}
                          </span>
                        </div>
                        <p className="text-gray-700 text-sm leading-relaxed text-justify mb-3">
                          {type.description}
                        </p>
                        <p className="text-xs text-gray-600">
                          <strong>Examples:</strong> {type.examples}
                        </p>
                      </div>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>

          {/* How We Use Cookies */}
          <div>
            <h2 className="text-2xl font-bold text-[#7B3F00] mb-4 flex items-center gap-2">
              <span className="text-[#D4AF37]">3.</span> How We Use Cookies
            </h2>
            <p className="text-gray-700 leading-relaxed text-justify mb-4">
              We use cookies for the following purposes:
            </p>
            <ul className="space-y-3 ml-6">
              <li className="text-gray-700 leading-relaxed text-justify flex items-start gap-2">
                <span className="text-[#D4AF37] mt-1">•</span>
                <span><strong className="text-[#7B3F00]">Essential Website Functions:</strong> To enable core functionality such as security, network management, and accessibility.</span>
              </li>
              <li className="text-gray-700 leading-relaxed text-justify flex items-start gap-2">
                <span className="text-[#D4AF37] mt-1">•</span>
                <span><strong className="text-[#7B3F00]">Performance & Analytics:</strong> To understand how visitors use our website, which pages are most popular, and how users navigate through the site.</span>
              </li>
              <li className="text-gray-700 leading-relaxed text-justify flex items-start gap-2">
                <span className="text-[#D4AF37] mt-1">•</span>
                <span><strong className="text-[#7B3F00]">Personalization:</strong> To remember your preferences and settings for future visits.</span>
              </li>
              <li className="text-gray-700 leading-relaxed text-justify flex items-start gap-2">
                <span className="text-[#D4AF37] mt-1">•</span>
                <span><strong className="text-[#7B3F00]">Marketing & Advertising:</strong> To deliver relevant advertisements and track the effectiveness of our campaigns.</span>
              </li>
            </ul>
          </div>

          {/* Third-Party Cookies */}
          <div>
            <h2 className="text-2xl font-bold text-[#7B3F00] mb-4 flex items-center gap-2">
              <span className="text-[#D4AF37]">4.</span> Third-Party Cookies
            </h2>
            <p className="text-gray-700 leading-relaxed text-justify mb-4">
              In addition to our own cookies, we may use third-party cookies to provide analytics services and social media features. These third parties include:
            </p>
            <ul className="space-y-2 ml-6 list-disc">
              <li className="text-gray-700 leading-relaxed text-justify">Google Analytics (for website analytics)</li>
              <li className="text-gray-700 leading-relaxed text-justify">Social media platforms (Facebook, Instagram, LinkedIn, YouTube)</li>
              <li className="text-gray-700 leading-relaxed text-justify">Advertising partners and networks</li>
            </ul>
            <p className="text-gray-700 leading-relaxed text-justify mt-4">
              These third parties may collect information about your online activities over time and across different websites.
            </p>
          </div>

          {/* How to Manage Cookies */}
          <div>
            <h2 className="text-2xl font-bold text-[#7B3F00] mb-4 flex items-center gap-2">
              <span className="text-[#D4AF37]">5.</span> How to Manage Cookies
            </h2>
            <p className="text-gray-700 leading-relaxed text-justify mb-4">
              You have the right to decide whether to accept or reject cookies. You can manage your cookie preferences through:
            </p>

            <div className="bg-[#FFF8E7] rounded-lg p-6 mb-4">
              <h3 className="text-lg font-bold text-[#7B3F00] mb-3">Browser Settings</h3>
              <p className="text-sm text-gray-700 mb-3 text-justify">
                Most web browsers allow you to control cookies through their settings. Here's how to manage cookies in popular browsers:
              </p>
              <ul className="space-y-2 text-sm text-gray-700">
                <li><strong>Chrome:</strong> Settings → Privacy and security → Cookies and other site data</li>
                <li><strong>Firefox:</strong> Options → Privacy & Security → Cookies and Site Data</li>
                <li><strong>Safari:</strong> Preferences → Privacy → Cookies and website data</li>
                <li><strong>Edge:</strong> Settings → Privacy, search, and services → Cookies</li>
              </ul>
            </div>

            <p className="text-gray-700 leading-relaxed text-justify">
              Please note that blocking or deleting cookies may impact your experience on our website and limit the functionality of certain features.
            </p>
          </div>

          {/* Changes to Cookie Policy */}
          <div>
            <h2 className="text-2xl font-bold text-[#7B3F00] mb-4 flex items-center gap-2">
              <span className="text-[#D4AF37]">6.</span> Changes to This Cookie Policy
            </h2>
            <p className="text-gray-700 leading-relaxed text-justify">
              We may update this Cookie Policy from time to time to reflect changes in our practices or for operational, legal, or regulatory reasons. We will notify you of any significant changes by posting the updated policy on this page with a new "Effective Date."
            </p>
          </div>

          {/* Contact Information */}
          <div className="bg-[#FFF8E7] rounded-xl p-6 border-2 border-[#D4AF37]">
            <h2 className="text-2xl font-bold text-[#7B3F00] mb-4 flex items-center gap-2">
              <span className="text-[#D4AF37]">7.</span> Contact Us
            </h2>
            <p className="text-gray-700 mb-4 leading-relaxed text-justify">
              If you have any questions about our use of cookies or this Cookie Policy, please contact us:
            </p>
            <div className="space-y-2 text-gray-700">
              <p><strong className="text-[#7B3F00]">Ceylon Golden Spices</strong></p>
              <p>Website: <a href="https://www.ceylongoldenspices.com" className="text-[#D4AF37] hover:underline">www.ceylongoldenspices.com</a></p>
              <p>Email: <a href="mailto:info@ceylongoldenspices.com" className="text-[#D4AF37] hover:underline">info@ceylongoldenspices.com</a></p>
              <p>Phone: <a href="tel:+94112904000" className="text-[#D4AF37] hover:underline">+94 11 290 4000</a></p>
            </div>
          </div>

          {/* Related Policies */}
          <div className="border-t-2 border-gray-200 pt-6">
            <h3 className="text-lg font-bold text-[#7B3F00] mb-3">Related Policies</h3>
            <div className="flex flex-wrap gap-3">
              <button
                onClick={() => {
                  onNavigate('privacy-policy');
                  scrollToTop();
                }}
                className="bg-[#D4AF37] hover:bg-[#C09F2F] text-white px-6 py-2 rounded-full transition-all hover:scale-105 shadow-md text-sm"
              >
                Privacy Policy
              </button>
              <button
                onClick={() => {
                  onNavigate('terms-of-service');
                  scrollToTop();
                }}
                className="border-2 border-[#7B3F00] text-[#7B3F00] hover:bg-[#7B3F00] hover:text-white px-6 py-2 rounded-full transition-all text-sm"
              >
                Terms & Conditions
              </button>
            </div>
          </div>
        </div>

        {/* Back Button */}
        <div className="mt-8 text-center">
          <button
            onClick={() => {
              onNavigate('home');
              scrollToTop();
            }}
            className="bg-[#D4AF37] hover:bg-[#C09F2F] text-white px-8 py-3 rounded-full transition-all hover:scale-105 shadow-lg"
          >
            Back to Home
          </button>
        </div>
      </div>
    </div>
  );
}
