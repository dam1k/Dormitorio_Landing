import React from "react";
import { motion } from "framer-motion";
const text = `Dormitorio – un brand de mobilă inspirată din cele mai bune tehnici ale design-ului italian. 
  Marcă înregistrată în Republica Moldova, dormitoarele asigură o calitate superioară, iar clienții noștri pot alege dormitorul perfect dintr-o gamă diversă de opțiuni.`;

function About() {
  return (
    <motion.div
      initial={{ opacity: 0, transform: "translateY(-20px)" }}
      whileInView={{ opacity: 1, transform: "translateY(0)" }}
      viewport={{ once: true }}
      className="flex w-full justify-center"
    >
      <p className="max-w-[800px] min-[1025px]:mb-[100px] px-[15px] max-[1024px]:mb-[0] max-[1024px]:mt-[75px] text-[18px] text-center">
        {text}
      </p>
    </motion.div>
  );
}

export default About;
