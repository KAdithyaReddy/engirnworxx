import { Briefcase, Heart, TrendingUp, Users, Award, ExternalLink } from 'lucide-react';

const Careers = () => {
  const benefits = [
    {
      icon: Heart,
      title: 'Work-Life Balance',
      description: 'We value your well-being and support flexible work arrangements.',
    },
    {
      icon: TrendingUp,
      title: 'Career Growth',
      description: 'Continuous learning opportunities and clear paths for advancement.',
    },
    {
      icon: Users,
      title: 'Collaborative Culture',
      description: 'Work alongside talented engineers and innovators in a supportive environment.',
    },
    {
      icon: Award,
      title: 'Meaningful Work',
      description: 'Tackle challenging projects that make a real impact across industries.',
    },
  ];

  const positions = [
    'Mechanical Engineers',
    'Civil Engineers',
    'Electrical Engineers',
    'Industrial Engineers',
    'Manufacturing Engineers',
    'Product Designers',
    'Project Managers',
    'Quality Assurance Specialists',
  ];

  return (
    <div className="min-h-screen">
      <section className="relative py-20 bg-gradient-to-r from-[#0A142F] to-[#1a2744] text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h1 className="text-5xl md:text-6xl font-bold mb-6">Careers at Engrinworx</h1>
          <p className="text-xl text-gray-300 max-w-3xl">
            Join our team of world-class engineers and innovators
          </p>
        </div>
      </section>

      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-2 gap-12 items-center mb-16">
            <div>
              <h2 className="text-4xl font-bold text-[#0A142F] mb-6">Why Engrinworx?</h2>
              <p className="text-lg text-gray-700 mb-6 leading-relaxed">
                At Engrinworx, we're not just building products—we're shaping the future of engineering. As a certified women-owned business, we're committed to fostering diversity, innovation, and excellence in everything we do.
              </p>
              <p className="text-lg text-gray-700 mb-6 leading-relaxed">
                Our team works on cutting-edge projects across multiple industries, from automotive and aerospace to medical devices and renewable energy. Every day presents new challenges and opportunities to grow your skills and make a meaningful impact.
              </p>
              <p className="text-lg text-gray-700 leading-relaxed">
                We believe in our mission: <strong>Build and Empower; Question Assumptions; Learn by doing; Never stop learning.</strong> If these values resonate with you, we'd love to hear from you.
              </p>
            </div>
            <div className="relative h-96 rounded-2xl overflow-hidden shadow-2xl">
              <img
                src="https://images.pexels.com/photos/3184292/pexels-photo-3184292.jpeg?auto=compress&cs=tinysrgb&w=800"
                alt="Engineering team at work"
                className="w-full h-full object-cover"
              />
            </div>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 mb-16">
            {benefits.map((benefit, index) => (
              <div
                key={index}
                className="bg-gray-50 p-8 rounded-2xl hover:shadow-lg transition-all duration-300 hover:-translate-y-1"
              >
                <benefit.icon className="w-12 h-12 text-[#2979FF] mb-4" />
                <h3 className="text-xl font-bold text-[#0A142F] mb-3">{benefit.title}</h3>
                <p className="text-gray-700 leading-relaxed">{benefit.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold text-[#0A142F] mb-4">Open Positions</h2>
            <p className="text-xl text-gray-600">We're always looking for talented individuals to join our team</p>
          </div>

          <div className="bg-white rounded-2xl shadow-lg p-12 mb-12">
            <div className="grid md:grid-cols-2 gap-6 mb-8">
              {positions.map((position, index) => (
                <div
                  key={index}
                  className="flex items-center gap-3 p-4 bg-gray-50 rounded-lg hover:bg-[#2979FF]/10 transition-colors duration-300"
                >
                  <Briefcase className="w-6 h-6 text-[#2979FF]" />
                  <span className="text-lg text-gray-800 font-medium">{position}</span>
                </div>
              ))}
            </div>

            <div className="text-center">
              <a
                href=" https://www.linkedin.com/company/engrinworx/"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 bg-[#2979FF] hover:bg-[#1e5fd6] text-white px-8 py-4 rounded-lg font-semibold text-lg transition-all duration-300 shadow-lg"
              >
                View Current Openings on LinkedIn <ExternalLink className="w-5 h-5" />
              </a>
            </div>
          </div>

          <div className="grid md:grid-cols-2 gap-8">
            <div className="relative h-80 rounded-2xl overflow-hidden shadow-xl">
              <img
                src="https://images.pexels.com/photos/3861969/pexels-photo-3861969.jpeg?auto=compress&cs=tinysrgb&w=800"
                alt="Team collaboration"
                className="w-full h-full object-cover"
              />
            </div>
            <div className="relative h-80 rounded-2xl overflow-hidden shadow-xl">
              <img
                src="https://images.pexels.com/photos/3183186/pexels-photo-3183186.jpeg?auto=compress&cs=tinysrgb&w=800"
                alt="Engineering workspace"
                className="w-full h-full object-cover"
              />
            </div>
          </div>
        </div>
      </section>

      <section className="py-20 bg-[#0A142F] text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold mb-6">Our Values</h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              What drives us every day
            </p>
          </div>
          <div className="grid md:grid-cols-4 gap-6">
            {[
              { title: 'Long-term Thinking', description: 'Building sustainable solutions for the future' },
              { title: 'Sustainable Engineering', description: 'Responsible innovation that lasts' },
              { title: 'Cost-effective Solutions', description: 'Delivering value without compromise' },
              { title: 'Customer Vision', description: 'Aligning with your goals and expectations' },
            ].map((value, index) => (
              <div
                key={index}
                className="bg-white/10 backdrop-blur-sm p-6 rounded-xl hover:bg-white/20 transition-all duration-300 border border-white/20"
              >
                <h3 className="text-xl font-bold mb-3">{value.title}</h3>
                <p className="text-gray-300">{value.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-20 bg-gradient-to-r from-[#2979FF] to-[#1e5fd6] text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-4xl font-bold mb-6">Ready to Make an Impact?</h2>
          <p className="text-xl mb-8 max-w-3xl mx-auto">
            Don't see a perfect fit? Send us your resume anyway. We're always interested in meeting talented individuals.
          </p>
          <a
            href=" https://www.linkedin.com/company/engrinworx/"
            className="inline-flex items-center gap-2 bg-white text-[#2979FF] hover:bg-gray-100 px-8 py-4 rounded-lg font-semibold text-lg transition-all duration-300 shadow-lg"
          >
            Send Your Resume
          </a>
        </div>
      </section>
    </div>
  );
};

export default Careers;
