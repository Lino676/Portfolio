import { ExpandIcon } from "lucide-react"
import { motion } from "framer-motion";
import { container, item } from "../animations/animationVariants";

function Portfolio() {
    const portfolio = "py-16 px-4 bg-[#21221C]";
    const portfolioH2 = "text-3xl md:text-4xl font-bold text-white mb-8 text-center";
    const portfolioDiv = "grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6 max-w-6xl mx-auto";
    const portfolioImg = "bg-[#E9006E] h-48 flex items-center justify-center gap-2 shadow-lg rounded text-white font-semibold text-lg transition-transform duration-300 hover:scale-105 hover:brightness-110";
    const itens = ["Foto 1", "Foto 2", "Foto 3", "Foto 4", "Foto 5", "Foto 6"];

    return (
        <motion.section 
        id="portfolio" 
        className= {portfolio} 
        variants= {container}
        initial= "hidden"
        whileInView= "visible"
        viewport= {{once: true}}>
           <motion.h2 className= {portfolioH2} variants= {item}>Portfólio</motion.h2>
            <motion.div className= {portfolioDiv} variants= {item}>
               {itens.map((label, i) => (
                <motion.div key={i} className={portfolioImg} variants={item}>
                    <ExpandIcon size={28} />
                    <p>{label}</p>
                </motion.div>
               ))}
             </motion.div>
        </motion.section>
    );
}
export default Portfolio;