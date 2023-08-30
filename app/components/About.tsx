"use client";

import React, { useState, useEffect } from "react";
import { motion } from "framer-motion";

const paragraphs = [
  "Faceți cunoștință cu Dormitorio – un brand de mobilă inspirată din cele mai bune tehnici ale design-ului italian. Marcă înregistrată în Republica Moldova, dormitoarele asigură o calitate superioară, iar clienții noștri pot alege dormitorul perfect dintr-o gamă diversă de opțiuni.",
  "Mobila și accesoriile din palmaresul Dormitorio sunt inspirate din cele mai bune și mai verificate tehnici de design italian. Totuși, pentru a asigura cel mai înalt standard de producție, colaborăm cu producători și ateliere renumite din diferite țări. Această strategie globală în producție ne permite să beneficiem de experiența și expertiza oferită de fiecare țară, să profităm de eficiența și inovațiile tehnologice și să le oferim clienților noștri mobilier de cea mai înaltă calitate, racordat la cel mai bun preț.",
  "Polonia, Turcia, România, Ucraina, China – sunt doar câteva dintre țările recunoscute datorită excelenței pe care au demonstrat-o în timp în producția de mobilă. Dormitorio a ales parteneri de încredere care împărtășesc aceleași valori pe care le avem noi și care, la fel ca noi, pun accent pe calitate și estetică. Pentru că verificăm cu minuțiozitate procesele de producție, le putem garanta clienților noștri  că fiecare piesă de mobilier este fabricată din materiale premium, iar produsul final  întrunește cele mai înalte standarde de calitate și durabilitate.",
];

function About() {
  const [domLoaded, setDomLoaded] = useState<boolean>(false);

  useEffect(() => {
    setDomLoaded(true);
  }, []);

  if (domLoaded) {
    return (
      <motion.div
        initial={{ opacity: 0, transform: "translateY(-20px)" }}
        whileInView={{ opacity: 1, transform: "translateY(0)" }}
        viewport={{ once: true }}
        className="flex w-full justify-center"
      >
        <div className="max-w-[1200px] min-[1025px]:mb-[100px] px-[15px] max-[1024px]:mb-[0] max-[1024px]:mt-[75px] text-[18px] text-center">
          {paragraphs.map((p: string) => {
            return (
              <div key={p}>
                <p>{p}</p>
                <br />
              </div>
            );
          })}
        </div>
      </motion.div>
    );
  } else {
    return null;
  }
}

export default About;
