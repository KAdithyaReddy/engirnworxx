import { Factory, Gauge, Boxes, ScanLine, Wrench, Sheet, Cog, Package } from 'lucide-react';

const Manufacturing = () => {
  const services = [
    {
      icon: Wrench,
      title: 'Precision Fabrication',
      description: 'High-precision metal and plastic fabrication with tight tolerances for critical applications.',
      image: 'https://images.pexels.com/photos/1108101/pexels-photo-1108101.jpeg?auto=compress&cs=tinysrgb&w=800',
    },
    {
      icon: Cog,
      title: 'Reliability Engineering',
      description: 'Advanced CNC milling and turning for complex geometries and high-volume production.',
      image: 'https://images.pexels.com/photos/1078884/pexels-photo-1078884.jpeg?auto=compress&cs=tinysrgb&w=800',
    },
    {
      icon: Boxes,
      title: '3D Printing',
      description: 'FDM, SAF, and PolyJet technologies for rapid prototyping and small-batch production.',
      image: 'https://images.pexels.com/photos/373543/pexels-photo-373543.jpeg?auto=compress&cs=tinysrgb&w=800',
      
    },
    {
      icon: ScanLine,
      title: 'Reverse Engineering',
      description: 'Accurate 3D scanning and reconstruction for legacy parts and design optimization.',
      image: 'https://images.pexels.com/photos/2582928/pexels-photo-2582928.jpeg?auto=compress&cs=tinysrgb&w=800',
    },
    {
      icon: Package,
      title: 'Supply Chain Management',
      description: 'Integrated supply chain solutions for materials sourcing and logistics optimization.',
      image: 'https://images.pexels.com/photos/4483610/pexels-photo-4483610.jpeg?auto=compress&cs=tinysrgb&w=800',
    },
    {
      icon: Sheet,
      title: 'Sheet Metal Parts',
      description: 'Custom sheet metal cutting, forming, and assembly for enclosures and structures.',
      image: 'https://images.pexels.com/photos/1216589/pexels-photo-1216589.jpeg?auto=compress&cs=tinysrgb&w=800',
    },
    {
      icon: Gauge,
      title: 'Small Components Manufacturing',
      description: 'Precision manufacturing of small parts and components with consistent quality.',
      image: 'https://images.pexels.com/photos/159298/gears-cogs-machine-machinery-159298.jpeg?auto=compress&cs=tinysrgb&w=800',
    },
    {
      icon: ScanLine,
      title: '3D Scanning',
      description: 'High-resolution 3D scanning for quality control and design verification.',
      image: 'https://images.pexels.com/photos/3861969/pexels-photo-3861969.jpeg?auto=compress&cs=tinysrgb&w=800',
    },
  ];

  const technologies = [
    {
      name: 'FDM 3D Printing',
      description: 'Fused Deposition Modeling for functional prototypes and production parts',
      image: 'https://images.pexels.com/photos/31137405/pexels-photo-31137405.jpeg',
    },
    {
      name: 'SAF 3D Printing',
      description: 'Selective Absorption Fusion for high-quality production parts',
      image: 'https://images.pexels.com/photos/35093698/pexels-photo-35093698.jpeg',
    },
    {
      name: 'PolyJet 3D Printing',
      description: 'Multi-material printing with superior surface finish and detail',
      image: 'https://images.pexels.com/photos/19376296/pexels-photo-19376296.jpeg',
    },
  ];

  return (
    <div className="min-h-screen">
      <section className="relative py-20 bg-gradient-to-r from-[#0A142F] to-[#1a2744] text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h1 className="text-5xl md:text-6xl font-bold mb-6">Manufacturing Services</h1>
          <p className="text-xl text-gray-300 max-w-3xl">
            Advanced manufacturing capabilities from prototyping to full-scale production
          </p>
        </div>
      </section>

      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-2 gap-12 items-center mb-20">
            <div>
              <h2 className="text-4xl font-bold text-[#0A142F] mb-6">Precision Manufacturing Excellence</h2>
              <p className="text-lg text-gray-700 mb-6 leading-relaxed">
                Efficiency is how manufacturing companies can separate themselves from others. The more efficiently a company can produce a product, the more products it can produce at a lower cost which results in higher profit margins. 
<p>One major trend in the industry is using increasingly high-tech production techniques. Firms are always looking for more vendors with advanced technology capabilities in response to pressure from domestic and foreign competitors.</p>

              </p>
              
              <div className="flex items-center gap-3 p-6 bg-[#2979FF]/10 rounded-xl">
                <Factory className="w-12 h-12 text-[#2979FF]" />
                <div>
                  <h3 className="font-bold text-xl text-[#0A142F] mb-1">End-to-End Manufacturing</h3>
                  <p className="text-gray-700">From prototype to production, we handle it all.</p>
                </div>
              </div>
            </div>
            <div className="relative h-96 rounded-2xl overflow-hidden shadow-2xl">
              <img
                src="https://images.pexels.com/photos/1108101/pexels-photo-1108101.jpeg?auto=compress&cs=tinysrgb&w=800"
                alt="Manufacturing facility"
                className="w-full h-full object-cover"
              />
            </div>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {services.map((service, index) => (
              <div
                key={index}
                className="group relative h-80 rounded-xl overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-2"
              >
                <img
                  src={service.image}
                  alt={service.title}
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-300"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[#0A142F]/95 via-[#0A142F]/60 to-transparent flex flex-col justify-end p-6">
                  <service.icon className="w-10 h-10 text-[#2979FF] mb-3" />
                  <h3 className="text-white font-bold text-xl mb-2">{service.title}</h3>
                  <p className="text-gray-300 text-sm">{service.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-[#0A142F] mb-4">3D Printing Technologies</h2>
            <p className="text-xl text-gray-600">Advanced additive manufacturing for rapid prototyping and production</p>
          </div>

          <div className="grid md:grid-cols-3 gap-8 mb-12">
            {technologies.map((tech, index) => (
              <div
                key={index}
                className="bg-white rounded-2xl overflow-hidden shadow-lg hover:shadow-xl transition-all duration-300 hover:-translate-y-1"
              >
                <div className="relative h-56">
                  <img
                    src={tech.image}
                    alt={tech.name}
                    className="w-full h-full object-cover"
                  />
                </div>
                <div className="p-6">
                  <h3 className="text-2xl font-bold text-[#0A142F] mb-3">{tech.name}</h3>
                  <p className="text-gray-700 leading-relaxed">{tech.description}</p>
                </div>
              </div>
            ))}
          </div>

          <div className="bg-white rounded-2xl p-8 shadow-lg">
            <h3 className="text-3xl font-bold text-[#0A142F] mb-6">Why Choose Our Manufacturing Services?</h3>
            <div className="grid md:grid-cols-2 gap-6">
              {[
                {
                  title: 'Advanced Equipment',
                  description: 'State-of-the-art CNC machines and 3D printers for precision manufacturing',
                },
                {
                  title: 'Quality Control',
                  description: 'Rigorous inspection and testing at every stage of production',
                },
                {
                  title: 'Fast Turnaround',
                  description: 'Rapid prototyping and efficient production processes',
                },
                {
                  title: 'Material Expertise',
                  description: 'Wide range of materials including metals, plastics, and composites',
                },
                {
                  title: 'Scalability',
                  description: 'From single prototypes to high-volume production runs',
                },
                {
                  title: 'Cost Efficiency',
                  description: 'Optimized processes that reduce costs without compromising quality',
                },
              ].map((item, index) => (
                <div key={index} className="flex gap-4">
                  <div className="flex-shrink-0 w-12 h-12 bg-[#2979FF]/10 rounded-lg flex items-center justify-center">
                    <Factory className="w-6 h-6 text-[#2979FF]" />
                  </div>
                  <div>
                    <h4 className="font-bold text-lg text-[#0A142F] mb-2">{item.title}</h4>
                    <p className="text-gray-700">{item.description}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section className="py-20 bg-[#0A142F] text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-4xl font-bold mb-6">Reverse Engineering & 3D Scanning</h2>
              <p className="text-lg text-gray-300 mb-6 leading-relaxed">
                Our advanced 3D scanning capabilities allow us to capture precise geometry of existing parts for reverse engineering, quality control, and design verification.
              </p>
              <p className="text-lg text-gray-300 mb-6 leading-relaxed">
                Whether you need to recreate legacy parts, optimize existing designs, or verify manufacturing accuracy, our 3D scanning services provide the data you need.
              </p>
              <ul className="space-y-3">
                {[
                  'High-resolution 3D scanning',
                  'CAD model reconstruction',
                  'Dimensional inspection',
                  'Quality verification',
                  'Design optimization',
                ].map((item, index) => (
                  <li key={index} className="flex items-center gap-3">
                    <div className="w-2 h-2 bg-[#2979FF] rounded-full"></div>
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            </div>
            <div className="relative h-96 rounded-2xl overflow-hidden shadow-2xl">
              <img
                src="https://images.pexels.com/photos/20326699/pexels-photo-20326699.jpeg"
                alt="3D scanning technology"
                className="w-full h-full object-cover"
              />
            </div>
          </div>
        </div>
      </section>

      <section className="py-20 bg-gradient-to-r from-[#2979FF] to-[#1e5fd6] text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-4xl font-bold mb-6">Ready to Manufacture Your Product?</h2>
          <p className="text-xl mb-8 max-w-3xl mx-auto">
            From prototype to production, we deliver manufacturing excellence at every stage.
          </p>
          <a
            href="/contact"
            className="inline-flex items-center gap-2 bg-white text-[#2979FF] hover:bg-gray-100 px-8 py-4 rounded-lg font-semibold text-lg transition-all duration-300 shadow-lg"
          >
            Request a Quote
          </a>
        </div>
      </section>
    </div>
  );
};

export default Manufacturing;
