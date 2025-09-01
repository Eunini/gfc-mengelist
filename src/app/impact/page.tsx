"use client";

import { motion } from "framer-motion";
import StatCounter from "@/components/StatCounter";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";
import { Button } from "@/components/ui/button";

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

const testimonials = [
  {
    quote:
      "GFC&apos;s program changed my life. I can now attend school without worrying about my period.",
    author: "Aisha, 15",
  },
  {
    quote:
      "The menstrual health education was eye-opening. I feel so much more confident and informed.",
    author: "Fatima, 17",
  },
  {
    quote:
      "Being a part of The Mengelist Movement has empowered me to become an advocate in my community.",
    author: "Chidinma, 22",
  },
];

const ImpactPage = () => {
  return (
    <>
      <header className="bg-secondary py-20 text-center">
        <AnimatedSection>
          <h1 className="text-5xl font-bold text-primary">Our Impact</h1>
          <p className="text-lg text-gray-700 mt-4 max-w-2xl mx-auto">
            We are proud of the positive change we&apos;ve brought to communities. Here&apos;s a look at our achievements.
          </p>
        </AnimatedSection>
      </header>

      <section className="py-20 bg-white">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <AnimatedSection>
            <h2 className="text-4xl font-bold text-primary text-center mb-12">
              Our Numbers at a Glance
            </h2>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
              <StatCounter value={5000} title="Girls Reached" />
              <StatCounter value={20} title="Schools Partnered" />
              <StatCounter value={10000} title="Pads Distributed" />
              <StatCounter value={500} title="Volunteers Engaged" />
            </div>
          </AnimatedSection>
        </div>
      </section>

      <section className="py-20 bg-secondary">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <AnimatedSection>
            <h2 className="text-4xl font-bold text-primary text-center mb-12">
              Stories from Our Community
            </h2>
            <Carousel
              opts={{
                align: "start",
                loop: true,
              }}
              className="w-full max-w-2xl mx-auto"
            >
              <CarouselContent>
                {testimonials.map((testimonial, index) => (
                  <CarouselItem key={index}>
                    <div className="p-4 text-center">
                      <p className="text-xl italic text-gray-700">
                        &quot;{testimonial.quote}&quot;
                      </p>
                      <p className="mt-4 font-semibold text-accent">
                        - {testimonial.author}
                      </p>
                    </div>
                  </CarouselItem>
                ))}
              </CarouselContent>
              <CarouselPrevious />
              <CarouselNext />
            </Carousel>
          </AnimatedSection>
        </div>
      </section>

      <section className="py-20 bg-white text-center">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <AnimatedSection>
            <h2 className="text-4xl font-bold text-primary mb-6">
              Download Our Impact Reports
            </h2>
            <p className="text-gray-700 mb-8 max-w-2xl mx-auto">
              For a detailed look at our work and financial transparency, please download our annual reports.
            </p>
            <div className="space-x-4">
              <Button className="bg-primary text-white hover:bg-primary/90 rounded-full px-8 py-3">
                2023 Report
              </Button>
              <Button variant="outline" className="rounded-full px-8 py-3">
                2022 Report
              </Button>
            </div>
          </AnimatedSection>
        </div>
      </section>
    </>
  );
};

export default ImpactPage;