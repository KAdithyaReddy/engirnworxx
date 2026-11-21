import { Target, Search, Lightbulb, Users, Factory, HeadphonesIcon, FileText, CheckCircle } from 'lucide-react';

const Process = () => {
  const steps = [
    {
      number: '01',
      name: 'Alignment',
      icon: Target,
      description:
        'We begin by aligning with your vision, goals, and expectations. This stage ensures that both parties share a clear understanding of project objectives, timelines, and success metrics. Alignment reduces ambiguity and sets the foundation for a collaborative partnership.',
      details: [
        'Stakeholder meetings',
        'Goal clarification',
        'Defining scope and priorities',
      ],
      image: 'https://images.pexels.com/photos/3184292/pexels-photo-3184292.jpeg?auto=compress&cs=tinysrgb&w=800',
    },
    {
      number: '02',
      name: 'Discovery',
      icon: Search,
      description:
        'In this phase, we dive deep into understanding your challenges, requirements, and constraints. Our team conducts research, audits, and feasibility studies to uncover insights that inform the solution design.',
      details: [
        'Data collection and analysis',
        'Process mapping',
        'Identifying risks and opportunities',
      ],
      image: 'https://images.pexels.com/photos/3861969/pexels-photo-3861969.jpeg?auto=compress&cs=tinysrgb&w=800',
    },
    {
      number: '03',
      name: 'Ideation',
      icon: Lightbulb,
      description:
        'Here, creativity meets engineering. We brainstorm and conceptualize innovative solutions tailored to your needs. Multiple ideas are evaluated for technical feasibility, cost-effectiveness, and scalability.',
      details: [
        'Concept development',
        'Technical validation',
        'Cost-benefit analysis',
      ],
      image: 'https://images.pexels.com/photos/3862130/pexels-photo-3862130.jpeg?auto=compress&cs=tinysrgb&w=800',
    },
    {
      number: '04',
      name: 'Collaboration',
      icon: Users,
      description:
        'Engrinworx works closely with your team to refine concepts and finalize plans. This stage emphasizes transparency, communication, and joint decision-making to ensure the solution aligns perfectly with your business objectives.',
      details: [
        'Regular progress reviews',
        'Feedback loops',
        'Collaborative design sessions',
      ],
      image: 'https://images.pexels.com/photos/5716025/pexels-photo-5716025.jpeg',
    },
    {
      number: '05',
      name: 'Production',
      icon: Factory,
      description:
        'Once plans are approved, we move into execution. Our engineers and project managers ensure that designs are translated into tangible results with precision and efficiency.',
      details: [
        'Prototype build',
        'Testing, Manufacturing or implementation',
        'Quality assurance and compliance checks',
      ],
      image: 'https://images.pexels.com/photos/2965258/pexels-photo-2965258.jpeg',
    },
    {
      number: '06',
      name: 'Support',
      icon: HeadphonesIcon,
      description:
        'Our commitment doesn’t end at delivery. We provide ongoing support to maintain system performance, troubleshoot issues, and implement upgrades as needed.',
      details: [
        'Maintenance services',
        'Technical assistance',
        'Performance monitoring',
      ],
      image: 'https://images.pexels.com/photos/5483077/pexels-photo-5483077.jpeg?auto=compress&cs=tinysrgb&w=800',
    },
    {
      number: '07',
      name: 'Corporate Memory',
      icon: FileText,
      description:
        'Engrinworx captures and documents all project learnings, processes, and outcomes to create a corporate memory. This ensures continuity, knowledge transfer, and efficiency for future engagements.',
      details: [
        'Documentation of workflows',
        'Archiving best practices',
        'Building a knowledge repository',
      ],
      image: 'https://images.pexels.com/photos/4164418/pexels-photo-4164418.jpeg?auto=compress&cs=tinysrgb&w=800',
    },
  ];

  return (
    <div className="min-h-screen">
      <section className="relative py-20 bg-gradient-to-r from-[#0A142F] to-[#1a2744] text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h1 className="text-5xl md:text-6xl font-bold mb-6">Our Process</h1>
          <p className="text-xl text-gray-300 max-w-3xl">
            A systematic 7-step approach to engineering excellence
          </p>
        </div>
      </section>

      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-[#0A142F] mb-4">From Vision to Reality</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Our proven 7-step process ensures that every project is delivered with precision, quality, and excellence. We guide you through each phase with transparency and expertise.
            </p>
          </div>

          <div className="space-y-24">
            {steps.map((step, index) => (
              <div
                key={index}
                className={`grid md:grid-cols-2 gap-12 items-center ${
                  index % 2 === 1 ? 'md:grid-flow-col-dense' : ''
                }`}
              >
                <div className={index % 2 === 1 ? 'md:col-start-2' : ''}>
                  <div className="flex items-center gap-4 mb-6">
                    <div className="w-20 h-20 bg-gradient-to-br from-[#2979FF] to-[#1e5fd6] rounded-full flex items-center justify-center shadow-lg">
                      <step.icon className="w-10 h-10 text-white" />
                    </div>
                    <div>
                      <span className="text-4xl font-bold text-[#2979FF]/30">{step.number}</span>
                      <h3 className="text-3xl font-bold text-[#0A142F]">{step.name}</h3>
                    </div>
                  </div>
                  <p className="text-xl text-gray-600 mb-6">{step.description}</p>
                  <ul className="space-y-3">
                    {step.details.map((detail, detailIndex) => (
                      <li key={detailIndex} className="flex items-start gap-3">
                        <CheckCircle className="w-6 h-6 text-[#2979FF] flex-shrink-0 mt-0.5" />
                        <span className="text-gray-700 text-lg">{detail}</span>
                      </li>
                    ))}
                  </ul>
                </div>
                <div className={index % 2 === 1 ? 'md:col-start-1 md:row-start-1' : ''}>
                  <div className="relative h-96 rounded-2xl overflow-hidden shadow-2xl">
                    <img
                      src={step.image}
                      alt={step.name}
                      className="w-full h-full object-cover"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-[#0A142F]/50 to-transparent"></div>
                    <div className="absolute bottom-6 left-6 right-6">
                      <span className="text-white text-5xl font-bold opacity-50">{step.number}</span>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold text-[#0A142F] mb-6">Why Our Process Works</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Our systematic approach ensures consistent quality, predictable outcomes, and exceptional results.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {[
              {
                title: 'Proven Track Record',
                description:
                  'Successfully delivered hundreds of projects across diverse industries using this methodology.',
              },
              {
                title: 'Transparent Communication',
                description:
                  'Regular updates and clear milestones keep you informed at every stage of development.',
              },
              {
                title: 'Flexible & Adaptive',
                description:
                  'Our process adapts to your unique requirements while maintaining quality standards.',
              },
              {
                title: 'Risk Mitigation',
                description:
                  'Early validation and testing reduce risks and prevent costly mistakes down the line.',
              },
              {
                title: 'Cost Efficiency',
                description:
                  'Systematic planning and optimization minimize waste and maximize value delivery.',
              },
              {
                title: 'Knowledge Retention',
                description:
                  'Comprehensive documentation ensures continuity and facilitates future enhancements.',
              },
            ].map((item, index) => (
              <div
                key={index}
                className="bg-white p-8 rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 hover:-translate-y-1"
              >
                <h3 className="text-xl font-bold text-[#0A142F] mb-3">{item.title}</h3>
                <p className="text-gray-700 leading-relaxed">{item.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-20 bg-gradient-to-r from-[#0A142F] to-[#1a2744] text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-4xl font-bold mb-6">Ready to Start Your Project?</h2>
          <p className="text-xl mb-8 max-w-3xl mx-auto text-gray-300">
            Let's begin with step one: understanding your vision and aligning on goals.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a
              href="https://outlook.office.com/book/marketingengrinworxcom@engrinworx.com/?ismsaljsauthenabled"
              className="bg-[#2979FF] hover:bg-[#1e5fd6] text-white px-8 py-4 rounded-lg font-semibold text-lg transition-all duration-300 shadow-lg"
            >
              Schedule Consultation
            </a>
            <a
              href="/lunch-and-learn"
              className="bg-white/10 hover:bg-white/20 backdrop-blur-sm text-white px-8 py-4 rounded-lg font-semibold text-lg transition-all duration-300 border border-white/30"
            >
              Learn More at Lunch & Learn
            </a>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Process;
