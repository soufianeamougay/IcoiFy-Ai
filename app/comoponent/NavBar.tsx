import Link from "next/link"


export default function NavBar(){
  
  
        return (
           
                <div className="w-300 flex justify-between items-center flex-row px-20 bg-[#080A0F]" >
                   <span className="p-10 ml-20 text-white"> Iconfy AI</span>
                   <div className="page flex justify-between ml-20 w-100 text-white">
                        <Link href="/">Home</Link>
                        <Link href="/">Home</Link>
                        <Link href="/">Pracing</Link> 

                   </div>
                
                   <button className="bg-blue-400 text-center w-54 flex flex-row rounded-3xl p-4"> <img src="/google.png" alt="google" width={30} height={30}  className="pl-3"  /><span>Sign in with Google</span> </button>

                    
                
                </div>
               
                
          
            
        )
    }

