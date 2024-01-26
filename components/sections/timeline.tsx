import Image from "next/image";
import { Timeline } from "../timeline/Timeline";

const TimelineSection = () => {
  const timelineItems = [
    {
      title: "Etapa 01",
      bullet: "",
      children: "TRANSPORTE NA ESTRADA",
      href: "https://www.youtube.com/embed/wbOhkMQ2Lns",
    },
    {
      title: "Etapa 02",
      bullet: "",
      children: "TRANSPORTE DE NAVIO",
      href: "https://www.youtube.com/embed/xU3s1Uh8FhI",
    },
    {
      title: "Etapa 03",
      bullet: "",
      children: "CHEGANDO NA GUIANA",
      href: "https://www.youtube.com/embed/lNQxeTgd9dU",
    },
    {
      title: "Etapa 04",
      bullet: "",
      children: "SALA DE LIMPEZA",
      href: "https://www.youtube.com/embed/47gqLGIDjK0",
    },
    {
      title: "Etapa 05",
      bullet: "",
      children: "COMBUSTÍVEL",
      href: "https://www.youtube.com/embed/kQO7kY-xv8c",
    },
    {
      title: "Etapa 06",
      bullet: "",
      children: "LANÇAMENTO",
      href: "https://www.youtube.com/embed/Whh0ffL9kKE",
    },
  ];

  return (
    <section className="flex h-auto w-full items-center justify-center bg-neutral-100 px-5 pb-10">
      <div className="mx-auto flex w-full max-w-6xl flex-col items-center justify-center gap-10 md:flex-row">
        <div className="flex flex-col items-center justify-center text-center md:w-2/3">
          <h3 className="text-3xl font-bold">Órbita</h3>
          <p className="px-5 pb-5 text-center text-sm font-light">
            Conheça um pouco mais sobre os passos essênciais para colocar o
            James Webb no espaço
          </p>

          <Image
            src="/Mosaic.png"
            alt="James Webb"
            width={0}
            height={0}
            sizes="100vw"
            priority
            className="h-auto w-full object-contain"
          />
        </div>

        <div className="md:w-1/3">
          <Timeline
            activeItem={6}
            items={timelineItems}
            bulletSize={15}
            lineSize={1}
          />
        </div>
      </div>
    </section>
  );
};

export default TimelineSection;
