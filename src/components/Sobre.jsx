import { motion } from "framer-motion";
import { container, item } from "../animations/animationVariants";

function Sobre() {

    const sobre = "py-16 px-4 bg-gradient-to-b from-[#D3C912] to-[#0A1F44]";
    const sobreH2 = "text-4xl md:text-5xl font-bold text-white mb-4 text-center";
    const sobreP = "text-base sm:text-sm md:text-lg text-white text-center max-w-3xl mx-auto break-words";
    return (
        <motion.section id="sobre" className={sobre}
        variants={container}
        initial= "hidden"
        whileInView="visible"
        viewport={{once: true, amount: 0.3}}>
            <motion.h2 className= {sobreH2} variants={item}>Sobre</motion.h2>
            <motion.div className="mt-8 flex justify-center" variants={item}>
                <div className="bg-[#E9006E] w-80 h-48 rounded-xl flex items-center justify-center mb-8 border-4 border-white" variants={item}></div>
            </motion.div>
            <motion.p className= {sobreP} variants={item}>Descrição sobre ela aqui. bbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbb</motion.p>
            <motion.p className={sobreP} variants={item}>Área de atuação, tipos de fotografia ou serviços</motion.p>
            <motion.p className={sobreP} variants={item}>Diferenciais: bbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbb</motion.p>
        </motion.section>
    )
}
export default Sobre;