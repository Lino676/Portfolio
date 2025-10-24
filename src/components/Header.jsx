import { useState, useEffect } from "react";
import { Menu, X } from "lucide-react";
import { motion } from "framer-motion";

function Header() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [showNav, setShowNav] = useState(true);

  useEffect(() => {
    let lastScroll = 0;

    const handleScroll = () => {
      const currentScroll = window.scrollY;
      if (currentScroll > lastScroll) {
        setShowNav(false); // rolando pra baixo → esconde menu
      } else {
        setShowNav(true); // rolando pra cima → mostra menu
      }
      lastScroll = currentScroll;
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const handleNavClick = () => {
    setMenuOpen(false);
  };

  const navItems = [
    { text: "Home", href: "#home" },
    { text: "Sobre", href: "#sobre" },
    { text: "Serviços", href: "#servicos" },
    { text: "Portfólio", href: "#portfolio" },
    { text: "Contato", href: "#contato" },
  ];

  return (
    <div
    className={`fixed top-0 left-0 w-full bg-[#E9006E] text-white shadow-md z-50 transition-transform duration-300 ${
          showNav ? "translate-y-0" : "-translate-y-full"
        }`}>
        <motion.div className="max-w-6xl mx-auto flex justify-between items-center p-4"
        initial = {{opacity: 0, y:-30}}
        animate = {{opacity: 1, y:0}}
        transition={{duration: 0.8, ease: "easeInOut"}}>
          <h1 className="text-2xl font-bold">Maysa <span className="text-[#D3C912]">Lima</span></h1>

          {/* Menu desktop */}
          <nav className="hidden md:flex space-x-6">
            {navItems.map((item) => (
              <a
              key={item.href}
              href={item.href}
              onClick={handleNavClick}
                className="hover:text-[#D3C912] transition-colors"
              >
                {item.text}
              </a>
            ))}
          </nav>

          {/* Ícone menu mobile */}
          <button className="md:hidden p-2" onClick={() => setMenuOpen(!menuOpen)}>
            {menuOpen ? <X size={28} /> : <Menu size={28} />}
          </button>
        </motion.div>

        {/* Menu mobile dropdown */}
        {menuOpen && (
          <motion.div className="md:hidden bg-[#E9006E] flex flex-col items-center space-y-4 py-4"
          initial = {{opacity: 0, y:-10}}
          animate = {{opacity: 1, y:0}}
          transition={{duration: 0.7}}
          >
            {navItems.map((item) => (
              <a
                key={item.href}
                href={item.href}
                onClick={handleNavClick}
                className="hover:text-[#D3C912] text-lg transition-colors"
              >
                {item.text}
              </a>
            ))}
          </motion.div>
        )}
      </div>
  );
}
export default Header;
