import { motion } from "framer-motion";

const images = [
  "https://images.unsplash.com/photo-1566073771259-6a8506099945",
  "https://images.unsplash.com/photo-1551882547-ff40c63fe5fa",
  "https://images.unsplash.com/photo-1582719478250-c89cae4dc85b",
  "https://images.unsplash.com/photo-1540541338287-41700207dee6",
  "https://images.unsplash.com/photo-1590490360182-c33d57733427",
  "https://images.unsplash.com/photo-1578683010236-d716f9a3f461",
];

export default function Gallery() {
  return (
    <motion.section
      id="gallery"
      className="py-24 bg-dark"
      initial={{ opacity: 0, y: 40 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.8 }}
      viewport={{ once: true }}
    >
      <div className="max-w-7xl mx-auto px-6">
        <h2 className="text-3xl font-serif text-gold text-center mb-12">
          Gallery
        </h2>

        <div className="grid md:grid-cols-3 gap-6">
          {images.map((img, index) => (
            <motion.div
              key={index}
              className="overflow-hidden"
              whileHover={{ scale: 1.02 }}
            >
              <img
                src={img}
                alt="Hotel gallery"
                className="w-full h-72 object-cover transition duration-700 hover:scale-110"
              />
            </motion.div>
          ))}
        </div>
      </div>
    </motion.section>
  );
}