import React from 'react';
import { motion } from 'framer-motion';
import { cardVariants, hoverLift, sectionVariants, sectionViewport } from '../common/motionPresets';

const OFFICES = [
  {
    country: 'United Kingdom',
    city: 'Birmingham',
    address: '286 Unit A, Green Lane, Small Heath, Birmingham, England, B9 5DN',
    image:
      'https://images.unsplash.com/photo-1480714378408-67cf0d13bc1b?auto=format&fit=crop&w=800&q=80', 
    mapUrl:
      'https://www.google.com/maps/search/?api=1&query=286+Unit+A%2C+Green+Lane%2C+Small+Heath%2C+Birmingham%2C+England%2C+B9+5DN',
  },
];

function OfficesSection() {
  return (
    <motion.section
      className="py-16 bg-white"
      variants={sectionVariants}
      initial="hidden"
      whileInView="show"
      viewport={sectionViewport}
    >
      <div className="max-w-6xl mx-auto px-4">
        <motion.div variants={cardVariants} className="text-center mb-10 sm:mb-12">
          <p className="text-xs tracking-[0.4em] uppercase text-blue-500/70 mb-3">
            Our Offices
          </p>
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-semibold text-gray-800">
            Global Presence
          </h2>
        </motion.div>
        <div className="grid grid-cols-1 md:grid-cols-1 gap-6 max-w-2xl mx-auto">
          {OFFICES.map((office) => (
            office.mapUrl ? (
              <motion.a
                key={office.city}
                variants={cardVariants}
                whileHover={hoverLift}
                href={office.mapUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="group flex flex-col items-center transition-transform duration-300 transform hover:-translate-y-2 hover:scale-105 hover:shadow-2xl bg-white rounded-xl border border-gray-200/60 shadow-lg p-3 cursor-pointer"
              >
                <h3 className="text-2xl font-bold mb-4 text-gray-800 group-hover:text-blue-600 transition-colors duration-200">{office.country}</h3>
                <img
                  src={office.image}
                  alt={office.city}
                  className="w-full max-w-md h-52 object-cover rounded-xl shadow-lg mb-3"
                  style={{ transition: 'box-shadow 0.3s, transform 0.3s' }}
                />
                <span className="text-xl font-semibold text-gray-700 group-hover:text-blue-500 transition-colors duration-200">{office.city}</span>
                <span className="mt-2 text-center text-sm text-gray-500 leading-relaxed">{office.address}</span>
              </motion.a>
            ) : (
              <motion.div
                key={office.city}
                variants={cardVariants}
                whileHover={hoverLift}
                className="group flex flex-col items-center transition-transform duration-300 transform hover:-translate-y-2 hover:scale-105 hover:shadow-2xl bg-white rounded-xl border border-gray-200/60 shadow-lg p-3"
              >
                <h3 className="text-2xl font-bold mb-4 text-gray-800 group-hover:text-blue-600 transition-colors duration-200">{office.country}</h3>
                <img
                  src={office.image}
                  alt={office.city}
                  className="w-full max-w-md h-52 object-cover rounded-xl shadow-lg mb-3"
                  style={{ transition: 'box-shadow 0.3s, transform 0.3s' }}
                />
                <span className="text-xl font-semibold text-gray-700 group-hover:text-blue-500 transition-colors duration-200">{office.city}</span>
                <span className="mt-2 text-center text-sm text-gray-500 leading-relaxed">{office.address}</span>
              </motion.div>
            )
          ))}
        </div>
      </div>
    </motion.section>
  );
}

export default OfficesSection;
