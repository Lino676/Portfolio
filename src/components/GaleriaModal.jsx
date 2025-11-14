import { motion, AnimatePresence } from "framer-motion";
import { useRef, useEffect } from "react";

export default function GaleriaModal({
  open,
  onClose,
  itens,
  currentIndex,
  setCurrentIndex
}) {

  const thumbsRef = useRef(null);
  const isDragging = useRef(false);
  const startX = useRef(0);
  const scrollLeft = useRef(0);
  const velocity = useRef(0);
  const animationFrame = useRef(null);
  const draggingRef = useRef(false);
  const lastScrollLeft = useRef(0);

  // Inércia
  const ease = 0.98;

  const inertiaScroll = () => {
    if (Math.abs(velocity.current) < 0.1) {
      cancelAnimationFrame(animationFrame.current);
      return;
    }

    const slider = thumbsRef.current;
    if (!slider) return;

    slider.scrollLeft += velocity.current;
    lastScrollLeft.current = slider.scrollLeft;

    velocity.current *= ease;

    animationFrame.current = requestAnimationFrame(inertiaScroll);
  };

  useEffect(() => {
    if (!thumbsRef.current) return;

    const slider = thumbsRef.current;

    const handleMouseDown = (e) => {
      isDragging.current = true;
      draggingRef.current = false;
      slider.classList.add("cursor-grabbing");

      startX.current = e.pageX - slider.offsetLeft;
      scrollLeft.current = slider.scrollLeft;
      lastScrollLeft.current = slider.scrollLeft;
    };

    const handleMouseUp = () => {
      isDragging.current = false;
      slider.classList.remove("cursor-grabbing");

      animationFrame.current = requestAnimationFrame(inertiaScroll);
    };

    const handleMouseMove = (e) => {
      if (!isDragging.current) return;

      e.preventDefault();

      draggingRef.current = true;

      const x = e.pageX - slider.offsetLeft;
      const walk = (x - startX.current) * 1.5;

      const oldScrollLeft = slider.scrollLeft;
      slider.scrollLeft = scrollLeft.current - walk;

      velocity.current = slider.scrollLeft - oldScrollLeft;
      lastScrollLeft.current = slider.scrollLeft;
    };

    slider.addEventListener("mousedown", handleMouseDown);
    document.addEventListener("mouseup", handleMouseUp);
    document.addEventListener("mousemove", handleMouseMove);

    return () => {
      slider.removeEventListener("mousedown", handleMouseDown);
      document.removeEventListener("mouseup", handleMouseUp);
      document.removeEventListener("mousemove", handleMouseMove);
    };
  }, [open]);

  return (
    <AnimatePresence>
      {open && (
        <motion.div
          className="fixed inset-0 bg-black/70 flex items-center justify-center z-50 p-6"
          onClick={onClose}
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.5 }}
        >
          <motion.div
            className="bg-gradient-to-b from-[#000000] to-[#bfbfbf] p-4 sm:p-6 md:p-8 rounded-lg shadow-lg relative w-full max-w-xs sm:max-w-sm md:max-w-md max-h-[80vh] overflow-y-auto md:max-h-none md:overflow-visible"
            onClick={(e) => e.stopPropagation()}
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0, scale: 0.8 }}
            transition={{ duration: 0.3 }}
          >
            <h3 className="text-[#d3c912] text-2xl font-libreBaskerville mb-4">
              {itens[currentIndex].title}
            </h3>

            {/* Imagem grande */}
            <motion.div className="flex-1 mb-4 flex justify-center items-center">
              <img
                src={itens[currentIndex].image}
                alt={itens[currentIndex].title}
                className="max-h-[60vh] w-auto object-contain rounded-lg shadow-md"
              />
            </motion.div>

            {/* Miniaturas */}
            <motion.div
              ref={thumbsRef}
              className="flex items-center gap-3 overflow-x-auto py-4 scrollbar-none cursor-grab select-none"
            >
              {itens.map((card, i) => {
                const isActive = i === currentIndex;

                return (
                  <button
                    key={i}
                    onMouseDown={() => { draggingRef.current = false; }}
                    onMouseMove={() => { draggingRef.current = true; }}
                    onMouseUp={() => {
                      if (!draggingRef.current) {
                        setCurrentIndex(i);
                      }
                    }}
                    className={`flex-shrink-0 rounded-md overflow-hidden border-2 ${
                      isActive ? "border-[#d3c912] scale-105" : "border-transparent"
                    } transition-transform cursor-grab select-none`}
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

            {/* Botão de fechar */}
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
