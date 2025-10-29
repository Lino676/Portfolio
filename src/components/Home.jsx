import { motion } from "framer-motion";
import { useState } from "react";
import bannerMaysa from "../imagens/banner.jpeg";
import bannerMaysaDesenho from "../imagens/bannerDesenho.png";

function Home() {

    const home = "flex flex-col items-center justify-center min-h-screen pb-32 md:pb-48 bg-gradient-to-b from-[#000000] to-[#bfbfbf]";
    const homeH1 = "font-playfair text-6xl md:text-7xl font-bold text-black mb-8";
    const homeH2 = "font-libreBaskerville text-3xl md:text-4xl font-medium text-white mb-6";
    const homeP = "font-poppins text-lg md:text-xl text-black mt-4 text-center break-words max-w-xl mx-auto mb-8";
    const botao = "font-poppins bg-white text-[#000000] px-6 py-3 rounded-full font-semibold hover:bg-[#000000] hover:text-[#d3c912] transition duration-300";

    const container = {
        hidden: { opacity: 0 },
        visible: { opacity: 1, transition: { duration: 1.5, staggerChildren: 0.5 } },
    };

    const item = {
        hidden: { opacity: 0, y: 30 },
        visible: { opacity: 1, y: 0, transition: { duration: 2, ease: "easeOut" } },
    };

    const [girando, setGirando] = useState(false);
    const [angulo, setAngulo] = useState(0);
    const [isFront, setIsFront] = useState(true); // controla qual imagem está visível

    const toggleGiro = () => {
        if (girando) return;
        setGirando(true);
        setAngulo(prev => prev + 180);

        // alterna a imagem na metade da animação
        setTimeout(() => {
            setIsFront(prev => !prev);
        }, 250);

        // libera clique após animação
        setTimeout(() => {
            setGirando(false);
        }, 500);
    };

    return (
        <section id="home" className={home}>
            <motion.div 
                className="mt-24 text-center" 
                variants={container}
                initial="hidden"
                animate="visible"
            >
                <motion.h1 className={homeH1} variants={item}>
                    <span className="text-white">Maysa</span>
                </motion.h1>

                <motion.div 
                    className="mt-8 flex justify-center" 
                    variants={item} 
                    onClick={toggleGiro}
                    initial={{ scale: 0.8, opacity: 0 }} 
                    animate={{ scale: 1, opacity: 1 }} 
                    transition={{ duration: 1, ease: "easeInOut" }} 
                    whileHover={{ scale: 1.1 }}
                >
                    <motion.div 
                        className="w-60 h-60 rounded-full flex items-center justify-center border-4 border-white mb-8 cursor-pointer shadow-lg overflow-hidden mt-4"
                        animate={{ rotateY: angulo }}
                        transition={{ duration: 0.5, ease: "easeInOut" }}
                        style={{ transformStyle: "preserve-3d" }}
                    >
                        <img 
                            src={isFront ? bannerMaysa : bannerMaysaDesenho} 
                            alt="Banner Maysa" 
                            className="w-full h-full object-cover"
                            style={{ backfaceVisibility: "hidden" }}
                        />
                    </motion.div>
                </motion.div>

                <motion.p className={homeP} variants={item}>
                    <motion.a 
                        href="https://www.instagram.com/bymaysalima/" 
                        target="_blank" 
                        rel="noopener noreferrer" 
                        className="ml-2 hover:shadow-lg hover:border-2 rounded-lg p-1"
                    >
                        <span className="text-white underline decoration-1 font-libreBaskerville drop-shadow-[0_0_20px_#FFFF]">BYMAYSALIMA</span>
                    </motion.a>
                </motion.p>

                <motion.h2 className={homeH2} variants={item}>
                    Estudante de Publicidade e Propaganda <br />
                    <span className="text-2xl">( StoryMaker e VideoMaker )</span>
                </motion.h2>

                <motion.p className={homeP} variants={item}>
                    <span className="text-xl underline">Transformando sonhos em vídeos!</span>
                </motion.p>

                <motion.p className={homeP} variants={item}>
                    <span className="text-xl">
                        Tudo que fiz até aqui teve um único motivo: o dom que Deus me deu, a capacidade de enxergar a vida de uma forma mais bela através das lentes. É mais que um trabalho, é amor entregue pelas minhas mãos!
                    </span>
                </motion.p>

                <motion.a href="#sobre" className={botao} variants={item}>
                    Venha conhecer
                </motion.a>
            </motion.div>
        </section>
    )
}

export default Home;
