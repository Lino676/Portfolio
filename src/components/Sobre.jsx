function Sobre() {

    const sobre = "py-16 px-4 bg-[#21221C]";
    const sobreH2 = "text-3xl md:text-4xl font-bold text-white mb-4 text-center";
    const sobreP = "text-base sm:text-sm md:text-lg text-white text-center max-w-3xl mx-auto break-words";
    return (
        <section id="sobre" className={sobre}>
            <h2 className= {sobreH2}>Sobre</h2>
            <div className="mt-8 flex justify-center">
                <div className="bg-[#E9006E] w-60 h-60 rounded-full flex items-center justify-center"></div>
            </div>
            <p className= {sobreP}>Descrição sobre ela aqui. bbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbb</p>
            <p className={sobreP}>Área de atuação, tipos de fotografia ou serviços</p>
            <p className={sobreP}>Diferenciais: bbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbb</p>
        </section>
    )
}
export default Sobre;