"use client";

import { motion } from "framer-motion";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import Card from "@/components/Card";

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

const faqData = [
  {
    question: "What is menstruation?",
    answer:
      "Menstruation is the monthly shedding of the lining of the uterus. It is a natural and healthy process for girls and women.",
  },
  {
    question: "How can I manage period pain?",
    answer:
      "Common remedies for period pain include over-the-counter pain relievers, heat pads, light exercise, and a healthy diet.",
  },
  {
    question: "What are reusable menstrual products?",
    answer:
      "Reusable menstrual products, such as menstrual cups and cloth pads, are sustainable and cost-effective alternatives to disposable products.",
  },
];

const blogPosts = [
  {
    title: "Breaking the Silence: Let's Talk About Periods",
    description: "A deep dive into the importance of open conversations about menstruation.",
    link: "/blog/breaking-the-silence",
    linkText: "Read More",
  },
  {
    title: "The Environmental Impact of Menstrual Products",
    description: "Exploring the benefits of sustainable period products.",
    link: "/blog/environmental-impact",
    linkText: "Read More",
  },
  {
    title: "A Guide to Your First Period",
    description: "Everything you need to know to be prepared and confident.",
    link: "/blog/first-period-guide",
    linkText: "Read More",
  },
];

const EducationPage = () => {
  return (
    <>
      <header className="bg-secondary py-20 text-center">
        <AnimatedSection>
          <h1 className="text-5xl font-bold text-primary">Menstrual Health Education</h1>
          <p className="text-lg text-gray-700 mt-4 max-w-2xl mx-auto">
            Knowledge is power. We provide resources to help you understand and manage your menstrual health.
          </p>
        </AnimatedSection>
      </header>

      <section className="py-20 bg-white">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <AnimatedSection>
            <h2 className="text-4xl font-bold text-primary text-center mb-12">
              Frequently Asked Questions
            </h2>
            <Accordion type="single" collapsible className="w-full max-w-2xl mx-auto">
              {faqData.map((faq, index) => (
                <AccordionItem key={index} value={`item-${index}`}>
                  <AccordionTrigger className="text-lg font-semibold">
                    {faq.question}
                  </AccordionTrigger>
                  <AccordionContent className="text-gray-700">
                    {faq.answer}
                  </AccordionContent>
                </AccordionItem>
              ))}
            </Accordion>
          </AnimatedSection>
        </div>
      </section>

      <section className="py-20 bg-secondary">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <AnimatedSection>
            <h2 className="text-4xl font-bold text-primary text-center mb-12">
              From Our Blog
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {blogPosts.map((post, index) => (
                <Card
                  key={index}
                  title={post.title}
                  description={post.description}
                  link={post.link}
                  linkText={post.linkText}
                />
              ))}
            </div>
          </AnimatedSection>
        </div>
      </section>
    </>
  );
};

export default EducationPage;