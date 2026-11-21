import { Target, Eye, Award } from 'lucide-react';

const WhoWeAre = () => {
  const values = [
    'Long-term thinking',
    'Sustainable engineering',
    'Cost-effective solutions',
    'Delivering products & services that match customer vision',
  ];

  return (
    <div className="min-h-screen">
      <section className="relative py-20 bg-gradient-to-r from-[#0A142F] to-[#1a2744] text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h1 className="text-5xl md:text-6xl font-bold mb-6">Who We Are</h1>
          <p className="text-xl text-gray-300 max-w-3xl">
            A multi-disciplined engineering company committed to excellence and innovation
          </p>
        </div>
      </section>

      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-2 gap-12 items-center mb-16">
            <div>
              <h2 className="text-4xl font-bold text-[#0A142F] mb-6">Our Story</h2>
              <p className="text-lg text-gray-700 mb-4 leading-relaxed">
                Engrinworx (Engineerinworks) is a multi-disciplined engineering company and engineering consulting firm with a diverse team that brings together cutting-edge technology, best-in-class solutions, and world-class expertise to solve your toughest challenges.
              </p>
              <p className="text-lg text-gray-700 mb-4 leading-relaxed">
                We are proud to be a <strong>certified women-owned business in the United States</strong>, committed to fostering growth and innovation in every project we undertake.
              </p>
              <p className="text-lg text-gray-700 leading-relaxed">
                We develop, engineer, design, prototype, test, and manufacture products for inventors, entrepreneurs, startups, and companies alike. Our flexible development process gives you the opportunity to develop innovative products for any industry.
              </p>
            </div>
            <div className="relative h-96 rounded-2xl overflow-hidden shadow-2xl">
              <img
                src="https://images.pexels.com/photos/3861969/pexels-photo-3861969.jpeg?auto=compress&cs=tinysrgb&w=800"
                alt="Engineering team collaboration"
                className="w-full h-full object-cover"
              />
            </div>
          </div>

          <div className="grid md:grid-cols-3 gap-8 mb-16">
            <div className="bg-gradient-to-br from-[#0A142F] to-[#1a2744] text-white p-8 rounded-2xl shadow-lg">
              <Eye className="w-12 h-12 text-[#2979FF] mb-4" />
              <h3 className="text-2xl font-bold mb-4">Vision</h3>
              <p className="text-lg text-gray-300">
                Turning Ideas into Great Products.
              </p>
            </div>

            <div className="bg-gradient-to-br from-[#2979FF] to-[#1e5fd6] text-white p-8 rounded-2xl shadow-lg">
              <Target className="w-12 h-12 text-white mb-4" />
              <h3 className="text-2xl font-bold mb-4">Mission</h3>
              <p className="text-lg">
                Build and Empower; Question Assumptions; Learn by doing; Never stop learning.
              </p>
            </div>

            <div className="bg-gradient-to-br from-[#5A5F73] to-[#3d424f] text-white p-8 rounded-2xl shadow-lg">
              <Award className="w-12 h-12 text-[#2979FF] mb-4" />
              <h3 className="text-2xl font-bold mb-4">Values</h3>
              <ul className="space-y-2">
                {values.map((value, index) => (
                  <li key={index} className="text-gray-200 flex items-start">
                    <span className="text-[#2979FF] mr-2">•</span>
                    {value}
                  </li>
                ))}
              </ul>
            </div>
          </div>

          <div className="bg-gray-50 rounded-2xl p-12">
            <h2 className="text-3xl font-bold text-[#0A142F] mb-6 text-center">
              Certified Women-Owned Business
            </h2>
            <p className="text-lg text-gray-700 text-center max-w-4xl mx-auto leading-relaxed">
              We take pride in our certification as a women-owned business in the United States. This distinction reflects our commitment to diversity, innovation, and excellence in engineering. We believe that diverse perspectives drive better solutions and stronger outcomes for our clients.
            </p>
          </div>
        </div>
      </section>

      <section className="py-20 bg-[#0A142F] text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold mb-6">Our Expertise</h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              A diverse team of world-class engineers and innovators
            </p>
          </div>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
            {[
              'Mechanical Engineering',
              'Civil Engineering',
              'Electrical Engineering',
              'Industrial Engineering',
              'Manufacturing',
              'Product Development',
              'R&D',
              'Prototyping',
            ].map((expertise, index) => (
              <div
                key={index}
                className="bg-white/10 backdrop-blur-sm p-6 rounded-xl text-center hover:bg-white/20 transition-all duration-300 border border-white/20"
              >
                <p className="font-semibold text-lg">{expertise}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
};

export default WhoWeAre;
