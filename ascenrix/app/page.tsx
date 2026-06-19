export default function Home() {
  const services = [
    "Salesforce Consulting",
    "Cybersecurity",
    "Cloud Solutions",
    "AI & Automation",
    "Digital Transformation",
    "PMO Consulting",
  ];

  const stats = [
    { value: "150+", label: "Projects Delivered" },
    { value: "98%", label: "Customer Satisfaction" },
    { value: "10+", label: "Years Experience" },
    { value: "24/7", label: "Global Support" },
  ];

  return (
    <main className="min-h-screen bg-slate-50">

      {/* Navbar */}
      <header className="sticky top-0 bg-white shadow-sm z-50">
        <div className="max-w-7xl mx-auto px-6 py-4 flex justify-between items-center">
          <h1 className="text-2xl font-bold text-slate-900">
            ASCENRIX
          </h1>

          <nav className="hidden md:flex gap-8 text-slate-700">
            <a href="#about">About</a>
            <a href="#services">Services</a>
            <a href="#contact">Contact</a>
          </nav>

          <button className="bg-blue-600 text-white px-5 py-2 rounded-lg">
            Schedule Consultation
          </button>
        </div>
      </header>

      {/* Hero */}
      <section className="bg-gradient-to-r from-slate-950 via-slate-900 to-blue-950 text-white">
        <div className="max-w-7xl mx-auto px-6 py-32">

          <h1 className="text-6xl md:text-7xl font-bold mb-6">
            Built to Ascend.
          </h1>

          <p className="text-xl md:text-2xl max-w-3xl text-slate-300 mb-8">
            Transforming businesses through Salesforce,
            Cybersecurity, Cloud, AI and Digital Innovation.
          </p>

          <div className="flex flex-wrap gap-4">
            <button className="bg-blue-600 px-8 py-4 rounded-lg font-medium">
              Schedule Consultation
            </button>

            <button className="border border-white px-8 py-4 rounded-lg">
              Explore Services
            </button>
          </div>
        </div>
      </section>

      {/* About */}
      <section id="about" className="py-24">
        <div className="max-w-7xl mx-auto px-6">

          <h2 className="text-4xl font-bold mb-8">
            About ASCENRIX
          </h2>

          <p className="text-lg text-slate-700 leading-8 max-w-4xl">
            ASCENRIX is a consulting and technology partner helping
            organizations accelerate growth, strengthen security,
            and drive digital transformation. We combine strategic
            advisory, enterprise technology, cybersecurity and cloud
            expertise to deliver measurable business outcomes.
          </p>

        </div>
      </section>

      {/* Services */}
      <section
        id="services"
        className="py-24 bg-white"
      >
        <div className="max-w-7xl mx-auto px-6">

          <h2 className="text-4xl font-bold text-center mb-16">
            Our Services
          </h2>

          <div className="grid md:grid-cols-3 gap-8">

            {services.map((service) => (
              <div
                key={service}
                className="bg-slate-50 border rounded-xl p-8 hover:shadow-lg transition"
              >
                <h3 className="text-xl font-semibold mb-4">
                  {service}
                </h3>

                <p className="text-slate-600">
                  Enterprise-grade consulting and implementation
                  services tailored to your business goals.
                </p>
              </div>
            ))}

          </div>
        </div>
      </section>

      {/* Stats */}
      <section className="bg-slate-900 text-white py-24">

        <div className="max-w-7xl mx-auto px-6">

          <div className="grid md:grid-cols-4 gap-8 text-center">

            {stats.map((stat) => (
              <div key={stat.label}>
                <h3 className="text-5xl font-bold text-blue-400">
                  {stat.value}
                </h3>

                <p className="mt-3 text-slate-300">
                  {stat.label}
                </p>
              </div>
            ))}

          </div>

        </div>
      </section>

      {/* Why Us */}
      <section className="py-24">

        <div className="max-w-7xl mx-auto px-6">

          <h2 className="text-4xl font-bold text-center mb-16">
            Why ASCENRIX
          </h2>

          <div className="grid md:grid-cols-4 gap-8">

            <div className="bg-white p-8 rounded-xl shadow-sm">
              <h3 className="font-bold text-xl mb-3">
                Strategy First
              </h3>

              <p>
                Technology aligned with business objectives.
              </p>
            </div>

            <div className="bg-white p-8 rounded-xl shadow-sm">
              <h3 className="font-bold text-xl mb-3">
                Secure by Design
              </h3>

              <p>
                Security integrated into every solution.
              </p>
            </div>

            <div className="bg-white p-8 rounded-xl shadow-sm">
              <h3 className="font-bold text-xl mb-3">
                Execution Excellence
              </h3>

              <p>
                Delivering measurable business outcomes.
              </p>
            </div>

            <div className="bg-white p-8 rounded-xl shadow-sm">
              <h3 className="font-bold text-xl mb-3">
                Global Delivery
              </h3>

              <p>
                Supporting clients across regions.
              </p>
            </div>

          </div>

        </div>
      </section>

      {/* Contact */}
      <section
        id="contact"
        className="bg-white py-24"
      >
        <div className="max-w-3xl mx-auto px-6">

          <h2 className="text-4xl font-bold text-center mb-12">
            Contact Us
          </h2>

          <form className="space-y-5">

            <input
              type="text"
              placeholder="Full Name"
              className="w-full border rounded-lg p-4"
            />

            <input
              type="email"
              placeholder="Email Address"
              className="w-full border rounded-lg p-4"
            />

            <input
              type="text"
              placeholder="Company Name"
              className="w-full border rounded-lg p-4"
            />

            <textarea
              rows={5}
              placeholder="Tell us about your project"
              className="w-full border rounded-lg p-4"
            />

            <button
              type="submit"
              className="bg-blue-600 text-white px-8 py-4 rounded-lg"
            >
              Submit Inquiry
            </button>

          </form>

        </div>
      </section>

      {/* Footer */}
      <footer className="bg-slate-950 text-white py-10">
        <div className="max-w-7xl mx-auto px-6 text-center">

          <h3 className="text-2xl font-bold">
            ASCENRIX
          </h3>

          <p className="text-slate-400 mt-2">
            Built to Ascend.
          </p>

          <p className="text-slate-500 mt-4 text-sm">
            © 2026 ASCENRIX. All Rights Reserved.
          </p>

        </div>
      </footer>

    </main>
  );
}