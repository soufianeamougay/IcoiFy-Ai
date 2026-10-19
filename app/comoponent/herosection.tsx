import NavBar from "./NavBar";



export default function Herosection(){
  
   
        return (
          
            <>
                                    <NavBar/>
                                <div className="relative min-h-screen w-full bg-[#080a0f] flex items-center flex-col justify-center overflow-hidden font-sans text-white select-none ">
                        
                        
                        <div className="absolute inset-0 bg-[radial-gradient(rgba(255,255,255,0.06)_1px,transparent_1px)] [background-size:32px_32px] [mask-image:radial-gradient(ellipse_50%_50%_at_50%_50%,black_70%,transparent_100%)] pointer-events-none"></div>

                        
                        <div className="absolute top-1/4 left-1/4 w-[450px] h-[450px] bg-cyan-500/20 rounded-full blur-[100px] pointer-events-none"></div>

                        
                        <div className="absolute top-1/4 right-1/4 w-[500px] h-[500px] bg-purple-500/20 rounded-full blur-[120px] pointer-events-none"></div>

                        
                        <div className="relative z-10 text-center px-4">
                            
                            
                            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-cyan-950/40 border border-cyan-500/30 text-cyan-400 text-xs font-medium mb-6 shadow-[0_0_15px_rgba(6,182,212,0.15)]">
                            <span className="relative flex h-2 w-2">
                                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-cyan-400 opacity-75"></span>
                                <span className="relative inline-flex rounded-full h-2 w-2 bg-cyan-500"></span>
                            </span>
                            AI Powered Icon Generation
                            </div>

                        
                            <h1 className="text-5xl md:text-7xl font-extrabold tracking-tight mb-4 h-30">
                            Iconify <span className="bg-gradient-to-r from-sky-400 via-indigo-400 to-purple-400 bg-clip-text text-transparent">AI</span>
                            </h1>

                        
                            <p className="text-xl md:text-3xl text-slate-200 font-medium tracking-tight opacity-90 h-20">
                            Generate Stunning <span className="bg-gradient-to-r from-sky-400 via-indigo-400 to-purple-400 bg-clip-text text-transparent mt-10">Icons </span> in Seconds
                            </p>
                            <div className=" flex justify-between w-200 p-100 h-20">
                                <button className="shodow-3xl bg-cyan-950/40 px-20 py-3 w-40 h-10 border-2 border-amber-50 rounded-3xl hover:bg-indigo-400 "> Allahah 3D</button>
                                <button className="shodow-3xl bg-cyan-950/40 px-20 py-3 w-40 h-10 border-2 border-amber-50 rounded-3xl hover:bg-indigo-400 ">Minimal Flat</button>
                                <button className="shodow-3xl bg-cyan-950/40 px-20 py-3 w-40 h-10 border-2 border-amber-50 rounded-3xl hover:bg-indigo-400 ">Clary</button>
                                <button className="shodow-3xl bg-cyan-950/40 px-20 py-3 w-40 h-10 border-2 border-amber-50 rounded-3xl hover:bg-indigo-400 ">Neon Flurin</button>
                            </div>
                            
                            <div className="input h-20 w-full flex flex-row justify-between sticky top-0 left-10 z-10">
                                   <input type="text" className="h-15 w-170 rounded-[5px]  shadow-2xl border bg-black border-none  focus:border-cyan-950/40 text-2xl"  placeholder="Desciribe your Icon here ..." />   
                                   <button className="rounded-3xl bg-blue-400 h-10 w-30 sticky top-0 left-100 z-10"> Genarate</button> 
                            </div>
                            <div className="img flex flex-row justify-between rounded-3xl mt-10 ">
                                <img className=" rounded-2xl shadow-2xl" src="/img1.jpeg" alt="img" width={100} height={100} />
                                <img className="rounded-2xl shadow-2xl" src="/img2.jpeg" alt="img1" width={100} height={100} />
                                <img className=" rounded-2xl shadow-2xl" src="/img3.jpeg" alt="imgZ" width={100} height={100} />
                                <img className=" rounded-2xl shadow-2xl" src="/img4.jpeg" alt="imgE" width={100} height={100} />
                            </div>
                            <div className="h-20 p-10">
                                <p>
                                    Transform texte to beutiful 3D Icon With Ai.
                                
                                </p>
                                <p> Multuble Styles,instant dowloads,premium quality </p>
                            </div>
                        </div>
    
                        </div>

         </>   
        )
   
    }

