import { useState } from "react";

export default function Navbar() {
  const [open, setOpen] = useState(false);

  const scrollToSection = (id) => {
    const section = document.getElementById(id);
    const yOffset = -80; // navbar height
    const y =
      section.getBoundingClientRect().top +
      window.pageYOffset +
      yOffset;

    window.scrollTo({ top: y, behavior: "smooth" });
    setOpen(false); // close menu after click
  };

  return (
    <nav className="fixed top-0 w-full z-50 bg-black/70 backdrop-blur">
      <div className="max-w-7xl mx-auto flex justify-between items-center px-6 py-4">
        {/* Brand */}
        <h1
          onClick={() => scrollToSection("home")}
          className="text-lg md:text-xl font-serif text-gold cursor-pointer"
        >
          Brandon Hotel & Apartment
        </h1>

        {/* Desktop Menu */}
        <ul className="hidden md:flex gap-8 text-sm uppercase tracking-widest">
          {["home", "about", "rooms", "amenities", "gallery", "contact"].map(
            (item) => (
              <li
                key={item}
                onClick={() => scrollToSection(item)}
                className="hover:text-gold cursor-pointer"
              >
                {item}
              </li>
            )
          )}
        </ul>

        {/* Mobile Hamburger */}
        <button
          className="md:hidden text-gold text-2xl"
          onClick={() => setOpen(!open)}
        >
          ☰
        </button>
      </div>

      {/* Mobile Menu */}
    {open && (
    <div className="md:hidden absolute right-6 top-20 z-50">
        <div className="w-52 bg-black/90 border border-gold/30 backdrop-blur-md shadow-2xl rounded-md py-5">
        <ul className="flex flex-col gap-4 text-xs uppercase tracking-[0.25em] text-center">
            {["home", "about", "rooms", "amenities", "gallery", "contact"].map(
            (item) => (
                <li
                key={item}
                onClick={() => scrollToSection(item)}
                className="text-gray-200 hover:text-gold transition cursor-pointer"
                >
                {item}
                </li>
            )
            )}
        </ul>
        </div>
    </div>
    )}
    </nav>
  );
}