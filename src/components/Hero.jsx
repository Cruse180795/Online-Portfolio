const Hero = () => {
    return ( 
        <section className="px-4 py-8 space-y-6 text-white">
            {/** Image Container */}
            <div>
                <img src="/images/dummy_600x400_ffffff_cccccc.png" alt="Avatar" className="rounded-2xl mx-auto"/>
            </div>
            {/** Text Container */}
            <div className="text-center">
                <h2 className="text-4xl font-nunito font-semibold tracking-wider mb-6">Welcome To My Portfolio</h2>
                <div className="space-y-5 mb-10">
                    <p className="uppercase font-roboto-mono font-light text-lg tracking-wide">I am a react and laravel developer based in newcastle upon tyne.</p>
                    <p className="uppercase font-roboto-mono font-light text-lg tracking-wide">Building modren, perfomant web apps with style and simplicity.</p>
                </div>
                <div className=" flex flex-col gap-y-4">
                    <button className=" 
                    cursor-pointer 
                    border-2 
                    border-white/20 
                    px-4 py-2
                    rounded-lg
                    font-roboto-mono 
                    font-semibold
                    tracking-wide 
                    bg-white/10 
                    backdrop-blur-md 
                    shadow-xl
                    duration-500
                    transition-all
                    ease-in-out
                    hover:-translate-y-1.5">
                        Get In Touch
                    </button>
                    <button className="
                    cursor-pointer 
                    border-2 
                    border-white/20 
                    px-4 py-2
                    rounded-lg 
                    font-roboto-mono 
                    font-semibold
                    tracking-wide 
                    shadow-xl 
                    duration-500
                    transition-all
                    ease-in-out
                    hover:bg-white/10 
                    hover:backdrop-blur-md">
                        Download CV
                    </button>
                </div>
            </div>

        </section>
    );
}

export default Hero;