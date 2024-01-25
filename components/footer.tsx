import React, { ReactNode } from "react";
import { Button, Link } from "@nextui-org/react";
import Image from "next/image";
import {
  FaInstagram,
  FaGithub,
  FaLinkedinIn,
  FaChevronRight,
} from "react-icons/fa6";

import Logo from "@/public/logo.png";

type ButtonSize = "sm" | "md" | "lg" | undefined;

interface SocialLinkProps {
  href: string;
  icon: ReactNode;
  size: ButtonSize;
}

function SocialLink({ href, icon, size }: SocialLinkProps) {
  return (
    <Link href={href} isExternal>
      <Button
        isIconOnly
        startContent={icon}
        size={size}
        className="bg-transparent text-white"
      />
    </Link>
  );
}

interface FooterLinkProps {
  text: string;
}

function FooterLink({ text }: FooterLinkProps) {
  return (
    <p className="group flex cursor-pointer items-center justify-center gap-1">
      <span
        className="footerLink hidden group-hover:block group-hover:animate-spin"
        style={{ animationIterationCount: 1, animationDuration: "0.3s" }}
      >
        <FaChevronRight size={12} className="text-white" />
      </span>
      {text}
    </p>
  );
}

export default function Footer() {
  const currentYear = new Date().getFullYear();

  const departments = [
    "Suporte ao Cliente",
    "Integração de Sistemas",
    "Gerenciamento de Clientes",
    "Acompanhamento de Chamados",
  ];

  const institucionals = [
    "Nossa Equipe",
    "Sobre a ONDesk",
    "Política de Privacidade",
    "Depoimentos dos Clientes",
  ];

  const helps = [
    "Suporte Técnico",
    "Como Usar a ONDesk",
    "Integração de Serviços",
    "Recursos da Plataforma",
  ];

  return (
    <footer className="mx-auto w-full cursor-default items-center justify-center bg-[#181717] pt-8 text-white shadow-xl md:px-0">
      <section className="flex flex-col items-center justify-around gap-y-4 px-4 pb-8 shadow-xl md:flex-row md:gap-y-0">
        <Link href="/">
          <Image
            src={Logo}
            alt="ONDesk"
            width={200}
            height={50}
            className="h-auto w-52 object-contain"
          />
        </Link>

        <div className="flex flex-col items-center justify-center">
          <p className="px-5 text-center text-sm">
            &copy; {currentYear} Blog James Webb - Todos os direitos reservados.
          </p>
          <p className="px-5 text-center text-sm opacity-50">
            Todas as informações presentes neste site pertencem a{" "}
            <Link
              href="https://www.nasa.gov/"
              isExternal
              className="text-xs text-white underline"
            >
              NASA
            </Link>{" "}
            /{" "}
            <Link
              href="https://esawebb.org/"
              isExternal
              className="text-xs text-white underline"
            >
              ESA
            </Link>{" "}
            /{" "}
            <Link
              href="https://www.asc-csa.gc.ca/eng/"
              isExternal
              className="text-xs text-white underline"
            >
              CSA
            </Link>
            .
          </p>
        </div>

        <div className="flex gap-1">
          <SocialLink
            href="https://www.linkedin.com/in/gui-bus"
            icon={<FaLinkedinIn size={20} />}
            size="sm"
          />
          <SocialLink
            href="https://github.com/gui-bus"
            icon={<FaGithub size={20} />}
            size="sm"
          />
          <SocialLink
            href="https://www.instagram.com/guibus_dev"
            icon={<FaInstagram size={20} />}
            size="sm"
          />
        </div>
      </section>
    </footer>
  );
}
