import React from "react";

const content = {
  desc: `Dormitorio – un brand de mobilă inspirată din cele mai bune tehnici ale design-ului italian. 
  Marcă înregistrată în Republica Moldova, dormitoarele asigură o calitate superioară, iar clienții noștri pot alege dormitorul perfect dintr-o gamă diversă de opțiuni.`,
  copyright: "© Dormitorio 2023. All rights reserved.",
  phone: "(+373) 69 692 069",
  email: "info@dormtiorio.md",
  showRoom:
    "Centru comercial Creator MALL, Strada Calea Trușenilor 91, Chișinău",
};

function Footer() {
  return (
    <div className="container grid grid-cols-2 gap-[25px] !mb-[100px]">
      <div className="flex flex-col gap-[150px]">
        <p className="max-w-[600px]">{content.desc}</p>
        <p>{content.copyright}</p>
      </div>
      <div className="flex flex-col gap-[10px]">
        <div className="flex gap-[150px]">
          <div className="flex flex-col gap-[20px] flex-1">
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
          <div className="flex flex-col gap-[20px] flex-1">
            <h2 className="text-[25px]">Showrooms</h2>
            <p>{content.showRoom}</p>
          </div>
        </div>
        <p>Termeni și condiții</p>
        <div className="flex flex-col"></div>
      </div>
    </div>
  );
}

export default Footer;
