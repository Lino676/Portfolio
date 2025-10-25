import { faFacebook, faInstagram, faLinkedin } from "@fortawesome/free-brands-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { motion } from "framer-motion";
import { container, item } from "../animations/animationVariants";

function Contato() {
    const footer = "bg-[#D3C912] text-white py-8 px-4";
    const footerDiv = "max-w-6xl mx-auto text-center space-y-6";
    const contato = "grid items-center justify-center";
    const divRedesSociais = " flex flex-wrap justify-center gap-12";
    const redesSociais = "hover:text-[#E9006E] hover:scale-110 transition-transform duration-300 mb-2";

    return (
        <motion.footer id="contato" className= {footer}
        variants= {container}
        initial= "hidden"
        whileInView= "visible"
        viewport= {{once: true}}>
            <motion.div className= {footerDiv}>
            <motion.div className= {contato}>
                <motion.p className="text-lg">Email: <motion.a href="#" className= "ml-2 underline decoration-white decoration-1 hover:text-[#E9006E] cursor-pointer transition-transform duration-300">contato@exemplo </motion.a></motion.p>
            </motion.div>
            <motion.div className= {contato}>
                <motion.p className="text-lg">Telefone: <motion.a href="#" className= {redesSociais}>(00) 12345-6789</motion.a></motion.p>
            </motion.div>
            <motion.div className= {divRedesSociais}>
                <motion.a href="#" className= {redesSociais} title="Instagram">
                    <FontAwesomeIcon icon = {faInstagram} className="w-8 h-8 sm:w-10 sm:h-10"/>
                </motion.a>
                <motion.a href="#" className= {redesSociais} title="Facebook">
                    <FontAwesomeIcon icon = {faFacebook} className="w-8 h-8 sm:w-10 sm:h-10"/>
                </motion.a>
                <motion.a href="#" className= {redesSociais} title="Linkedln">
                    <FontAwesomeIcon icon = {faLinkedin} className="w-8 h-8 sm:w-10 sm:h-10"/>
                </motion.a>
            </motion.div>
            <motion.p className="text-sm opacity-80">@ 2025 Maysa. Todos os direitos reservados.</motion.p>
            </motion.div>
        </motion.footer>
    )
}
export default Contato;