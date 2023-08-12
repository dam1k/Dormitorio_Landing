"use client";

import React from "react";
import Link from "next/link";
import Image from "next/image";
import { CollectionSelect } from "./Select";

interface item {
  name: string;
  href: string;
}

const items: item[] = [
  {
    name: "Contacte",
    href: "#contacts",
  },
  {
    name: "Despre noi",
    href: "#about",
  },
  {
    name: "Acasă",
    href: "#home",
  },
  {
    name: "Coleție nouă",
    href: "#new-collection",
  },
];

function handleScroll(e: React.MouseEvent<HTMLAnchorElement, MouseEvent>) {
  e.preventDefault();
  const href = e.currentTarget.href;
  const targetId = href.replace(/.*\#/, "");

  const elem = document.getElementById(targetId);

  elem?.scrollIntoView({
    behavior: "smooth",
  });
}

const Header = () => {
  return (
    <header className="container">
      <nav className="mt-5 flex !items-center">
        <div className="flex gap-[45px] text-black text-[14px] flex-1">
          <Link href="#contacts" onClick={handleScroll}>
            Contacte
          </Link>
          <Link href="#about" onClick={handleScroll}>
            Despre noi
          </Link>
        </div>

        <Link href="/" className="flex-1 flex justify-center">
          <Image src="/logo.png" width="150" height="100" alt="dormitorio" />
        </Link>

        <div className="flex gap-[45px] text-black text-[14px] items-center flex-1 justify-end">
          <Link href="/" onClick={handleScroll}>
            Acasă
          </Link>
          <CollectionSelect />
          <div className="flex text-[14px] shrink-0 gap-[7px]">
            <Image height="30" width="30" alt="" src="/Consultant.svg" />
            <div className="flex flex-col">
              <span className="text-black/[0.35]">Telefon mobil</span>
              <h3 className="">(+373) 69 692 069</h3>
            </div>
          </div>
        </div>
      </nav>
    </header>
  );
};

export default Header;
