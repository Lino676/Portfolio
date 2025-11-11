import { motion, AnimatePresence } from "framer-motion";
import { container, item } from "../animations/animationVariants";
import { useState } from "react";
import { p } from "framer-motion/client";

function Servicos() {
  const servicosConteudo = [
    { titulo: "Desenvolvimento", descricao: "Criação de sites modernos e responsivos."},
    { titulo: "Design UI/UX", descricao: "Interfaces intuitivas e foco na experiência do usuário."},
    { titulo: "Manutenção e Suporte", descricao: "Ajustes, otimizações e acompanhamento técnico."},
  ];
  const servicosEventos = [
    { titulo: "Pacote Premium", subtitulo: "Stories |+ Todo o evento", descricao: "Clique para saiba mais!", descricaoModal: (
      <>
      <ul className="text-lg list-disc pl-5 space-y-1">
        <li>Cobertura stories do Making Of</li>
        <li>Cobertura stories da Cerimônia</li>
        <li>Cobertura stories da Recepção<br /><span className="text-sm">(até a valsa / abertura da pista)</span></li>
        <li>1 vídeo resumo do casamento<br /><span className="text-sm">(Reels até 3 minutos)</span></li>
        <li>1 vídeo Making Of<br /><span className="text-sm">(Reels até 3 minutos)</span></li>
      </ul>
      <p className="text-lg mt-2 mb-8"><span className="font-bold">Bônus</span>: 1 vídeo trend <br /><span className="text-sm">(Estilo a escolher pela cliente)</span></p> 
      </>
       )
       },
    { titulo: "Pacote Clássico", subtitulo: "Stories | Making Of + Cerimônia", descricao: "Clique para saiba mais!", descricaoModal: (
      <>
      <ul className="text-lg list-disc pl-5 space-y-1">
        <li>Cobertura stories do Making Of</li>
        <li>Cobertura stories da Cerimônia</li>
        <li>1 vídeo resumo do casamento<br /><span className="text-sm">(Reels até 3 minutos)</span></li>
        <li>1 vídeo Making Of<br /><span className="text-sm">(Reels até 3 minutos)</span></li>
      </ul>
      <p className="text-lg mt-2 mb-8"><span className="font-bold">Bônus</span>: 1 vídeo trend <br /><span className="text-sm">(Estilo a escolher pela cliente)</span></p> 
      </>
       )
       },
    { titulo: "Pacote Reels", subtitulo: "(Sem Stories)", descricao: "Clique para saiba mais!", descricaoModal: (
      <>
      <ul className="text-lg list-disc pl-5 space-y-1">
        <li>1 vídeo resumo do casamento<br /><span className="text-sm">(Reels até 3 minutos)</span></li>
        <li>1 vídeo Making Of<br /><span className="text-sm">(Reels até 3 minutos)</span></li>
      </ul>
      <p className="text-lg mt-2 mb-8"><span className="font-bold">Bônus</span>: 1 vídeo trend <br /><span className="text-sm">(Estilo a escolher pela cliente)</span></p> 
      <p className="text-lg mt-2 mb-8"><span className="font-bold">Não inclui cobertura em tempo real.</span></p> 
      </>
       )
       },
    { titulo: "Pacote Digital", subtitulo: "Making Of | Cerimônia | Recepção | Trend", descricao: "Clique para saiba mais!", descricaoModal: (
      <>
      <ul className="text-lg list-disc pl-5 space-y-1">
        <li>Cobertura stories do Making Of</li>
        <li>Cobertura stories da Cerimônia</li>
        <li>Cobertura stories da Recepção<br /><span className="text-sm">(até a valsa / abertura da pista)</span></li>
      </ul>
      <p className="text-lg mt-2 mb-8"><span className="font-bold">Não inclui a entrega de vídeos editados pós evento.</span></p> 
      </>
       )
       },
    { titulo: "Pacote Essencial", subtitulo: "Stories | Cerimônia", descricao: "Clique para saiba mais!", descricaoModal: (
      <>
      <ul className="text-lg list-disc pl-5 space-y-1">
        <li>Cobertura stories da Cerimônia</li>
        <li>1 vídeo resumo da Cerimônia<br /><span className="text-sm">(Reels até 3 minutos)</span></li>
      </ul>
      <p className="text-lg mt-2 mb-8"><span className="font-bold">Bônus</span>: 1 vídeo trend <br /><span className="text-sm">(Estilo a escolher pela cliente)</span></p> 
      </>
       )
       },
  ];

  const [selectedCard, setSelectedCard] = useState(null);

  return (
    <>
    <motion.h2 
        className="text-4xl md:text-5xl font-playfair text-black mb-10 text-center"
        variants={item}
        >
        Serviços:
      </motion.h2>

      {/* Produção de conteúdo  */}

    <motion.section 
      id="servicos"
      data-bg= "auto"
      className="py-16 px-4 bg-[#ffffff]"
      variants={container}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true }}
      >
      <motion.h2 
        className="text-3xl md:text-4xl font-playfair text-black mb-8 text-center"
        variants={item}
        >
        Produção de Conteúdo
      </motion.h2>

      <motion.div 
        className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6 max-w-6xl mx-auto"
        variants={item}
        >
        {servicosConteudo.map((s, i) => (
          <motion.div 
          key={i}
          className="bg-[#ffffff] rounded-lg p-6 text-black shadow-lg transition-transform duration-500 flex flex-col justify-between border-2 border-black"
          whileHover={{scale: 1.05, filter: "brightness(1.2)"}}
          transition={{ duration: 0, ease: "easeOut" }}
          >
            <div>
              <h3 className="text-2xl font-libreBaskerville mb-2">{s.titulo}</h3>
              <p className="font-poppins text-sm opacity-90 mb-4">{s.descricao}</p>
            </div>
            <div className="flex items-center justify-between">
              <button className="bg-[#000000] text-[#d3c912] px-3 py-1 rounded font-poppins hover:bg-opacity-80 transition"
              onClick={() => document.getElementById('contato').scrollIntoView({behavior: 'smooth'})}>
                Contato
              </button>
            </div>
          </motion.div>
        ))}
      </motion.div>
    </motion.section>
    
    {/* Cobertura de Eventos */}

    <motion.section 
      id="servicos"
      data-bg= "auto"
      className="py-16 px-4 bg-[#ffffff]"
      variants={container}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true }}
      >
      <motion.h2 
        className="text-3xl md:text-4xl font-playfair text-black mb-10 text-center"
        variants={item}
        >
        Cobertura de Eventos
      </motion.h2>

      <motion.h2
        className= "text-2xl md:text-4xl font-playfair text-black mb-10 text-center"
        variants={item}
        >
          <motion.div className="mb-4">
            <motion.p>Casamento</motion.p>
          </motion.div>
          <motion.p><span className="text-xl underline decoration-1">( StoryMaker | VideoMaker Mobile )</span></motion.p>
      </motion.h2>

      <motion.div 
        className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6 max-w-6xl mx-auto"
        variants={item}
        >
        {servicosEventos.map((s, i) => (
          <motion.div 
          key={i}
          className="bg-[#ffffff] rounded-lg p-6 text-black shadow-lg transition-transform duration-500 flex flex-col justify-between border-2 border-black cursor-pointer"
          whileHover={{scale: 1.05, filter: "brightness(1.2)"}}
          transition={{ duration: 0, ease: "easeOut" }}
          onClick={() => setSelectedCard(s)}
          >
            <div>
              <h3 className="text-2xl font-libreBaskerville">{s.titulo}</h3> {s.subtitulo && (
                <p className="font-libreBaskerville text-sm text-[#d3c912] underline decoration-1 mb-4">{s.subtitulo}</p>
              )}
              <p className="font-poppins text-sm opacity-90 mb-6">{s.descricao}</p>
            </div>
            <div className="flex items-center justify-between">
              <a
                href={`https://wa.me/5562985871365?text=${encodeURIComponent( `Olá Maysa! Vi seu portfólio e gostaria de saber mais sobre o ${s.titulo}.` )}`}
                target="_blank"
                rel="noopener noreferrer"
                className="bg-[#000000] text-[#d3c912] px-3 py-1 rounded font-poppins hover:bg-opacity-80 transition"
                onClick={(e) => {
                  e.stopPropagation(); }}
                  >
                Contato
              </a>
            </div>
          </motion.div>
        ))}
      </motion.div>
    </motion.section>
     <AnimatePresence> 
             {selectedCard && (
                 <motion.div 
                 // modal abaixo
                 className="fixed inset-0 bg-black/70 flex items-center justify-center z-50"
                 onClick={() => setSelectedCard(null)}
                 initial= {{opacity: 0}}
                 animate= {{opacity: 1}}
                 exit= {{opacity: 0}}
                 transition= {{duration: 0.5}}
                 >
                    <motion.div 
                    className="bg-[#ffffff] p-8 rounded-lg shadow-lg relative max-w-md w-full"
                    onClick= {(e) => e.stopPropagation()}
                    initial= {{opacity: 0, scale: 0.8}}
                    animate= {{opacity: 1, scale: 1}}
                    exit= {{opacity: 0, scale: 0.8}}
                    transition= {{duration: 0.3}}
                    >
                        <h3 className="text-4xl font-playfair text-black">{selectedCard.titulo}</h3>
                        <p className="font-libreBaskerville text-lg text-[#d3c912] mb-8">{selectedCard.subtitulo}</p>
                        <p className="font-poppins text-black">{selectedCard.descricaoModal}</p>
                        <button 
                        className="absolute top-2 right-2 text-black font-bold text-xl"
                        onClick= {() => setSelectedCard(null)}>
                            x
                        </button>
                    </motion.div>
                </motion.div>
             )}
        </AnimatePresence>
    </>
  );
            
}

export default Servicos;
