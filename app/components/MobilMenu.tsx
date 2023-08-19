import React, { useRef } from "react";
import { motion } from "framer-motion";
import Link from "next/link";
import Image from "next/image";

const phoneNumber = "(+373) 69 692 069";

const links = [
  {
    name: "Acasă",
    href: "#top",
  },
  {
    name: "Despre noi",
    href: "#about",
  },
  {
    name: "Contacte",
    href: "#contacts",
  },
];
function MobilMenu({ setShowMenu }: { setShowMenu: any }) {
  const menuRef = useRef<HTMLDivElement>(null);

  function handleOverlayClick(e: any) {
    if (menuRef.current) {
      //@ts-ignore
      if (e.target !== menuRef.current && !menuRef.current.contains(e.target)) {
        setShowMenu(false);
      }
    }
  }

  function handleScroll(e: React.MouseEvent<HTMLAnchorElement, MouseEvent>) {
    e.preventDefault();
    const href = e.currentTarget.href;

    if (href.includes("#top")) {
      window.scrollTo(0, 0);
    } else {
      const targetId = href.replace(/.*\#/, "");

      const elem = document.getElementById(targetId);

      elem?.scrollIntoView({
        behavior: "smooth",
      });
    }

    setShowMenu(false);
  }

  return (
    <motion.div
      className="z-[100000] fixed top-0 left-0 w-full h-[100vh] bg-[#1e1e1e]/[0.5]"
      onClick={handleOverlayClick}
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
    >
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
        ref={menuRef}
        className="bottom-0 p-[15px] left-0 absolute w-full h-[60vh] bg-[#F0F0F2] rounded-tl-[15px] rounded-tr-[15px]"
      >
        <div className="flex gap-[3px] justify-between items-center">
          <span className="!text-[14px]">Menu</span>
          <button
            className="flex items-center bg-[#fff] px-[6px] py-[3px] rounded-[7px] !text-[14px]"
            onClick={() => setShowMenu(false)}
          >
            Close
            <img src="/Times.svg" />
          </button>
        </div>

        <div className="mt-[25px] flex-col justify-between">
          <div className="flex flex-col">
            {links.map((link: any, i: number) => {
              return (
                <Link
                  href={link.href}
                  key={i}
                  onClick={handleScroll}
                  className={`${
                    i === 1
                      ? "border-t-[1px] border-b-[1px] border-[#1d1d1d]/[0.15]"
                      : ""
                  }  flex justify-between py-[15px]`}
                >
                  <h2 className="text-[20px]">{link.name}</h2>
                </Link>
              );
            })}
          </div>

          <div className="flex fixed left-[15px] right-[15px] bottom-[50px] bg-white rounded-[15px] px-[18px] py-[15px] text-[14px] shrink-0 gap-[7px]">
            <Image height="30" width="30" alt="" src="/Consultant.svg" />
            <div className="flex flex-col">
              <span className="text-[11px] text-[#1e1e1e]/[0.35]">
                Telefon mobil
              </span>
              <h3 className="text-[#1e1e1e] text-[14px]">{phoneNumber}</h3>
            </div>
          </div>
        </div>
      </motion.div>
    </motion.div>
  );
}

export default MobilMenu;
