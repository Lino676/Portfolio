import { useState, useEffect } from "react";
import { Menu, X } from "lucide-react";
import { motion } from "framer-motion";

function Header() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [showNav, setShowNav] = useState(true);
  const [isLightSection, setIsLightSection] = useState(false); // true = seção clara -> texto preto

  useEffect(() => {
    let lastScroll = 0;

    const handleScroll = () => {
      const currentScroll = window.scrollY;
      if (currentScroll > lastScroll) {
        setShowNav(false);
      } else {
        setShowNav(true);
      }
      lastScroll = currentScroll;
    };
    window.addEventListener("scroll", handleScroll);

    // Helper: tenta extrair a primeira cor de um background-image (gradiente ou cor direta)
    const extractFirstColor = (bg) => {
      if (!bg) return null;
      // regex pega rgb(...), rgba(...), #hex e hsl(...)
      const colorRegex = /rgba?\([^)]*\)|hsla?\([^)]*\)|#[0-9a-fA-F]{3,8}/g;
      const matches = bg.match(colorRegex);
      return matches && matches.length ? matches[0] : null;
    };

    // Helper: converte "rgb(...)" ou "#rrggbb" em [r,g,b] (0-255)
    const parseColorToRgb = (str) => {
      if (!str) return null;
      str = str.trim();
      // rgb(a)
      const rgbMatch = str.match(/rgba?\s*\(\s*([0-9.%\s,]+)\)/i);
      if (rgbMatch) {
        const parts = rgbMatch[1].split(",").map(s => s.trim());
        // ignora % for now (rare) — se encontrar %, converte pra 0-255
        const nums = parts.slice(0,3).map(n => n.includes("%") ? Math.round(parseFloat(n) * 2.55) : parseFloat(n));
        return nums;
      }
      // hex
      const hexMatch = str.match(/^#([0-9a-fA-F]{3,8})$/);
      if (hexMatch) {
        let hex = hexMatch[1];
        if (hex.length === 3) {
          hex = hex.split("").map(c => c + c).join("");
        } else if (hex.length === 4) {
          // rgba shorthand; ignore alpha
          hex = hex.slice(0,3).split("").map(c => c + c).join("");
        } else if (hex.length === 8) {
          hex = hex.slice(0,6); // ignore alpha
        }
        const r = parseInt(hex.slice(0,2), 16);
        const g = parseInt(hex.slice(2,4), 16);
        const b = parseInt(hex.slice(4,6), 16);
        return [r,g,b];
      }
      return null;
    };

    // luminância relativa (0-1)
    const luminance = (rgb) => {
      if (!rgb) return 1;
      const srgb = rgb.map(v => v / 255).map((c) => {
        return c <= 0.03928 ? c / 12.92 : Math.pow((c + 0.055) / 1.055, 2.4);
      });
      return 0.2126 * srgb[0] + 0.7152 * srgb[1] + 0.0722 * srgb[2];
    };

    const sections = document.querySelectorAll("section");
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (!entry.isIntersecting) return;

          // prioridade: atributo data-bg se estiver definido
          const attr = entry.target.getAttribute("data-bg");
          if (attr === "light") {
            setIsLightSection(true);
            return;
          } else if (attr === "dark") {
            setIsLightSection(false);
            return;
          }

          // caso auto / gradiente: tenta detectar a primeira cor do background
          const style = getComputedStyle(entry.target);
          const bgImage = style.backgroundImage; // pode ser 'none' ou 'linear-gradient(...)' ou 'url(...)'
          const bgColor = style.backgroundColor; // fallback se bgImage não der
          const first = extractFirstColor(bgImage) || bgColor;
          const rgb = parseColorToRgb(first);
          const lum = luminance(rgb);
          // threshold: < 0.5 é escuro (texto branco), >= 0.5 é claro (texto preto)
          setIsLightSection(lum >= 0.5);
        });
      },
      { threshold: 0.45 } // quanto precisa estar visível pra considerar
    );

    sections.forEach((section) => observer.observe(section));

    return () => {
      window.removeEventListener("scroll", handleScroll);
      observer.disconnect(); // desmonta tudo
    };
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
      className={`fixed top-0 left-0 w-full bg-transparent backdrop-blur-sm shadow-md z-50 transition-transform duration-300
        ${showNav ? "translate-y-0" : "-translate-y-full"}
        ${isLightSection ? "text-black" : "text-white"} transition-colors duration-300`}
    >
      <motion.div
        className="max-w-6xl mx-auto flex justify-between items-center p-4"
        initial={{ opacity: 0, y: -30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, ease: "easeInOut" }}
      >
        <h1 className="text-2xl font-libreBaskerville">
          Maysa <span className="text-[#D3C912]">Lima</span>
        </h1>

        {/* Menu desktop */}
        <nav className="hidden md:flex space-x-6 font-poppins">
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
        <motion.div
          className="md:hidden bg-transparent backdrop-blur-sm flex flex-col items-center space-y-4 py-4"
          initial={{ opacity: 0, y: -10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7 }}
        >
          {navItems.map((item) => (
            <a
              key={item.href}
              href={item.href}
              onClick={handleNavClick}
              className="hover:text-[#D3C912] text-xl transition-colors"
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
