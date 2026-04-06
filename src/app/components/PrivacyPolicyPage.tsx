import { Shield, ChevronRight } from 'lucide-react';

interface PrivacyPolicyPageProps {
  onNavigate: (page: string) => void;
}

export function PrivacyPolicyPage({ onNavigate }: PrivacyPolicyPageProps) {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

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
            <span className="text-[#D4AF37]">Privacy Policy</span>
          </div>
        </div>
      </div>

      {/* Header */}
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="flex items-center gap-4 mb-6">
          <div className="w-16 h-16 bg-gradient-to-br from-[#D4AF37] to-[#C09F2F] rounded-full flex items-center justify-center">
            <Shield className="w-8 h-8 text-white" />
          </div>
          <div>
            <h1 className="text-3xl md:text-4xl font-bold text-[#7B3F00]">Privacy Policy</h1>
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
            <p className="text-gray-700 leading-relaxed text-justify">
              Ceylon Golden Spices ("we", "our", or "us") respects your privacy and is committed to protecting your personal information. This Privacy Policy explains how we collect, use, and safeguard your data when you visit our website, www.ceylongoldenspices.com, or purchase our products. By using our website, you agree to the terms of this Privacy Policy.
            </p>
          </div>

          {/* Section 1 */}
          <div>
            <h2 className="text-2xl font-bold text-[#7B3F00] mb-4 flex items-center gap-2">
              <span className="text-[#D4AF37]">1.</span> Information We Collect
            </h2>
            <p className="text-gray-700 mb-4 leading-relaxed text-justify">
              We may collect the following types of information:
            </p>
            <ul className="space-y-3 ml-6">
              <li className="text-gray-700 leading-relaxed text-justify">
                <strong className="text-[#7B3F00]">Personal Information:</strong> Name, email address, phone number, shipping/billing address, payment details (processed securely via third-party gateways).
              </li>
              <li className="text-gray-700 leading-relaxed text-justify">
                <strong className="text-[#7B3F00]">Non-Personal Information:</strong> Browser type, IP address, device type, pages visited, and website usage data.
              </li>
              <li className="text-gray-700 leading-relaxed text-justify">
                <strong className="text-[#7B3F00]">Cookies & Tracking:</strong> We use cookies to enhance user experience and improve website functionality. You may disable cookies via your browser settings, but some features may not work properly.
              </li>
            </ul>
          </div>

          {/* Section 2 */}
          <div>
            <h2 className="text-2xl font-bold text-[#7B3F00] mb-4 flex items-center gap-2">
              <span className="text-[#D4AF37]">2.</span> How We Use Your Information
            </h2>
            <p className="text-gray-700 mb-4 leading-relaxed text-justify">
              We use your information for the following purposes:
            </p>
            <ul className="space-y-2 ml-6 list-disc">
              <li className="text-gray-700 leading-relaxed text-justify">To process orders and deliver products.</li>
              <li className="text-gray-700 leading-relaxed text-justify">To communicate with you regarding order updates, promotions, or inquiries.</li>
              <li className="text-gray-700 leading-relaxed text-justify">To improve our website, products, and services.</li>
              <li className="text-gray-700 leading-relaxed text-justify">To comply with legal obligations and protect our business.</li>
            </ul>
          </div>

          {/* Section 3 */}
          <div>
            <h2 className="text-2xl font-bold text-[#7B3F00] mb-4 flex items-center gap-2">
              <span className="text-[#D4AF37]">3.</span> Sharing Your Information
            </h2>
            <p className="text-gray-700 mb-4 leading-relaxed text-justify">
              We do not sell, trade, or rent your personal information. We may share information with:
            </p>
            <ul className="space-y-3 ml-6">
              <li className="text-gray-700 leading-relaxed text-justify">
                <strong className="text-[#7B3F00]">Service Providers:</strong> Payment processors, shipping companies, IT service providers.
              </li>
              <li className="text-gray-700 leading-relaxed text-justify">
                <strong className="text-[#7B3F00]">Legal Requirements:</strong> If required by law, regulation, or to protect rights and safety.
              </li>
            </ul>
          </div>

          {/* Section 4 */}
          <div>
            <h2 className="text-2xl font-bold text-[#7B3F00] mb-4 flex items-center gap-2">
              <span className="text-[#D4AF37]">4.</span> Data Security
            </h2>
            <p className="text-gray-700 leading-relaxed text-justify">
              We take reasonable measures to protect your personal information from unauthorized access, alteration, disclosure, or destruction. However, no online transmission or storage system is 100% secure.
            </p>
          </div>

          {/* Section 5 */}
          <div>
            <h2 className="text-2xl font-bold text-[#7B3F00] mb-4 flex items-center gap-2">
              <span className="text-[#D4AF37]">5.</span> International Users
            </h2>
            <p className="text-gray-700 leading-relaxed text-justify">
              If you access our website from outside Sri Lanka, your data may be transferred to and processed in Sri Lanka. By using the website, you consent to this transfer.
            </p>
          </div>

          {/* Section 6 */}
          <div>
            <h2 className="text-2xl font-bold text-[#7B3F00] mb-4 flex items-center gap-2">
              <span className="text-[#D4AF37]">6.</span> Your Rights
            </h2>
            <p className="text-gray-700 mb-4 leading-relaxed text-justify">
              You have the right to:
            </p>
            <ul className="space-y-2 ml-6 list-disc">
              <li className="text-gray-700 leading-relaxed text-justify">Access your personal information.</li>
              <li className="text-gray-700 leading-relaxed text-justify">Correct or update inaccurate information.</li>
              <li className="text-gray-700 leading-relaxed text-justify">Request deletion of your data (subject to legal and operational requirements).</li>
            </ul>
            <p className="text-gray-700 mt-4 leading-relaxed text-justify">
              To exercise these rights, please contact us using the details below.
            </p>
          </div>

          {/* Section 7 */}
          <div>
            <h2 className="text-2xl font-bold text-[#7B3F00] mb-4 flex items-center gap-2">
              <span className="text-[#D4AF37]">7.</span> Third-Party Links
            </h2>
            <p className="text-gray-700 leading-relaxed text-justify">
              Our website may contain links to third-party websites. We are not responsible for their privacy practices and encourage you to read their policies.
            </p>
          </div>

          {/* Section 8 */}
          <div>
            <h2 className="text-2xl font-bold text-[#7B3F00] mb-4 flex items-center gap-2">
              <span className="text-[#D4AF37]">8.</span> Children's Privacy
            </h2>
            <p className="text-gray-700 leading-relaxed text-justify">
              Our website is not intended for children under 18. We do not knowingly collect personal information from children.
            </p>
          </div>

          {/* Section 9 */}
          <div>
            <h2 className="text-2xl font-bold text-[#7B3F00] mb-4 flex items-center gap-2">
              <span className="text-[#D4AF37]">9.</span> Changes to This Privacy Policy
            </h2>
            <p className="text-gray-700 leading-relaxed text-justify">
              We may update this Privacy Policy from time to time. The updated version will be posted on the website with the revised "Effective Date."
            </p>
          </div>

          {/* Section 10 - Contact */}
          <div className="bg-[#FFF8E7] rounded-xl p-6 border-2 border-[#D4AF37]">
            <h2 className="text-2xl font-bold text-[#7B3F00] mb-4 flex items-center gap-2">
              <span className="text-[#D4AF37]">10.</span> Contact Us
            </h2>
            <p className="text-gray-700 mb-4 leading-relaxed text-justify">
              If you have questions about this Privacy Policy or your personal data, please contact us:
            </p>
            <div className="space-y-2 text-gray-700">
              <p><strong className="text-[#7B3F00]">Ceylon Golden Spices</strong></p>
              <p>Website: <a href="https://www.ceylongoldenspices.com" className="text-[#D4AF37] hover:underline">www.ceylongoldenspices.com</a></p>
              <p>Email: <a href="mailto:info@ceylongoldenspices.com" className="text-[#D4AF37] hover:underline">info@ceylongoldenspices.com</a></p>
              <p>Phone: <a href="tel:+94112904000" className="text-[#D4AF37] hover:underline">+94 11 290 4000</a></p>
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
