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
                  <Link to="/aboutus" className="hover:underline">
                    About
                  </Link>
                </li>
                <li className="mb-2">
                  <Link to="/ourfacilities" className="hover:underline">
                    Our Facilities
                  </Link>
                </li>
                <li className="mb-2">
                  <Link to="/ourpgs" className="hover:underline">
                    Our PG's
                  </Link>
                </li>
                <li className="mb-2">
                  <Link to="/gallery" className="hover:underline">
                    Gallery
                  </Link>
                </li>
                <li className="mb-2">
                  <Link to="/contactus" className="hover:underline">
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
              
              <iframe className="w-full h-full" src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d1304.3170968144026!2d73.9321112!3d18.5626712!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3bc2c101400b556d%3A0xf2d14630b34439b1!2sAmma%20Saraswati%20PG!5e0!3m2!1sen!2sin!4v1648959818184" frameborder="0" allowfullscreen></iframe>

            </div>
          </div>
        </div>
        <hr className="my-6 border-gray-200 sm:mx-auto lg:my-8" />
      </div>
    </footer>
  );
}
