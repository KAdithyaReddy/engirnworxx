import { CheckCircle, TrendingUp, Users, Zap, Shield, Target } from 'lucide-react';
import { Link } from 'react-router-dom';

const WhatWeDo = () => {
  const capabilities = [
    'Product Development & Engineering',
    'Prototyping & Testing',
    'Manufacturing & Production',
    'Research & Development',
    'Engineering Consulting',
    'Quality Assurance',
    'Supply Chain Management',
    'Reverse Engineering',
  ];

  const differentiators = [
    {
      icon: Users,
      title: 'Multi-Disciplinary Expertise',
      description: 'Our diverse team brings together mechanical, civil, electrical, and industrial engineering under one roof.',
    },
    {
      icon: Zap,
      title: 'Flexible Development Process',
      description: 'Adaptable workflows that scale from concept to production, tailored to your specific needs.',
    },
    {
      icon: TrendingUp,
      title: 'Cost-Effective Solutions',
      description: 'We optimize every stage of development to deliver maximum value without compromising quality.',
    },
    {
      icon: Shield,
      title: 'Quality-First Approach',
      description: 'Rigorous testing and validation ensure products meet the highest industry standards.',
    },
    {
      icon: Target,
      title: 'Customer-Centric Focus',
      description: 'We align our solutions with your vision, ensuring products match your exact specifications.',
    },
  ];

  const industries = [
    { name: 'Automotive & Transportation', image: 'https://images.pexels.com/photos/190574/pexels-photo-190574.jpeg?auto=compress&cs=tinysrgb&w=800' },
    { name: 'Industrial Manufacturing', image: 'https://images.pexels.com/photos/34938441/pexels-photo-34938441.jpeg' },
    { name: 'Infrastructure', image: 'https://images.pexels.com/photos/356036/pexels-photo-356036.jpeg?auto=compress&cs=tinysrgb&w=800' },
    { name: 'Development', image: 'https://images.pexels.com/photos/3862130/pexels-photo-3862130.jpeg?auto=compress&cs=tinysrgb&w=800' },
    { name: 'Semiconductors', image: 'https://images.pexels.com/photos/2582928/pexels-photo-2582928.jpeg?auto=compress&cs=tinysrgb&w=800' },
    { name: 'Medical Devices', image: 'https://images.pexels.com/photos/3825517/pexels-photo-3825517.jpeg?auto=compress&cs=tinysrgb&w=800' },
   
  ];

  return (
    <div className="min-h-screen">
      <section className="relative py-20 bg-gradient-to-r from-[#0A142F] to-[#1a2744] text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h1 className="text-5xl md:text-6xl font-bold mb-6">What We Do</h1>
          <p className="text-xl text-gray-300 max-w-3xl">
            Comprehensive engineering and manufacturing solutions from concept to production
          </p>
        </div>
      </section>

      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-2 gap-12 items-center mb-16">
            <div>
              <h2 className="text-4xl font-bold text-[#0A142F] mb-6">End-to-End Product Development</h2>
              <p className="text-lg text-gray-700 mb-6 leading-relaxed">
                We combine creativity, knowledge, and analytical tools to complete the difficult task of shaping an idea into reality. This includes solving today's problems and creating future solutions.
                <p>We accelerate engineering across the product ecosystem, i.e., engineering, manufacturing, information technology and other services and help our customers bridge the gap and improve Time to Profit by maximizing Return on Innovation. 
                </p>
              </p>

              <p className="text-lg text-gray-700 mb-6 leading-relaxed">
                We partner with forward-thinking companies to explore new product possibilities, then guide them from concept sketch to first article and beyond. Whether we take on the full project or a specific portion, you can rely on us for the creative vision, technical depth, and agile M.O. to move it across the finish line.
              </p>

              <p className="text-lg text-gray-700 mb-6 leading-relaxed">
                And we don’t stop there: with in-house manufacturing expertise and robust corporate memory, we can even provide production support and sustaining engineering.
              </p>

              <div className="grid grid-cols-2 gap-4">
                {capabilities.map((capability, index) => (
                  <div key={index} className="flex items-start gap-2">
                    <CheckCircle className="w-5 h-5 text-[#2979FF] flex-shrink-0 mt-1" />
                    <span className="text-gray-700">{capability}</span>
                  </div>
                ))}
              </div>
            </div>

            <div className="grid grid-cols-2 gap-4">
              <div className="relative h-64 rounded-xl overflow-hidden shadow-lg">
                <img
                  src="https://images.pexels.com/photos/3862130/pexels-photo-3862130.jpeg?auto=compress&cs=tinysrgb&w=800"
                  alt="Product development"
                  className="w-full h-full object-cover"
                />
              </div>
              <div className="relative h-64 rounded-xl overflow-hidden shadow-lg mt-8">
                <img
                  src="https://images.pexels.com/photos/159298/gears-cogs-machine-machinery-159298.jpeg?auto=compress&cs=tinysrgb&w=800"
                  alt="Engineering components"
                  className="w-full h-full object-cover"
                />
              </div>
              <div className="relative h-64 rounded-xl overflow-hidden shadow-lg -mt-8">
                <img
                  src="https://images.pexels.com/photos/1078884/pexels-photo-1078884.jpeg?auto=compress&cs=tinysrgb&w=800"
                  alt="Manufacturing"
                  className="w-full h-full object-cover"
                />
              </div>
              <div className="relative h-64 rounded-xl overflow-hidden shadow-lg">
                <img
                  src="https://images.pexels.com/photos/3861969/pexels-photo-3861969.jpeg?auto=compress&cs=tinysrgb&w=800"
                  alt="Engineering team"
                  className="w-full h-full object-cover"
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-[#0A142F] mb-4">How We're Different</h2>
            <p className="text-xl text-gray-600">What sets us apart from competitors</p>
          </div>

          <p className="text-lg text-gray-700 max-w-4xl mx-auto leading-relaxed mb-16">
            Every entrepreneur, startup, and company are unique, and you have your own set of skills to contribute to your product’s development. Your engineers should provide the right type of support for your specific needs and not a “one-size-fits-all” process.
            <br /><br />
            At Engrinworx, we offer you free consultations and a free Project Estimate so you can discuss your project confidentially with an experienced lead engineer and draw up the right plan to get what you need. We are always happy to walk you through all your options and help you make informed decisions throughout your product development journey.
            <br /><br />
            Our partnership model is designed to fit your business needs. We help manifest our collective ambitions and build on our dreams. As Our growth story is interwoven with yours, we understand your vision, where you want to go; stepping into your shoes and viewing your perspective and recommending what you need to achieve your Goals. 
            <br /><br />
            We clearly recognize that a sustainable partnership is the cornerstone for our Firm. Should your company experience the cyclical ups and downs, we can help you effectively manage resources by quickly increasing or downsizing the workforce at no cost to you. We provide support to fulfill your long-term business goals or supplement your requirement for project-based needs.
            <br /><br />
            What We offer is a strategic partnership rather than a Vendor-Client relationship; interested to know more on what is it that we offer? Please click on contact us for further details.
          </p>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {differentiators.map((item, index) => (
              <div
                key={index}
                className="bg-white p-8 rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 hover:-translate-y-1"
              >
                <item.icon className="w-12 h-12 text-[#2979FF] mb-4" />
                <h3 className="text-xl font-bold text-[#0A142F] mb-3">{item.title}</h3>
                <p className="text-gray-700 leading-relaxed">{item.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-[#0A142F] mb-4">Industries We Serve</h2>
            <p className="text-xl text-gray-600">Delivering innovation across diverse sectors</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {industries.map((industry, index) => (
              <div
                key={index}
                className="group relative h-64 rounded-xl overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-2"
              >
                <img
                  src={industry.image}
                  alt={industry.name}
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-300"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[#0A142F]/90 to-[#0A142F]/30 flex items-end p-6">
                  <h3 className="text-white font-bold text-lg">{industry.name}</h3>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-20 bg-gradient-to-r from-[#0A142F] to-[#1a2744] text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-4xl font-bold mb-6">Ready to Bring Your Vision to Life?</h2>
          <p className="text-xl mb-8 max-w-3xl mx-auto text-gray-300">
            Let's discuss how we can help you develop innovative products for your industry.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              to="/contact"
              className="bg-[#2979FF] hover:bg-[#1e5fd6] text-white px-8 py-4 rounded-lg font-semibold text-lg transition-all duration-300 shadow-lg"
            >
              Get Started
            </Link>
            <Link
              to="/services"
              className="bg-white/10 hover:bg-white/20 backdrop-blur-sm text-white px-8 py-4 rounded-lg font-semibold text-lg transition-all duration-300 border border-white/30"
            >
              Explore Services
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
};

export default WhatWeDo;
