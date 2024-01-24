import type { Metadata } from "next";
import { Montserrat } from "next/font/google";
import "./globals.css";
import Navbar from "../components/navbar";
import { UIProvider } from "@/providers/ui-provider";

const montserrat = Montserrat({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "James Webb Space Telescope | Desvendando os mistérios do universo!",
  description: "Generated by create next app",
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
          <div className="absolute w-full">
            <Navbar />
          </div>
          {children}
        </UIProvider>
      </body>
    </html>
  );
}
