import Image from "next/image";
import Link from "next/link";

import logo from "@/assets/Link - Brand Logo.png";

const Footer = () => {
  return (
    <footer className="w-full border-t border-[#24272e] bg-[#090A0D]">
      <div className="mx-auto flex h-22.5 max-w-290 flex-col items-center justify-center gap-3 px-4 sm:flex-row sm:justify-between">
        {/* left */}
        <Link href="/" className="shrink-0">
          <Image src={logo} alt="FITLOG" className="w-19" />
        </Link>

        {/* right */}
        <p className="text-[14px] font-inter font-medium text-[#6B7280]">
          © 2026 FitLog — Workout Library. Train hard, log honest.
        </p>
      </div>
    </footer>
  );
};

export default Footer;