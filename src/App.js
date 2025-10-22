import Header from "./components/Header";
import Sobre from "./components/Sobre";
import Servicos from "./components/Servicos";
import Portfolio from "./components/Portfolio";
import Contato from "./components/Contato";

function App() {
  
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
      <Sobre />

       {/* sessã pra apresentar os serviços dela  
       
Sugestão do que pedir pra ela depois:

Lista dos serviços reais que oferece (ex.: Fotografia de casamentos, Fotografia corporativa, Publicidade digital, Edição de imagens).

Breve descrição de cada serviço, se quiser detalhar.

Ícones ou imagens representando cada serviço (placeholder agora, depois trocar).*/}
      <Servicos />
      
      {/* sessão pra mostrar um pouco do trabalho citado na sessão acima
      
Sugestão do que pedir pra ela depois:

Fotos de trabalhos anteriores (ensaio, campanha, evento).

Nome do projeto ou cliente, só pra colocar como legenda.

Pequena descrição ou contexto de cada trabalho.

Formato das imagens (pode ser quadrado ou retangular), placeholders agora.*/}
      <Portfolio />
       {/* sessão final, (footer)

Sugestão do que pedir pra ela depois:

Email de contato profissional.

Telefone ou WhatsApp.

Redes sociais (Instagram, LinkedIn, etc.).

Formulário de contato, se quiser incluir funcionalidade. */}
      <Contato />
    </div>
  );
}
export default App;
