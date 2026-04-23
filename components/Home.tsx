"use client";
import Image from "next/image";
import { TimeBox } from "./TimeBox";
import { useEffect, useState } from "react";
import { MusicPlayer } from "./music";
import { anim, name, txt1, txt2, txt3, txt4 } from "@/data/data";
import { motion } from "framer-motion";
import AttendanceGuests from "./RSVP";
import { Program } from "./Program";
import { Tables } from "./Tables";
import { Footer } from "./footer";
import { Calendar } from "./Calendar";

export function Home() {
  const [isPlaying, setIsPlaying] = useState(false);

  return (
    <div
      className={`text-center overflow-hidden  FontMassis  bg-[#FFFDFB]`}
    >
      {/* music button */}
      <div>
        <button
          onClick={() => setIsPlaying(!isPlaying)}
          className="fixed z-10 p-1  rounded-2xl bg-[#fffdfb2f]  right-7 top-7 w-20  h-20 flex justify-center items-center"
        >
          <Image
            src="/icon2.png"
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
        <div className="font-bold relative">
          <Image
            src="/img1.jpg"
            alt="icon1"
            width={500}
            height={500}
            className="w-full ml-0 h-[90vh]  object-cover "
          />
          <div className=" absolute top-20 left-5 flex items-center tracking-[25%]  justify-center ">
            <h2 className="text-2xl mb-20 text-[#FFFDFB] -mr-15">{name[0]}</h2>
            <span className="text-3xl  text-[#FFFDFB] "> և </span>
            <h2 className="text-2xl mt-20 text-[#FFFDFB]  -ml-15">{name[1]}</h2>
          </div>
<span className=""></span>
        </div>

        {/* 2rd mas teqster */}
        <div className=" px-5 mt-15 tracking-[10%] flex items-center justify-between">
          <div>
            <motion.h3 {...anim} className=" text-sovorakan text-2xl">
              Սիրելիներս
            </motion.h3>
            <motion.p
              {...anim}
              className=" text-sovorakan  text-2xl mt-10 FontMassis"
            >
              {txt1}
            </motion.p>
          </div>

          <Image
            src="/or.png"
            width={500}
            height={500}
            alt="jamanak"
            className="w-[40%] mr-0 opacity-45"
          />
        </div>

        {/* errord mas vazox tox + nkar */}
        <div className=" mt-20 relative w-full  text-3xl text-vrayi ">
          <div className="FontBraindDoctor whitespace-nowrap animate-marquee-2 -rotate-2  -translate-x-full">
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
          <div className="FontBraindDoctor whitespace-nowrap animate-marquee mb-10 rotate-2  -translate-x-full">
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
          <div className="FontBraindDoctor whitespace-nowrap animate-marquee-2 mt-15  -rotate-2 -translate-x-full">
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
          <div className="px-10  my-20">
            <Image
              src="/img2.jpg"
              width={500}
              height={500}
              alt="jamanak"
              className=" object-cover relative z-10"
            />
          </div>
          <div className="w-full absolute z-1 top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2  h-50 bg-[#1F1F1F] "></div>
          <div className="FontBraindDoctor whitespace-nowrap animate-marquee-2 -rotate-2  -translate-x-full">
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
          <div className="FontBraindDoctor whitespace-nowrap animate-marquee mb-10 rotate-2  -translate-x-full">
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
          <div className="FontBraindDoctor whitespace-nowrap animate-marquee-2 mt-15  -rotate-2 -translate-x-full">
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
        </div>

        <Calendar year={2026} month={10} highlightDay={25} />

        <Program />

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
          <div className="px-10 my-20 h-max relative mb-60">
            <Image
              src="/img4.jpg"
              width={500}
              height={500}
              alt="jamanak"
              className="w-[80%] "
            />
            <p className="absolute  -bottom-40 text-3xl tracking-[20%] leading-16 text-end right-10">
              {" "}
              {txt3}
            </p>
          </div>
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

        {/* hethashxvark */}
        <TimeBox />

        {/* erb asen teqst */}
        <motion.p
          {...anim}
          className="FontMassis mb-20 text-sovorakan  text-3xl mt-10"
        >
          {txt4}
        </motion.p>

        {/* dress code */}
        <div className="mt-15">
          <motion.h3
            {...anim}
            className="FontMassis font-bold text-4xl "
          >
            Dress Code
          </motion.h3>

          <p className="FontMassis text-3xl tracking-widest mb-15">
            {txt2}
          </p>
        </div>
      </div>

      <Footer />
    </div>
  );
}
