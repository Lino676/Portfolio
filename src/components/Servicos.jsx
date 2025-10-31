import { motion } from "framer-motion";
import { container, item } from "../animations/animationVariants";

function Servicos() {
  const servicos = [
    { titulo: "Desenvolvimento", descricao: "Criação de sites modernos e responsivos.", preco: "R$ 500" },
    { titulo: "Design UI/UX", descricao: "Interfaces intuitivas e foco na experiência do usuário.", preco: "R$ 350" },
    { titulo: "Manutenção e Suporte", descricao: "Ajustes, otimizações e acompanhamento técnico.", preco: "R$ 200" },
  ];
  return (
    <>
    <motion.h2 
        className="text-4xl md:text-5xl font-playfair text-black mb-10 text-center"
        variants={item}
        >
        Serviços:
      </motion.h2>
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
        {servicos.map((s, i) => (
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
              <span className="font-poppins text-lg">{s.preco}</span>
              <button className="bg-[#000000] text-[#d3c912] px-3 py-1 rounded font-poppins hover:bg-opacity-80 transition"
              onClick={() => document.getElementById('contato').scrollIntoView({behavior: 'smooth'})}>
                Contato
              </button>
            </div>
          </motion.div>
        ))}
      </motion.div>
    </motion.section>
    
    {/* sessão abaixo é para cobertura de enventos */}

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
        Cobertura de Eventos
      </motion.h2>

      <motion.div 
        className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6 max-w-6xl mx-auto"
        variants={item}
        >
        {servicos.map((s, i) => (
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
              <span className="font-poppins text-lg">{s.preco}</span>
              <button className="bg-[#000000] text-[#d3c912] px-3 py-1 rounded font-poppins hover:bg-opacity-80 transition"
              onClick={() => document.getElementById('contato').scrollIntoView({behavior: 'smooth'})}>
                Contato
              </button>
            </div>
          </motion.div>
        ))}
      </motion.div>
    </motion.section>
    </>
  );
            
}

export default Servicos;
