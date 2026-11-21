import { Link } from 'react-router-dom';
import { ArrowRight, Cpu, Factory, Lightbulb, Hammer, Package, Users, CheckCircle } from 'lucide-react';
import logo from '../assets/logo2.png';

const Home = () => {
  const industries = [
    { name: 'Automotive & Transportation', image: 'https://images.pexels.com/photos/190574/pexels-photo-190574.jpeg?auto=compress&cs=tinysrgb&w=800' },
    { name: 'Industrial Manufacturing', image: 'https://images.pexels.com/photos/1108101/pexels-photo-1108101.jpeg?auto=compress&cs=tinysrgb&w=800' },
    { name: 'Infrastructure', image: 'https://images.pexels.com/photos/356036/pexels-photo-356036.jpeg?auto=compress&cs=tinysrgb&w=800' },
    { name: 'Development', image: 'https://images.pexels.com/photos/3862130/pexels-photo-3862130.jpeg?auto=compress&cs=tinysrgb&w=800' },
    { name: 'Semiconductors', image: 'https://images.pexels.com/photos/2582928/pexels-photo-2582928.jpeg?auto=compress&cs=tinysrgb&w=800' },
    { name: 'Medical Devices', image: 'https://images.pexels.com/photos/3825517/pexels-photo-3825517.jpeg?auto=compress&cs=tinysrgb&w=800' },
   
  ];

  const services = [
    { name: 'Mechanical Engineering', icon: Cpu, path: '/services/engineering#mechanical', image: 'https://images.pexels.com/photos/159298/gears-cogs-machine-machinery-159298.jpeg?auto=compress&cs=tinysrgb&w=800' },
    { name: 'Civil Engineering', icon: Hammer, path: '/services/engineering#civil', image: 'https://images.pexels.com/photos/443383/pexels-photo-443383.jpeg?auto=compress&cs=tinysrgb&w=800' },
    { name: 'Electrical Engineering', icon: Lightbulb, path: '/services/engineering#electrical', image: 'https://images.pexels.com/photos/163100/circuit-circuit-board-resistor-computer-163100.jpeg?auto=compress&cs=tinysrgb&w=800' },
    { name: 'Manufacturing', icon: Factory, path: '/services/manufacturing', image: 'https://images.pexels.com/photos/1078884/pexels-photo-1078884.jpeg?auto=compress&cs=tinysrgb&w=800' },
    { name: 'Industrial Engineering', icon: Package, path: '/services/engineering#industrial', image: 'https://images.pexels.com/photos/1267338/pexels-photo-1267338.jpeg?auto=compress&cs=tinysrgb&w=800' },
    { name: 'Product Development', icon: Users, path: '/about/what-we-do', image: 'https://images.pexels.com/photos/3861969/pexels-photo-3861969.jpeg?auto=compress&cs=tinysrgb&w=800' },
  ];

  const processSteps = [
    { step: '01', name: 'Alignment', description: 'Understanding your vision and goals' },
    { step: '02', name: 'Discovery', description: 'Research and requirements gathering' },
    { step: '03', name: 'Ideation', description: 'Conceptualization and design thinking' },
    { step: '04', name: 'Collaboration', description: 'Development and engineering' },
    { step: '05', name: 'Production', description: 'Manufacturing and quality control' },
    { step: '06', name: 'Support', description: 'Ongoing maintenance and optimization' },
    { step: '07', name: 'Corporate Memory', description: 'Documentation and knowledge transfer' },
  ];

  return (
    <div className="min-h-screen">
     <section className="relative h-screen flex items-center justify-center text-white overflow-hidden">

  {/* ---------- MULTI-LAYER PARALLAX BACKGROUND ---------- */}
  <div className="absolute inset-0 z-0 pointer-events-none">

    {/* Layer 1 – Slow Parallax */}
    <div
      className="absolute inset-0 parallax-layer layer1"
      style={{
        backgroundImage:
          "url('https://images.pexels.com/photos/7484815/pexels-photo-7484815.jpeg')",
        backgroundSize: "cover",
        backgroundPosition: "center",
      }}
    />

    

   

    {/* Gradient Overlay */}
    <div className="absolute inset-0 bg-gradient-to-b from-black/20 to-black/90"></div>

    {/* Floating sparks / dust */}
    <div className="absolute inset-0 animate-sparkle opacity-30"></div>

    
  </div>

  {/* ------------------ HERO CONTENT ------------------ */}
  <div className="relative z-10 text-center px-6">

    {/* Logo */}
    <img
      src={logo}
      alt="Engrinworx Logo"
      className="mx-auto mb-10 w-40 md:w-56 drop-shadow-2xl transition-all duration-700 hover:scale-110 hover:drop-shadow-[0_0_25px_#2979FF]"
    />

    {/* MAIN HEADING */}
  <h1 className="relative text-6xl md:text-8xl font-extrabold mb-6 tracking-tight 
  text-white animate-title-glow select-none"
>


  {/* Outer glow halo */}
  <span className="absolute inset-0 blur-3xl opacity-40 bg-gradient-to-r from-[#C9D6FF] via-[#EAEFFF] to-[#C9D6FF]
 animate-halo"></span>


{/* Main text */}
<span className="relative inline-flex items-center gap-[2px] font-semibold tracking-tight text-[52px] md:text-[82px] leading-none">

 <span className="text-[#f28c1b]">E</span>
  <span className="text-white">N</span>
  <span className="text-white">G</span>
  <span className="text-white">R</span>
  <span className="text-[#32CD32]">I</span>
  <span className="text-white">N</span>
  <span className="text-[#00A9FF]">W</span>
  <span className="text-white">O</span>
  <span className="text-white">R</span>
  <span className="text-white">X</span>

</span>


  {/* Scanning light */}
  <span className="absolute top-0 left-0 w-full h-full overflow-hidden">
    <span className="absolute top-0 left-[-150%] w-1/3 h-full bg-gradient-to-r from-transparent via-white/70 to-transparent 
      animate-scan"></span>
  </span>

  {/* Micro particle burst */}
  <span className="pointer-events-none absolute inset-0 animate-particles"></span>

</h1>


  <p className="text-xl md:text-3xl font-medium tracking-tight mt-[-25px]">


  <span className="text-[#F2C200]">Engineering</span>
  <span className="text-white mx-[4px]">|</span>

  <span className="text-[#32CD32]">Innovation</span>
  <span className="text-white mx-[4px]">|</span>

  <span className="text-[#00A9FF]">Works</span>

</p>

    {/* BUTTONS */}
  <div className="flex flex-col md:flex-row gap-6 justify-center animate-fade-in-soft mt-6">


      <Link
        to="/services"
        className="px-10 py-4 rounded-xl text-lg font-semibold 
        bg-gradient-to-r from-[#2979FF] to-[#1E4FD6]
        shadow-xl hover:shadow-2xl hover:scale-105 transition-all duration-300
        flex items-center gap-2"
      >
        Explore Services <ArrowRight className="w-5 h-5" />
      </Link>

      <Link
        to="/contact"
        className="px-10 py-4 rounded-xl text-lg font-semibold 
        bg-white/10 backdrop-blur-lg border border-white/20 
        hover:bg-white/20 hover:scale-105 shadow-xl transition-all duration-300"
      >
        Contact Us
      </Link>

    </div>
  </div>
</section>



      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-4xl font-bold text-[#0A142F] mb-6">Who We Are</h2>
              <p className="text-lg text-gray-700 mb-4 leading-relaxed">
                Engrinworx (Engineerinworks) is a multi-disciplined engineering company and engineering consulting firm with a diverse team that brings together cutting-edge technology, best-in-class solutions, and world-class expertise to solve your toughest challenges.
              </p>
              <p className="text-lg text-gray-700 mb-6 leading-relaxed">
                We are proud to be a certified women-owned business in the United States, committed to fostering growth and innovation in every project we undertake.
              </p>
              <Link
                to="/about/who-we-are"
                className="inline-flex items-center gap-2 text-[#2979FF] hover:text-[#1e5fd6] font-semibold transition-colors"
              >
                Learn More <ArrowRight className="w-5 h-5" />
              </Link>
            </div>
            <div className="relative h-96 rounded-2xl overflow-hidden shadow-2xl">
              <img
                src="https://images.pexels.com/photos/3861969/pexels-photo-3861969.jpeg?auto=compress&cs=tinysrgb&w=800"
                alt="Engineering team collaboration"
                className="w-full h-full object-cover"
              />
            </div>
          </div>
        </div>
      </section>

      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div className="order-2 md:order-1 relative h-96 rounded-2xl overflow-hidden shadow-2xl">
              <img
                src="https://images.pexels.com/photos/3862130/pexels-photo-3862130.jpeg?auto=compress&cs=tinysrgb&w=800"
                alt="Product development"
                className="w-full h-full object-cover"
              />
            </div>
            <div className="order-1 md:order-2">
              <h2 className="text-4xl font-bold text-[#0A142F] mb-6">What We Do</h2>
              <p className="text-lg text-gray-700 mb-4 leading-relaxed">
                We develop, engineer, design, prototype, test, and manufacture products for inventors, entrepreneurs, startups, and companies alike.
              </p>
              <p className="text-lg text-gray-700 mb-6 leading-relaxed">
                Our flexible development process gives you the opportunity to develop innovative products for any industry.
              </p>
              <div className="space-y-3 mb-6">
                <div className="flex items-start gap-3">
                  <CheckCircle className="w-6 h-6 text-[#2979FF] flex-shrink-0 mt-1" />
                  <span className="text-gray-700">Multi-disciplinary engineering expertise</span>
                </div>
                <div className="flex items-start gap-3">
                  <CheckCircle className="w-6 h-6 text-[#2979FF] flex-shrink-0 mt-1" />
                  <span className="text-gray-700">End-to-end product development</span>
                </div>
                <div className="flex items-start gap-3">
                  <CheckCircle className="w-6 h-6 text-[#2979FF] flex-shrink-0 mt-1" />
                  <span className="text-gray-700">Advanced manufacturing capabilities</span>
                </div>
              </div>
              <Link
                to="/about/what-we-do"
                className="inline-flex items-center gap-2 text-[#2979FF] hover:text-[#1e5fd6] font-semibold transition-colors"
              >
                Discover Our Capabilities <ArrowRight className="w-5 h-5" />
              </Link>
            </div>
          </div>
        </div>
      </section>

      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-[#0A142F] mb-4">Industries We Serve</h2>
            <p className="text-xl text-gray-600">Delivering excellence across diverse sectors</p>
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

      <section className="py-20 bg-[#0A142F] text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold mb-4">Our Services</h2>
            <p className="text-xl text-gray-300">Comprehensive engineering and manufacturing solutions</p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {services.map((service, index) => (
              <Link
                key={index}
                to={service.path}
                className="group relative h-80 rounded-xl overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-2"
              >
                <img
                  src={service.image}
                  alt={service.name}
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-300"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[#0A142F]/95 to-transparent flex items-end p-6">
                  <div>
                    <service.icon className="w-8 h-8 text-[#2979FF] mb-3" />
                    <h3 className="text-white font-bold text-xl">{service.name}</h3>
                  </div>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>


      <section className="py-20 bg-[#2979FF] text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-4xl font-bold mb-6">Lunch & Learn Sessions</h2>
          <p className="text-xl mb-8 max-w-3xl mx-auto">
            Join our interactive learning sessions where we share knowledge, explore innovations, and collaborate on solutions.
          </p>
          <Link
            to="/lunch-and-learn"
            className="inline-flex items-center gap-2 bg-white text-[#2979FF] hover:bg-gray-100 px-8 py-4 rounded-lg font-semibold text-lg transition-all duration-300 shadow-lg"
          >
            Learn More <ArrowRight className="w-5 h-5" />
          </Link>
        </div>
      </section>

      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div className="relative h-96 rounded-2xl overflow-hidden shadow-2xl">
              <img
                src="https://images.pexels.com/photos/3184292/pexels-photo-3184292.jpeg?auto=compress&cs=tinysrgb&w=800"
                alt="Engineering careers"
                className="w-full h-full object-cover"
              />
            </div>
            <div>
              <h2 className="text-4xl font-bold text-[#0A142F] mb-6">Join Our Team</h2>
              <p className="text-lg text-gray-700 mb-6 leading-relaxed">
                We're looking for passionate engineers, innovators, and problem-solvers to join our growing team. Be part of something extraordinary.
              </p>
              <Link
                to="/about/careers"
                className="inline-flex items-center gap-2 bg-[#2979FF] hover:bg-[#1e5fd6] text-white px-8 py-4 rounded-lg font-semibold text-lg transition-all duration-300 shadow-lg"
              >
                View Opportunities <ArrowRight className="w-5 h-5" />
              </Link>
            </div>
          </div>
        </div>
      </section>

      <section className="py-20 bg-gradient-to-r from-[#0A142F] to-[#1a2744] text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-4xl font-bold mb-6">Ready to Start Your Project?</h2>
          <p className="text-xl mb-8 max-w-3xl mx-auto text-gray-300">
            Let's turn your vision into reality. Contact us today for a free consultation.
          </p>
          <Link
            to="/contact"
            className="inline-flex items-center gap-2 bg-[#2979FF] hover:bg-[#1e5fd6] text-white px-8 py-4 rounded-lg font-semibold text-lg transition-all duration-300 shadow-lg"
          >
            Get In Touch <ArrowRight className="w-5 h-5" />
          </Link>
        </div>
      </section>
    </div>
  );
};

export default Home;
