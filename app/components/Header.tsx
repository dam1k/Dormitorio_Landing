"use client";
import React from "react";
import Link from "next/link";

const phoneNumber = "(+373) 696 92 069";

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
    <header className="relative bg-[#1d1d1d]/[0.5] backdrop-blur !z-[100] min-[1025px]:block hidden ">
      <nav className="container !pt-4 !pb-4 max-[1024px]!mt-[65px] flex !items-center">
        <div className="flex gap-[45px] text-white text-[14px] flex-1">
          <Link href="#contacts" onClick={handleScroll}>
            Colaborează cu noi
          </Link>
          <Link href="#about" onClick={handleScroll}>
            Despre noi
          </Link>
        </div>

        <Link href="/" className="flex-1 flex justify-center">
          <img
            src="/DormitorioLogo.png"
            alt="dormitorio"
            className="w-[200px]"
          />
        </Link>

        <div className="flex gap-[45px] text-white text-[14px] items-center flex-1 justify-end">
          <Link href="#new-collection" onClick={handleScroll}>
            Colecția nouă
          </Link>
          <a href="/Dormitorio.pdf" download>
            Descarcă catalog
          </a>
          <div className="flex items-center text-[14px] shrink-0 gap-[7px]">
            {/*<img className="h-[30px] w-[30px]" alt="" src="/Consultant.png" />*/}
            <div className="flex flex-col">
              <span className="text-white">Telefon mobil</span>
              <a href={`tel:${phoneNumber}`}>{phoneNumber}</a>
            </div>
          </div>
        </div>
      </nav>
    </header>
  );
};

export default Header;
