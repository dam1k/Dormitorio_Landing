"use client";

import React, { useState, useRef } from "react";
import { motion } from "framer-motion";
import emailjs from "@emailjs/browser";

function Contact() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");

  const formRef = useRef<HTMLFormElement>(null);
  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (e.target.id === "name") {
      setName(e.target.value);
    } else if (e.target.id === "email") {
      setEmail(e.target.value);
    } else if (e.target.id === "phone") {
      setPhone(e.target.value);
    }
  };

  const sendEmail = (e: any) => {
    e.preventDefault();

    if (formRef.current) {
      emailjs
        .sendForm(
          "service_w94p4p4",
          "template_id6hmaz",
          formRef.current,
          "uiAgH1ljQejRYlrnh",
        )
        .then(
          (result) => {
            setName("");
            setPhone("");
            setEmail("");
          },
          (error) => {
            console.log(error.text);
          },
        );
    }
  };

  return (
    <motion.div
      initial={{ opacity: 0, transform: "translateY(-20px)" }}
      whileInView={{ opacity: 1, transform: "translateY(0)" }}
      viewport={{ once: true }}
      className="mt-[65px] min-[1025px]:pt-[100px] bg-[#1d1d1d]/[0.9] pt-[65px] pb-[100px] min-[1025px]:mb-[100px]"
      id="contacts"
    >
      <div className="container min-[1025px]:gap-[100px] min-[1025px]:flex">
        <h1 className="leading-[135%] text-[20px] text-white mb-[65px] min-[1025px]:text-[50px] flex-1 min-[1025px]:indent-[70px]">
          Completati formularul pentru a colabora cu noi
        </h1>
        <form
          ref={formRef}
          className="flex flex-col gap-[10px] flex-1"
          onSubmit={sendEmail}
        >
          <input
            type="name"
            id="name"
            name="user_name"
            className="bg-[#F0F0F2]/[0.15] text-[14px] w-full rounded-[15px] px-[18px] py-[15px] text-white"
            value={name}
            onChange={handleChange}
            placeholder="Nume"
            required
          />
          <input
            type="email"
            id="email"
            name="user_email"
            className="bg-[#F0F0F2]/[0.15] text-[14px] w-full rounded-[15px] px-[18px] py-[15px] text-white"
            value={email}
            onChange={handleChange}
            placeholder="Email"
            required
          />
          <input
            type="tel"
            name="user_tel"
            pattern="[0-9]{9}"
            required
            id="phone"
            className="bg-[#F0F0F2]/[0.15] text-[14px] w-full rounded-[15px] px-[18px] py-[15px] text-white"
            value={phone}
            onChange={handleChange}
            placeholder="Nr. de telefon: ex: (079919163)"
          />
          <button
            type="submit"
            className="bg-[#F0F0F2] text-[14px] w-full rounded-[15px] px-[18px] py-[15px] text-[#1d1d1d]"
            placeholder="Nr. de telefon"
          >
            Trimite
          </button>
          <p className="px-[5px] text-white/[0.75] text-[14px] mt-[5px] leading-[150%]">
            Dormitorio – un brand de mobilă inspirată din cele mai bune tehnici
            ale design-ului italian.
          </p>
        </form>
      </div>
    </motion.div>
  );
}

export default Contact;
