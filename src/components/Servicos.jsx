import { motion } from "framer-motion";
import { container, item } from "../animations/animationVariants";

function Servicos() {
    const servicos = " py-16 px-4 bg-[#21221C]";
    const servicosH2 = " text-3xl md:text-4xl font-bold text-white mb-8 text-center";
    const lista = "list-disc list-outside pl-5 max-w-xl mx-auto text-white space-y-2 break-words";

    return (
        <motion.section id="servicos" className= {servicos}
        variants= {container}
        initial= "hidden"
        whileInView= "visible"
        viewport= {{once: true}}>
            <motion.h2 className= {servicosH2} variants= {item}>Serviços</motion.h2>
            <motion.ul className= {lista} variants= {item}>
                <motion.li>cccccccccccccccccccccccccccccccccccccccccc</motion.li>
                <motion.li>ddddddddddddddddddddddddddddddddddd</motion.li>
                <motion.li>eeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeee</motion.li>
                <motion.li>fffffffffffffffffffffffffffffffffffff</motion.li>
                <motion.li>gggggggggggggggggggggggggggggggg</motion.li>
            </motion.ul>
        </motion.section>
    )
}
export default Servicos;