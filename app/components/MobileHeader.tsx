"use client";

import React, { useState, useEffect } from "react";
import Link from "next/link";
import Image from "next/image";
import { CollectionSelect } from "./Select";
import MobileMenu from "./MobileMenu";
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

const MobileHeader = () => {
  const [width, setWidth] = useState<number>(0);
  const [showMenu, setShowMenu] = useState(false);

  useEffect(() => {
    setWidth(window.innerWidth);

    window.addEventListener("resize", () => setWidth(window.innerWidth));

    return () =>
      window.removeEventListener("resize", () => setWidth(window.innerWidth));
  }, []);

  useEffect(() => {
    if (width > 1024) {
      setShowMenu(false);
    }
  }, [width]);

  return (
    <>
      <header className="max-[1024px]:fixed min-[1025px]:hidden bg-[#1d1d1d]/[0.75] backdrop-blur top-0 left-0 p-[10px] w-full !z-[10000]">
        <nav className="flex justify-between items-center">
          <Link href="/">
            <img src="/DormitorioLogo.png" className="w-[150px]" />
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
