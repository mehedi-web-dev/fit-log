import Link from "next/link";

const NotFound = () => {
  return (
    <main className="flex min-h-[80vh] items-center justify-center bg-[#0f1115] px-4">
      <div className="text-center">
        <p className="text-sm font-bold uppercase tracking-[2px] text-[#caff00]">
          404 Error
        </p>

        <h1 className="mt-3 text-5xl font-oswald font-black uppercase text-white">
          Page Not Found
        </h1>

        <p className="mx-auto mt-3 font-inter max-w-md text-sm text-[#8A92A0]">
          The page you are looking for does not exist or may have been moved.
        </p>

        <Link
          href="/"
          className="mt-6 inline-flex h-10 items-center rounded-lg bg-[#caff00] px-5 font-inter text-xs font-bold text-[#101217] transition hover:bg-[#b9ed00]"
        >
          Back to workouts
        </Link>
      </div>
    </main>
  );
};

export default NotFound;
