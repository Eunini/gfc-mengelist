"use client"

import Hero from "@/components/Hero";
import Card from "@/components/Card";
import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import Link from "next/link";
import Image from "next/image";
import { Droplets } from "lucide-react";

const cardData = [
  {
    title: "Pad and Empower the Girl Child Project",
    description:
      "Providing menstrual products and education to girls in underserved communities.",
    link: "/programs#pad-project",
  },
  {
    title: "The Mengelist Movement",
    description:
      "Building a community of advocates for menstrual health and hygiene.",
    link: "/programs#mengelist-movement",
  },
  {
    title: "Flowsisi Reusables",
    description:
      "Promoting sustainable menstrual products and economic empowerment.",
    link: "/programs#flowsisi",
  },
];

const AnimatedSection = ({ children, className }: { children: React.ReactNode, className?: string }) => (
  <motion.div
    initial={{ opacity: 0, y: 50 }}
    whileInView={{ opacity: 1, y: 0 }}
    viewport={{ once: true, amount: 0.2 }}
    transition={{ duration: 0.8, ease: "easeOut" }}
    className={className}
  >
    {children}
  </motion.div>
);

export default function HomePage() {
  return (
    <div className="overflow-hidden">
      <Hero />

      <main className="relative">
        <div className="absolute top-0 left-0 -z-10 w-full h-full opacity-10">
          <Droplets className="w-full h-full text-primary" />
        </div>

        <section className="py-24 sm:py-32">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <AnimatedSection>
              <h2 className="text-4xl md:text-5xl font-bold text-center text-primary mb-16">
                Our Work
              </h2>
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 lg:gap-12">
                {cardData.map((card, index) => (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, y: 50 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true, amount: 0.3 }}
                    transition={{ duration: 0.6, delay: index * 0.1 }}
                  >
                    <Card
                      title={card.title}
                      description={card.description}
                      link={card.link}
                      linkText="Learn More"
                    />
                  </motion.div>
                ))}
              </div>
            </AnimatedSection>
          </div>
        </section>

        <section className="py-24 sm:py-32 bg-secondary/50">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <AnimatedSection>
              <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20 items-center">
                <motion.div 
                  className="relative"
                  initial={{ scale: 0.8, opacity: 0 }}
                  whileInView={{ scale: 1, opacity: 1 }}
                  viewport={{ once: true, amount: 0.5 }}
                  transition={{ duration: 0.8 }}
                >
                  <div className="aspect-w-1 aspect-h-1">
                    <Image
                      src="/logo.png"
                      alt="About Us Image"
                      layout="fill"
                      objectFit="cover"
                      className="rounded-2xl shadow-2xl"
                    />
                  </div>
                  <div className="absolute -top-4 -left-4 w-24 h-24 bg-accent rounded-full -z-10"></div>
                  <div className="absolute -bottom-4 -right-4 w-32 h-32 bg-primary rounded-2xl -z-10"></div>
                </motion.div>
                <div>
                  <h2 className="text-4xl md:text-5xl font-bold text-primary mb-6">
                    About Us
                  </h2>
                  <p className="text-foreground/80 mb-8 text-lg">
                    Lets Talk Period with GFC is a non-governmental organization dedicated to shattering the stigma surrounding menstruation and empowering women and girls to manage their periods with dignity.
                  </p>
                  <Link href="/about" passHref>
                    <Button size="lg" className="bg-[#ac0a0a] text-white hover:bg-primary/90 rounded-full px-10 py-4 text-lg transition-transform hover:scale-105">
                      Read Our Story
                    </Button>
                  </Link>
                </div>
              </div>
            </AnimatedSection>
          </div>
        </section>

        <section className="py-24 sm:py-32 text-center">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <AnimatedSection className="bg-background rounded-2xl shadow-xl p-8 md:p-12 lg:p-16 border border-border">
              <h2 className="text-4xl md:text-5xl font-bold text-primary mb-6">
                Ready to Make a Difference?
              </h2>
              <p className="text-foreground/80 mb-10 max-w-3xl mx-auto text-lg">
                Join us in our mission to create a world where menstruation is a normal fact of life by 2030. Your support, no matter how big or small, can change lives.
              </p>
              <div className="flex flex-col sm:flex-row justify-center items-center gap-4">
                <Link href="/get-involved" passHref>
                  <Button size="lg" className="bg-[#ac0a0a] text-white hover:bg-accent/90 rounded-full px-10 py-4 text-lg transition-transform hover:scale-105 w-full sm:w-auto">
                    Join Us
                  </Button>
                </Link>
                <Link href="/donate" passHref>
                  <Button size="lg" variant="outline" className="rounded-full px-10 py-4 text-lg transition-transform hover:scale-105 w-full sm:w-auto">
                    Support Our Cause
                  </Button>
                </Link>
              </div>
            </AnimatedSection>
          </div>
        </section>
      </main>
    </div>
  );
}