import { ExpandIcon } from "lucide-react"
import { motion } from "framer-motion";
import { container, item } from "../animations/animationVariants";

function Portfolio() {
    const portfolio = "py-16 px-4 bg-[#21221C]";
    const portfolioH2 = " text-3xl md:text-4xl font-bold text-white mb-8 text-center";
    const portfolioDiv = " grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6 max-w-6xl mx-auto";
    const portfolioImg = "bg-[#E9006E] h-48 flex items-center justify-center shadow-lg rounded";

    return (
        <motion.section id="portfolio" className= {portfolio} 
        variants= {container}
        initial= "hidden"
        whileInView= "visible"
        viewport= {{once: true}}>
           <motion.h2 className= {portfolioH2} variants= {item}>Portfólio</motion.h2>
            <motion.div className= {portfolioDiv} variants= {item}>
               <motion.div className= {portfolioImg} variants= {item}>
                <p>Foto 1</p>
               </motion.div>
               <motion.div className= {portfolioImg} variants= {item}>
                <p>Foto 2</p>
               </motion.div>
               <motion.div className= {portfolioImg} variants= {item}>
                <p>Foto 3</p>
               </motion.div>
               <motion.div className= {portfolioImg} variants= {item}>
                <p>Foto 4</p>
               </motion.div>
               <motion.div className= {portfolioImg} variants= {item}>
                <p>Foto 5</p>
               </motion.div>
               <motion.div className= {portfolioImg} variants= {item}>
                <p>Foto 6</p>
               </motion.div>
             </motion.div>
        </motion.section>
    )
}
export default Portfolio;