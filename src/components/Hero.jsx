const Hero = () => {
    return ( 
        <section className="px-4 py-5 h-screen space-y-6 text-white" id="hero">

            {/** Image Container */}
            <div>
                <img src="/images/dummy_600x400_ffffff_cccccc.png" alt="Avatar" className="rounded-2xl mx-auto"/>
            </div>
            {/** Text Container */}
            <div className="text-center">
                <h1 className="text-4xl font-nunito font-semibold tracking-[0.1125em] mb-6">Hey, I'm Ryan</h1>
                <div className="space-y-5 mb-10">
                    <p className="uppercase font-roboto-mono font-light text-lg ">I am a react and laravel developer based in newcastle upon tyne.</p>
                    <p className="uppercase font-roboto-mono font-light text-lg ">Building modren, perfomant web apps with style and simplicity.</p>
                </div>
                <div className=" flex flex-col gap-y-5">
                    <button className=" 
                    cursor-pointer 
                    w-full
                    border-2 
                    border-white/20 
                    p-4 
                    rounded-tl-[20px] 
                    rounded-br-[20px] 
                    rounded-tr-[10px] 
                    rounded-bl-[10px] 
                    font-roboto-mono 
                    text-lg 
                    font-light 
                    tracking-[0.1125em] 
                    bg-white/10 
                    backdrop-blur-md 
                    shadow-[0_10px_20px_0_rgba(0,0,0,0.2)]
                    duration-500
                    transition-all
                    ease-in-out
                    hover:-translate-y-1.5">
                        Get In Touch
                    </button>
                    <button className="
                    cursor-pointer 
                    w-full
                    border-2 
                    border-white/20 
                    p-4 
                    rounded-tl-[20px] 
                    rounded-br-[20px] 
                    rounded-tr-[10px] 
                    rounded-bl-[10px] 
                    font-roboto-mono 
                    text-lg 
                    font-light 
                    tracking-[0.1125em] 
                    shadow-[0_10px_20px_0_rgba(0,0,0,0.2)] 
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