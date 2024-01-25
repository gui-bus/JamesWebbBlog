import { Link } from "@nextui-org/react";

const MissionSection = () => {
  return (
    <div className="flex h-full w-full flex-col items-center justify-center bg-[url('/Mission.jpg')] bg-cover bg-center bg-no-repeat px-5 py-20">
      <div className="mx-auto flex w-full max-w-6xl flex-col gap-4 text-center text-white">
        <h3 className="text-3xl font-bold">Qual a sua missão?</h3>
        <div className="mx-auto flex w-full max-w-2xl flex-col gap-2 font-light">
          <p>
            A missão do James Webb é{" "}
            <span className="text-webb font-semibold">
              explorar o universo em comprimentos de onda infravermelhos
            </span>{" "}
            , o que significa que ele é capaz de ver objetos que são muito
            distantes ou que estão escondidos em nuvens de poeira e gás.
          </p>
          <p>
            Com essa tecnologia, os astrônomos esperam obter{" "}
            <span className="text-webb font-semibold">
              novas informações sobre a formação das primeiras estrelas e
              galáxias
            </span>{" "}
            , a evolução do universo e a busca por planetas habitáveis em outras
            estrelas.
          </p>
        </div>
      </div>
    </div>
  );
};

export default MissionSection;
