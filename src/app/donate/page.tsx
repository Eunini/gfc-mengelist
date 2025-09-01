"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group";
import { Label } from "@/components/ui/label";
import { Slider } from "@/components/ui/slider";

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

const DonatePage = () => {
  const [donationType, setDonationType] = useState("one-time");
  const [amount, setAmount] = useState(50);

  return (
    <>
      <header className="bg-secondary py-20 text-center">
        <AnimatedSection>
          <h1 className="text-5xl font-bold text-primary">Donate</h1>
          <p className="text-lg text-gray-700 mt-4 max-w-2xl mx-auto">
            Your generosity empowers us to continue our vital work. Every contribution makes a difference.
          </p>
        </AnimatedSection>
      </header>

      <section className="py-20 bg-white">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
            <AnimatedSection>
              <h2 className="text-3xl font-bold text-primary mb-6">
                Choose Your Donation
              </h2>
              <div className="bg-gray-50 p-8 rounded-lg">
                <RadioGroup
                  defaultValue="one-time"
                  className="flex justify-center mb-6"
                  onValueChange={setDonationType}
                >
                  <div className="flex items-center space-x-2">
                    <RadioGroupItem value="one-time" id="one-time" />
                    <Label htmlFor="one-time">One-time</Label>
                  </div>
                  <div className="flex items-center space-x-2">
                    <RadioGroupItem value="monthly" id="monthly" />
                    <Label htmlFor="monthly">Monthly</Label>
                  </div>
                </RadioGroup>
                <div className="text-center mb-6">
                  <p className="text-4xl font-bold text-accent">${amount}</p>
                </div>
                <Slider
                  defaultValue={[50]}
                  max={500}
                  step={10}
                  onValueChange={(value) => setAmount(value[0])}
                />
                <div className="flex justify-between text-sm text-gray-500 mt-2">
                  <span>$10</span>
                  <span>$500</span>
                </div>
                <Button className="w-full mt-8 bg-accent text-white hover:bg-accent/90 rounded-full py-3">
                  Donate Now
                </Button>
              </div>
            </AnimatedSection>
            <AnimatedSection>
              <h2 className="text-3xl font-bold text-primary mb-6">
                How Your Funds Are Used
              </h2>
              <div className="space-y-4">
                <div>
                  <h3 className="font-semibold text-lg">70% - Programs</h3>
                  <p className="text-gray-700">
                    Directly funds our projects, including providing menstrual products and education.
                  </p>
                </div>
                <div>
                  <h3 className="font-semibold text-lg">20% - Operations</h3>
                  <p className="text-gray-700">
                    Covers administrative costs to keep our organization running smoothly.
                  </p>
                </div>
                <div>
                  <h3 className="font-semibold text-lg">10% - Fundraising</h3>
                  <p className="text-gray-700">
                    Helps us raise awareness and secure future funding.
                  </p>
                </div>
              </div>
            </AnimatedSection>
          </div>
        </div>
      </section>
    </>
  );
};

export default DonatePage;