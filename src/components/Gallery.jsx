import { motion } from "framer-motion";

const images = [
  "https://lh3.googleusercontent.com/gps-cs-s/AHVAwepa9GsfpCiOk39HaaGGApSUiCKMaLYvmc-UQ_jEEghPRjykoJfYNzq8Sk91dk3tEfM5MWFp9SWpUYmhmJQndvtjUrnGAM8nDpRCd0Ba87oe8ykoteNne7nYo8HxcECV9q2ZczVXrsOc0F51=s1360-w1360-h1020-rw",
  "https://lh3.googleusercontent.com/gps-cs-s/AHVAwer4AuU-VZ4tm49Trz3vonxMbHRlLJowL8TYF1GGCg2iJe87ewEF2DWtSTq_pSNzA--hyeqmenNkZrs7IR-C9q_XG6z8XT44BltYdxOMYZIq1MJ0huuNqmB_pm473GRh9EqBXiSbU6C2t4Rr=s1360-w1360-h1020-rw",
  "https://images.unsplash.com/photo-1582719478250-c89cae4dc85b",
  "https://lh3.googleusercontent.com/gps-cs-s/AHVAwepBo4_efC6FkkFe9PcxUCVHX2BDFpAwF_0mUj9VkVm4k6Wpn4O3LiyTFDmdbE0xCA1huy4xHR7jL9NqL18EFIRTGRJ7qdcUhnPb2ga0xLSKxdlXwyUGuDgBlbKmtA6V9C01CRmNKpQs8b0=s1360-w1360-h1020-rw",
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