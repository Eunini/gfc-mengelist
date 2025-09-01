"use client";

import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { FaWhatsapp, FaFacebook, FaTwitter, FaInstagram } from "react-icons/fa";

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

const ContactPage = () => {
  return (
    <>
      <header className="bg-secondary py-20 text-center">
        <AnimatedSection>
          <h1 className="text-5xl font-bold text-primary">Contact Us</h1>
          <p className="text-lg text-gray-700 mt-4 max-w-2xl mx-auto">
            We would love to hear from you. Reach out with any questions, partnership proposals, or just to say hello.
          </p>
        </AnimatedSection>
      </header>

      <section className="py-20 bg-white">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
            <AnimatedSection>
              <h2 className="text-3xl font-bold text-primary mb-6">Get in Touch</h2>
              <form>
                <div className="grid grid-cols-1 gap-6">
                  <div>
                    <Label htmlFor="name">Name</Label>
                    <Input id="name" placeholder="Your name" />
                  </div>
                  <div>
                    <Label htmlFor="email">Email</Label>
                    <Input id="email" type="email" placeholder="Your email" />
                  </div>
                  <div>
                    <Label htmlFor="message">Message</Label>
                    <Textarea id="message" placeholder="Your message" />
                  </div>
                  <div className="text-left">
                    <Button type="submit" className="bg-accent text-white hover:bg-accent/90 rounded-full px-8 py-3">
                      Send Message
                    </Button>
                  </div>
                </div>
              </form>
            </AnimatedSection>
            <AnimatedSection>
              <h2 className="text-3xl font-bold text-primary mb-6">
                Connect With Us
              </h2>
              <p className="text-gray-700 mb-6">
                Follow us on social media to stay updated on our latest news and events.
              </p>
              <div className="flex space-x-4 mb-8">
                <a href="#" className="text-gray-500 hover:text-primary"><FaFacebook size={32} /></a>
                <a href="#" className="text-gray-500 hover:text-primary"><FaTwitter size={32} /></a>
                <a href="#" className="text-gray-500 hover:text-primary"><FaInstagram size={32} /></a>
                <a href="#" className="text-gray-500 hover:text-primary"><FaWhatsapp size={32} /></a>
              </div>
              <div>
                <h3 className="text-xl font-semibold text-primary mb-2">Our Location</h3>
                <p className="text-gray-700">123 Charity Lane, Empowerment City, 12345</p>
                {/* Placeholder for a map */}
                <div className="bg-gray-300 rounded-lg h-64 mt-4"></div>
              </div>
            </AnimatedSection>
          </div>
        </div>
      </section>
    </>
  );
};

export default ContactPage;