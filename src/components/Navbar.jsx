export default function Navbar() {
  const scrollToSection = (id) => {
    const section = document.getElementById(id);
    const yOffset = -80; // navbar height
    const y =
      section.getBoundingClientRect().top +
      window.pageYOffset +
      yOffset;

    window.scrollTo({ top: y, behavior: "smooth" });
  };

  return (
    <nav className="fixed top-0 w-full z-50 bg-black/70 backdrop-blur">
      <div className="max-w-7xl mx-auto flex justify-between items-center px-6 py-4">
        <h1
          onClick={() => scrollToSection("home")}
          className="text-xl font-serif text-gold cursor-pointer"
        >
          Brandon Hotel & Apartment
        </h1>

        <ul className="hidden md:flex gap-8 text-sm uppercase tracking-widest">
          <li
            onClick={() => scrollToSection("home")}
            className="hover:text-gold cursor-pointer"
          >
            Home
          </li>
          <li
            onClick={() => scrollToSection("about")}
            className="hover:text-gold cursor-pointer"
          >
            About
          </li>
          <li
            onClick={() => scrollToSection("rooms")}
            className="hover:text-gold cursor-pointer"
          >
            Rooms
          </li>
          <li
            onClick={() => scrollToSection("amenities")}
            className="hover:text-gold cursor-pointer"
          >
            Amenities
          </li>
          <li
            onClick={() => scrollToSection("gallery")}
            className="hover:text-gold cursor-pointer"
          >
            Gallery
          </li>
          <li
            onClick={() => scrollToSection("contact")}
            className="hover:text-gold cursor-pointer"
          >
            Contact
          </li>
        </ul>
      </div>
    </nav>
  );
}