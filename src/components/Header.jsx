import { useState, useEffect } from "react";
import { Menu, X } from "lucide-react";

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

  const header = "flex flex-col items-center justify-center h-screen bg-[linear-gradient(to_bottom,_#E9006E_80%,_#D3C912_80%)]";
  const headerH1 = "text-4xl md:text-6xl font-bold text-white";
  const headerP = "text-base md:text-xl text-white mt-4 text-center break-words max-w-3xl mx-auto";

  const navItems = [
    { text: "Sobre", href: "#sobre" },
    { text: "Serviços", href: "#servicos" },
    { text: "Portfólio", href: "#portfolio" },
    { text: "Contato", href: "#contato" },
  ];

  return (
    <header className={header}>
      {/* Menu fixo */}
      <div
        className={`fixed top-0 left-0 w-full bg-[#E9006E] text-white shadow-md z-50 transition-transform duration-300 ${
          showNav ? "translate-y-0" : "-translate-y-full"
        }`}
      >
        <div className="max-w-6xl mx-auto flex justify-between items-center p-4">
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
        </div>

        {/* Menu mobile dropdown */}
        {menuOpen && (
          <div className="md:hidden bg-[#E9006E] flex flex-col items-center space-y-4 py-4">
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
          </div>
        )}
      </div>

      {/* Conteúdo central do Header */}
      <div className="mt-24 text-center">
        <h1 className={headerH1}>Maysa</h1>
        <p className={headerP}>aaaaaaaa</p>
      </div>
    </header>
  );
}

export default Header;
