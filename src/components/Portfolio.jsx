import { motion, AnimatePresence } from "framer-motion";
import { container, item } from "../animations/animationVariants";
import PortfolioCard from "./PortfolioCard";
import { useState } from "react";

function Portfolio() {
    const portfolio = "py-16 px-4 bg-gradient-to-b from-[#ffffff] to-[#bfbfbf]";
    const portfolioH2 = "text-3xl md:text-4xl font-playfair text-black mb-8 text-center";
    const portfolioDiv = "grid grid-cols-1 sm:grid-cols-2 md:grid-cols-6 gap-6 max-w-6xl mx-auto";
    const itens = [
        {title: "Foto 2", image: '/imagens/IMG_0013.JPG'},
        {title: "Foto 1", image: '/imagens/IMG_0063.JPG'},
        {title: "Foto 3", image: '/imagens/IMG_0039.JPG'},
        {title: "Foto 4", image: '/imagens/IMG_0032.JPG'},
        {title: "Foto 5", image: '/imagens/IMG_0030.JPG'},
        {title: "Foto 6", image: '/imagens/IMG_0044.JPG'},
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
    const [selectedCard, setSelectedCard] = useState(null)

    return (
        <>
        <motion.section 
        id="portfolio" 
        data-bg= "auto"
        className= {portfolio} 
        variants= {container}
        initial= "hidden"
        whileInView= "visible"
        viewport= {{once: true}}
        >
           <motion.h2 className= {portfolioH2} variants= {item}>Portfólio</motion.h2>

             <motion.div className= {portfolioDiv} variants= {item}>
                {itens.map ((card, i) => (
                    <PortfolioCard 
                    key={i} 
                    title={card.title} 
                    image= {card.image}
                    index={i}
                    onClick={() => setSelectedCard(card)}
                    />
                ))}
            </motion.div>
            
        </motion.section>

        <AnimatePresence> 
             {selectedCard && (
                 <motion.div 
                 // modal abaixo
                 className="fixed inset-0 bg-black/70 flex items-center justify-center z-50"
                 onClick={() => setSelectedCard(null)}
                 initial= {{opacity: 0}}
                 animate= {{opacity: 1}}
                 exit= {{opacity: 0}}
                 transition= {{duration: 0.5}}
                 >
                    <motion.div 
                    className="bg-[#d3c912] p-4 sm:p-6 md:p-8 rounded-lg shadow-lg relative w-full max-w-xs sm:max-w-sm md:max-w-md max-h[80vh] overflow-y-auto"
                    onClick= {(e) => e.stopPropagation()}
                    initial= {{opacity: 0, scale: 0.8}}
                    animate= {{opacity: 1, scale: 1}}
                    exit= {{opacity: 0, scale: 0.8}}
                    transition= {{duration: 0.3}}
                    >
                        <h3 className="text-2xl font-playfair text-black mb-4">{selectedCard.title}</h3>
                        <p className="font-poppins text-black mb-8">Aqui vão os detalhes do projeto</p>
                        <button 
                        className="absolute top-2 right-2 text-black font-bold text-xl"
                        onClick= {() => setSelectedCard(null)}>
                            x
                        </button>
                    </motion.div>
                </motion.div>
             )}
        </AnimatePresence>
        </>
    );
}
export default Portfolio;