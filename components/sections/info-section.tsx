"use client";
import {
  Table,
  TableHeader,
  TableColumn,
  TableBody,
  TableRow,
  TableCell,
  Card,
  CardBody,
  CardHeader,
  Divider,
} from "@nextui-org/react";
import Image from "next/image";

import spectrum from "@/public/spectrum.png";

const InfoSection = () => {
  return (
    <section className="w-full bg-neutral-100 p-5 lg:px-0 py-10">
      <div className="mx-auto w-full max-w-6xl">
        <div className="mb-5 flex flex-col items-center justify-center gap-2">
          <h4 className="text-3xl font-bold">Dados gerais e Instrumentos</h4>
          <p className="text-sm font-light">
            Confira abaixo algumas das especificações técnicas e informações
            gerais do James Webb
          </p>
        </div>

        <Table isStriped aria-label="Visão geral do James Webb">
          <TableHeader>
            <TableColumn className="text-xl uppercase text-black">
              Visão Geral
            </TableColumn>
            <TableColumn> </TableColumn>
          </TableHeader>
          <TableBody>
            <TableRow key="1">
              <TableCell>DATA DE LANÇAMENTO</TableCell>
              <TableCell className="flex justify-end text-right">
                25 de Dezembro/2021
              </TableCell>
            </TableRow>
            <TableRow key="2">
              <TableCell>DURAÇÃO DA MISSÃO</TableCell>
              <TableCell className="flex justify-end text-right">
                <p>
                  Inicial 5 Anos{" "}
                  <span className="opacity-50">/ Objetivo 10 Anos</span>
                </p>
              </TableCell>
            </TableRow>
            <TableRow key="3">
              <TableCell>FOGUETE DE LANÇAMENTO</TableCell>
              <TableCell className="flex justify-end text-right">
                Ariane 5
              </TableCell>
            </TableRow>
            <TableRow key="4">
              <TableCell>MASSA NO LANÇAMENTO</TableCell>
              <TableCell className="flex justify-end text-right">
                6,200 kg
              </TableCell>
            </TableRow>
            <TableRow key="5">
              <TableCell>ÓRBITA</TableCell>
              <TableCell className="flex justify-end text-right">
                L2 ~1.5 Milhões de km da Terra
              </TableCell>
            </TableRow>
            <TableRow key="6">
              <TableCell>DIMENSÕES</TableCell>
              <TableCell className="flex justify-end text-right">
                10.66m Altura / 4.47m Largura / 6.5m Diâmetro
              </TableCell>
            </TableRow>
            <TableRow key="7">
              <TableCell>ESPELHO PRIMÁRIO</TableCell>
              <TableCell className="flex justify-end text-right">
                18 segmentos de espelho de berílio revestidos em ouro.
              </TableCell>
            </TableRow>
            <TableRow key="8">
              <TableCell>ESCUDO SOLAR</TableCell>
              <TableCell className="flex justify-end text-right">
                <p>
                  22m x 12m <span className="opacity-50">/ 5 Camadas</span>
                </p>
              </TableCell>
            </TableRow>
            <TableRow key="9">
              <TableCell>FAIXA DE COMPRIMENTO DE ONDA</TableCell>
              <TableCell className="flex justify-end text-right">
                0,6 μm - 28 μm
              </TableCell>
            </TableRow>
            <TableRow key="10">
              <TableCell>TEMPERATURA DE OPERAÇÃO</TableCell>
              <TableCell className="flex justify-end text-right">
                James Webb -233°C / MIRI -266°C
              </TableCell>
            </TableRow>
            <TableRow key="11">
              <TableCell>CENTRO DE OPERAÇÕES</TableCell>
              <TableCell className="flex justify-end text-right">
                Instituto de Ciência do Telescópio Espacial - Baltimore, EUA.
              </TableCell>
            </TableRow>
            <TableRow key="12">
              <TableCell>INSTRUMENTOS</TableCell>
              <TableCell className="flex justify-end text-right">
                NIRCam / MIRI / NIRSpec
              </TableCell>
            </TableRow>
          </TableBody>
        </Table>
        <p className="m-2 text-sm opacity-50">Dados: ESA/Webb</p>
        <Divider className="my-8" />

        <div className="grid grid-cols-1 gap-4 lg:grid-cols-3">
          <Card>
            <CardHeader className="flex items-center justify-center">
              <p className="pt-5 text-xl font-bold text-webb">NIRCam</p>
            </CardHeader>
            <CardBody>
              <p className="px-5 pb-5 text-center text-sm font-light">
                O NIRCam é um instrumento de imagem e espectroscopia na faixa
                infravermelha próxima, que é usado para observar os objetos
                celestes mais brilhantes e mais distantes no universo. Ele pode
                detectar a luz emitida por estrelas e galáxias formadas no
                início do universo.
              </p>
            </CardBody>
          </Card>

          <Card>
            <CardHeader className="flex items-center justify-center">
              <p className="pt-5 text-xl font-bold text-webb">MIRI</p>
            </CardHeader>
            <CardBody>
              <p className="px-5 pb-5 text-center text-sm font-light">
                O MIRI é um instrumento que opera na faixa do infravermelho
                médio e fornece informações sobre a formação de estrelas e
                planetas, além de investigar a composição química de objetos
                celestes e detectar a presença de água e moléculas orgânicas em
                outros planetas.
              </p>
            </CardBody>
          </Card>

          <Card>
            <CardHeader className="flex items-center justify-center">
              <p className="pt-5 text-xl font-bold text-webb">NIRSpec</p>
            </CardHeader>
            <CardBody>
              <p className="px-5 pb-5 text-center text-sm font-light">
                O NIRSpec é um espectrógrafo que opera na faixa de infravermelho
                próximo, projetado para medir a luz de objetos celestes em
                diferentes comprimentos de onda e obter informações sobre a
                estrutura, composição e movimento desses objetos. Ele é usado
                para estudar a história da formação de estrelas e galáxias e a
                evolução do universo.
              </p>
            </CardBody>
          </Card>
        </div>

        <Image
          src={spectrum}
          alt="Imagem que ilustra a faixa de funcionamento do James Webb"
          width={0}
          height={0}
          sizes="100vw"
          className="mt-5 h-auto w-full rounded-xl object-cover"
        />
        <p className="m-2 text-sm opacity-50">Créditos: ESA/ATG medialab.</p>
        <p className="px-5 pb-5 text-center text-sm font-light">
          O James Webb é capaz de observar comprimentos de onda de 0,6 a 28,5
          micrômetros, uma faixa muito mais ampla do que a observada pelo
          Telescópio Espacial Hubble. O infravermelho do James Webb é uma
          ferramenta importante que permite a observação de objetos celestes que
          emitem radiação nessa faixa de comprimento de onda, permitindo o
          estudo de objetos distantes e a compreensão da formação de galáxias,
          estrelas e planetas.
        </p>
      </div>
    </section>
  );
};

export default InfoSection;
