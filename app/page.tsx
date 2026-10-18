import Section2 from "./comoponent/section2";
import Herosection from "./comoponent/Herosection";
export default function Home() {
  return (
    <div className="flex flex-col justify-center items-center  p-20">
      
     <Herosection/>
      <Section2/>
      
    </div>
  );
}
