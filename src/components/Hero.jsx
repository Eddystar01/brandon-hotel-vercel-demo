import { motion } from "framer-motion";

export default function Hero() {
  return (
    <section
      id="home" className="h-screen bg-cover bg-center flex items-center"
      style={{
        backgroundImage:
          "url(https://lh3.googleusercontent.com/gps-cs-s/AHVAwer4AuU-VZ4tm49Trz3vonxMbHRlLJowL8TYF1GGCg2iJe87ewEF2DWtSTq_pSNzA--hyeqmenNkZrs7IR-C9q_XG6z8XT44BltYdxOMYZIq1MJ0huuNqmB_pm473GRh9EqBXiSbU6C2t4Rr=s1360-w1360-h1020-rw)",
      }}

    >
      <div className="bg-black/60 w-full h-full flex items-center">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1 }}
          className="max-w-7xl mx-auto px-6"
        >
          <h1 className="text-3xl sm:text-4xl md:text-6xl font-serif text-gold mb-6">
            Luxury. Comfort. Class.
          </h1>

          <p className="max-w-xl text-base sm:text-lg text-gray-200 mb-8">
            Experience world-class hospitality at Brandon Hotel & Apartment.
          </p>

          <button className="border border-gold text-gold px-8 py-3 uppercase tracking-widest hover:bg-gold hover:text-black transition">
            Book a Room
          </button>
        </motion.div>
      </div>
    </section>
  );
}