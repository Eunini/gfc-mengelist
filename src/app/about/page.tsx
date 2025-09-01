"use client";

import { motion } from "framer-motion";

const AnimatedSection = ({ children }: { children: React.ReactNode }) => (
  <motion.div
    initial={{ opacity: 0, y: 50 }}
    whileInView={{ opacity: 1, y: 0 }}
    viewport={{ once: true, amount: 0.3 }}
    transition={{ duration: 0.6 }}
  >
    {children}
  </motion.div>
);

const AboutPage = () => {
  const timelineEvents = [
    { year: "2020", event: "GFC is founded with a mission to end period poverty." },
    { year: "2021", event: "Launched the 'Pad and Empower' project, reaching 1,000 girls." },
    { year: "2022", event: "Started 'The Mengelist Movement' to build a community of advocates." },
    { year: "2023", event: "Introduced 'Flowsisi Reusables' to promote sustainability." },
  ];

  return (
    <>
      <header className="bg-secondary py-20 text-center">
        <AnimatedSection>
          <h1 className="text-5xl font-bold text-primary">About Us</h1>
          <p className="text-lg text-gray-700 mt-4 max-w-2xl mx-auto">
            We are a passionate team dedicated to creating a world where menstruation is not a barrier to education, health, or dignity.
          </p>
        </AnimatedSection>
      </header>

      <section className="py-20 bg-white">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <AnimatedSection>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
              <div>
                <h2 className="text-4xl font-bold text-primary mb-6">Who We Are</h2>
                <p className="text-gray-700 mb-4">
                  Let&apos;s Talk Period with GFC is a youth-led, non-profit organization. We believe in a world where every girl and woman can manage her menstruation in a hygienic way, wherever she is, in privacy, safety, and with dignity.
                </p>
                <p className="text-gray-700">
                  Our approach is holistic, combining education, access to menstrual products, and advocacy to create sustainable change.
                </p>
              </div>
              <div>
                <div className="bg-gray-300 rounded-lg h-80"></div>
              </div>
            </div>
          </AnimatedSection>
        </div>
      </section>

      <section className="py-20 bg-secondary">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <AnimatedSection>
            <h2 className="text-4xl font-bold text-primary mb-12">Our Vision, Mission & Values</h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              <div>
                <h3 className="text-2xl font-semibold text-accent mb-4">Vision</h3>
                <p className="text-gray-700">A world where menstruation is a normal fact of life by 2030.</p>
              </div>
              <div>
                <h3 className="text-2xl font-semibold text-accent mb-4">Mission</h3>
                <p className="text-gray-700">To empower women and girls through menstrual health education, advocacy, and support.</p>
              </div>
              <div>
                <h3 className="text-2xl font-semibold text-accent mb-4">Core Values</h3>
                <p className="text-gray-700">Empowerment, Inclusivity, Sustainability, and Collaboration.</p>
              </div>
            </div>
          </AnimatedSection>
        </div>
      </section>

      <section className="py-20 bg-white">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <AnimatedSection>
            <h2 className="text-4xl font-bold text-primary text-center mb-12">Our Founding Story</h2>
            <div className="relative">
              <div className="border-l-2 border-primary absolute h-full left-1/2 transform -translate-x-1/2"></div>
              {timelineEvents.map((item, index) => (
                <div key={index} className={`mb-8 flex justify-between items-center w-full ${index % 2 === 0 ? 'flex-row-reverse' : ''}`}>
                  <div className="w-5/12"></div>
                  <div className="z-10">
                    <div className="bg-primary rounded-full h-4 w-4"></div>
                  </div>
                  <div className="w-5/12 bg-secondary p-4 rounded-lg shadow-md">
                    <h3 className="text-xl font-semibold text-accent">{item.year}</h3>
                    <p className="text-gray-700">{item.event}</p>
                  </div>
                </div>
              ))}
            </div>
          </AnimatedSection>
        </div>
      </section>
    </>
  );
};

export default AboutPage;