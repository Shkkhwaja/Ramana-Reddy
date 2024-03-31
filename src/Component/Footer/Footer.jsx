import React from "react";
import { Link } from "react-router-dom";
import { Facebook } from "lucide-react";
import { Instagram } from "lucide-react";
import { Youtube } from "lucide-react";
import { Phone } from 'lucide-react';


export default function Footer() {
  return (
    <footer className="bg-white border-y">
      <div className="mx-auto w-full max-w-screen-xl px-10 py-6 lg:py-8">
        <div className="md:flex md:justify-between">
          <div className="flex flex-wrap gap-[4em] lg:gap-[9em]">
            <div>
              <h2 className="mb-6 text-sm font-semibold text-gray-900 uppercase">
                Quick Links
              </h2>
              <ul className="text-gray-500 font-medium">
                <li className="mb-2">
                  <Link to="/" className="hover:underline">
                    Home
                  </Link>
                </li>
                <li className="mb-2">
                  <Link to="/about" className="hover:underline">
                    About
                  </Link>
                </li>
                <li className="mb-2">
                  <Link to="/about" className="hover:underline">
                    Our Facilities
                  </Link>
                </li>
                <li className="mb-2">
                  <Link to="/about" className="hover:underline">
                    Gallery
                  </Link>
                </li>
                <li className="mb-2">
                  <Link to="/about" className="hover:underline">
                    Contact Us
                  </Link>
                </li>
              </ul>
            </div>
            <div>
              <h2 className="mb-6 text-sm font-semibold text-gray-900 uppercase">
                Follow us
              </h2>
              <ul className="flex gap-4 -ml-4 text-gray-600">
                <li>
                  <Link to="/" className="hover:underline">
                    <Facebook />
                  </Link>
                </li>
                <li>
                  <Link to="/" className="hover:underline">
                    <Instagram />
                  </Link>
                </li>
                <li>
                  <Link to="/" className="hover:underline">
                    <Youtube />
                  </Link>
                </li>
              </ul>
            </div>
            <div>
              <h2 className="mb-6 text-sm font-semibold text-gray-900 uppercase">
                Our Address
              </h2>
              <ul className="text-gray-500 font-medium w-[15em]">
                <li>
                  <h2>
                  Kharadi Rd, Wadgaon Sheri, Pune, Maharashtra 411014
                  </h2>
                  <div className="flex my-2">
                    <Phone />
                    <Link to="tel:+919049299054" className="ml-2 text-gray-700 hover:text-blue-500">
                      +91-9049299054
                    </Link>
                  </div>
                </li>
              </ul>
            </div>
            <div className="relative h-40 w-[20em] ">
            <h2 className="mb-6 text-sm font-semibold text-gray-900 uppercase">
            Google Map
              </h2>
              <Link
                to="https://www.google.com/maps/place/Amma+Saraswati+PG"
                target="_blank"
                rel="noopener noreferrer"
              >
                <iframe
                  className="w-full h-full"
                  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d14458.409979472013!2d77.73501455739621!3d12.95397088354306!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3bae1f8a5f87db0f%3A0x79d9f1ef90383c0c!2sSri%20Laxmi%20Narasimha%20Reddy&#40;s%20PG!5e0!3m2!1sen!2sin!4v1648482801994!5m2!1sen!2sin"
                  allowFullScreen=""
                  aria-hidden="false"
                  tabIndex="0"
                ></iframe>
              </Link>
            </div>
           
          </div>
        </div>
        <hr className="my-6 border-gray-200 sm:mx-auto lg:my-8" />
      </div>
    </footer>
  );
}
