"use client";

import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";

import logo from "@/assets/Link - Brand Logo.png";
import { useContext } from "react";
import { workContex } from "@/contex/workContex";

const Nav = () => {
  const pathname = usePathname();
  const isWorkoutActive = pathname === "/";
  const isMyPlanActive = pathname.startsWith("/MyPlan");
  const { addPlan } = useContext(workContex);
  const { savePlan } = useContext(workContex);

  const links = (
    <>
      <li>
        <Link
          href="/"
          className={`rounded-xl px-4 py-2 text-sm font-semibold transition ${
            isWorkoutActive
              ? "bg-[#191c22] text-[#caff00]"
              : "text-[#c4c5ca] hover:text-white"
          }`}
        >
          Workouts
        </Link>
      </li>

      <li>
        <Link
          href="/MyPlan"
          className={`rounded-xl px-4 py-2 text-sm font-semibold transition ${
            isMyPlanActive
              ? "bg-[#191c22] text-[#caff00]"
              : "text-[#c4c5ca] hover:text-white"
          }`}
        >
          My Plan
        </Link>
      </li>
    </>
  );

  return (
    <header className="sticky top-0 z-10 h-20 w-full border-b border-[#24272e] bg-[#0d0f14]">
      <div className="mx-auto flex h-full max-w-290 items-center px-4">
        {/* Mobile Menu */}
        <div className="dropdown lg:hidden">
          <button
            tabIndex={0}
            className="mr-4 flex h-8 w-8 flex-col items-start justify-center gap-1"
          >
            <span className="h-0.5 w-4.25 bg-[#e7e8eb]" />
            <span className="h-0.5 w-4.25 bg-[#e7e8eb]" />
            <span className="h-0.5 w-4.25 bg-[#e7e8eb]" />
          </button>

          <ul
            tabIndex={-1}
            className="menu dropdown-content z-50 mt-3 w-48 rounded-xl border border-[#292d35] bg-[#15181e] p-2 shadow-lg"
          >
            {links}
          </ul>
        </div>

        {/* Logo */}
        <Link href="/" className="shrink-0">
          <Image src={logo} alt="FITLOG" className="w-21" />
        </Link>

        {/* Desktop Navigation */}
        <nav className="hidden flex-1 justify-center lg:flex">
          <ul className="flex items-center gap-1">{links}</ul>
        </nav>

        {/* Right Side */}
        <div className="ml-auto flex items-center gap-5 lg:gap-8">
          {/* Plan */}
          <Link
            href="/MyPlan"
            className="flex items-center gap-2 text-xs font-semibold text-[#d0d1d5]"
          >
            <span>Plan</span>

            <span className="flex h-5.5 min-w-7 items-center justify-center rounded-full bg-[#caff00] px-2 text-xs font-bold text-[#111318]">
              {addPlan.length}
            </span>
          </Link>

          {/* Saved */}
          <Link
            href="/MyPlan"
            className="flex items-center gap-2 text-xs font-semibold text-[#d0d1d5]"
          >
            <span>Saved</span>

            <span className="flex h-5.5 min-w-7 items-center justify-center rounded-full border border-[#9b9da4] px-2 text-xs text-white">
              {savePlan.length}
            </span>
          </Link>
        </div>
      </div>
    </header>
  );
};

export default Nav;
