import { Link2 } from "lucide-react";
import Image from "next/image";
import Link from "next/link";

interface ModalProps {
  isOpen: boolean;
  closeModal: () => void;
}

export default function DokiDokiModal({ isOpen, closeModal }: ModalProps) {
  return (
    <div style={{ display: isOpen ? "block" : "none" }} className="fixed inset-0 bg-[#51576047]">
      <div className="fixed top-1/2 left-1/2 w-[60%] transform -translate-x-1/2 -translate-y-1/2 p-10 overflow-auto  bg-white shadow-lg">
        <div className="flex justify-between items-end">
          <Link href={"https://dokidoki-playlists.netlify.app/"} target="_blank" className="flex items-end gap-2">
            <Image src={"/dokidoki.svg"} alt="UgVeg 로고" width={20} height={20} />{" "}
            <div className="flex items-center gap-2">
              <span className="text-xl font-bold text-green-900">두근두근 플레이리스트</span>
              <Link2 />
            </div>
          </Link>
          <span className="text-sm">4인 프로젝트</span>
        </div>
        <hr className="text-gray-400 my-4" />
        <div className="flex flex-col gap-4 mb-4">
          <div>
            <p className="text-lg font-semibold mb-1">프로젝트 기간</p>
            <p>2025.05.09 - 2025.05.23</p>
          </div>
          <div>
            <p className="text-lg font-semibold mb-1">프로젝트 요약</p>
            <p>사용자의 감정을 분석하여 그에 맞는 음악 추천</p>
            <p>감정 분석 및 대화 분기 시스텐을 이용한 시나리오 제공</p>
            <p>음악 재생 제어 기능 및 결과 공유 기능 제공</p>
          </div>
          <div>
            <p className="text-lg font-semibold mb-1">프로젝트 내 역할 및 기여</p>
            <p>프로젝트에서 PL로서 감정 분석 및 대화 분기 시스템을 담당하여 주요 기능 개발을 진행했습니다.</p>
            <p>
              입력된 상태(사용자 이름, 선택한 캐릭터, 감정 점수 등)와 UI를 일관되게 연동하여 안정적인 인터페이스 제공
            </p>
          </div>
          <div>
            <p className="text-lg font-semibold mb-1">기술 스택</p>
            <p>TypeScript, HTML5, CSS3, Netlify, Figma</p>
          </div>
          <div>
            <Link
              href={"https://github.com/imnotpossib1e/JS-09-Promise9"}
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
