import { Link2 } from "lucide-react";
import Image from "next/image";
import Link from "next/link";

interface ModalProps {
  isOpen: boolean;
  closeModal: () => void;
}

export default function UgVegModal({ isOpen, closeModal }: ModalProps) {
  return (
    <div style={{ display: isOpen ? "block" : "none" }} className="fixed inset-0 bg-[#51576047]">
      <div className="fixed top-1/2 left-1/2 w-[60%] transform -translate-x-1/2 -translate-y-1/2 p-10 overflow-auto  bg-white shadow-lg">
        <div className="flex justify-between items-end">
          <Link href={"https://ugveg.vercel.app/"} target="_blank" className="flex items-end gap-2">
            <Image src={"/UgVeg.png"} alt="UgVeg 로고" width={30} height={30} />{" "}
            <div className="flex items-center gap-2">
              <h3 className="text-xl font-bold text-green-900">UgVeg: 흙내음 상점</h3>
              <Link2 />
            </div>
          </Link>
          <span className="text-sm">4인 프로젝트</span>
        </div>
        <hr className="text-gray-400 my-4" />
        <div className="flex flex-col gap-4 mb-4">
          <div>
            <p className="text-lg font-semibold mb-1">프로젝트 기간</p>
            <p>2025.07.07 - 2025.08.08</p>
          </div>
          <div>
            <p className="text-lg font-semibold mb-1">프로젝트 요약</p>
            <p>오픈 마켓 API를 활용한 못난이 농산물 전문 쇼핑몰</p>
            <p>레시피 게시판을 이용한 커뮤니티 형성</p>
          </div>
          <div>
            <p className="text-lg font-semibold mb-1">프로젝트 내 역할 및 기여</p>
            <p>프로젝트에서 마이 페이지와 결제 페이지를 담당하며 핵심 기능 개발을 진행했습니다.</p>
            <p>또한 PL로서 팀원들이 직면한 어려운 문제를 적극 해결하며 원활한 협업과 프로젝트 진행에 기여하며</p>
            <p>이를 통해 기술적 문제 해결 역량을 강화했습니다. </p>
          </div>
          <div>
            <p className="text-lg font-semibold mb-1">기술 스택</p>
            <p>React, Next.js, Zustand, TypeScript, TailwindCSS, Vercel, React-Hook-Form, Bruno, MongoDB, Figma</p>
          </div>
          <div>
            <Link
              href={"https://github.com/FRONTENDBOOTCAMP-13th/Final-13-13tachi"}
              target="_blank"
              className="flex gap-2 text-lg font-semibold items-center"
            >
              Github <Link2 />
            </Link>
          </div>
        </div>

        <button onClick={closeModal} className="w-full h-10 bg-[#e3e9f1] rounded-lg font-semibold hover:cursor-pointer">
          닫기
        </button>
      </div>
    </div>
  );
}
