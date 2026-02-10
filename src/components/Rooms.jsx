import { motion } from "framer-motion";

const rooms = [
  {
    title: "Standard Room",
    desc: "Elegant comfort at an affordable rate",
  },
  {
    title: "Deluxe Room",
    desc: "Spacious design with modern luxury",
  },
  {
    title: "Executive Room",
    desc: "Premium experience with added privacy",
  },
  {
    title: "Apartment",
    desc: "Ideal for long stays and families",
  },
];

export default function Rooms() {
  return (
    <motion.section
      id="rooms"
      className="py-24 bg-dark"
      initial={{ opacity: 0, y: 40 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.8 }}
      viewport={{ once: true }}
    >
      <div className="max-w-7xl mx-auto px-6">
        <h2 className="text-3xl font-serif text-gold text-center mb-12">
          Our Rooms & Apartments
        </h2>

        <div className="grid md:grid-cols-4 gap-8">
          {rooms.map((room, index) => (
            <motion.div
              key={index}
              className="border border-gold/30 p-6 hover:border-gold transition"
              whileHover={{ y: -5 }}
            >
              <h3 className="text-xl font-serif mb-3">
                {room.title}
              </h3>
              <p className="text-gray-400 text-sm">
                {room.desc}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </motion.section>
  );
}