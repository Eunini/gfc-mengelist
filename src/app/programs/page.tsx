"use client";

import { motion } from "framer-motion";
import StatCounter from "@/components/StatCounter";
import Card from "@/components/Card";
import { Button } from "@/components/ui/button";
import Link from "next/link";

const AnimatedSection = ({ children, id }: { children: React.ReactNode; id: string }) => (
  <motion.div
    id={id}
    initial={{ opacity: 0, y: 50 }}
    whileInView={{ opacity: 1, y: 0 }}
    viewport={{ once: true, amount: 0.3 }}
    transition={{ duration: 0.6 }}
  >
    {children}
  </motion.div>
);

const ProgramsPage = () => {
  return (
    <>
      <header className="bg-secondary py-20 text-center">
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
        >
          <h1 className="text-5xl font-bold text-primary">Our Work</h1>
          <p className="text-lg text-gray-700 mt-4 max-w-2xl mx-auto">
            We run several programs aimed at empowering girls and women and promoting menstrual health.
          </p>
        </motion.div>
      </header>

      <section className="py-20 bg-white">
        <AnimatedSection id="pad-project">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
              <div>
                <h2 className="text-4xl font-bold text-primary mb-6">Pad and Empower the Girl Child Project</h2>
                <p className="text-gray-700 mb-6">
                  This project provides access to menstrual products, comprehensive menstrual health education, and a supportive community for girls in rural areas. We aim to reduce school absenteeism and empower girls to reach their full potential.
                </p>
                <div className="grid grid-cols-3 gap-4">
                  <StatCounter value={5000} title="Girls Reached" />
                  <StatCounter value={20} title="Schools Partnered" />
                  <StatCounter value={10000} title="Pads Distributed" />
                </div>
              </div>
              <div>
                <div className="bg-gray-300 rounded-lg h-80"></div>
              </div>
            </div>
          </div>
        </AnimatedSection>
      </section>

      <section className="py-20 bg-secondary">
        <AnimatedSection id="mengelist-movement">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-12">
              <h2 className="text-4xl font-bold text-primary">The Mengelist Movement</h2>
              <p className="text-lg text-gray-700 mt-4 max-w-2xl mx-auto">
                A community of passionate individuals advocating for menstrual equity.
              </p>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              <Card
                title="Community"
                description="Join a network of advocates and volunteers."
                link="/get-involved#community"
                linkText="Join Us"
              />
              <Card
                title="Mentorship"
                description="Become a mentor and guide young girls."
                link="/get-involved#mentorship"
                linkText="Become a Mentor"
              />
              <Card
                title="Start a Club"
                description="Establish a menstrual health club in your school or community."
                link="/get-involved#start-club"
                linkText="Start a Club"
              />
            </div>
          </div>
        </AnimatedSection>
      </section>

      <section className="py-20 bg-white">
        <AnimatedSection id="flowsisi">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
              <div>
                <div className="bg-gray-300 rounded-lg h-80"></div>
              </div>
              <div>
                <h2 className="text-4xl font-bold text-primary mb-6">Flowsisi Reusables</h2>
                <p className="text-gray-700 mb-6">
                  We promote the use of reusable menstrual products to ensure sustainability and provide economic opportunities for women. Our reusable pads are locally made and affordable.
                </p>
                <Link href="/donate" passHref>
                  <Button className="bg-accent text-white hover:bg-accent/90 rounded-full px-8 py-3">
                    Support or Buy
                  </Button>
                </Link>
              </div>
            </div>
          </div>
        </AnimatedSection>
      </section>
    </>
  );
};

export default ProgramsPage;