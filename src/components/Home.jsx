import { motion } from "framer-motion";
import { useState } from "react";

function Home() {

    const home = "flex flex-col items-center justify-center min-h-screen pb-32 md:pb-48  bg-[linear-gradient(to_bottom,_#E9006E_80%,_#D3C912_80%)]";
    const homeH1 = "text-5xl md:text-6xl font-bold text-white mb-6";
    const homeH2 = "text-2xl md:text-3xl font-medium text-white mb-4"
    const homeP = "text-lg md:text-xl text-white mt-4 text-center break-words max-w-xl mx-auto mb-8";
    const botao = "bg-white text-[#E9006E] px-6 py-3 rounded-full font-semibold hover:bg-[#E9006E] hover:text-white transition duration-300"
    const container = {
        hidden: {opacity: 0},
        visible: {opacity: 1, transition: {duration: 1.5, staggerChildren:0.5,},
        },
    };
    const item = {
        hidden: {opacity: 0, y:30},
        visible: {opacity: 1, y:0, transition : {duration: 2, ease:"easeOut"},
        },
    };
    const [girando, setGirando] = useState(false)
    const [angulo, setAngulo] = useState(0);
    const [placeholderAtual, setPlaceholderAtual] = useState(0);
    const placeholders = ["bg-[#E9006E]", "bg-[#D3C912]"];
    const toggleGiro = () => {
        if (girando) return;
        setGirando (true);
        setAngulo((prev) => prev + 180);
        setTimeout(() => {
            setPlaceholderAtual((prev) => (prev + 1) % placeholders.length);
        }, 400);
        setTimeout(() => {
            setGirando(false);
        }, 800);
    };
    return (
        <section id="home" className= {home}>
            <motion.div 
            className="mt-24 text-center" 
            variants={container}
            initial = "hidden"
            animate = "visible">
                <motion.h1 className={homeH1} variants={item}>Maysa</motion.h1>
                <motion.div 
                className="mt-8 flex justify-center" 
                variants={item} 
                onClick={toggleGiro}
                initial = {{scale: 0.8, opacity: 0}} 
                animate = {{scale: 1, opacity: 1}} 
                transition = {{duration: 1, ease: "easeInOut"}} 
                whileHover={{scale: 1.1}}>
                    <motion.div 
                    className={`w-60 h-60 rounded-full flex items-center justify-center border-4 border-white mb-8 cursor-pointer ${placeholders[placeholderAtual]}`}
                    animate = {{rotateY: angulo}}
                    transition={{duration: 0.5, ease: "easeInOut"}}
                    style= {{transformStyle: "preserve-3d"}}>
                    </motion.div>
                </motion.div>
                <motion.h2 className={homeH2} variants={item}>Estudante de Publicidade e Propaganda</motion.h2>
                <motion.p className={homeP} variants={item}>Capturando momentos e criando memórias únicas!</motion.p>
                <motion.a href="#sobre" className={botao} variants={item}>
                    Venha conhecer
                </motion.a>
            </motion.div>
        </section>
    )
}
export default Home;