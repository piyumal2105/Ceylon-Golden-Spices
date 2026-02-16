import { FileText, ChevronRight } from 'lucide-react';

interface TermsOfServicePageProps {
  onNavigate: (page: string) => void;
}

export function TermsOfServicePage({ onNavigate }: TermsOfServicePageProps) {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <div className="min-h-screen pt-20 bg-gradient-to-b from-white to-[#FFF8E7]">
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
            <span className="text-[#D4AF37]">Terms and Conditions</span>
          </div>
        </div>
      </div>

      {/* Header */}
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="flex items-center gap-4 mb-6">
          <div className="w-16 h-16 bg-gradient-to-br from-[#D4AF37] to-[#C09F2F] rounded-full flex items-center justify-center">
            <FileText className="w-8 h-8 text-white" />
          </div>
          <div>
            <h1 className="text-3xl md:text-4xl font-bold text-[#7B3F00]">Terms and Conditions</h1>
            <p className="text-gray-600">Ceylon Golden Spices</p>
          </div>
        </div>

        <div className="bg-white rounded-2xl shadow-lg p-6 md:p-10 space-y-8">
          {/* Introduction */}
          <div>
            <p className="text-gray-700 leading-relaxed text-justify">
              Welcome to Ceylon Golden Spices. These Terms and Conditions govern your use of our website, www.ceylongoldenspices.com, and the purchase of products through our platform. By accessing or using this website, you agree to be bound by these Terms and Conditions.
            </p>
          </div>

          {/* Section 1 */}
          <div>
            <h2 className="text-2xl font-bold text-[#7B3F00] mb-4 flex items-center gap-2">
              <span className="text-[#D4AF37]">1.</span> About Us
            </h2>
            <p className="text-gray-700 leading-relaxed text-justify">
              Ceylon Golden Spices is a Sri Lanka–based brand specializing in the sale and export of Ceylon spices and spice-based products. All products are sourced and packed in Sri Lanka.
            </p>
          </div>

          {/* Section 2 */}
          <div>
            <h2 className="text-2xl font-bold text-[#7B3F00] mb-4 flex items-center gap-2">
              <span className="text-[#D4AF37]">2.</span> Eligibility
            </h2>
            <p className="text-gray-700 leading-relaxed text-justify">
              By using this website, you confirm that you are at least 18 years of age or accessing the website under the supervision of a legal guardian.
            </p>
          </div>

          {/* Section 3 */}
          <div>
            <h2 className="text-2xl font-bold text-[#7B3F00] mb-4 flex items-center gap-2">
              <span className="text-[#D4AF37]">3.</span> Products and Descriptions
            </h2>
            <p className="text-gray-700 leading-relaxed text-justify">
              We strive to ensure that all product descriptions, images, and information are accurate. However, slight variations may occur due to natural characteristics of spices. Product images are for illustration purposes only.
            </p>
          </div>

          {/* Section 4 */}
          <div>
            <h2 className="text-2xl font-bold text-[#7B3F00] mb-4 flex items-center gap-2">
              <span className="text-[#D4AF37]">4.</span> Pricing
            </h2>
            <p className="text-gray-700 leading-relaxed text-justify">
              All prices displayed on the website are subject to change without prior notice. Prices may be shown in different currencies for reference purposes. Final charges will be based on the selected currency at checkout.
            </p>
          </div>

          {/* Section 5 */}
          <div>
            <h2 className="text-2xl font-bold text-[#7B3F00] mb-4 flex items-center gap-2">
              <span className="text-[#D4AF37]">5.</span> Orders and Acceptance
            </h2>
            <p className="text-gray-700 leading-relaxed text-justify">
              Placing an order constitutes an offer to purchase our products. We reserve the right to accept or reject any order at our discretion. Order confirmation does not guarantee acceptance until payment is successfully processed.
            </p>
          </div>

          {/* Section 6 */}
          <div>
            <h2 className="text-2xl font-bold text-[#7B3F00] mb-4 flex items-center gap-2">
              <span className="text-[#D4AF37]">6.</span> Payments
            </h2>
            <p className="text-gray-700 leading-relaxed text-justify">
              Payments must be made through the approved payment methods available on the website. We do not store or have access to your payment card details.
            </p>
          </div>

          {/* Section 7 */}
          <div>
            <h2 className="text-2xl font-bold text-[#7B3F00] mb-4 flex items-center gap-2">
              <span className="text-[#D4AF37]">7.</span> Shipping and Delivery
            </h2>
            <p className="text-gray-700 leading-relaxed text-justify">
              We ship products locally and internationally. Estimated delivery times are provided for reference only and may vary due to customs clearance, courier delays, or unforeseen circumstances. Any customs duties, taxes, or import charges are the responsibility of the buyer.
            </p>
          </div>

          {/* Section 8 */}
          <div>
            <h2 className="text-2xl font-bold text-[#7B3F00] mb-4 flex items-center gap-2">
              <span className="text-[#D4AF37]">8.</span> Returns and Refunds
            </h2>
            <p className="text-gray-700 leading-relaxed text-justify">
              Due to the nature of food and consumable products, returns are generally not accepted. Refunds may be considered only for damaged, incorrect, or defective items, subject to inspection and approval.
            </p>
          </div>

          {/* Section 9 */}
          <div>
            <h2 className="text-2xl font-bold text-[#7B3F00] mb-4 flex items-center gap-2">
              <span className="text-[#D4AF37]">9.</span> Cancellations
            </h2>
            <p className="text-gray-700 leading-relaxed text-justify">
              Orders may be cancelled before shipment. Once shipped, orders cannot be cancelled.
            </p>
          </div>

          {/* Section 10 */}
          <div>
            <h2 className="text-2xl font-bold text-[#7B3F00] mb-4 flex items-center gap-2">
              <span className="text-[#D4AF37]">10.</span> Intellectual Property
            </h2>
            <p className="text-gray-700 leading-relaxed text-justify">
              All content on this website, including text, images, logos, and designs, is the property of Ceylon Golden Spices and may not be used, reproduced, or distributed without written permission.
            </p>
          </div>

          {/* Section 11 */}
          <div>
            <h2 className="text-2xl font-bold text-[#7B3F00] mb-4 flex items-center gap-2">
              <span className="text-[#D4AF37]">11.</span> Limitation of Liability
            </h2>
            <p className="text-gray-700 leading-relaxed text-justify">
              Ceylon Golden Spices shall not be liable for any indirect, incidental, or consequential damages arising from the use of our products or website.
            </p>
          </div>

          {/* Section 12 */}
          <div>
            <h2 className="text-2xl font-bold text-[#7B3F00] mb-4 flex items-center gap-2">
              <span className="text-[#D4AF37]">12.</span> Governing Law
            </h2>
            <p className="text-gray-700 leading-relaxed text-justify">
              These Terms and Conditions shall be governed by and construed in accordance with the laws of Sri Lanka.
            </p>
          </div>

          {/* Section 13 */}
          <div>
            <h2 className="text-2xl font-bold text-[#7B3F00] mb-4 flex items-center gap-2">
              <span className="text-[#D4AF37]">13.</span> Changes to Terms and Conditions
            </h2>
            <p className="text-gray-700 leading-relaxed text-justify">
              We reserve the right to update or modify these Terms and Conditions at any time without prior notice. Changes will be effective upon posting on the website.
            </p>
          </div>

          {/* Section 14 - Contact */}
          <div className="bg-[#FFF8E7] rounded-xl p-6 border-2 border-[#D4AF37]">
            <h2 className="text-2xl font-bold text-[#7B3F00] mb-4 flex items-center gap-2">
              <span className="text-[#D4AF37]">14.</span> Contact Information
            </h2>
            <p className="text-gray-700 mb-4 leading-relaxed text-justify">
              If you have any questions regarding these Terms and Conditions, please contact us via the details provided on our website.
            </p>
            <div className="space-y-2 text-gray-700">
              <p><strong className="text-[#7B3F00]">Ceylon Golden Spices</strong></p>
              <p>Website: <a href="https://www.ceylongoldenspices.com" className="text-[#D4AF37] hover:underline">www.ceylongoldenspices.com</a></p>
              <p>Email: <a href="mailto:sales@imperialspices.lk" className="text-[#D4AF37] hover:underline">sales@imperialspices.lk</a></p>
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
