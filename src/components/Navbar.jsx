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
        <div className="md:hidden bg-black/95 px-6 pb-6">
          <ul className="flex flex-col gap-6 text-sm uppercase tracking-widest text-center">
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
        </div>
      )}
    </nav>
  );
}