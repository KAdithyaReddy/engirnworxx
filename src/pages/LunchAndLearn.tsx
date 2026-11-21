import { Calendar, Users, Lightbulb, Coffee, BookOpen, MessageCircle } from 'lucide-react';

const LunchAndLearn = () => {
  const benefits = [
    {
      icon: BookOpen,
      title: 'Knowledge Sharing',
      description: 'Learn from industry experts and experienced engineers about cutting-edge technologies and best practices.',
    },
    {
      icon: Users,
      title: 'Collaborative Learning',
      description: 'Engage in interactive discussions and share insights with peers in a supportive environment.',
    },
    {
      icon: Lightbulb,
      title: 'Innovation Focus',
      description: 'Explore emerging trends, innovative solutions, and creative approaches to engineering challenges.',
    },
    {
      icon: MessageCircle,
      title: 'Open Discussion',
      description: 'Ask questions, challenge assumptions, and engage in meaningful conversations about real-world problems.',
    },
  ];

  // Updated session topics to match your Proven Process
  const topics = [
    'Alignment – Establishing shared goals and expectations.',
    'Discovery – Understanding your needs and uncovering opportunities.',
    'Ideation – Generating innovative, practical solutions.',
    'Collaboration – Working hand-in-hand for success.',
    'Production – Delivering high-quality engineering outcomes.',
    'Support – Ensuring long-term reliability and performance.',
    'Corporate Memory – Capturing knowledge for future efficiency.',
  ];

  return (
    <div className="min-h-screen">
      <section className="relative py-20 bg-gradient-to-r from-[#0A142F] to-[#1a2744] text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h1 className="text-5xl md:text-6xl font-bold mb-6">Lunch & Learn</h1>
          <p className="text-xl text-gray-300 max-w-3xl">
            Interactive learning sessions where we share knowledge, explore innovations, and collaborate on solutions
          </p>
        </div>
      </section>

      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-2 gap-12 items-center mb-16">
            <div>
              <h2 className="text-4xl font-bold text-[#0A142F] mb-6">What is Lunch & Learn?</h2>
              <p className="text-lg text-gray-700 mb-6 leading-relaxed">
                Our Lunch & Learn sessions are informal, interactive gatherings where engineers, innovators, and industry professionals come together to share knowledge, explore new ideas, and discuss engineering challenges.
              </p>
              <p className="text-lg text-gray-700 mb-6 leading-relaxed">
                These sessions embody our mission: <strong>Learn by doing; Never stop learning.</strong> We believe in continuous education, collaborative problem-solving, and the power of shared expertise.
              </p>
              <p className="text-lg text-gray-700 leading-relaxed">
                Whether you're looking to expand your technical knowledge, explore innovative solutions, or connect with like-minded professionals, our Lunch & Learn sessions provide the perfect environment for growth and collaboration.
              </p>
            </div>
            <div className="relative h-96 rounded-2xl overflow-hidden shadow-2xl">
              <img
                src="https://images.pexels.com/photos/3184292/pexels-photo-3184292.jpeg?auto=compress&cs=tinysrgb&w=800"
                alt="Team collaboration and learning"
                className="w-full h-full object-cover"
              />
            </div>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
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
            <h2 className="text-4xl font-bold text-[#0A142F] mb-4">Session Topics</h2>
            <p className="text-xl text-gray-600">Our Proven Process explained in each session</p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-4 mb-16">
            {topics.map((topic, index) => (
              <div
                key={index}
                className="bg-white p-6 rounded-xl shadow-md hover:shadow-lg transition-all duration-300 hover:-translate-y-1 border-l-4 border-[#2979FF]"
              >
                <p className="text-gray-800 font-semibold">{topic}</p>
              </div>
            ))}
          </div>

          <div className="bg-gradient-to-br from-[#2979FF] to-[#1e5fd6] text-white rounded-2xl p-12">
            <div className="grid md:grid-cols-2 gap-8 items-center">
              <div>
                <Coffee className="w-16 h-16 mb-6" />
                <h3 className="text-3xl font-bold mb-4">How It Works</h3>
                <ul className="space-y-4 text-lg">
                  <li className="flex items-start gap-3">
                    <Calendar className="w-6 h-6 flex-shrink-0 mt-1" />
                    <span>Sessions held regularly throughout the month</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <Users className="w-6 h-6 flex-shrink-0 mt-1" />
                    <span>Small group format for meaningful interaction</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <Coffee className="w-6 h-6 flex-shrink-0 mt-1" />
                    <span>Casual atmosphere with refreshments provided</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <MessageCircle className="w-6 h-6 flex-shrink-0 mt-1" />
                    <span>Open discussion and Q&A encouraged</span>
                  </li>
                </ul>
              </div>
              <div className="relative h-80 rounded-xl overflow-hidden shadow-2xl">
                <img
                  src="https://images.pexels.com/photos/3184306/pexels-photo-3184306.jpeg"
                  alt="Learning session"
                  className="w-full h-full object-cover"
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold text-[#0A142F] mb-6">Who Should Attend?</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto mb-8">
              Our Lunch & Learn sessions are open to everyone interested in engineering, innovation, and continuous learning.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {[
              {
                title: 'Engineers & Designers',
                description: 'Expand your technical knowledge and learn about new tools, technologies, and methodologies.',
              },
              {
                title: 'Entrepreneurs & Startups',
                description: 'Gain insights into product development, manufacturing, and bringing your ideas to market.',
              },
              {
                title: 'Industry Professionals',
                description: 'Stay current with industry trends, network with peers, and share your expertise.',
              },
            ].map((audience, index) => (
              <div
                key={index}
                className="bg-gray-50 p-8 rounded-2xl hover:shadow-lg transition-all duration-300"
              >
                <h3 className="text-2xl font-bold text-[#0A142F] mb-4">{audience.title}</h3>
                <p className="text-gray-700 leading-relaxed">{audience.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-20 bg-gradient-to-r from-[#0A142F] to-[#1a2744] text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-4xl font-bold mb-6">Join Our Next Session</h2>
          <p className="text-xl mb-8 max-w-3xl mx-auto text-gray-300">
            Interested in attending a Lunch & Learn session? Get in touch to learn about upcoming topics and reserve your spot.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a
              href="https://outlook.office.com/book/marketingengrinworxcom@engrinworx.com/?ismsaljsauthenabled "
              className="bg-[#2979FF] hover:bg-[#1e5fd6] text-white px-8 py-4 rounded-lg font-semibold text-lg transition-all duration-300 shadow-lg"
            >
              Register Interest
            </a>
            <a
              href=""
              className="bg-white/10 hover:bg-white/20 backdrop-blur-sm text-white px-8 py-4 rounded-lg font-semibold text-lg transition-all duration-300 border border-white/30"
            >
              Email Us
            </a>
          </div>
        </div>
      </section>
    </div>
  );
};

export default LunchAndLearn;
