import React from "react";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { FaWhatsapp, FaFacebook, FaTwitter, FaInstagram } from "react-icons/fa";

const Footer = () => {
  return (
    <footer className="bg-secondary text-gray-700 pt-12">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          <div>
            <h3 className="text-lg font-semibold text-primary mb-4">
              Let&apos;s Talk Period with GFC
            </h3>
            <p className="text-sm">
              Empowering girls and women through menstrual health education and
              support.
            </p>
          </div>
          <div>
            <h3 className="text-lg font-semibold text-primary mb-4">
              Quick Links
            </h3>
            <ul className="space-y-2 text-sm">
              <li>
                <Link href="/about" className="hover:text-primary">
                  About Us
                </Link>
              </li>
              <li>
                <Link href="/programs" className="hover:text-primary">
                  Our Work
                </Link>
              </li>
              <li>
                <Link href="/get-involved" className="hover:text-primary">
                  Get Involved
                </Link>
              </li>
              <li>
                <Link href="/contact" className="hover:text-primary">
                  Contact
                </Link>
              </li>
            </ul>
          </div>
          <div>
            <h3 className="text-lg font-semibold text-primary mb-4">
              Join our Newsletter
            </h3>
            <form className="flex flex-col sm:flex-row gap-2">
              <Input
                type="email"
                placeholder="Your email"
                className="flex-grow"
              />
              <Button
                type="submit"
                className="bg-accent text-white hover:bg-accent/90 rounded-full"
              >
                Subscribe
              </Button>
            </form>
            <div className="mt-4">
              <Button className="w-full bg-green-500 text-white hover:bg-green-600 rounded-full flex items-center justify-center gap-2">
                <FaWhatsapp /> Join our WhatsApp Community
              </Button>
            </div>
          </div>
          <div>
            <h3 className="text-lg font-semibold text-primary mb-4">
              Follow Us
            </h3>
            <div className="flex space-x-4">
              <a
                href="#"
                className="text-gray-500 hover:text-primary"
                aria-label="Facebook"
              >
                <FaFacebook size={24} />
              </a>
              <a
                href="#"
                className="text-gray-500 hover:text-primary"
                aria-label="Twitter"
              >
                <FaTwitter size={24} />
              </a>
              <a
                href="#"
                className="text-gray-500 hover:text-primary"
                aria-label="Instagram"
              >
                <FaInstagram size={24} />
              </a>
            </div>
          </div>
        </div>
        <div className="mt-8 border-t border-gray-200 pt-6 pb-8 text-center text-sm">
          <p>
            &copy; {new Date().getFullYear()} Let&apos;s Talk Period with GFC. All
            Rights Reserved.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;