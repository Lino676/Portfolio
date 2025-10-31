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
            <motion.p className= {sobreP} variants={item}><span className="text-xl underline decoration-1">Prazer, Maysa de Castro Lima!</span></motion.p>
            <motion.p className= {sobreP} variants={item}>Estudante de Publicidade e Propaganda pela Unialfa e apaixonada por transformar momentos em artes que falam por si. Há 3 anos atuo na criação de conteúdo visual, explorando luz, cor e sentimento em cada projeto. Amo fotografia, conhecer novos lugares e ouvir música, fontes que inspiram meu olhar e dão ritmo ao meu processo criativo. </motion.p>
            <motion.p className= {sobreP} variants={item}> Meu estilo é clean, leve e autêntico, guiado pela busca em captar a essência e a emoção de cada instante. Acredito que cada foto tem sua própria história, meu papel é contá-la com sensibilidade e propósito.</motion.p>
            <motion.p className={sobreP} variants={item}><span className="underline decoration-1">Meus diferencias:</span> <br />Domínio em edição e um olhar estratégico e cinematográfico para captação de imagens, unindo técnica, estética e emoção de forma harmoniosa.</motion.p>
            <motion.p className={sobreP} variants={item}><span className="underline decoration-1">Projetos e experiências passadas:</span> <br />Realizei coberturas de casamentos, batizados e aniversários, além da criação de conteúdo visual para profissionais e marcas que buscam autenticidade e conexão com o público.</motion.p>
        </motion.section>
    )
}
export default Sobre;