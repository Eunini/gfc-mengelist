"use client";

import React from "react";
import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import Link from "next/link";
import { Droplets, Heart } from "lucide-react";

const Hero = () => {
  return (
    <section className="relative bg-background text-center py-32 sm:py-40 lg:py-48 overflow-hidden">
      <div className="absolute inset-0 bg-primary/10 -z-10"></div>
      <div className="absolute top-10 left-10 w-32 h-32 bg-accent/20 rounded-full animate-blob"></div>
      <div className="absolute bottom-20 right-20 w-40 h-40 bg-secondary/30 rounded-full animate-blob animation-delay-2000"></div>
      <div className="absolute bottom-10 left-1/4 w-20 h-20 bg-primary/20 rounded-full animate-blob animation-delay-4000"></div>

      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <motion.h1
          className="text-5xl sm:text-6xl lg:text-7xl font-bold text-primary mb-6"
          initial={{ opacity: 0, y: -30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
        >
          Let’s Talk Period with GFC
        </motion.h1>
        <motion.p
          className="text-lg sm:text-xl lg:text-2xl text-foreground/80 mb-10 max-w-3xl mx-auto"
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2, ease: "easeOut" }}
        >
          Shattering stigma and empowering women and girls through menstrual health education and support.
        </motion.p>
        <motion.div
          className="flex flex-col sm:flex-row justify-center items-center gap-4"
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.4, ease: "easeOut" }}
        >
          <Link href="/get-involved" passHref>
            <Button
              size="lg"
              className="bg-[#ac0a0a] text-white hover:bg-[#c72f2f] rounded-full px-10 py-4 text-lg transition-transform hover:scale-105 w-full sm:w-auto"
            >
              <Heart className="mr-2 h-5 w-5" />
              Get Involved
            </Button>
          </Link>
          <Link href="/donate" passHref>
            <Button size="lg" variant="outline" className="rounded-full px-10 py-4 text-lg transition-transform hover:scale-105 w-full sm:w-auto">
              <Droplets className="mr-2 h-5 w-5" />
              Support Our Cause
            </Button>
          </Link>
        </motion.div>
      </div>
    </section>
  );
};

export default Hero;