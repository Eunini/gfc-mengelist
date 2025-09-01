"use client";

import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import Card from "@/components/Card";

const AnimatedSection = ({ children, id }: { children: React.ReactNode; id?: string }) => (
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

const GetInvolvedPage = () => {
  return (
    <>
      <header className="bg-secondary py-20 text-center">
        <AnimatedSection>
          <h1 className="text-5xl font-bold text-primary">Get Involved</h1>
          <p className="text-lg text-gray-700 mt-4 max-w-2xl mx-auto">
            Join us in our mission to create a period-positive world. Your support can make a huge impact.
          </p>
        </AnimatedSection>
      </header>

      <section className="py-20 bg-white">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <AnimatedSection id="volunteer">
            <h2 className="text-4xl font-bold text-primary text-center mb-12">
              Volunteer With Us
            </h2>
            <form className="max-w-xl mx-auto">
              <div className="grid grid-cols-1 gap-6">
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                  <div>
                    <Label htmlFor="firstName">First Name</Label>
                    <Input id="firstName" placeholder="Your first name" />
                  </div>
                  <div>
                    <Label htmlFor="lastName">Last Name</Label>
                    <Input id="lastName" placeholder="Your last name" />
                  </div>
                </div>
                <div>
                  <Label htmlFor="email">Email</Label>
                  <Input id="email" type="email" placeholder="Your email" />
                </div>
                <div>
                  <Label htmlFor="message">Why do you want to volunteer?</Label>
                  <Textarea id="message" placeholder="Your message" />
                </div>
                <div className="text-center">
                  <Button type="submit" className="bg-accent text-white hover:bg-accent/90 rounded-full px-8 py-3">
                    Submit Application
                  </Button>
                </div>
              </div>
            </form>
          </AnimatedSection>
        </div>
      </section>

      <section className="py-20 bg-secondary">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <AnimatedSection>
            <h2 className="text-4xl font-bold text-primary text-center mb-12">
              More Ways to Get Involved
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              <Card
                title="Become a Mengelist"
                description="Join our community of advocates and changemakers."
                link="/programs#mengelist-movement"
                linkText="Learn More"
              />
              <Card
                title="Partner With Us"
                description="Collaborate with us to expand our reach and impact."
                link="/contact"
                linkText="Contact Us"
              />
              <Card
                title="Donate"
                description="Your contribution helps us provide essential resources to girls in need."
                link="/donate"
                linkText="Donate Now"
              />
            </div>
          </AnimatedSection>
        </div>
      </section>
    </>
  );
};

export default GetInvolvedPage;
