import { motion } from "framer-motion";
import { container, item } from "../animations/animationVariants";
import SobreMaysa from "../imagens/sobre.jpeg";
function Sobre() {

    const sobre = "py-16 px-4 bg-gradient-to-b from-[#bfbfbf] to-[#ffffff]";
    const sobreH2 = "text-4xl md:text-5xl font-playfair text-black mb-4 text-center";
    const sobreP = "font-poppins text-xl mb-6 sm:text-sm md:text-lg text-black text-center max-w-3xl mx-auto break-words";
    return (
        <motion.section id="sobre" data-bg= "auto" className={sobre}
        variants={container}
        initial= "hidden"
        whileInView="visible"
        viewport={{once: true, amount: 0.3}}>
            <motion.h2 className= {sobreH2} variants={item}>Sobre</motion.h2>
            <motion.div className="mt-8 flex justify-center" variants={item}>
                <img src= {SobreMaysa} alt= "Foto do Sobre" className="bg-[#d3c912] w-80 h-92 rounded-xl flex items-center justify-center mb-8 border-4 border-white drop-shadow-[0_0_20px_#FFFF]" variants={item}/>
            </motion.div>
            <motion.p className= {sobreP} variants={item}>Me chamo Maysa de Castro Lima, estudante de Publicidade e Propaganda pela faculdade Unialfa, atuando na área de criação de contéudo visual há 3 anos. Sou apaixonada por fotografia, conhecer novos lugares e ouvir música. Meu trabalho é clean, leve e focado em captar a essência de cada momento.</motion.p>
            <motion.p className={sobreP} variants={item}><span className="underline decoration-1">Meus diferencias:</span> Habilidades em edição, um olhar estratégico e cinematográfico para captação de imagens.</motion.p>
            <motion.p className={sobreP} variants={item}><span className="underline decoration-1">Projetos e experiências passadas:</span> Cobertura de casamentos, batizados, aniversários e criação de conteúdo visual para profissionais.</motion.p>
        </motion.section>
    )
}
export default Sobre;