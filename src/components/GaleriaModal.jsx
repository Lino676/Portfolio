import { motion, AnimatePresence } from "framer-motion";
import { useRef, useEffect, useState } from "react";

export default function GaleriaModal({ open, onClose, itens, currentIndex, setCurrentIndex }) {
  const thumbsRef = useRef(null);
  const isDragging = useRef(false);
  const startX = useRef(0);
  const scrollLeft = useRef(0);
  const velocity = useRef(0);
  const animationFrame = useRef(null);
  const moved = useRef(false);
  const dragThreshold = 5;

  const isMobile = typeof window !== "undefined" && window.innerWidth < 768;

  const [imgLoaded, setImgLoaded] = useState(false);

  // Inércia mobile
  const inertiaScroll = () => {
    if (Math.abs(velocity.current) < 0.1) return;
    const slider = thumbsRef.current;
    if (!slider) return;
    slider.scrollLeft += velocity.current;
    velocity.current *= 0.95;
    animationFrame.current = requestAnimationFrame(inertiaScroll);
  };

  useEffect(() => {
    const slider = thumbsRef.current;
    if (!slider) return;

    if (!isMobile) {
      const handleWheel = (e) => {
        e.preventDefault();
        slider.scrollLeft += e.deltaY * 0.4;
      };
      slider.addEventListener("wheel", handleWheel, { passive: false });
      return () => slider.removeEventListener("wheel", handleWheel);
    }

    const handleMouseDown = (e) => {
      isDragging.current = true;
      moved.current = false;
      startX.current = e.pageX - slider.offsetLeft;
      scrollLeft.current = slider.scrollLeft;
      velocity.current = 0;
      slider.classList.add("cursor-grabbing");
      cancelAnimationFrame(animationFrame.current);
    };

    const handleMouseUp = () => {
      isDragging.current = false;
      slider.classList.remove("cursor-grabbing");
      if (moved.current) animationFrame.current = requestAnimationFrame(inertiaScroll);
    };

    const handleMouseMove = (e) => {
      if (!isDragging.current) return;
      const x = e.pageX - slider.offsetLeft;
      const walk = x - startX.current;
      if (Math.abs(walk) > dragThreshold) moved.current = true;
      const prev = slider.scrollLeft;
      slider.scrollLeft = scrollLeft.current - walk * 1.2;
      velocity.current = slider.scrollLeft - prev;
    };

    slider.addEventListener("mousedown", handleMouseDown);
    document.addEventListener("mouseup", handleMouseUp);
    document.addEventListener("mousemove", handleMouseMove);

    return () => {
      slider.removeEventListener("mousedown", handleMouseDown);
      document.removeEventListener("mouseup", handleMouseUp);
      document.removeEventListener("mousemove", handleMouseMove);
    };
  }, [open, isMobile]);

  // Centralizar imagem clicada (desktop e mobile)
  useEffect(() => {
    if (!thumbsRef.current) return;
    const slider = thumbsRef.current;
    const btn = slider.children[currentIndex];
    if (!btn) return;
    const sliderCenter = slider.offsetWidth / 2;
    const btnCenter = btn.offsetLeft + btn.offsetWidth / 2;
    slider.scrollLeft = btnCenter - sliderCenter;
  }, [currentIndex]);

  return (
    <AnimatePresence>
      {open && (
        <motion.div
          className="fixed inset-0 bg-black/70 flex items-center justify-center z-50 p-6"
          onClick={onClose}
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.4 }}
        >
          <motion.div
            className="bg-gradient-to-b from-[#000000] to-[#bfbfbf] p-4 sm:p-6 md:p-8 rounded-lg shadow-lg relative w-full max-w-xs sm:max-w-sm md:max-w-md max-h-[80vh] overflow-y-auto md:max-h-none md:overflow-visible"
            onClick={(e) => e.stopPropagation()}
            initial={{ opacity: 0, scale: 0.85 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0, scale: 0.85 }}
            transition={{ duration: 0.3 }}
          >
            <h3 className="text-[#d3c912] text-2xl font-libreBaskerville mb-4">
              {itens[currentIndex].title}
            </h3>

            {/* Imagem grande */}
            <div className="flex justify-center items-center mb-4">
              {!imgLoaded && (
                <div className="w-32 h-32 border-4 border-dashed border-[#bfbfbf] rounded-full animate-spin" />
              )}
              <img
                src={itens[currentIndex].image}
                alt={itens[currentIndex].title}
                onLoad={() => setImgLoaded(true)}
                className={`max-h-[60vh] w-auto object-contain rounded-lg shadow-md transition-opacity duration-300 ${
                  imgLoaded ? "opacity-100" : "opacity-0"
                }`}
              />
            </div>

            {/* Miniaturas */}
            <motion.div
              ref={thumbsRef}
              className={`flex items-center gap-3 overflow-x-auto py-4 md:scrollbar-custom select-none ${
                isMobile ? "cursor-grab" : "cursor-default"
              }`}
            >
              {itens.map((card, i) => {
                const isActive = i === currentIndex;
                return (
                  <button
                    key={i}
                    onClick={() => setCurrentIndex(i)}
                    className={`flex-shrink-0 rounded-md overflow-hidden border-2 ${
                      isActive ? "border-[#d3c912] scale-105" : "border-transparent"
                    } transition-transform`}
                    style={{ width: 110, height: 70 }}
                  >
                    <img
                      src={card.image}
                      alt={card.title}
                      className="w-full h-full object-cover pointer-events-none"
                    />
                  </button>
                );
              })}
            </motion.div>

            {/* Botão fechar */}
            <button
              className="absolute top-2 right-2 text-[#d3c912] font-bold text-xl"
              onClick={onClose}
            >
              x
            </button>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
