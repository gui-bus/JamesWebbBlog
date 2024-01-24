import { Oswald } from "next/font/google";
const oswald = Oswald({ subsets: ["latin"] });

const HeroSection = () => {
  return (
    <section className="flex h-full w-full flex-col items-center justify-center bg-[url('/Webb.png')] bg-cover bg-center bg-no-repeat py-20">
      <div className="flex flex-col items-center justify-center space-y-6 p-5 text-center text-white">
        <div className={oswald.className}>
          <h1 className="text-7xl font-black md:text-9xl">JAMES WEBB</h1>
        </div>
        <p className="mx-auto w-full max-w-2xl text-xl font-light md:text-2xl">
          O MAIOR E MAIS PODEROSO INSTRUMENTO DE OBSERVAÇÃO ESPACIAL JÁ
          CONSTRUÍDO
        </p>
      </div>
    </section>
  );
};

export default HeroSection;
