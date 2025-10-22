import { faFacebook, faInstagram, faLinkedin } from "@fortawesome/free-brands-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

function Contato() {
    const footer = "bg-[#D3C912] text-white py-8 px-4";
    const footerDiv = "max-w-6xl mx-auto text-center space-y-4";
    const contato = "grid items-center justify-center";
    const divRedesSociais = " flex flex-wrap justify-center gap-14";
    const redesSociais = "hover:text-[#E9006E]"

    return (
        <footer id="contato" className= {footer}>
            <div className= {footerDiv}>
            <p>@ 2025 Maysa. Todos os direitos reservados.</p>
            <div className= {contato}>
                <p>Email: <a href="#" className= {redesSociais}>contato@exemplo </a></p>
            </div>
            <div className= {contato}>
                <p>Telefone: <a href="#" className= {redesSociais}>(00)      12345-6789</a></p>
            </div>
            <div className= {divRedesSociais}>
                <a href="#" className= {redesSociais}>
                    <FontAwesomeIcon icon = {faInstagram} className="w-8 h-8"/>
                </a>
                <a href="#" className= {redesSociais}>
                    <FontAwesomeIcon icon = {faFacebook} className="w-8 h-8"/>
                </a>
                <a href="#" className= {redesSociais}>
                    <FontAwesomeIcon icon = {faLinkedin} className="w-8 h-8"/>
                </a>
            </div>
            </div>
        </footer>
    )
}
export default Contato;