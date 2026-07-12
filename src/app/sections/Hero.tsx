import Image from "next/image";
import memojiImage from "@/app/assets/images/memoji.png";
import grainImage from "@/app/assets/images/grain.jpg";
import StarIcon from "@/app/assets/icons/star.svg";
import { HeroOrbit } from "@/app/componenets/HeroOrbit";
export const HeroSection = () => {
  return (
    <div className="py-32 md:py-48 lg:py-60 relative z-0 overflow-hidden">
      <div className="absolute inset-0 [mask-image:linear-gradient(to_bottom,transparent,black_70%,transparent]">
      <div
      className="absolute inset-0 -z-30 opacity-5"
      style={{
        backgroundImage: `url(${grainImage.src})`,
      }}
      ></div>
      <div className="size-[620px] hero-ring"></div>
      <div className="size-[820px] hero-ring"></div>
      <div className="size-[1020px] hero-ring"></div>
      <div className="size-[1220px] hero-ring"></div>
      <HeroOrbit size={800} rotation={-72}>
        <StarIcon className="size-28 text-emerald-500 -z-10" />
      </HeroOrbit>
      <HeroOrbit size={550} rotation={20}>
        <StarIcon className="size-12 text-emerald-500 -z-10" />
      </HeroOrbit>
      <HeroOrbit size={430} rotation={-14}>
        <StarIcon className="size-8 text-emerald-500 -z-10" />
      </HeroOrbit>
      <HeroOrbit size={590} rotation={98}>
        <StarIcon className="size-8 text-emerald-500 -z-10" />
      </HeroOrbit>
      <HeroOrbit size={710} rotation={144}>
        <StarIcon className="size-14 text-emerald-500 -z-10" />
      </HeroOrbit>
      <HeroOrbit size={720} rotation={85}>
        <StarIcon className="size-3 text-emerald-500 -z-10" />
      </HeroOrbit>
      <HeroOrbit size={520} rotation={-41}>
        <StarIcon className="size-2 text-emerald-500 -z-10" />
      </HeroOrbit>
      <HeroOrbit size={650} rotation={-5}>
        <StarIcon className="size-2 text-emerald-500 -z-10" />
      </HeroOrbit>
      </div>
      <div className="relative z-10">
        <div className="flex flex-col items-center">
          <Image src={memojiImage} className="size-[100px]" alt="logo" />
        <div className="bg-gray-950 border border-gray-800 px-4 py-1.5 inline-flex items-center gap-4 rounded-lg">
          <div className="bg-green-500 size-2.5 rounded-full"></div>
          <div className="text-sm font-medium">
            Available For New Projects
          </div>
        </div>
        </div>
        <h1 className="text-3xl text-center mt-8 tracking-wide md:text-5xl lg:text-6xl lg:max-w-[20ch] lg:mx-auto">
          Building Exceptional User Experiences
        </h1>
        <p className="mt-4 text-center text-white/60 md:text-lg">
          Next.JS Developer <span className="text-emerald-500 pr-2 pl-2">&bull;</span>
          Full Stack JS Developer <span className="text-emerald-500 pr-2 pl-2">&bull;</span>
          MERN Stack Developer <span className="text-emerald-500 pr-2 pl-2">&bull;</span>
          UI/UX Designer
        </p>
        <div className="flex flex-col items-center mt-8 gap-4 md:flex-row justify-center">
          <button className="inline-flex items-center gap-2 border border-white/15 px-6 h-12 rounded-xl">
            <span className="font-semibold">
              Explore My Work
            </span>
            <span>
              <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="size-4"><path strokeLinecap="round" strokeLinejoin="round" d="m4.5 19.5 15-15m0 0H8.25m11.25 0v11.25" /></svg>
            </span>
          </button>
          <button className="inline-flex items-center gap-2 border border-white bg-white text-gray-900 px-6 h-12 rounded-xl">
            <span>👋🏼​​</span>
            <span>Let&apos;s Connect</span>
          </button>
        </div>
      </div>
    </div>
  );
};