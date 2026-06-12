import React from "react";
import { footerLinks, menuLinks, socialLinks } from "../constants";
import { FaFacebookF, FaInstagram, FaTwitter, FaLinkedinIn } from "react-icons/fa";
import { motion } from "framer-motion";

const Footer = () => {
  const getIcon = (name) => {
    switch (name) {
      case "Facebook":
        return <FaFacebookF />;
      case "Instagram":
        return <FaInstagram />;
      case "Twitter":
        return <FaTwitter />;
      case "LinkedIn":
        return <FaLinkedinIn />;
      default:
        return null;
    }
  };

  return (
    <footer className=" bg-linear-to-r from-slate-950 via-slate-900 to-slate-950 text-white">
      <div className="max-w-7xl mx-auto px-5 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10">
          {/* BRAND */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <h2 className="text-3xl font-bold cursor-default">CarRental</h2>

            <p className="mt-4 text-slate-400 leading-7 cursor-default">
              Experience premium car rentals with comfort, reliability, and
              luxury. Find the perfect ride for every journey.
            </p>
          </motion.div>

          {/* NAVIGIATION */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1 }}
            viewport={{ once: true }}
          >
            <h3 className="font-semibold text-lg mb-5 cursor-default">
              Quick Links
            </h3>

            <ul className="space-y-3">
              {menuLinks.map((link) => (
                <li key={link.name}>
                  <a
                    href={link.path}
                    className="text-slate-400 hover:text-white transition"
                  >
                    {link.name}
                  </a>
                </li>
              ))}
            </ul>
          </motion.div>

          {/* FOOTER LINKS */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
            viewport={{ once: true }}
          >
            <h3 className="font-semibold text-lg mb-5 cursor-default">
              Company
            </h3>

            <ul className="space-y-3">
              {footerLinks.map((link) => (
                <li key={link.name}>
                  <a
                    href={link.path}
                    className="text-slate-400 hover:text-white transition"
                  >
                    {link.name}
                  </a>
                </li>
              ))}
            </ul>
          </motion.div>

          {/* SOCIAL */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3 }}
            viewport={{ once: true }}
          >
            <h3 className="font-semibold text-lg mb-5 cursor-default">
              Follow Us
            </h3>

            <div className="flex gap-4">
              {socialLinks.map((social) => (
                <a
                  key={social.name}
                  href={social.url}
                  target="_blank"
                  rel="noreferrer"
                  className="w-11 h-11 rounded-full bg-slate-800 hover:bg-blue-600 transition-all duration-300 flex items-center justify-center hover:-translate-y-1"
                >
                  {getIcon(social.name)}
                </a>
              ))}
            </div>
          </motion.div>
        </div>

        <div className="border-t border-slate-800 mt-12 pt-6 flex items-center">
          <p className="text-slate-500 text-sm cursor-default">
            © {new Date().getFullYear()} CarRental. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;