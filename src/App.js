import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faInstagram, faFacebook, faLinkedin} from "@fortawesome/free-brands-svg-icons";
import Header from "./components/Header";
function App() {
  const sobre = `
  py-16
  px-4
  bg-white
  `;
  const sobreH2 = `
  text-3xl
  md:text-4xl
  font-bold
  text-blue-900
  mb-4
  text-center
  `
  const sobreP = `
  text-base
  sm:text-sm
  md:text-lg
  text-blue-700
  text-center
  max-w-3xl
  mx-auto
  break-words
  `;
  const servicos = `
  py-16
  px-4
  bg-gray-50
  `;
  const servicosH2 = `
  text-3xl
  md:text-4xl
  font-bold
  text-blue-900
  mb-8
  text-center
  `;
  const servicosLista = `
  list-disc
  list-outside
  pl-5
  max-w-xl
  mx-auto
  text-blue-700
  space-y-2
  break-words
  `;
  const portfolio = `
  py-16
  px-4
  bg-white
  `;
  const portfolioH2 = `
  text-3xl 
  md:text-4xl
  font-bold
  text-blue-900
  mb-8
  text-center
  `;
  const portfolioDiv = `
  grid
  grid-cols-1
  sm:grid-cols-2
  md:grid-cols-3
  gap-6
  max-w-6xl
  mx-auto
  `;
  const portfolioImg = `
  bg-blue-200 
  h-48
  flex
  items-center
  justify-center
  shadow-lg
  rounded
  `;
  const footer = `
  bg-blue-900
  text-white
  py-8
  px-4
  `;
  const footerDiv = `
  max-w-6xl
  mx-auto
  text-center
  space-y-4
  `;
  const contato = `
  grid
  items-center
  justify-center
  `;
  const divRedesSociais = `
  flex
  flex-wrap
  justify-center
  gap-14
  `;
  const redesSocias = `
  hover:text-blue-400
  `;
  return (
    <div>
      <Header />
      {/* introdução, nome dela, falar da profissão ou slogan */}
      

      {/* sessão sobre: falar dela, introduzir o trabalho.

Sugestão do que pedir pra ela depois:

Descrição pessoal:

Breve bio, experiência, estilo de trabalho.

Ex.: “Trabalho com fotografia há 5 anos, especializada em casamentos e eventos corporativos.”

Áreas de atuação:

Tipos de fotografia ou serviços que oferece (ex.: publicidade, retratos, eventos).

Diferenciais:

Algo que destaque ela no mercado (ex.: edição própria, direção de arte, atendimento personalizado).

Foto de perfil ou avatar:

Um placeholder agora, depois trocar pela foto real dela.*/}
      <section id="sobre" className={sobre}>
        <h2 className= {sobreH2}>Sobre</h2>
        <p className= {sobreP}>Descrição sobre ela aqui. bbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbb</p>
      </section>

       {/* sessã pra apresentar os serviços dela  
       
Sugestão do que pedir pra ela depois:

Lista dos serviços reais que oferece (ex.: Fotografia de casamentos, Fotografia corporativa, Publicidade digital, Edição de imagens).

Breve descrição de cada serviço, se quiser detalhar.

Ícones ou imagens representando cada serviço (placeholder agora, depois trocar).*/}
      <section id="servicos" className= {servicos}>
        <h2 className= {servicosH2}>Serviços</h2>
        <ul className= {servicosLista}>
          <li>cccccccccccccccccccccccccccccccccccccccccc</li>
          <li>ddddddddddddddddddddddddddddddddddd</li>
          <li>eeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeee</li>
          <li>fffffffffffffffffffffffffffffffffffff</li>
          <li>gggggggggggggggggggggggggggggggg</li>
        </ul>
      </section>
      
      {/* sessão pra mostrar um pouco do trabalho citado na sessão acima
      
Sugestão do que pedir pra ela depois:

Fotos de trabalhos anteriores (ensaio, campanha, evento).

Nome do projeto ou cliente, só pra colocar como legenda.

Pequena descrição ou contexto de cada trabalho.

Formato das imagens (pode ser quadrado ou retangular), placeholders agora.*/}
      <section id="portfolio" className= {portfolio}>
        <h2 className= {portfolioH2}>Portfólio</h2>
        <div className= {portfolioDiv}>
          <div className= {portfolioImg}>
            <p>Foto 1</p>
          </div>
          <div className= {portfolioImg}>
            <p>Foto 2</p>
          </div>
          <div className= {portfolioImg}>
            <p>Foto 3</p>
          </div>
          <div className= {portfolioImg}>
            <p>Foto 4</p>
          </div>
          <div className= {portfolioImg}>
            <p>Foto 5</p>
          </div>
          <div className= {portfolioImg}>
            <p>Foto 6</p>
          </div>
        </div>
      </section>

       {/* sessão final, (footer)

Sugestão do que pedir pra ela depois:

Email de contato profissional.

Telefone ou WhatsApp.

Redes sociais (Instagram, LinkedIn, etc.).

Formulário de contato, se quiser incluir funcionalidade. */}
      <footer id="contato" className= {footer}>
        <div className= {footerDiv}>
          <p>@ 2025 Maysa. Todos os direitos reservados.</p>
          <div className= {contato}>
          <p>Email: <a href="#" className= {redesSocias}>contato@exemplo </a></p>
          </div>
          <div className= {contato}>
          <p>Telefone: <a href="#" className= {redesSocias}>(00) 12345-6789</a></p>
          </div>
          <div className= {divRedesSociais}>
            <a href="#" className= {redesSocias}>
              <FontAwesomeIcon icon = {faInstagram} className="w-8 h-8" />
              </a>
            <a href="#" className= {redesSocias}>
              <FontAwesomeIcon icon = {faFacebook} className="w-8 h-8" />
              </a>
            <a href="#" className= {redesSocias}
            ><FontAwesomeIcon icon = {faLinkedin} className="w-8 h-8" />
            </a>
          </div>
        </div>
      </footer>
    </div>
  );
}
export default App;
