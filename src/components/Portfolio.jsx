import { motion, AnimatePresence } from "framer-motion";
import { container, item } from "../animations/animationVariants";
import PortfolioCard from "./PortfolioCard";
import { useState, useRef, useEffect } from "react";
import GaleriaModal from "./GaleriaModal";

function preloadImages(images) {
    const promises = images.map((src) => {
        return new Promise((resolve) => {
            const img = new Image();
            img.src = src;
            img.onload = resolve;
            img.onerror = resolve; // mesmo se der erro continua
        });
    });

    return Promise.all(promises);
}

function Portfolio() {
    const portfolio = "py-16 px-4 bg-gradient-to-b from-[#ffffff] to-[#bfbfbf]";
    const portfolioH2 = "text-3xl md:text-4xl font-playfair text-black mb-8 text-center";
    const portfolioDiv = "grid grid-cols-3 sm:grid-cols-2 md:grid-cols-3 gap-6 max-w-6xl mx-auto";

    const itens = [
        {title: "Foto 1", image: '/imagens/IMG_0063.jpg'},
        {title: "Foto 2", image: '/imagens/IMG_0013.JPG'},
        {title: "Foto 3", image: '/imagens/IMG_0039.jpg'},
        {title: "Foto 4", image: '/imagens/IMG_0032.JPG'},
        {title: "Foto 5", image: '/imagens/IMG_0030.jpg'},
        {title: "Foto 6", image: '/imagens/IMG_0044.jpg'},
        {title: "Foto 7", image: '/imagens/IMG_0018.JPG'},
        {title: "Foto 8", image: '/imagens/IMG_0006.JPG'},
        {title: "Foto 9", image: '/imagens/IMG_2671.JPG'},
        {title: "Foto 10", image: '/imagens/IMG_2678.JPG'},
        {title: "Foto 11", image: '/imagens/IMG_2735.JPG'},
        {title: "Foto 12", image: '/imagens/IMG_2747.JPG'},
        {title: "Foto 13", image: '/imagens/IMG_2748.JPG'},
        {title: "Foto 14", image: '/imagens/IMG_2750.JPG'},
        {title: "Foto 15", image: '/imagens/IMG_5932.JPG'},
        {title: "Foto 16", image: '/imagens/IMG_5933.JPG'},
        {title: "Foto 17", image: '/imagens/IMG_5934.JPG'},
        {title: "Foto 18", image: '/imagens/IMG_5935.JPG'},
        {title: "Foto 19", image: '/imagens/IMG_5936.JPG'},
        {title: "Foto 20", image: '/imagens/IMG_5937.JPG'},
        {title: "Foto 21", image: '/imagens/IMG_5938.JPG'},
        {title: "Foto 22", image: '/imagens/IMG_5939.JPG'},
        {title: "Foto 23", image: '/imagens/IMG_5940.JPG'},
        {title: "Foto 24", image: '/imagens/IMG_5941.JPG'},
        {title: "Foto 25", image: '/imagens/IMG_7969.jpg'},
        {title: "Foto 26", image: '/imagens/IMG_7976.jpg'},
        {title: "Foto 27", image: '/imagens/IMG_8005.jpg'},
        {title: "Foto 28", image: '/imagens/IMG_8012.jpg'},
        {title: "Foto 29", image: '/imagens/IMG_8017.jpg'},
        {title: "Foto 30", image: '/imagens/IMG_8030.jpg'}
    ];

    const [showGallery, setShowGallery] = useState(false);
    const [currentIndex, setCurrentIndex] = useState(0);

    // 🔥 Função para abrir já com pré-load
    const abrirModal = async (index) => {
        // Carrega todas as imagens antes de abrir
        await preloadImages(itens.map(item => item.image));

        setCurrentIndex(index);
        setShowGallery(true);
    };

    return (
        <>
        <motion.section
            id="portfolio"
            data-bg="auto"
            className={portfolio}
            variants={container}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
        >
            <motion.h2 className={portfolioH2} variants={item}>
                Portfólio
            </motion.h2>

            <motion.div className={portfolioDiv} variants={item}>
                {itens.slice(0, 3).map((card, i) => (
                    <PortfolioCard
                        key={i}
                        title={card.title}
                        image={card.image}
                        index={i}
                        onClick={() => abrirModal(i)}
                    />
                ))}
            </motion.div>
        </motion.section>

        <motion.div className="flex justify-center bg-[#bfbfbf]">
            <button
                onClick={() => abrirModal(0)}
                className="font-semibold font-poppins bg-white text-[#000000] px-6 py-3 rounded-full hover:bg-[#000000] hover:text-[#d3c912] transition duration-300 mb-8"
            >
                Ver Mais!
            </button>
        </motion.div>

        <GaleriaModal
            open={showGallery}
            onClose={() => setShowGallery(false)}
            itens={itens}
            currentIndex={currentIndex}
            setCurrentIndex={setCurrentIndex}
        />
        </>
    );
}

export default Portfolio;
