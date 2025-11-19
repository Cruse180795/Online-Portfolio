


const Card = ({projectImage, projectName, stackType, techStack=[], links=[], status}) => {

    const isCompleted = status === 'Completed';
    const isInProgress = status === 'In Progress';


    return ( 
        <div className="border-2 border-white/20 bg-white/10 backdrop-blur-md rounded-lg text-chalk p-4 shadow-lg shadow-white-grey/20">
            <div className="">
                {isCompleted && (
                    <img src={projectImage} alt={projectName} className="rounded-lg shadow-xl"/>
                )}
                {isInProgress && (
                    <span className="inline-block px-3 py-1 text-xs font-semibold rounded-lg text-chalk shadow-md bg-linear-to-br from-primary-300 to-primary-500">
                        Work In Progress
                    </span>
                )}

            </div>

            {/**Card Content */}
            <div className="my-6 space-y-5">
                <div className="flex items-center justify-between">
                    <h2 className="font-nunito tracking-wider font-semibold text-base" >{projectName}</h2>
                    <h3 className=" font-roboto-mono tracking-wide text-xs text-white-grey p-1.5 rounded-lg border-2 border-chalk/40 ">{stackType}</h3>
                </div>

                <div className="space-y-2">
                    <hr className="border border-white-grey/70"/>  
                    <hr className="border border-white-grey/70"/>  
                </div>

                {/**Tech Stack SVG */}
                <ul className="flex items-center flex-wrap gap-x-2 gap-y-3">
                    {techStack.map((tech) => (
                        <li key={tech.name} className="flex items-center gap-2 p-2 rounded-lg border-2 border-chalk/40">
                            <img src={tech.src} alt={tech.name} className="h-5 w-5 "/>
                            <p className="text-xs border-l-2 border-chalk pl-2">{tech.name}</p>
                        </li>
                    ))}
                </ul>

                <div className="space-y-2">
                    <hr className="border border-white-grey/70"/>  
                    <hr className="border border-white-grey/70"/>  
                </div>
            </div>

                
            {/**Links For Source Code and Live Site */}
            {status === 'Completed' && (
                <div className="flex flex-col gap-y-2.5">
                {links.map((link) => (
                    <a 
                    href={link.url} 
                    target="_blank" 
                    rel="noreferrer noopener"
                    className={`block text-center p-2 rounded-lg cursor-pointer text-chalk bg-linear-to-tl ${link.name === 'Source Code' ? 'from-primary-300 to-primary-500' : 'from-secondary-300 to-secondary-500'}`}
                    key={link.name}>{link.name}</a>
                ))}
            </div>)}
        </div>    
    );
}

export default Card;