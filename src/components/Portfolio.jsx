import { motion, AnimatePresence } from "framer-motion";
import { container, item } from "../animations/animationVariants";
import PortfolioCard from "./PortfolioCard";
import { useState } from "react";

function Portfolio() {
    const portfolio = "py-16 px-4 bg-gradient-to-b from-[#21221C] to-[#D3C912]";
    const portfolioH2 = "text-3xl md:text-4xl font-bold text-white mb-8 text-center";
    const portfolioDiv = "grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6 max-w-6xl mx-auto";
    const itens = [
        {title: "Foto 1", image:"bg-[#E9006E]"},
        {title: "Foto 2", image:"bg-[#E9006E]"},
        {title: "Foto 3", image:"bg-[#E9006E]"},
        {title: "Foto 4", image:"bg-[#E9006E]"},
        {title: "Foto 5", image:"bg-[#E9006E]"},
        {title: "Foto 6", image:"bg-[#E9006E]"},
    ];
    const [selectedCard, setSelectedCard] = useState(null)

    return (
        <>
        <motion.section 
        id="portfolio" 
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
                    image={card.image}
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
                    className="bg-[#E9006E] p-8 rounded-lg shadow-lg relative max-w-md w-full"
                    onClick= {(e) => e.stopPropagation()}
                    initial= {{opacity: 0, scale: 0.8}}
                    animate= {{opacity: 1, scale: 1}}
                    exit= {{opacity: 0, scale: 0.8}}
                    transition= {{duration: 0.3}}
                    >
                        <h3 className="text-2xl font-bold text-white mb-4">{selectedCard.title}</h3>
                        <p className="text-white">Aqui vão os detalhes do projeto</p>
                        <button 
                        className="absolute top-2 right-2 text-white font-bold text-xl"
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