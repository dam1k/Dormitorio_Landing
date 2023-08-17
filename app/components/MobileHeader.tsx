"use client";

import React, { useState } from "react";
import Link from "next/link";
import Image from "next/image";
import { CollectionSelect } from "./Select";
import MobileMenu from "../components/MobilMenu";
import { AnimatePresence } from "framer-motion";

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

const MobileHeader = () => {
  const [showMenu, setShowMenu] = useState(false);
  return (
    <>
      <header className="max-[1024px]:fixed min-[1025px]:hidden bg-[#1d1d1d]/[0.75] backdrop-blur top-0 left-0 p-[10px] w-full !z-[10000]">
        <nav className="flex justify-between items-center">
          <Link href="/">
            <Image
              src="/DormitorioLogo.png"
              width="150"
              height="100"
              alt="dormitorio"
            />
          </Link>

          <button
            className="p-[10px] rounded-[7px] bg-black/[0.05]"
            onClick={() => setShowMenu(true)}
          >
            <img src="/Menu.svg" alt="menu" />
          </button>
        </nav>
      </header>
      <AnimatePresence>
        {showMenu && <MobileMenu setShowMenu={setShowMenu} />}
      </AnimatePresence>
    </>
  );
};

export default MobileHeader;
