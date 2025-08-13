import { Copyright } from "lucide-react";

export default function Footer() {
  return (
    <footer className="flex flex-col justify-center items-center h-24">
      <div className="flex">
        <Copyright width={15} /> <span>2025. Lee Jin Hyun All rights reserved.</span>
      </div>
      <span className="mt-1 text-sm text-gray-500">favicon 아이콘 제작자: deemakdaksina - Flaticon </span>
    </footer>
  );
}
