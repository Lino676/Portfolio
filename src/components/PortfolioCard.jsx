import { motion } from "framer-motion";
import { item } from "../animations/animationVariants";
import { ExpandIcon } from "lucide-react";

const PortfolioCard = ({ title, image, index, onClick}) => {
    return (
        <motion.div 
        onClick={onClick}
        className={`cursor-pointer relative h-48 flex items-center justify-center gap-2 shadow-lg rounded text-white font-semibold text-lg transition-transform duration-300 hover:scale-105 hover:brightness-110 ${image}`}
        initial = {{opacity: 0, y:10}}
        whileInView={{opacity: 1, y:0}}
        viewport={{once: true}}
        transition={{duration: 0.4, delay: index * 0.1}}
        >
            {/* overlay abaixo */}
            <div className="absolute inset-0 flex items-center justify-center bg-black/75 opacity-0 hover:opacity-100 transition-opacity duration-300">
            <p className="text-white font-semibold text-lg">{title}</p></div>
            <ExpandIcon size= {28}/>
        </motion.div>
    );
};
export default PortfolioCard;