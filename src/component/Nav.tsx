import Image from "next/image";
import Link from "next/link";
import logo from "@/assets/Link - Brand Logo.png";

const Nav = () => {
  const links = (
    <>
      <li>
        <Link
          href="/"
          className="rounded-xl bg-[#191c22] px-4 py-2 text-sm font-semibold text-[#caff00]"
        >
          Workouts
        </Link>
      </li>

      <li>
        <Link
          href="/MyPlan"
          className="px-2 py-2 text-sm font-semibold text-[#c4c5ca] hover:text-white"
        >
          My Plan
        </Link>
      </li>
    </>
  );

  return (
    <header className="h-20 w-full border-b border-[#24272e] bg-[#0d0f14] sticky top-0 z-10">
      <div className="mx-auto flex h-full max-w-290 items-center px-4">
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
            {links}{" "}
          </ul>{" "}
        </div>

        <Link href="/" className="shrink-0">
          <Image src={logo} alt="FITLOG" className="w-21" />
        </Link>

        <nav className="hidden flex-1 justify-center lg:flex">
          <ul className="flex items-center gap-1">{links}</ul>
        </nav>

        <div className="ml-auto flex items-center gap-5 lg:gap-8">
          <Link
            href="/MyPlan"
            className="flex items-center gap-2 text-xs font-semibold text-[#d0d1d5]"
          >
            <span>Plan</span>

            <span className="flex h-5.5 min-w-7 items-center justify-center rounded-full bg-[#caff00] px-2 text-xs font-bold text-[#111318]">
              {" "}
              0
            </span>
          </Link>

          <Link
            href="/MyPlan"
            className="flex items-center gap-2 text-xs font-semibold text-[#d0d1d5]"
          >
            <span>Saved</span>
            <span className="flex h-5.5 min-w-7 items-center justify-center rounded-full border border-[#9b9da4] px-2 text-xs text-white">
              {" "}
              0
            </span>
          </Link>
        </div>
      </div>
    </header>
  );
};

export default Nav;
