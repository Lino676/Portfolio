import { faFacebook, faInstagram, faLinkedin } from "@fortawesome/free-brands-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { motion } from "framer-motion";
import { container, item } from "../animations/animationVariants";

function Contato() {
    const footer = "bg-[#D3C912] text-white py-8 px-4";
    const footerDiv = "max-w-6xl mx-auto text-center space-y-4";
    const contato = "grid items-center justify-center";
    const divRedesSociais = " flex flex-wrap justify-center gap-14";
    const redesSociais = "hover:text-[#E9006E]"

    return (
        <motion.footer id="contato" className= {footer}
        variants= {container}
        initial= "hidden"
        whileInView= "visible"
        viewport= {{once: true}}>
            <motion.div className= {footerDiv}>
            <motion.p>@ 2025 Maysa. Todos os direitos reservados.</motion.p>
            <motion.div className= {contato}>
                <motion.p>Email: <motion.a href="#" className= {redesSociais}>contato@exemplo </motion.a></motion.p>
            </motion.div>
            <motion.div className= {contato}>
                <motion.p>Telefone: <motion.a href="#" className= {redesSociais}>(00)      12345-6789</motion.a></motion.p>
            </motion.div>
            <motion.div className= {divRedesSociais}>
                <motion.a href="#" className= {redesSociais}>
                    <FontAwesomeIcon icon = {faInstagram} className="w-8 h-8"/>
                </motion.a>
                <motion.a href="#" className= {redesSociais}>
                    <FontAwesomeIcon icon = {faFacebook} className="w-8 h-8"/>
                </motion.a>
                <motion.a href="#" className= {redesSociais}>
                    <FontAwesomeIcon icon = {faLinkedin} className="w-8 h-8"/>
                </motion.a>
            </motion.div>
            </motion.div>
        </motion.footer>
    )
}
export default Contato;