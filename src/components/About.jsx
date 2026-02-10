import { motion } from "framer-motion";

export default function About() {
  return (
    <motion.section
      id="about"
      className="py-24 bg-black"
      initial={{ opacity: 0, y: 40 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.8 }}
      viewport={{ once: true }}
    >
      <div className="max-w-5xl mx-auto text-center px-6">
        <h2 className="text-3xl font-serif text-gold mb-6">
          Welcome to Brandon Hotel & Apartment
        </h2>

        <p className="text-gray-300 leading-8">
          Brandon Hotel & Apartment delivers refined comfort, modern luxury,
          and exceptional hospitality. Designed for business and leisure,
          our environment offers privacy, security, and elegance in every detail.
        </p>
      </div>
    </motion.section>
  );
}
