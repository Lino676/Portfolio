import { faInstagram, faWhatsapp } from "@fortawesome/free-brands-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { motion } from "framer-motion";
import { container } from "../animations/animationVariants";

function Contato() {
    const footer = "bg-gradient-to-b from-[#bfbfbf] to-[#000000] text-black py-8 px-4";
    const footerDiv = "max-w-6xl mx-auto text-center space-y-6";
    const contato = "grid items-center justify-center";
    const divRedesSociais = "flex flex-wrap justify-center gap-12";
    const redesSociais = "drop-shadow-[0_0_10px_#FFFF] hover:text-[#d3c912] hover:scale-110 transition-transform duration-300 mb-2";

    return (
        <motion.footer id="contato" data-bg= "auto" className= {footer}
        variants= {container}
        initial= "hidden"
        whileInView= "visible"
        viewport= {{once: true}}>
            <motion.div className= {footerDiv}>
            <motion.div className= {contato}>
                <motion.p className="text-lg font-poppins">Email: <motion.a href="mailto:maysalima17@gmail.com" className= "ml-2 hover:text-[#d3c912] cursor-pointer transition-transform duration-300">maysalima17@gmail.com</motion.a></motion.p>
            </motion.div>
            <motion.div className= {contato}>
                <motion.p className="text-lg font-poppins">Telefone: <motion.a href="tel:+5562985871365" className= {redesSociais}><span className="hover:text-[#d3c912]">(62) 98587-1365</span></motion.a></motion.p>
            </motion.div>
            <motion.div className= {divRedesSociais}>
                <motion.a href="https://www.instagram.com/bymaysalima/" target="_blank" rel="noopener noreferrer" className= {redesSociais} title="Instagram">
                    <FontAwesomeIcon icon = {faInstagram} className="w-8 h-8 sm:w-10 sm:h-10"/>
                </motion.a>
                <motion.a href="https://wa.me/5562985871365" target="_blank" rel="noopener noreferrer" className= {redesSociais} title="WhatsApp">
                    <FontAwesomeIcon icon = {faWhatsapp} className="w-8 h-8 sm:w-10 sm:h-10"/>
                </motion.a>
            </motion.div>
            <motion.p className="text-lg opacity-80"> <span className="text-white font-poppins underline decoration-1">Será um prazer fazer parte do seu sonho!</span></motion.p>
            <motion.p className="text-sm opacity-50"> <span className="text-white font-poppins">@ 2025 Maysa. Todos os direitos reservados.</span></motion.p>
            </motion.div>
        </motion.footer>
    )
}
export default Contato;