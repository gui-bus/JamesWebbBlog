import { Oswald } from "next/font/google";
const oswald = Oswald({ subsets: ["latin"] });

const EndingSection = () => {
  return (
    <div className="flex h-full w-full flex-col items-center justify-center bg-[url('/Carina.png')] bg-cover bg-center bg-no-repeat px-5 py-20">
      <div className="mx-auto flex w-full max-w-6xl flex-col gap-4 text-center text-white">
        <h3 className={`text-3xl lg:text-5xl font-bold ${oswald.className}`}>
          ESTAMOS CADA VEZ MAIS PRÓXIMOS DE ENTENDER OS MISTÉRIOS E SEGREDOS DO
          UNIVERSO!
        </h3>
      </div>
    </div>
  );
};

export default EndingSection;
