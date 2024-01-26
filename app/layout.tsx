import type { Metadata } from "next";
import { Montserrat } from "next/font/google";
import "./globals.css";
import Navbar from "../components/navbar";
import { UIProvider } from "@/providers/ui-provider";
import Footer from "@/components/footer";

const montserrat = Montserrat({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "James Webb Space Telescope | Explorando o Cosmos!",
  description:
    "Explore as maravilhas do universo com o Telescópio Espacial James Webb (JWST), descubra seu propósito e seu funcionamento. Adentre os detalhes intrigantes sobre a missão, o lançamento e os instrumentos de ponta que impulsionam a pesquisa espacial e muito mais. Navegue por um blog abrangente repleto de imagens impressionantes capturadas pelo JWST. Embarque conosco nessa fascinante jornada cósmica, onde a exploração e a revelação científica se encontram.",
  keywords: [
    "James Webb Space Telescope",
    "JWST",
    "Telescópio espacial",
    "Exploração espacial",
    "Missão JWST",
    "Lançamento JWST",
    "Instrumentos científicos espaciais",
    "Tecnologia astronômica avançada",
    "Astronomia espacial",
    "Universo observável",
    "Imagens espaciais",
    "Galeria de fotos cósmicas",
    "Exploração do cosmos",
    "Ciência astronômica",
    "Descobertas espaciais",
    "Observação celeste",
    "Astrofotografia",
    "Cosmologia",
    "Mistérios do universo",
    "Tecnologia telescópica",
    "Órbita espacial",
    "Ciência do telescópio espacial",
    "Observatório espacial",
    "Espaço profundo",
    "Constelações",
    "Estrelas distantes",
    "Nebulosas",
    "Buracos negros",
    "Planetas distantes",
    "Sistema solar",
    "Astronomia moderna",
    "Avanços na pesquisa espacial",
    "Infraestrutura astronômica",
    "Sonda espacial",
    "Pesquisa científica espacial",
    "Telescópio orbital",
    "Estudos celestiais",
    "Exploração cósmica",
    "Fronteiras do universo",
    "Revelações estelares",
    "Fotografia astronômica",
    "Espaço interestelar",
    "Observatório espacial avançado",
    "Espaçonave não tripulada",
    "Imagens cósmicas de alta resolução",
    "Novas fronteiras da astronomia",
    "Sondas interplanetárias",
    "Ciência do espaço profundo",
    "Desvendando o cosmos",
    "Maravilhas do espaço sideral",
    "Exploração científica do espaço",
    "Astronomia avançada",
    "Espaço intergaláctico",
    "Estudo estelar",
    "Descobrindo o desconhecido",
    "Pesquisa astronômica",
    "Exploração estelar",
    "Visão do espaço profundo",
    "Mistérios celestiais",
    "Viagem espacial",
    "Descobrindo o universo",
    "Fascínio espacial",
    "Jornada estelar",
    "Astronomia contemporânea",
    "Descobertas cósmicas",
    "Céu noturno",
    "Espaço infinito",
    "Aventura astronômica",
    "Fronteiras do conhecimento",
    "Vistas celestiais",
    "Telescópio espacial avançado",
    "Futuro da exploração espacial",
  ],
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="pt-BR">
      <body className={montserrat.className}>
        <UIProvider>
          <div className="md:hidden">
            <Navbar />
          </div>

          {children}
          <Footer />
        </UIProvider>
      </body>
    </html>
  );
}
