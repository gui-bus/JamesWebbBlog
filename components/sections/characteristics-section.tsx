import { Card, CardBody, CardHeader } from "@nextui-org/react";
import { Separator } from "../ui/separator";

const CharacteristicsSection = () => {
  return (
    <section className="h-full w-full flex-col bg-neutral-100 px-5 py-10">
      <div className="mx-auto w-full max-w-6xl">
        <h3 className="text-3xl font-bold text-center md:text-left">Principais características</h3>

        <div className="mt-5 grid grid-cols-1 gap-4 md:grid-cols-2 lg:grid-cols-3">
          <Card>
            <CardBody className="p-5">
              <p className="text-webb mb-2 text-lg font-bold">
                Maior capacidade de observação
              </p>
              <p className="text-sm font-light">
                O James Webb é capaz de observar objetos celestes mais distantes
                e com mais detalhes do que os telescópios atuais, devido a sua
                grande capacidade de coleta de luz e resolução.
              </p>
            </CardBody>
          </Card>

          <Card>
            <CardBody className="p-5">
              <p className="text-webb mb-2 text-lg font-bold">Grande espelho</p>
              <p className="text-sm font-light">
                Com um espelho de 6,5 metros de diâmetro. O espelho é feito de
                uma mistura de berílio e ouro, o que lhe permite coletar mais
                luz e detectar objetos mais fracos e distantes do universo.
              </p>
            </CardBody>
          </Card>

          <Card>
            <CardBody className="p-5">
              <p className="text-webb mb-2 text-lg font-bold">Infravermelho</p>
              <p className="text-sm font-light">
                O James Webb é especialmente adequado para observar no
                infravermelho, o que permite observar estrelas e galáxias que
                não podem ser observadas por telescópios convencionais.
              </p>
            </CardBody>
          </Card>

          <Card>
            <CardBody className="p-5">
              <p className="text-webb mb-2 text-lg font-bold">Resfriamento</p>
              <p className="text-sm font-light">
                Para melhorar a sensibilidade das observações no infravermelho,
                o James Webb tem um sistema de resfriamento a nitrogênio
                líquido, que mantem seguras suas partes sensíveis a temperaturas
                muito baixas (-233 °C).
              </p>
            </CardBody>
          </Card>

          <Card>
            <CardBody className="p-5">
              <p className="text-webb mb-2 text-lg font-bold">Posicionamento</p>
              <p className="text-sm font-light">
                O James Webb foi posicionado em um ponto de Lagrange, um ponto
                gravitacionalmente estável no espaço, a cerca de 1,5 milhões de
                quilômetros da Terra. Permitindo que o telescópio
                esteja alinhado com o Sol e a Terra.
              </p>
            </CardBody>
          </Card>

          <Card>
            <CardBody className="p-5">
              <p className="text-webb mb-2 text-lg font-bold">Maior precisão</p>
              <p className="text-sm font-light">
                O James Webb tem uma precisão muito maior do que o Hubble. Ele
                pode observar objetos até 100 vezes mais fracos do que o Hubble
                pode detectar, o que significa que ele pode observar objetos
                ainda mais distantes e mais fracos.
              </p>
            </CardBody>
          </Card>
        </div>
      </div>

      <Separator className="w-full max-w-6xl mx-auto mt-10"/>
    </section>
  );
};

export default CharacteristicsSection;
