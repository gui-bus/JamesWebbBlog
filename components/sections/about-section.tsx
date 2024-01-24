import { Button, Link } from "@nextui-org/react";

const AboutSection = () => {
  return (
    <div className="flex h-screen w-full flex-col items-center justify-center bg-[url('/Ariane.jpg')] bg-cover bg-center bg-no-repeat px-5 py-20 md:items-start md:justify-start">
      <div className="mx-auto flex w-full max-w-6xl flex-col gap-4 text-center text-white md:text-left">
        <h3 className="text-3xl font-bold">O que é o James Webb?</h3>
        <div className="flex w-full max-w-md flex-col gap-2 font-light">
          <p>
            James Webb é um telescópio espacial desenvolvido pela NASA em
            parceria com a ESA e a CSA.
          </p>
          <p>
            Ele foi projetado para ser o sucessor do telescópio espacial Hubble
            e{" "}
            <span className="text-webb font-semibold">
              é considerado o telescópio mais poderoso já construído pela
              humanidade.
            </span>
          </p>
          <p>
            O seu lançamento ocorreu no dia 25 de dezembro de 2021, em um
            foguete Ariane 5.
          </p>
        </div>
        <Link
          href="https://www.youtube.com/embed/7nT7JGZMbtM"
          isExternal
          className="flex w-full justify-center rounded-xl border px-8 py-3 uppercase text-white transition-all duration-200 hover:bg-white hover:text-black md:w-fit"
        >
          Assistir
        </Link>
      </div>
    </div>
  );
};

export default AboutSection;
