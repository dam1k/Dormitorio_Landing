"use client";

import Link from "next/link";
import Image from "next/image";

const phoneNumber = "(+373) 69 692 069";

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
          <Image
            src="/DormitorioLogo.png"
            width="175"
            height="175"
            alt="dormitorio"
          />
        </Link>

        <div className="flex gap-[45px] text-white text-[14px] items-center flex-1 justify-end">
          <Link href="#new-collection" onClick={handleScroll}>
            Colecția nouă
          </Link>
          <div className="flex text-[14px] shrink-0 gap-[7px]">
            <Image height="30" width="30" alt="" src="/Consultant.svg" />
            <div className="flex flex-col">
              <span className="text-white">Telefon mobil</span>
              <h3 className="">{phoneNumber}</h3>
            </div>
          </div>
        </div>
      </nav>
    </header>
  );
};

export default Header;
