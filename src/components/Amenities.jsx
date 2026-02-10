import { motion } from "framer-motion";

const amenities = [
  "24/7 Power Supply",
  "High-Speed Wi-Fi",
  "Secure Parking",
  "Room Service",
  "Bar & Restaurant",
  "24-Hour Front Desk",
];

export default function Amenities() {
  return (
    <motion.section
      id="amenities"
      className="py-24 bg-black"
      initial={{ opacity: 0, y: 40 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.8 }}
      viewport={{ once: true }}
    >
      <div className="max-w-6xl mx-auto px-6 text-center">
        <h2 className="text-3xl font-serif text-gold mb-12">
          World-Class Amenities
        </h2>

        <div className="grid md:grid-cols-3 gap-6 text-gray-300">
          {amenities.map((item, index) => (
            <motion.div
              key={index}
              className="border border-gold/20 py-4"
              whileHover={{ scale: 1.03 }}
            >
              {item}
            </motion.div>
          ))}
        </div>
      </div>
    </motion.section>
  );
}