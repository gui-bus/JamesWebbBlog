import Link from "next/link";
import { Button } from "./button";
import { Separator } from "./separator";

interface NavLinkProps {
  href: string;
  linkTitle: string;
}

const NavLink = ({ href, linkTitle }: NavLinkProps) => (
  <Link href={href} className="w-full">
    <Button
      variant={"ghost"}
      className="font-normal uppercase text-white w-full"
    >
      {linkTitle}
    </Button>
    <Separator  className="my-2 md:hidden"/>
  </Link>
);

const NavLinks = () => {
  return (
    <nav>
      <div className="flex flex-col items-center justify-center space-x-2 md:flex-row">
        <NavLink href="/" linkTitle="James Webb"></NavLink>
        <NavLink href="/orbit" linkTitle="Órbita"></NavLink>
        <NavLink href="/gallery" linkTitle="Galeria"></NavLink>
        <NavLink href="/blog" linkTitle="Blog"></NavLink>
        <NavLink href="/faq" linkTitle="FAQ"></NavLink>
      </div>
    </nav>
  );
};

export default NavLinks;
