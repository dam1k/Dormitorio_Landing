import React from "react";
import About from "../components/About";

const content = {
  copyright: "© Dormitorio 2023. All rights reserved.",
  phone: "(+373) 69 692 069",
  email: "info@dormtiorio.md",
  showRoom:
    "Centru comercial Creator MALL, Strada Calea Trușenilor 91, Chișinău",
};

function Footer() {
  return (
    <div
      className="container max-[1024px]:grid-cols-1 grid min-[1025px]:grid-cols-2 gap-[75px] !mb-[100px] max-[1024px]:mt-[75px]"
      id="about"
    >
      {/*<div className="flex flex-col max-[1024px]:gap-[75px] min-[1025px]:gap-[150px]">*/}
      {/*<p className="max-[1024px]:hidden">{content.copyright}</p>*/}
      {/*</div>*/}
      {/*<div className="flex flex-col gap-[10px]">*/}
      {/*<div className="flex max-[1024px]:flex-col max-[1024px]:gap-[75px] min-[1025px]:gap-[150px]">*/}
      <div className="flex flex-col gap-[20px]">
        <h2 className="text-[25px]">Informatii de contact</h2>
        <div>
          <span className="text-black/[0.45]">Phone</span>
          <p>{content.phone}</p>
        </div>
        <div>
          <span className="text-black/[0.45]">Email</span>
          <p>{content.email}</p>
        </div>
      </div>
      <div className="flex flex-col gap-[20px]">
        <h2 className="text-[25px]">Showrooms</h2>
        <p>{content.showRoom}</p>
        <p>{content.copyright}</p>
      </div>
    </div>
  );
}

export default Footer;
