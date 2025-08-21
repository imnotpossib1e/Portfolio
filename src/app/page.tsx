"use client";

import Footer from "@/components/Footer";
import Header from "@/components/Header";

import {
  CalendarFold,
  CircleUserRound,
  Copy,
  Figma,
  Link2,
  Mail,
  MessageCircleWarning,
  MessageSquareCode,
  Wrench,
} from "lucide-react";
import Link from "next/link";
import Image from "next/image";
import React, { useRef, useState } from "react";
import Swal from "sweetalert2";
import UgVegModal from "@/app/UgVegModal";
import DokiDokiModal from "@/app/DokiDokiModal";
import { FaCss3, FaReact } from "react-icons/fa";
import { RiJavascriptFill, RiNextjsFill, RiNextjsLine } from "react-icons/ri";
import {
  SocialFigmaIcon,
  TechFigmaIcon,
  TechNextjs2Icon,
  TechNextjsIcon,
  TechReactRouterIcon,
  TechTypescriptIcon,
} from "react-tool-icons";
import { TbBrandFigma, TbBrandNextjs, TbBrandTypescript } from "react-icons/tb";
import { SiJavascript, SiNextdotjs, SiTailwindcss, SiTypescript, SiVercel } from "react-icons/si";
import { BiLogoFigma, BiLogoTailwindCss, BiLogoTypescript } from "react-icons/bi";
import { DiReact } from "react-icons/di";
import { FaFigma, FaGithub, FaHtml5 } from "react-icons/fa";
import { FiFigma } from "react-icons/fi";
import { CgFigma, CgVercel } from "react-icons/cg";
import { GrFigma } from "react-icons/gr";
import { LuFigma } from "react-icons/lu";
import { PiFigmaLogo, PiFigmaLogoFill } from "react-icons/pi";
import { RxFigmaLogo } from "react-icons/rx";
import { LiaFigma } from "react-icons/lia";
import { IoLogoVercel } from "react-icons/io5";

export default function Home() {
  const aboutRef = useRef<HTMLElement | null>(null);
  const projectsRef = useRef<HTMLElement | null>(null);
  const skillsRef = useRef<HTMLElement | null>(null);
  const titleRef = useRef<HTMLElement | null>(null);
  const [isUgVegModalOpen, setIsUgVegModalOpen] = useState(false);
  const [isDokiDokiModalOpen, setIsDokiDokiModalOpen] = useState(false);

  const openUgVegModal = () => setIsUgVegModalOpen(true);
  const closeUgVegModal = () => setIsUgVegModalOpen(false);

  const openDokiDokiModal = () => setIsDokiDokiModalOpen(true);
  const closeDokiDokiModal = () => setIsDokiDokiModalOpen(false);

  const scrollToSection = (ref: React.RefObject<HTMLElement | null>) => {
    ref.current?.scrollIntoView({ behavior: "smooth" });
  };

  const Toast = Swal.mixin({
    toast: true,
    position: "top",
    showConfirmButton: false,
    timer: 3000,
    timerProgressBar: true,
    didOpen: (toast) => {
      toast.addEventListener("mouseenter", Swal.stopTimer);
      toast.addEventListener("mouseleave", Swal.resumeTimer);
    },
  });

  const email = "habit2me@naver.com";
  const handleCopy = () => {
    navigator.clipboard.writeText(email);
    Toast.fire({
      icon: "success",
      title: "클립보드에 저장되었습니다.",
    });
  };

  return (
    <>
      <Header
        onTitleClick={() => scrollToSection(titleRef)}
        onAboutClick={() => scrollToSection(aboutRef)}
        onProjectsClick={() => scrollToSection(projectsRef)}
        onSkillsClick={() => scrollToSection(skillsRef)}
      />
      <main ref={titleRef} className="flex flex-col gap-4 items-center p-20">
        <h2 className="text-center mt-16 text-4xl font-bold">
          <span className="block animate-slideInDown">안녕하세요.</span>
          <span className="block animate-slideInUp delay-100">
            사용자를 위한 <span className="text-primary font-extrabold">문제 해결형</span>
          </span>
          <span className="block animate-fadeIn delay-200 text-indigo-600 drop-shadow mt-2">
            주니어 프론트엔드 개발자 이진현입니다.
          </span>
        </h2>

        <section ref={aboutRef} className="m-10 scroll-mt-[80px]">
          <h3 className="text-2xl font-bold flex items-center gap-2 justify-center">
            <MessageCircleWarning />
            ABOUT ME
          </h3>
          <div className="grid lg:grid-cols-2 md:grid-cols-1 mt-12 gap-8">
            <div className="flex flex-row items-center gap-4 bg-white rounded-lg px-4 py-3 shadow-lg ">
              <CircleUserRound width={30} height={30} />
              <p className="flex flex-col">
                <span className="font-semibold text-lg">이름</span>
                <span>이진현</span>
              </p>
            </div>
            <div className="flex flex-row items-center gap-4 bg-white rounded-lg px-4 py-3 shadow-lg">
              <CalendarFold width={30} height={30} />
              <p className="flex flex-col">
                <span className="font-semibold text-lg">생년월일</span>
                <span>2002.06.02</span>
              </p>
            </div>
            <div className="flex flex-row items-center gap-4 bg-white rounded-lg px-4 py-3 shadow-lg">
              <Mail width={30} height={30} />
              <p className="flex flex-col">
                <span className="font-semibold text-lg">Contact</span>
                <span className="flex gap-4 items-center">
                  habit2me@naver.com
                  <Copy width={20} height={20} className="hover:cursor-pointer" onClick={handleCopy} />
                </span>
              </p>
            </div>
            <div className="flex flex-row items-center gap-4 bg-white rounded-lg px-4 py-3 shadow-lg">
              <Image src={"/Github-Dark.svg"} alt="Github 로고" width={30} height={30} />
              <p className="flex flex-col">
                <Link
                  href={"https://github.com/imnotpossib1e"}
                  target="_blank"
                  className="flex items-center gap-2 font-semibold text-lg"
                >
                  Github <Link2 />
                </Link>
              </p>
            </div>
          </div>
        </section>
        <section ref={skillsRef} className="m-10 scroll-mt-[80px]">
          <h3 className="text-2xl font-bold flex items-center gap-2 justify-center">
            <Wrench />
            SKILLS
          </h3>
          <div className="grid md:grid-cols-[1fr_1fr_1fr_1fr_1fr] grid-cols-2 gap-6 mt-12 bg-white rounded-lg px-6 py-10 shadow-lg whitespace-nowrap">
            <div className="flex flex-col items-center gap-1">
              <Image src={"/React.svg"} alt="React 로고" width={40} height={40} />
              <span className="text-lg font-semibold">React</span>
            </div>
            <div className="flex flex-col items-center gap-1">
              <Image src={"/NextJS-DARK.svg"} alt="Next.js 로고" width={40} height={40} />
              <span className="text-lg font-semibold">Next.js</span>
            </div>
            <div className="flex flex-col items-center gap-1">
              <Image src={"/TypeScript.svg"} alt="TypeScript 로고" width={40} height={40} />
              <span className="text-lg font-semibold">TypeScript</span>
            </div>
            <div className="flex flex-col items-center gap-1">
              <Image src={"/JavaScript.svg"} alt="JavaScript 로고" width={40} height={40} />
              <span className="text-lg font-semibold">JavaScript</span>
            </div>
            <div className="flex flex-col items-center gap-1">
              <Image src={"/Github-Dark.svg"} alt="Github 로고" width={40} height={40} />
              <span className="text-lg font-semibold">Github</span>
            </div>
            <div className="flex flex-col items-center gap-1">
              <Image src={"/HTML.svg"} alt="HTML 로고" width={40} height={40} />
              <span className="text-lg font-semibold">HTML5</span>
            </div>
            <div className="flex flex-col items-center gap-1">
              <Image src={"/CSS.svg"} alt="CSS 로고" width={40} height={40} />
              <span className="text-lg font-semibold">CSS3</span>
            </div>
            <div className="flex flex-col items-center gap-1">
              <Image src={"/TailwindCSS-DARK.svg"} alt="TailwindCSS 로고" width={40} height={40} />
              <span className="text-lg font-semibold">TailwindCSS</span>
            </div>
            <div className="flex flex-col items-center gap-1">
              <Image src={"/Figma-Dark.svg"} alt="Figma 로고" width={40} height={40} />
              <span className="text-lg font-semibold">Figma</span>
            </div>
            <div className="flex flex-col items-center gap-1">
              <Image src={"/Vercel-Dark.svg"} alt="Vercel 로고" width={40} height={40} />
              <span className="text-lg font-semibold">Vercel</span>
            </div>
          </div>
        </section>
        <section ref={projectsRef} className="m-10 scroll-mt-[80px]">
          <h3 className="text-2xl font-bold flex items-center gap-2 justify-center">
            <MessageSquareCode />
            PROJECTS
          </h3>
          <div className="grid lg:grid-cols-2 md:grid-cols-1 mt-12 gap-10">
            <div className="flex flex-col justify-between rounded-xl shadow-xl p-6 bg-white min-w-96">
              <div>
                <div className="flex justify-between items-end">
                  <Link
                    href={"https://dokidoki-playlists.netlify.app/"}
                    target="_blank"
                    className="flex items-end gap-2"
                  >
                    <Image src={"/dokidoki.svg"} alt="UgVeg 로고" width={20} height={20} />{" "}
                    <div className="flex items-center gap-2">
                      <span className="text-xl font-bold text-green-900">두근두근 플레이리스트</span>
                      <Link2 />
                    </div>
                  </Link>
                  <span className="text-sm">4인 프로젝트</span>
                </div>
                <hr className="my-2 text-gray-400" />
                <div>
                  <p>- 2025.05.09 - 2025.05.23</p>
                  <p>- 사용자 감정 점수 기반 음악 추천 사이트</p>
                  <p>- TypeScript를 사용한 미연시 스타일 Vanila Project</p>
                </div>
                <div className="my-4">
                  <span className="font-semibold">사용 기술</span>
                  <div>HTML, CSS, TypeScript</div>
                </div>
              </div>
              <button
                className="w-full h-10 bg-[#e3e9f1] rounded-lg font-semibold hover:cursor-pointer"
                onClick={openDokiDokiModal}
              >
                자세히 보기
              </button>
            </div>
            <div className="flex flex-col justify-between rounded-xl shadow-xl p-6 bg-white min-w-96">
              <div>
                <div className="flex justify-between items-end">
                  <Link href={"https://ugveg.vercel.app/"} target="_blank" className="flex items-end gap-2">
                    <Image src={"/UgVeg.png"} alt="UgVeg 로고" width={30} height={30} />{" "}
                    <div className="flex items-center gap-2">
                      <span className="text-xl font-bold text-green-900">UgVeg: 흙내음 상점</span>
                      <Link2 />
                    </div>
                  </Link>
                  <span className="text-sm">4인 프로젝트</span>
                </div>
                <hr className="my-2 text-gray-400" />
                <div className="">
                  <p>- 2025.07.07 - 2025.08.08</p>
                  <p>- 상품성은 부족하지만 품질은 그대로인 못난이 농산물 판매 사이트</p>
                  <p>- Next.js RESTful API를 사용한 실시간 데이터 연동 쇼핑몰</p>
                </div>
                <div className="my-4">
                  <span className="font-semibold">사용 기술</span>
                  <div>React, Next.js, Zustand, TypeScript, TailwindCSS, Vercel, React-Hook-Form</div>
                </div>
              </div>
              <button
                className="w-full h-10 bg-[#e3e9f1] rounded-lg font-semibold hover:cursor-pointer"
                onClick={openUgVegModal}
              >
                자세히 보기
              </button>
            </div>
          </div>
        </section>
        <UgVegModal isOpen={isUgVegModalOpen} closeModal={closeUgVegModal} />
        <DokiDokiModal isOpen={isDokiDokiModalOpen} closeModal={closeDokiDokiModal} />
      </main>
      <Footer />
    </>
  );
}
