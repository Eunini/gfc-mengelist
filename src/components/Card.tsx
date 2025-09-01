"use client";

import React from "react";
import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import Link from "next/link";
import { ArrowRight } from "lucide-react";

interface CardProps {
  title: string;
  description: string;
  link: string;
  linkText: string;
}

const Card = ({ title, description, link, linkText }: CardProps) => {
  return (
    <motion.div
      className="bg-background/80 backdrop-blur-sm rounded-2xl shadow-lg p-8 border border-border h-full flex flex-col"
      whileHover={{ y: -10, boxShadow: "0 20px 25px -5px rgba(0, 0, 0, 0.1), 0 10px 10px -5px rgba(0, 0, 0, 0.04)" }}
      transition={{ duration: 0.3 }}
    >
      <div className="flex-grow">
        <h3 className="text-2xl font-bold text-primary mb-4">{title}</h3>
        <p className="text-foreground/80 mb-6">{description}</p>
      </div>
      <Link href={link} passHref>
        <Button className="bg-transparent text-accent hover:bg-accent/10 rounded-full px-6 py-2 group">
          {linkText} <ArrowRight className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1" />
        </Button>
      </Link>
    </motion.div>
  );
};

export default Card;