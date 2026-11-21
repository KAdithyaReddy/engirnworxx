import { Mail, Phone, MapPin, ExternalLink } from 'lucide-react';
import { Link } from 'react-router-dom';

const Contact = () => {
  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="relative py-20 bg-gradient-to-r from-[#0A142F] to-[#1a2744] text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h1 className="text-5xl md:text-6xl font-bold mb-6">Contact Us</h1>
          <p className="text-xl text-gray-300 max-w-3xl">
            Let's discuss how we can help bring your vision to life
          </p>
        </div>
      </section>

      {/* Contact Info Section */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12">
            
            {/* LEFT SIDE */}
            <div>
              <h2 className="text-4xl font-bold text-[#0A142F] mb-6">Get In Touch</h2>
              <p className="text-lg text-gray-700 mb-8 leading-relaxed">
                Whether you have a question about our services, need a quote, or want
                to discuss your project, we're here to help. Reach out to us via
                email or phone.
              </p>

              <div className="space-y-6 mb-8">
                {/* Email */}
                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 bg-[#2979FF]/10 rounded-lg flex items-center justify-center flex-shrink-0">
                    <Mail className="w-6 h-6 text-[#2979FF]" />
                  </div>
                  <div>
                    <h3 className="font-bold text-lg text-[#0A142F] mb-1">Email</h3>
                    

<a
  href="https://mail.google.com/mail/?view=cm&fs=1&to=contact@engineerinworx.com"
  target="_blank"
  rel="noopener noreferrer"
    className="text-gray-700 hover:text-[#2979FF] transition-colors"
>
  <Mail className="w-4 h-4 sm:w-5 sm:h-5" />
  <span>contact@engineerinworx.com</span>
</a>


                    
                  </div>
                </div>

                {/* Phone */}
                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 bg-[#2979FF]/10 rounded-lg flex items-center justify-center flex-shrink-0">
                    <Phone className="w-6 h-6 text-[#2979FF]" />
                  </div>
                  <div>
                    <h3 className="font-bold text-lg text-[#0A142F] mb-1">Phone</h3>
                    <a
                      href="tel:+1234567890"
                      className="text-gray-700 hover:text-[#2979FF] transition-colors"
                    >
                      +1 (234) 567-890
                    </a>
                  </div>
                </div>
              </div>

              <div className="bg-gray-50 rounded-2xl p-6">
                <h3 className="font-bold text-lg text-[#0A142F] mb-4">Career Opportunities</h3>
                <p className="text-gray-700 mb-4">
                  Interested in joining our team? Check out our current openings.
                </p>
                <Link
                  to="/about/careers"
                  className="inline-flex items-center gap-2 text-[#2979FF] hover:text-[#1e5fd6] font-semibold transition-colors"
                >
                  View Careers <ExternalLink className="w-4 h-4" />
                </Link>
              </div>
            </div>

            {/* RIGHT SIDE — NEW DIRECTLY REACH US (REPLACES OLD BOX) */}
            <div>
              <div className="bg-[#E9F7FD] rounded-2xl p-10 shadow-lg flex flex-col items-center text-center h-full">

                <h3 className="text-3xl font-bold text-[#0A142F] mb-4">
                  Directly Reach Us
                </h3>

                <p className="text-gray-600 text-lg mb-10 leading-relaxed max-w-md">
                  Skip the forms — call or email us directly. We're always available
                  to connect and assist with your needs.
                </p>

                {/* Call Button */}
                <a
                  href="tel:+1234567890"
                  className="w-full max-w-sm bg-[#1BC5E8] hover:bg-[#18b3d3] text-white font-semibold 
                  py-4 rounded-xl shadow-lg flex items-center justify-center gap-3 text-lg transition mb-4"
                >
                  <Phone className="h-6 w-6" />
                  Call +1 (234) 567-890
                </a>

                {/* Email Button */}
               

                <a
  href="https://mail.google.com/mail/?view=cm&fs=1&to=contact@engineerinworx.com"
  target="_blank"
  rel="noopener noreferrer"
     className="w-full max-w-sm bg-white text-gray-800 font-semibold py-4 rounded-xl 
                  shadow-md flex items-center justify-center gap-3 text-lg border border-gray-200 
                  transition hover:bg-gray-50">
  <Mail className="w-4 h-4 sm:w-5 sm:h-5" />
  <span>contact@engineerinworx.com</span>
</a>


              </div>
            </div>

          </div>
        </div>
      </section>

      {/* Map Section */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="bg-white rounded-2xl shadow-lg overflow-hidden">
            <div className="aspect-w-16 aspect-h-9 h-96">
              <iframe
                 src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d0!2d0!3d0!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0!2s8+The+Green+STE+A,+Dover,+DE+19901,+United+States!5e0!3m2!1sen!2sus!4v1680000000000!5m2!1sen!2sus"
                width="100%"
                height="100%"
                style={{ border: 0 }}
                allowFullScreen
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                title="Location Map"
              />
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-r from-[#2979FF] to-[#1e5fd6] text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-4xl font-bold mb-6">Ready to Get Started?</h2>
          <p className="text-xl mb-8 max-w-3xl mx-auto">
            Schedule a free consultation to discuss your project and learn how we
            can help turn your vision into reality.
          </p>
          <a
            href="https://outlook.office.com/book/marketingengrinworxcom@engrinworx.com/?ismsaljsauthenabled "
            className="inline-flex items-center gap-2 bg-white text-[#2979FF] hover:bg-gray-100 px-8 py-4 rounded-lg font-semibold text-lg transition-all duration-300 shadow-lg"
          >
            Schedule Free Consultation
          </a>
        </div>
      </section>
    </div>
  );
};

export default Contact;
