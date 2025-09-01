"use client";

import React from "react";
import { motion } from "framer-motion";
import Image from "next/image";

const galleryImages = [
  // Add your image URLs here
  "https://via.placeholder.com/400x300",
  "https://via.placeholder.com/400x300",
  "https://via.placeholder.com/400x300",
  "https://via.placeholder.com/400x300",
  "https://via.placeholder.com/400x300",
  "https://via.placeholder.com/400x300",
  "https://via.placeholder.com/400x300",
  "https://via.placeholder.com/400x300",
  "https://via.placeholder.com/400x300",
];

const GalleryPage = () => {
  return (
    <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-20">
      <motion.h1
        className="text-5xl font-bold text-primary mb-12 text-center"
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
      >
        Gallery
      </motion.h1>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8">
        {galleryImages.map((src, index) => (
          <motion.div
            key={index}
            className="rounded-lg overflow-hidden shadow-lg"
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.5, delay: index * 0.1 }}
            whileHover={{ scale: 1.05 }}
          >
            <div className="relative w-full h-64">
              <Image src={src} alt={`Gallery image ${index + 1}`} layout="fill" objectFit="cover" />
            </div>
          </motion.div>
        ))}
      </div>
    </div>
  );
};

export default GalleryPage;
