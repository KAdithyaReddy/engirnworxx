import { Rocket, Sparkles } from 'lucide-react';

const Products = () => {
  return (
    <div className="min-h-screen">
      <section className="relative py-20 bg-gradient-to-r from-[#0A142F] to-[#1a2744] text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h1 className="text-5xl md:text-6xl font-bold mb-6">Products</h1>
          <p className="text-xl text-gray-300 max-w-3xl">
            Innovative products designed and manufactured by Engrinworx
          </p>
        </div>
      </section>

      <section className="py-32 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <div className="inline-flex items-center justify-center w-24 h-24 bg-gradient-to-br from-[#2979FF] to-[#1e5fd6] rounded-full mb-8">
            <Rocket className="w-12 h-12 text-white" />
          </div>
          <h2 className="text-5xl font-bold text-[#0A142F] mb-6">Coming Soon</h2>
          <p className="text-2xl text-gray-600 mb-8 max-w-2xl mx-auto">
            We're working on exciting new products that will transform the industry.
          </p>
          <div className="flex items-center justify-center gap-2 text-[#2979FF]">
            <Sparkles className="w-6 h-6" />
            <span className="text-lg font-semibold">Stay tuned for updates</span>
            <Sparkles className="w-6 h-6" />
          </div>
        </div>
      </section>

      <section className="py-20 bg-gradient-to-br from-[#0A142F] via-[#1a2744] to-[#2979FF]/20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-3 gap-8">
            {[1, 2, 3].map((index) => (
              <div
                key={index}
                className="relative h-80 rounded-2xl overflow-hidden bg-gradient-to-br from-white/10 to-white/5 backdrop-blur-sm border border-white/20"
              >
                <div className="absolute inset-0 flex items-center justify-center">
                  <div className="text-center p-8">
                    <div className="w-20 h-20 bg-white/10 rounded-full mx-auto mb-4 flex items-center justify-center">
                      <Sparkles className="w-10 h-10 text-[#2979FF]" />
                    </div>
                    <h3 className="text-white text-2xl font-bold mb-2">Product {index}</h3>
                    <p className="text-gray-300">Innovation in progress</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-4xl font-bold text-[#0A142F] mb-6">Interested in Our Future Products?</h2>
          <p className="text-xl text-gray-600 mb-8 max-w-3xl mx-auto">
            Get in touch to learn more about our upcoming product launches and innovations.
          </p>
          <a
            href="/contact"
            className="inline-flex items-center gap-2 bg-[#2979FF] hover:bg-[#1e5fd6] text-white px-8 py-4 rounded-lg font-semibold text-lg transition-all duration-300 shadow-lg"
          >
            Contact Us
          </a>
        </div>
      </section>
    </div>
  );
};

export default Products;
