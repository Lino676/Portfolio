import { ExpandIcon } from "lucide-react"

function Portfolio() {
    const portfolio = "py-16 px-4 bg-[#21221C]";
    const portfolioH2 = " text-3xl md:text-4xl font-bold text-white mb-8 text-center";
    const portfolioDiv = " grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6 max-w-6xl mx-auto";
    const portfolioImg = "bg-[#E9006E] h-48 flex items-center justify-center shadow-lg rounded";

    return (
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
    )
}
export default Portfolio;