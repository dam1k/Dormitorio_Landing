import React from "react";

const text = `Dormitorio – un brand de mobilă inspirată din cele mai bune tehnici ale design-ului italian. 
  Marcă înregistrată în Republica Moldova, dormitoarele asigură o calitate superioară, iar clienții noștri pot alege dormitorul perfect dintr-o gamă diversă de opțiuni.`;

function About() {
  return (
    <div className="flex w-full justify-center">
      <p className="max-w-[800px] min-[1025px]:mb-[100px] px-[15px] max-[1024px]:mb-[0] max-[1024px]:mt-[75px] text-[18px] text-center">
        {text}
      </p>
    </div>
  );
}

export default About;
