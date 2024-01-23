import { Oswald } from "next/font/google";
const oswald = Oswald({ subsets: ["latin"] });
import { BsChevronDown } from "react-icons/bs";

const HeroSection = () => {
  return (
    <section className="flex h-full min-h-screen w-full flex-col items-center justify-center bg-[url('/Webb.png')] bg-cover bg-center bg-no-repeat">
      <div className="flex flex-col items-center justify-center space-y-6 p-5 text-center text-white">
        <div className={oswald.className}>
          <h1 className="text-7xl md:text-9xl font-black">JAMES WEBB</h1>
        </div>
        <p className="mx-auto w-full max-w-2xl text-xl md:text-2xl font-light">
          O MAIOR E MAIS PODEROSO INSTRUMENTO DE OBSERVAÇÃO ESPACIAL JÁ
          CONSTRUÍDO
        </p>
      </div>

      <BsChevronDown className="text-white w-10 h-10 absolute bottom-5 animate-bounce"/>
    </section>
  );
};

export default HeroSection;
