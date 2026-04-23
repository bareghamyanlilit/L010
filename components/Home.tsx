"use client";
import Image from "next/image";
import { TimeBox } from "./TimeBox";
import { useEffect, useState } from "react";
import { MusicPlayer } from "./music";
import { anim, date, name, txt1, txt2, txt3, txt4 } from "@/data/data";
import { motion } from "framer-motion";
import AttendanceGuests from "./RSVP";
import { Program } from "./Program";
import { Tables } from "./Tables";
import { Footer } from "./footer";
import { Calendar } from "./Calendar";

export function Home() {
  const [isPlaying, setIsPlaying] = useState(false);

  return (
    <div className={`text-center overflow-hidden  FontMassis  bg-[#FFFDFB]`}>
      {/* music button */}
      <div>
        <button
          onClick={() => setIsPlaying(!isPlaying)}
          className="fixed z-10 p-1  rounded-2xl bg-[#fffdfb2f]  right-7 top-7 w-20  h-20 flex justify-center items-center"
        >
          <Image
            src="/musicon.png"
            alt="icon1"
            width={500}
            height={500}
            className=" w-full p-2 object-contain "
          />
        </button>

        <MusicPlayer isPlaying={isPlaying} />
      </div>

      <div className="m-auto  h-max max-w-md ">
        {/* arajin mas */}
        <div className="font-bold h-[100dvh] overflow-hidden relative">
          <Image
            src="/img1.jpg"
            alt="icon1"
            width={500}
            height={500}
            className="w-full ml-0 h-full  object-cover "
          />
          <div className="FontArTarumianBarakU absolute text-vrayi text-3xl max-[370px]:text-2xl top-20 left-13 max-[370px]:left-20 flex items-center justify-center tracking-[0.25em]">
            {/* FIRST NAME */}
            <h2 className="relative mb-20 text-vrayi -mr-20 FontArTarumianBarakBold">
              {name[0]}
              <span className="absolute top-0 left-[1px]">{name[0]}</span>
              <span className="absolute top-0 left-[2px]">{name[0]}</span>
            </h2>

            {/* AND */}
            <span className=" ml-10 relative text-vrayi FontArTarumianBarakBold">
              և<span className="absolute top-0 left-[1px]">և</span>
              <span className="absolute top-0 left-[2px]">և</span>
            </span>

            {/* SECOND NAME */}
            <h2 className="relative mt-20 text-vrayi -ml-5 FontArTarumianBarakBold">
              {name[1]}
              <span className="absolute top-0 left-[1px]">{name[1]}</span>
              <span className="absolute top-0 left-[2px]">{name[1]}</span>
            </h2>
          </div>

          <Image
            src="/icon1.png"
            alt="icon1"
            width={500}
            height={500}
            className=" absolute bottom-1/4 left-1/2 -translate-x-1/2 w-full object-cover "
          />
          <h1 className="FontBabylonica-Regular absolute bottom-1/4 left-1/2 -translate-x-1/2 text-vrayi text-8xl max-[400px]:text-7xl text-center ">
            A S
          </h1>

          <span className="absolute w-[200%] bg-[#580000] h-50 rotate-30 -left-1/2 -bottom-1/4"></span>
          <span className="absolute w-[200%] bg-[#580000] h-50 -rotate-30 -right-1/2 -bottom-1/4"></span>
        </div>

        {/* 2rd mas teqster */}
        <div className=" px-5 mb-15 tracking-[10%]  ">
          <h2 className="FontSHK_Dzeragir text-vrayi text-[64px] my-15">
            {date}
          </h2>
          <div>
            <motion.h3 {...anim} className="FontMassis text-sovorakan text-2xl">
              Սիրելիներս
            </motion.h3>
            <motion.p
              {...anim}
              className="FontMassis text-sovorakan  text-2xl mt-10 "
            >
              {txt1}
            </motion.p>
          </div>
        </div>

        {/* errord mas vazox tox + nkar */}
        <div className=" mt-20 relative w-full  text-3xl text-vrayi ">
          <div className="FontArmDecorativeU whitespace-nowrap animate-marquee-2 -rotate-1  -translate-x-full">
            I LOVE YOU I LOVE YOU I LOVE YOU I LOVE YOU I LOVE YOU I LOVE YOU I
            LOVE YOU I LOVE YOU I LOVE YOU I LOVE YOU I LOVE YOU I LOVE YOU I
            LOVE YOU I LOVE YOU I LOVE YOU I LOVE YOU I LOVE YOU I LOVE YOU I
            LOVE YOU I LOVE YOU I LOVE YOU I LOVE YOU I LOVE YOU I LOVE YOU I
            LOVE YOU I LOVE YOU I LOVE YOU I LOVE YOU I LOVE YOU I LOVE YOU I
            LOVE YOU I LOVE YOU I LOVE YOU I LOVE YOU I LOVE YOU I LOVE YOU I
            LOVE YOU I LOVE YOU I LOVE YOU I LOVE YOU I LOVE YOU I LOVE YOU I
            LOVE YOU I LOVE YOU I LOVE YOU I LOVE YOU I LOVE YOU I LOVE YOU I
            LOVE YOU I LOVE YOU I LOVE YOU I LOVE YOU I LOVE YOU I LOVE YOU I
            LOVE YOU I LOVE YOU
          </div>
          <div className="FontArmDecorativeU whitespace-nowrap animate-marquee mb-10 rotate-1  -translate-x-full">
            I LOVE YOU I LOVE YOU I LOVE YOU I LOVE YOU I LOVE YOU I LOVE YOU I
            LOVE YOU I LOVE YOU I LOVE YOU I LOVE YOU I LOVE YOU I LOVE YOU I
            LOVE YOU I LOVE YOU I LOVE YOU I LOVE YOU I LOVE YOU I LOVE YOU I
            LOVE YOU I LOVE YOU I LOVE YOU I LOVE YOU I LOVE YOU I LOVE YOU I
            LOVE YOU I LOVE YOU I LOVE YOU I LOVE YOU I LOVE YOU I LOVE YOU I
            LOVE YOU I LOVE YOU I LOVE YOU I LOVE YOU I LOVE YOU I LOVE YOU I
            LOVE YOU I LOVE YOU I LOVE YOU I LOVE YOU I LOVE YOU I LOVE YOU I
            LOVE YOU I LOVE YOU I LOVE YOU I LOVE YOU I LOVE YOU I LOVE YOU I
            LOVE YOU I LOVE YOU I LOVE YOU I LOVE YOU I LOVE YOU I LOVE YOU I
            LOVE YOU I LOVE YOU
          </div>
          <div className="FontArmDecorativeU whitespace-nowrap animate-marquee-2  -rotate-1 -translate-x-full">
            I LOVE YOU I LOVE YOU I LOVE YOU I LOVE YOU I LOVE YOU I LOVE YOU I
            LOVE YOU I LOVE YOU I LOVE YOU I LOVE YOU I LOVE YOU I LOVE YOU I
            LOVE YOU I LOVE YOU I LOVE YOU I LOVE YOU I LOVE YOU I LOVE YOU I
            LOVE YOU I LOVE YOU I LOVE YOU I LOVE YOU I LOVE YOU I LOVE YOU I
            LOVE YOU I LOVE YOU I LOVE YOU I LOVE YOU I LOVE YOU I LOVE YOU I
            LOVE YOU I LOVE YOU I LOVE YOU I LOVE YOU I LOVE YOU I LOVE YOU I
            LOVE YOU I LOVE YOU I LOVE YOU I LOVE YOU I LOVE YOU I LOVE YOU I
            LOVE YOU I LOVE YOU I LOVE YOU I LOVE YOU I LOVE YOU I LOVE YOU I
            LOVE YOU I LOVE YOU I LOVE YOU I LOVE YOU I LOVE YOU I LOVE YOU I
            LOVE YOU I LOVE YOU
          </div>
          <div className="FontArmDecorativeU whitespace-nowrap animate-marquee mb-10 rotate-1  -translate-x-full">
            I LOVE YOU I LOVE YOU I LOVE YOU I LOVE YOU I LOVE YOU I LOVE YOU I
            LOVE YOU I LOVE YOU I LOVE YOU I LOVE YOU I LOVE YOU I LOVE YOU I
            LOVE YOU I LOVE YOU I LOVE YOU I LOVE YOU I LOVE YOU I LOVE YOU I
            LOVE YOU I LOVE YOU I LOVE YOU I LOVE YOU I LOVE YOU I LOVE YOU I
            LOVE YOU I LOVE YOU I LOVE YOU I LOVE YOU I LOVE YOU I LOVE YOU I
            LOVE YOU I LOVE YOU I LOVE YOU I LOVE YOU I LOVE YOU I LOVE YOU I
            LOVE YOU I LOVE YOU I LOVE YOU I LOVE YOU I LOVE YOU I LOVE YOU I
            LOVE YOU I LOVE YOU I LOVE YOU I LOVE YOU I LOVE YOU I LOVE YOU I
            LOVE YOU I LOVE YOU I LOVE YOU I LOVE YOU I LOVE YOU I LOVE YOU I
            LOVE YOU I LOVE YOU
          </div>
          <div className="FontArmDecorativeU whitespace-nowrap animate-marquee-2   -rotate-1 -translate-x-full">
            I LOVE YOU I LOVE YOU I LOVE YOU I LOVE YOU I LOVE YOU I LOVE YOU I
            LOVE YOU I LOVE YOU I LOVE YOU I LOVE YOU I LOVE YOU I LOVE YOU I
            LOVE YOU I LOVE YOU I LOVE YOU I LOVE YOU I LOVE YOU I LOVE YOU I
            LOVE YOU I LOVE YOU I LOVE YOU I LOVE YOU I LOVE YOU I LOVE YOU I
            LOVE YOU I LOVE YOU I LOVE YOU I LOVE YOU I LOVE YOU I LOVE YOU I
            LOVE YOU I LOVE YOU I LOVE YOU I LOVE YOU I LOVE YOU I LOVE YOU I
            LOVE YOU I LOVE YOU I LOVE YOU I LOVE YOU I LOVE YOU I LOVE YOU I
            LOVE YOU I LOVE YOU I LOVE YOU I LOVE YOU I LOVE YOU I LOVE YOU I
            LOVE YOU I LOVE YOU I LOVE YOU I LOVE YOU I LOVE YOU I LOVE YOU I
            LOVE YOU I LOVE YOU
          </div>
          <div className="FontArmDecorativeU whitespace-nowrap animate-marquee mb-10 rotate-1  -translate-x-full">
            I LOVE YOU I LOVE YOU I LOVE YOU I LOVE YOU I LOVE YOU I LOVE YOU I
            LOVE YOU I LOVE YOU I LOVE YOU I LOVE YOU I LOVE YOU I LOVE YOU I
            LOVE YOU I LOVE YOU I LOVE YOU I LOVE YOU I LOVE YOU I LOVE YOU I
            LOVE YOU I LOVE YOU I LOVE YOU I LOVE YOU I LOVE YOU I LOVE YOU I
            LOVE YOU I LOVE YOU I LOVE YOU I LOVE YOU I LOVE YOU I LOVE YOU I
            LOVE YOU I LOVE YOU I LOVE YOU I LOVE YOU I LOVE YOU I LOVE YOU I
            LOVE YOU I LOVE YOU I LOVE YOU I LOVE YOU I LOVE YOU I LOVE YOU I
            LOVE YOU I LOVE YOU I LOVE YOU I LOVE YOU I LOVE YOU I LOVE YOU I
            LOVE YOU I LOVE YOU I LOVE YOU I LOVE YOU I LOVE YOU I LOVE YOU I
            LOVE YOU I LOVE YOU
          </div>
          <div className="FontArmDecorativeU whitespace-nowrap animate-marquee-2   -rotate-1 -translate-x-full">
            I LOVE YOU I LOVE YOU I LOVE YOU I LOVE YOU I LOVE YOU I LOVE YOU I
            LOVE YOU I LOVE YOU I LOVE YOU I LOVE YOU I LOVE YOU I LOVE YOU I
            LOVE YOU I LOVE YOU I LOVE YOU I LOVE YOU I LOVE YOU I LOVE YOU I
            LOVE YOU I LOVE YOU I LOVE YOU I LOVE YOU I LOVE YOU I LOVE YOU I
            LOVE YOU I LOVE YOU I LOVE YOU I LOVE YOU I LOVE YOU I LOVE YOU I
            LOVE YOU I LOVE YOU I LOVE YOU I LOVE YOU I LOVE YOU I LOVE YOU I
            LOVE YOU I LOVE YOU I LOVE YOU I LOVE YOU I LOVE YOU I LOVE YOU I
            LOVE YOU I LOVE YOU I LOVE YOU I LOVE YOU I LOVE YOU I LOVE YOU I
            LOVE YOU I LOVE YOU I LOVE YOU I LOVE YOU I LOVE YOU I LOVE YOU I
            LOVE YOU I LOVE YOU
          </div>
          <div className="FontArmDecorativeU whitespace-nowrap animate-marquee mb-10 rotate-1  -translate-x-full">
            I LOVE YOU I LOVE YOU I LOVE YOU I LOVE YOU I LOVE YOU I LOVE YOU I
            LOVE YOU I LOVE YOU I LOVE YOU I LOVE YOU I LOVE YOU I LOVE YOU I
            LOVE YOU I LOVE YOU I LOVE YOU I LOVE YOU I LOVE YOU I LOVE YOU I
            LOVE YOU I LOVE YOU I LOVE YOU I LOVE YOU I LOVE YOU I LOVE YOU I
            LOVE YOU I LOVE YOU I LOVE YOU I LOVE YOU I LOVE YOU I LOVE YOU I
            LOVE YOU I LOVE YOU I LOVE YOU I LOVE YOU I LOVE YOU I LOVE YOU I
            LOVE YOU I LOVE YOU I LOVE YOU I LOVE YOU I LOVE YOU I LOVE YOU I
            LOVE YOU I LOVE YOU I LOVE YOU I LOVE YOU I LOVE YOU I LOVE YOU I
            LOVE YOU I LOVE YOU I LOVE YOU I LOVE YOU I LOVE YOU I LOVE YOU I
            LOVE YOU I LOVE YOU
          </div>
          <div className="FontArmDecorativeU whitespace-nowrap animate-marquee-2   -rotate-1 -translate-x-full">
            I LOVE YOU I LOVE YOU I LOVE YOU I LOVE YOU I LOVE YOU I LOVE YOU I
            LOVE YOU I LOVE YOU I LOVE YOU I LOVE YOU I LOVE YOU I LOVE YOU I
            LOVE YOU I LOVE YOU I LOVE YOU I LOVE YOU I LOVE YOU I LOVE YOU I
            LOVE YOU I LOVE YOU I LOVE YOU I LOVE YOU I LOVE YOU I LOVE YOU I
            LOVE YOU I LOVE YOU I LOVE YOU I LOVE YOU I LOVE YOU I LOVE YOU I
            LOVE YOU I LOVE YOU I LOVE YOU I LOVE YOU I LOVE YOU I LOVE YOU I
            LOVE YOU I LOVE YOU I LOVE YOU I LOVE YOU I LOVE YOU I LOVE YOU I
            LOVE YOU I LOVE YOU I LOVE YOU I LOVE YOU I LOVE YOU I LOVE YOU I
            LOVE YOU I LOVE YOU I LOVE YOU I LOVE YOU I LOVE YOU I LOVE YOU I
            LOVE YOU I LOVE YOU
          </div>
          <div className=" w-full absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2">
            <Image
              src="/img2.jpg"
              width={500}
              height={500}
              alt="jamanak"
              className="w-[70vw] mx-auto h-[70vw] object-cover relative z-10"
            />
            <div className=" absolute z-1 top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2  w-[65vw]  h-[65vw] rotate-45  bg-[#580000] "></div>
          </div>
        </div>

        <Calendar year={2026} month={10} highlightDay={25} />

        <Program />

        {/* dress code */}
        <div className=" text-vrayi">
          <motion.h3 {...anim} className="FontMassis font-bold text-4xl my-15 ">
            Dress Code
          </motion.h3>

          <p className="FontMassis text-3xl tracking-widest mb-15">{txt2}</p>
          <Image
            src="/img3.jpg"
            width={500}
            height={500}
            alt="jamanak"
            className="w-[70%] mx-auto "
          />
        </div>

        {/* hethashxvark */}
        <TimeBox />

        {/* errord mas vazox tox + nkar */}
        <div className=" mt-30 relative w-full font-bold  text-3xl text-vrayi ">
          <div className="FontMassis whitespace-nowrap animate-marquee-2 -rotate-2  -translate-x-full">
            Սիրում եմ Սիրում եմ Սիրում եմ Սիրում եմ Սիրում եմ Սիրում եմ Սիրում
            եմ Սիրում եմ Սիրում եմ Սիրում եմ Սիրում եմ Սիրում եմ Սիրում եմ
            Սիրում եմ Սիրում եմ Սիրում եմ Սիրում եմ Սիրում եմ Սիրում եմ Սիրում
            եմ Սիրում եմ Սիրում եմ Սիրում եմ Սիրում եմ Սիրում եմ Սիրում եմ
            Սիրում եմ Սիրում եմ Սիրում եմ Սիրում եմ Սիրում եմ Սիրում եմ Սիրում
            եմ Սիրում եմ Սիրում եմ Սիրում եմ Սիրում եմ Սիրում եմ Սիրում եմ
            Սիրում եմ Սիրում եմ Սիրում եմ Սիրում եմ Սիրում եմ Սիրում եմ Սիրում
            եմ Սիրում եմ Սիրում եմ Սիրում եմ Սիրում եմ Սիրում եմ Սիրում եմ
            Սիրում եմ Սիրում եմ Սիրում եմ Սիրում եմ Սիրում եմ Սիրում եմ Սիրում
            եմ Սիրում եմ Սիրում եմ Սիրում եմ Սիրում եմ Սիրում եմ Սիրում եմ
            Սիրում եմ Սիրում եմ Սիրում եմ Սիրում եմ Սիրում եմ Սիրում եմ Սիրում
            եմ
          </div>
          <div className="FontMassis whitespace-nowrap animate-marquee mb-10 rotate-2  -translate-x-full">
            եմ Սիրում եմ Սիրում եմ Սիրում եմ Սիրում եմ Սիրում եմ Սիրում եմ
            Սիրում եմ Սիրում եմ Սիրում եմ Սիրում եմ Սիրում եմ Սիրում եմ Սիրում
            եմ Սիրում եմ Սիրում եմ Սիրում եմ Սիրում եմ Սիրում եմ Սիրում եմ
            Սիրում եմ Սիրում եմ Սիրում եմ Սիրում եմ Սիրում եմ Սիրում եմ Սիրում
            եմ Սիրում եմ Սիրում եմ Սիրում եմ Սիրում եմ Սիրում եմ Սիրում եմ
            Սիրում եմ Սիրում եմ Սիրում եմ Սիրում եմ Սիրում եմ Սիրում եմ Սիրում
            եմ Սիրում եմ Սիրում եմ Սիրում եմ Սիրում եմ Սիրում եմ Սիրում եմ
            Սիրում եմ Սիրում եմ Սիրում եմ Սիրում եմ Սիրում եմ Սիրում եմ Սիրում
            եմ Սիրում եմ Սիրում եմ Սիրում եմ Սիրում եմ Սիրում եմ Սիրում եմ
            Սիրում եմ Սիրում եմ Սիրում եմ Սիրում եմ Սիրում եմ Սիրում եմ Սիրում
            եմ
          </div>
          <div className="FontMassis whitespace-nowrap animate-marquee-2 mt-15  -rotate-2 -translate-x-full">
            եմ Սիրում եմ Սիրում եմ Սիրում եմ Սիրում եմ Սիրում եմ Սիրում եմ
            Սիրում եմ Սիրում եմ Սիրում եմ Սիրում եմ Սիրում եմ Սիրում եմ Սիրում
            եմ Սիրում եմ Սիրում եմ Սիրում եմ Սիրում եմ Սիրում եմ Սիրում եմ
            Սիրում եմ Սիրում եմ Սիրում եմ Սիրում եմ Սիրում եմ Սիրում եմ Սիրում
            եմ Սիրում եմ Սիրում եմ Սիրում եմ Սիրում եմ Սիրում եմ Սիրում եմ
            Սիրում եմ Սիրում եմ Սիրում եմ Սիրում եմ Սիրում եմ Սիրում եմ Սիրում
            եմ Սիրում եմ Սիրում եմ Սիրում եմ Սիրում եմ Սիրում եմ Սիրում եմ
            Սիրում եմ Սիրում եմ Սիրում եմ Սիրում եմ Սիրում եմ Սիրում եմ Սիրում
            եմ Սիրում եմ Սիրում եմ Սիրում եմ Սիրում եմ Սիրում եմ Սիրում եմ
            Սիրում եմ Սիրում եմ Սիրում եմ Սիրում եմ Սիրում եմ Սիրում եմ Սիրում
            եմ
          </div>
          <div className="relative my-20">
            <Image
              src="/img4.jpg"
              width={500}
              height={500}
              alt="jamanak"
              className="w-[80vw] h-[90vw] mx-auto relative z-1 rounded-tl-[220px] object-cover "
            />

            <p className="FontMassis mt-20 text-3xl tracking-[25%] text-center ">
              {" "}
              {txt3}
            </p>
          </div>
          <span className="absolute z-0 w-[80vw] h-[90vw] rounded-tl-[220px] bg-[#580000] left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 "></span>
          <div className="FontMassis whitespace-nowrap animate-marquee-2 -rotate-2  -translate-x-full">
            Սիրում եմ Սիրում եմ Սիրում եմ Սիրում եմ Սիրում եմ Սիրում եմ Սիրում
            եմ Սիրում եմ Սիրում եմ Սիրում եմ Սիրում եմ Սիրում եմ Սիրում եմ
            Սիրում եմ Սիրում եմ Սիրում եմ Սիրում եմ Սիրում եմ Սիրում եմ Սիրում
            եմ Սիրում եմ Սիրում եմ Սիրում եմ Սիրում եմ Սիրում եմ Սիրում եմ
            Սիրում եմ Սիրում եմ Սիրում եմ Սիրում եմ Սիրում եմ Սիրում եմ Սիրում
            եմ Սիրում եմ Սիրում եմ Սիրում եմ Սիրում եմ Սիրում եմ Սիրում եմ
            Սիրում եմ Սիրում եմ Սիրում եմ Սիրում եմ Սիրում եմ Սիրում եմ Սիրում
            եմ Սիրում եմ Սիրում եմ Սիրում եմ Սիրում եմ Սիրում եմ Սիրում եմ
            Սիրում եմ Սիրում եմ Սիրում եմ Սիրում եմ Սիրում եմ Սիրում եմ Սիրում
            եմ Սիրում եմ Սիրում եմ Սիրում եմ Սիրում եմ Սիրում եմ Սիրում եմ
            Սիրում եմ Սիրում եմ Սիրում եմ Սիրում եմ Սիրում եմ Սիրում եմ Սիրում
            եմ
          </div>
          <div className="FontMassis whitespace-nowrap animate-marquee mb-10 rotate-2  -translate-x-full">
            եմ Սիրում եմ Սիրում եմ Սիրում եմ Սիրում եմ Սիրում եմ Սիրում եմ
            Սիրում եմ Սիրում եմ Սիրում եմ Սիրում եմ Սիրում եմ Սիրում եմ Սիրում
            եմ Սիրում եմ Սիրում եմ Սիրում եմ Սիրում եմ Սիրում եմ Սիրում եմ
            Սիրում եմ Սիրում եմ Սիրում եմ Սիրում եմ Սիրում եմ Սիրում եմ Սիրում
            եմ Սիրում եմ Սիրում եմ Սիրում եմ Սիրում եմ Սիրում եմ Սիրում եմ
            Սիրում եմ Սիրում եմ Սիրում եմ Սիրում եմ Սիրում եմ Սիրում եմ Սիրում
            եմ Սիրում եմ Սիրում եմ Սիրում եմ Սիրում եմ Սիրում եմ Սիրում եմ
            Սիրում եմ Սիրում եմ Սիրում եմ Սիրում եմ Սիրում եմ Սիրում եմ Սիրում
            եմ Սիրում եմ Սիրում եմ Սիրում եմ Սիրում եմ Սիրում եմ Սիրում եմ
            Սիրում եմ Սիրում եմ Սիրում եմ Սիրում եմ Սիրում եմ Սիրում եմ Սիրում
            եմ
          </div>
          <div className="FontMassis whitespace-nowrap animate-marquee-2 mt-15  -rotate-2 -translate-x-full">
            եմ Սիրում եմ Սիրում եմ Սիրում եմ Սիրում եմ Սիրում եմ Սիրում եմ
            Սիրում եմ Սիրում եմ Սիրում եմ Սիրում եմ Սիրում եմ Սիրում եմ Սիրում
            եմ Սիրում եմ Սիրում եմ Սիրում եմ Սիրում եմ Սիրում եմ Սիրում եմ
            Սիրում եմ Սիրում եմ Սիրում եմ Սիրում եմ Սիրում եմ Սիրում եմ Սիրում
            եմ Սիրում եմ Սիրում եմ Սիրում եմ Սիրում եմ Սիրում եմ Սիրում եմ
            Սիրում եմ Սիրում եմ Սիրում եմ Սիրում եմ Սիրում եմ Սիրում եմ Սիրում
            եմ Սիրում եմ Սիրում եմ Սիրում եմ Սիրում եմ Սիրում եմ Սիրում եմ
            Սիրում եմ Սիրում եմ Սիրում եմ Սիրում եմ Սիրում եմ Սիրում եմ Սիրում
            եմ Սիրում եմ Սիրում եմ Սիրում եմ Սիրում եմ Սիրում եմ Սիրում եմ
            Սիրում եմ Սիրում եմ Սիրում եմ Սիրում եմ Սիրում եմ Սիրում եմ Սիրում
            եմ
          </div>
        </div>

        {/* erb asen teqst */}
        <motion.p
          {...anim}
          className="FontMassis mb-20 text-sovorakan  text-3xl mt-10"
        >
          {txt4}
        </motion.p>
      </div>

      <Footer />
    </div>
  );
}
