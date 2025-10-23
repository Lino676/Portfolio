function Home() {

    const header = "flex flex-col items-center justify-center h-screen bg-[linear-gradient(to_bottom,_#E9006E_80%,_#D3C912_80%)]";
    const headerH1 = "text-4xl md:text-6xl font-bold text-white";
    const headerP = "text-base md:text-xl text-white mt-4 text-center break-words max-w-3xl mx-auto";

    return (
        <section id="home" className= {header}>
            <div className="mt-24 text-center">
                <h1 className={headerH1}>Maysa</h1>
                <p className={headerP}>aaaaaaaa</p>
            </div>
        </section>
    )
}
export default Home;