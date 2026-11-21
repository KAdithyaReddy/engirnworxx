import { useEffect } from 'react';
import { useLocation } from 'react-router-dom';
import { Cpu, Building2, Zap, Package, CheckCircle } from 'lucide-react';

const Engineering = () => {
  const location = useLocation();

  useEffect(() => {
    if (location.hash) {
      const element = document.getElementById(location.hash.substring(1));
      if (element) {
        element.scrollIntoView({ behavior: 'smooth' });
      }
    }
  }, [location]);

 const mechanicalServices = [
  'Component Design',
  'Tool Design',
  'Jigs & Fixtures Design',
  'Concept Generation',
  'Tolerance Analysis',
  'Reverse Engineering',
  '3D Modelling',
  'Large Assembly Management',
  'Legacy Conversion',
  'Manufacturing Drawings',
  'Static Analysis',
  'Thermal Analysis',
  'CFD',
  'Dynamic Analysis',
  'Fatigue Evaluation',
  'Maintenance',
  'Modifications',
  'Production Support',
  'ECR/ECO'
];

 const civilServices = [
  'Master Layouts & Unit Plans',
  'Interior Planning',
  'HVAC System Design',
  'Electrical & Plumbing System Design & Detailing',

  'Stability Certificate',
  'Structural Analysis & Design',
  'GFC Drawings for All Major Structural Systems',

  'Drinking Water Systems Design',
  'Sewage & Wastewater Management',

  'Green Building Certification',
  'Pavement Engineering',

  'Pedestrian & Vehicular Traffic Assessment',
];
  const electricalServices = [
  // Power & Electrical Systems
  'Power System Design & Analysis',
  'Electrical Distribution & Control Systems',
  'Lighting & Energy Efficiency Solutions',
  'Protection & Grounding Systems',
  'Compliance with NEC, IEC & Other Standards',

  // Embedded Systems & Hardware
  'Embedded Systems Development',
  'Embedded Software Application Development',
  'Embedded Systems & Microcontroller Programming',
  'HW Accelerators (FPGA/GPU)',
  'FPGA/GPU Programming',

  // AI, ML & Algorithms
  'AI/ML Algorithms & Model Development',
  'Signal Processing & Control Systems',

  // PCB & Electronics
  'Circuit Design & PCB Layout',
  'PCB Design & Prototyping',
  'Sensor Integration & IoT Solutions',
  'Electronics Testing & Validation',
  'Semiconductor Design',
  'Electronics Manufacturing',

  // Power & Control (from base list)
  'Power Systems Engineering',
  'Control Systems'
];

 const industrialServices = [
  // Lean, Quality & Improvement
  'Lean and Six Sigma Implementation',
  'Continuous Improvement Programs',
  'Statistical Process Control (SPC)',
  'Time and Motion Studies',

  // Process & Workflow Optimization
  'Workflow and Layout Redesign',
  'Factory, Warehouse, or Office Layout Design',
  'Material Handling Systems',
  'Process Modeling for “What-If” Scenarios',
  'Data-Driven Optimization',

  // Supply Chain & Logistics
  'Route and Logistics Network Design',
  'Inventory and Demand Planning',
  'Supplier Performance Analysis',

  // Simulation & Analysis
  'Discrete-Event or Agent-Based Simulations'
];
  return (
    <div className="min-h-screen">
      <section className="relative py-20 bg-gradient-to-r from-[#0A142F] to-[#1a2744] text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h1 className="text-5xl md:text-6xl font-bold mb-6">Engineering Services</h1>
          <p className="text-xl text-gray-300 max-w-3xl">
            World-class engineering expertise across multiple disciplines
          </p>
        </div>
      </section>

      <section id="mechanical" className="py-20 bg-white scroll-mt-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div>
              <div className="flex items-center gap-3 mb-6">
                <Cpu className="w-12 h-12 text-[#2979FF]" />
                <h2 className="text-4xl font-bold text-[#0A142F]">Mechanical Engineering</h2>
              </div>
              <p className="text-lg text-gray-700 mb-6 leading-relaxed">
              One of the most diverse and versatile engineering fields, mechanical engineering is the study of objects and systems in motion. As such, the field of mechanical engineering touches virtually every aspect of modern life, including the human body, a highly complex machine.
<p>The role of a mechanical engineer is to take a product from an idea to the marketplace. To accomplish this, the mechanical engineer must be able to determine the forces and thermal environment that a product, its parts, or its subsystems will encounter; design them for functionality, aesthetics, and durability; and determine the best manufacturing approach that will ensure operation without failure.</p>
<p>Our Mechanical engineers play key roles in a wide range of industries including automotive, aerospace, biotechnology, computers, electronics, microelectromechanical systems, energy conversion, robotics and automation, and manufacturing. </p>

              </p>
              <h3 className="text-2xl font-bold text-[#0A142F] mb-4">Core Services</h3>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                {mechanicalServices.map((service, index) => (
                  <div key={index} className="flex items-start gap-2">
                    <CheckCircle className="w-5 h-5 text-[#2979FF] flex-shrink-0 mt-1" />
                    <span className="text-gray-700">{service}</span>
                  </div>
                ))}
              </div>
            </div>
            <div className="grid grid-cols-2 gap-4">
              <div className="relative h-64 rounded-xl overflow-hidden shadow-lg">
                <img
                  src="https://images.pexels.com/photos/159298/gears-cogs-machine-machinery-159298.jpeg?auto=compress&cs=tinysrgb&w=800"
                  alt="Mechanical components"
                  className="w-full h-full object-cover"
                />
              </div>
              <div className="relative h-64 rounded-xl overflow-hidden shadow-lg mt-8">
                <img
                  src="https://images.pexels.com/photos/257736/pexels-photo-257736.jpeg?auto=compress&cs=tinysrgb&w=800"
                  alt="CAD design"
                  className="w-full h-full object-cover"
                />
              </div>
              <div className="relative h-64 rounded-xl overflow-hidden shadow-lg -mt-8">
                <img
                  src="https://images.pexels.com/photos/34938443/pexels-photo-34938443.jpeg"
                  alt="Manufacturing"
                  className="w-full h-full object-cover"
                />
              </div>
              <div className="relative h-64 rounded-xl overflow-hidden shadow-lg">
                <img
                  src="https://images.pexels.com/photos/190574/pexels-photo-190574.jpeg?auto=compress&cs=tinysrgb&w=800"
                  alt="Mechanical systems"
                  className="w-full h-full object-cover"
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      <section id="civil" className="py-20 bg-gray-50 scroll-mt-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div className="order-2 md:order-1 grid grid-cols-2 gap-4">
              <div className="relative h-64 rounded-xl overflow-hidden shadow-lg">
                <img
                  src="https://images.pexels.com/photos/443383/pexels-photo-443383.jpeg?auto=compress&cs=tinysrgb&w=800"
                  alt="Bridge engineering"
                  className="w-full h-full object-cover"
                />
              </div>
              <div className="relative h-64 rounded-xl overflow-hidden shadow-lg mt-8">
                <img
                  src="https://images.pexels.com/photos/356036/pexels-photo-356036.jpeg?auto=compress&cs=tinysrgb&w=800"
                  alt="Infrastructure"
                  className="w-full h-full object-cover"
                />
              </div>
              <div className="relative h-64 rounded-xl overflow-hidden shadow-lg -mt-8">
                <img
                  src="https://images.pexels.com/photos/210182/pexels-photo-210182.jpeg?auto=compress&cs=tinysrgb&w=800"
                  alt="Construction"
                  className="w-full h-full object-cover"
                />
              </div>
              <div className="relative h-64 rounded-xl overflow-hidden shadow-lg">
                <img
                  src="https://images.pexels.com/photos/834892/pexels-photo-834892.jpeg?auto=compress&cs=tinysrgb&w=800"
                  alt="Building systems"
                  className="w-full h-full object-cover"
                />
              </div>
            </div>
            <div className="order-1 md:order-2">
              <div className="flex items-center gap-3 mb-6">
                <Building2 className="w-12 h-12 text-[#2979FF]" />
                <h2 className="text-4xl font-bold text-[#0A142F]">Civil Engineering</h2>
              </div>
              <p className="text-lg text-gray-700 mb-6 leading-relaxed">
                Civil engineering is arguably the oldest engineering discipline. It deals with the built environment and can be dated to the first time someone placed a roof over his or her head or laid a tree trunk across a river to make it easier to get across.
<p>The built environment encompasses much of what defines modern civilization. Buildings and bridges are often the first constructions that come to mind, as they are the most conspicuous creations of structural engineering, one of civil engineering's major sub-disciplines. Roads, railroads, subway systems, and airports are designed by transportation engineers, another category of civil engineering. And then there are the less visible creations of civil engineers. Every time you open a water faucet, you expect water to come out, without thinking that civil engineers made it possible.</p>

              </p>
            
              <h3 className="text-2xl font-bold text-[#0A142F] mb-4">Core Services</h3>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                {civilServices.map((service, index) => (
                  <div key={index} className="flex items-start gap-2">
                    <CheckCircle className="w-5 h-5 text-[#2979FF] flex-shrink-0 mt-1" />
                    <span className="text-gray-700">{service}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      <section id="electrical" className="py-20 bg-white scroll-mt-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div>
              <div className="flex items-center gap-3 mb-6">
                <Zap className="w-12 h-12 text-[#2979FF]" />
                <h2 className="text-4xl font-bold text-[#0A142F]">Electrical & Electronics Engineering</h2>
              </div>
              <p className="text-lg text-gray-700 mb-6 leading-relaxed">
               Electrical and Electronics Engineering (EEE) is a form of engineering that focuses on the study, design, and application of electrical systems, electronic devices, and electromagnetism. It combines two closely related fields — electrical engineering and electronics engineering — which together cover a wide range of technologies that power modern life.
<p>Electrical & Electronics engineering is a form of engineering associated with electronic circuits, devices and the equipment and systems that use them.</p>
<p>With the amount of electronics used in modern society there is a great need for electronics engineers. The forms of engineering can take many forms, meaning that specific interests and aptitudes can often use them in multiple areas and our focus is semiconductor engineering </p>
<p>We specialize in designing and implementing electrical systems that are safe, scalable, and energy efficient. Our services include: Power System Design & Analysis</p>
<p>Our engineers are basically electronic engineers working in the semiconductor field with a focus on HW Accelerators for areas like FinTech (algorithmic trading), video streaming services ; AI/ML algos/models on FPGAs and GPUs and Embedded sw application development for FPGA and GPUs targeting only to computer vision, Deep neural networks, etc</p>

              </p>
              <p className="text-lg text-gray-700 mb-6 leading-relaxed">
                From FPGA programming to GPU acceleration, we deliver high-performance solutions for the most demanding applications in semiconductors, telecommunications, and industrial automation.
              </p>
              <h3 className="text-2xl font-bold text-[#0A142F] mb-4">Core Services</h3>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                {electricalServices.map((service, index) => (
                  <div key={index} className="flex items-start gap-2">
                    <CheckCircle className="w-5 h-5 text-[#2979FF] flex-shrink-0 mt-1" />
                    <span className="text-gray-700">{service}</span>
                  </div>
                ))}
              </div>
            </div>
            <div className="grid grid-cols-2 gap-4">
              <div className="relative h-64 rounded-xl overflow-hidden shadow-lg">
                <img
                  src="https://images.pexels.com/photos/163100/circuit-circuit-board-resistor-computer-163100.jpeg?auto=compress&cs=tinysrgb&w=800"
                  alt="Circuit board"
                  className="w-full h-full object-cover"
                />
              </div>
              <div className="relative h-64 rounded-xl overflow-hidden shadow-lg mt-8">
                <img
                  src="https://images.pexels.com/photos/2582928/pexels-photo-2582928.jpeg?auto=compress&cs=tinysrgb&w=800"
                  alt="Semiconductors"
                  className="w-full h-full object-cover"
                />
              </div>
              <div className="relative h-64 rounded-xl overflow-hidden shadow-lg -mt-8">
                <img
                  src="https://images.pexels.com/photos/343457/pexels-photo-343457.jpeg?auto=compress&cs=tinysrgb&w=800"
                  alt="Electronics"
                  className="w-full h-full object-cover"
                />
              </div>
              <div className="relative h-64 rounded-xl overflow-hidden shadow-lg">
                <img
                  src="https://images.pexels.com/photos/442152/pexels-photo-442152.jpeg?auto=compress&cs=tinysrgb&w=800"
                  alt="PCB design"
                  className="w-full h-full object-cover"
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      <section id="industrial" className="py-20 bg-gray-50 scroll-mt-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div className="order-2 md:order-1 grid grid-cols-2 gap-4">
              <div className="relative h-64 rounded-xl overflow-hidden shadow-lg">
                <img
                  src="https://images.pexels.com/photos/1267338/pexels-photo-1267338.jpeg?auto=compress&cs=tinysrgb&w=800"
                  alt="Factory optimization"
                  className="w-full h-full object-cover"
                />
              </div>
              <div className="relative h-64 rounded-xl overflow-hidden shadow-lg mt-8">
                <img
                  src="https://images.pexels.com/photos/34938443/pexels-photo-34938443.jpeg"
                  alt="Manufacturing process"
                  className="w-full h-full object-cover"
                />
              </div>
              <div className="relative h-64 rounded-xl overflow-hidden shadow-lg -mt-8">
                <img
                  src="https://images.pexels.com/photos/4483610/pexels-photo-4483610.jpeg?auto=compress&cs=tinysrgb&w=800"
                  alt="Logistics"
                  className="w-full h-full object-cover"
                />
              </div>
              <div className="relative h-64 rounded-xl overflow-hidden shadow-lg">
                <img
                  src="https://images.pexels.com/photos/1797428/pexels-photo-1797428.jpeg?auto=compress&cs=tinysrgb&w=800"
                  alt="Production planning"
                  className="w-full h-full object-cover"
                />
              </div>
            </div>
            <div className="order-1 md:order-2">
              <div className="flex items-center gap-3 mb-6">
                <Package className="w-12 h-12 text-[#2979FF]" />
                <h2 className="text-4xl font-bold text-[#0A142F]">Industrial Engineering</h2>
              </div>
              <p className="text-lg text-gray-700 mb-6 leading-relaxed">
               Industrial Engineering (IE) is a branch of engineering that focuses on optimizing complex systems, processes, or organizations. The role of a industrial engineer is to make operations more efficient, productive, and cost-effective — whether in manufacturing, healthcare, logistics, or services.
<p>Our Industrial engineers study how work gets done and then find smarter, faster, and better ways to do it.
They look at the “big picture” — how all parts of a system fit together — to reduce waste, improve quality, and increase profitability.</p>

              </p>
              
              <h3 className="text-2xl font-bold text-[#0A142F] mb-4">Core Services</h3>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                {industrialServices.map((service, index) => (
                  <div key={index} className="flex items-start gap-2">
                    <CheckCircle className="w-5 h-5 text-[#2979FF] flex-shrink-0 mt-1" />
                    <span className="text-gray-700">{service}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="py-20 bg-gradient-to-r from-[#0A142F] to-[#1a2744] text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-4xl font-bold mb-6">Ready to Start Your Engineering Project?</h2>
          <p className="text-xl mb-8 max-w-3xl mx-auto text-gray-300">
            Our multi-disciplinary team is ready to tackle your toughest engineering challenges.
          </p>
          <a
            href="/contact"
            className="inline-flex items-center gap-2 bg-[#2979FF] hover:bg-[#1e5fd6] text-white px-8 py-4 rounded-lg font-semibold text-lg transition-all duration-300 shadow-lg"
          >
            Contact Us Today
          </a>
        </div>
      </section>
    </div>
  );
};

export default Engineering;
