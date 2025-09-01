"use client";

import React, { useState } from "react";
import Link from "next/link";
import Image from "next/image";
import { motion, AnimatePresence } from "framer-motion";
import { Menu, X } from "lucide-react";
import { Button } from "@/components/ui/button";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const navLinks = [
    { href: "/", label: "Home" },
    { href: "/about", label: "About Us" },
    { href: "/programs", label: "Our Work" },
    { href: "/education", label: "Menstrual Health" },
    { href: "/get-involved", label: "Get Involved" },
    { href: "/impact", label: "Impact" },
    { href: "/gallery", label: "Gallery" },
    { href: "/contact", label: "Contact" },
  ];

  const menuVariants = {
    closed: { opacity: 0, y: -20 },
    open: {
      opacity: 1,
      y: 0,
      transition: {
        staggerChildren: 0.1,
      },
    },
  };

  const linkVariants = {
    closed: { opacity: 0, y: -10 },
    open: { opacity: 1, y: 0 },
  };

  return (
    <nav className="bg-background/80 backdrop-blur-sm sticky top-0 z-50 shadow-md">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-20">
          <div className="flex-shrink-0">
            <Link href="/" className="flex items-center space-x-2">
              <Image src="/logo.png" alt="GFC Logo" width={40} height={40} />
              <span className="text-2xl font-bold text-primary hidden sm:inline">GFC</span>
            </Link>
          </div>
          <div className="hidden md:block">
            <div className="ml-10 flex items-baseline space-x-4">
              {navLinks.map((link) => (
                <Link
                  key={link.href}
                  href={link.href}
                  className="text-foreground hover:text-primary px-3 py-2 rounded-md text-sm font-medium transition-colors"
                >
                  {link.label}
                </Link>
              ))}
            </div>
          </div>
          <div className="hidden md:block">
            <Link href="/donate" passHref>
              <Button className="bg-accent text-white hover:bg-accent/90 rounded-full px-6 py-2 transition-transform hover:scale-105">
                Donate
              </Button>
            </Link>
          </div>
          <div className="-mr-2 flex md:hidden">
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="inline-flex items-center justify-center p-2 rounded-md text-foreground/80 hover:text-primary focus:outline-none"
            >
              {isOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </div>
      </div>
      <AnimatePresence>
        {isOpen && (
          <motion.div
            className="md:hidden bg-background/90"
            initial="closed"
            animate="open"
            exit="closed"
            variants={menuVariants}
          >
            <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3">
              {navLinks.map((link) => (
                <motion.div key={link.href} variants={linkVariants}>
                  <Link
                    href={link.href}
                    className="text-foreground hover:text-primary block px-3 py-2 rounded-md text-base font-medium"
                  >
                    {link.label}
                  </Link>
                </motion.div>
              ))}
              <motion.div variants={linkVariants}>
                <Link href="/donate" passHref>
                  <Button className="w-full bg-accent text-white hover:bg-accent/90 rounded-full mt-2 transition-transform hover:scale-105">
                    Donate
                  </Button>
                </Link>
              </motion.div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
};

export default Navbar;
