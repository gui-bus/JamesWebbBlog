import Image from "next/image";
import logo from "@/public/logo.png";
import Link from "next/link";
import { Button } from "@/components/ui/button";

import {
  Sheet,
  SheetContent,
  SheetDescription,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet";
import { LuMenu } from "react-icons/lu";
import NavLinks from "./ui/nav-links";
const Navbar = () => {
  return (
    <header className="relative mx-auto flex w-full max-w-4xl items-center justify-around">
      <Link href="/">
        <Image
          src={logo}
          alt="James Webb"
          sizes="100vw"
          height={0}
          width={0}
          className="h-auto w-40 object-cover"
        />
      </Link>

      <div className="hidden md:block">
        <NavLinks />
      </div>

      <div className="md:hidden">
        <Sheet>
          <SheetTrigger className="text-white">
            <Button
              asChild
              size={"icon"}
              className="h-10 w-10 bg-transparent p-1"
            >
              <LuMenu className="text-black" />
            </Button>
          </SheetTrigger>

          <SheetContent>
            <SheetHeader>
              <SheetTitle className="flex items-center justify-center">
                <Link href="/">
                  <Image
                    src={logo}
                    alt="James Webb"
                    sizes="100vw"
                    height={0}
                    width={0}
                    className="h-auto w-56 object-cover"
                  />
                </Link>
              </SheetTitle>
              <SheetDescription>
                <NavLinks />
              </SheetDescription>
            </SheetHeader>
          </SheetContent>
        </Sheet>
      </div>
    </header>
  );
};

export default Navbar;
