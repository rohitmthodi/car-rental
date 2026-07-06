import React from "react";
import Titles from "../titles/Titles";
import { dummyTestimonialsData } from "../constants";
import { motion } from "framer-motion";

const containerVariants = {
  hidden: {},
  visible: {
    transition: {
      staggerChildren: 0.12,
    },
  },
};

const cardVariants = {
  hidden: {
    opacity: 0,
    y: 20,
  },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.45,
      ease: "easeOut",
    },
  },
};

const Testimonials = () => {
  return (
    <section className="px-5 mt-24 mb-20">
      <div className="max-w-7xl mx-auto">
        {/* TITLE */}
        <motion.div
          initial={{ opacity: 0, y: 10 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
        >
          <Titles
            title="What Our Customers Say"
            subTitle="Trusted experiences from people who love our service."
          />
        </motion.div>

        {/* CARDS */}
        <motion.div
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mt-12"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.2 }}
        >
          {dummyTestimonialsData.map((testimonial) => (
            <motion.div
              key={testimonial.id}
              variants={cardVariants}
              whileHover={{
                y: -4,
                transition: { duration: 0.2 },
              }}
              className="bg-white rounded-2xl p-6 border border-gray-100 shadow-sm hover:shadow-md transition-all duration-300 cursor-pointer"
            >
              {/* STARS */}
              <div className="flex items-center gap-1 text-yellow-400 text-sm">
                {[...Array(testimonial.rating)].map((_, index) => (
                  <span key={index}>★</span>
                ))}
              </div>

              {/* REVIEW */}
              <p className="mt-4 text-gray-600 leading-6 text-[14.5px] italic">
                “{testimonial.review}”
              </p>

              {/* USER */}
              <div className="flex items-center gap-3 mt-6 pt-5 border-t border-gray-100">
                <img
                  src={testimonial.image}
                  alt={testimonial.name}
                  loading="lazy"
                  className="w-11 h-11 rounded-full object-cover ring-1 ring-gray-200"
                />

                <div>
                  <h3 className="font-medium text-gray-800 text-sm">
                    {testimonial.name}
                  </h3>
                  <p className="text-xs text-gray-500">{testimonial.place}</p>
                </div>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default Testimonials;