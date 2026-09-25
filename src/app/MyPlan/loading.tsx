const Loading = () => {
  return (
    <main className="min-h-screen bg-[#0f1115] px-4 py-8 sm:px-6 lg:px-0">
      <div className="mx-auto w-full max-w-290">
        <div className="mb-6">
          <div className="h-9 w-36 animate-pulse rounded bg-[#1b1f26]" />

          <div className="mt-2 h-4 w-80 animate-pulse rounded bg-[#1b1f26]" />
        </div>

        {/* Metrics skeleton */}
        <div className="mb-7 grid grid-cols-1 overflow-hidden rounded-2xl border border-[#252a33] bg-[#15181e] md:grid-cols-3">
          {Array.from({ length: 3 }).map((_, index) => (
            <div key={index} className="px-5 py-5">
              <div className="h-3 w-20 animate-pulse rounded bg-[#252a33]" />
              <div className="mt-2 h-9 w-12 animate-pulse rounded bg-[#1b1f26]" />
            </div>
          ))}
        </div>

        {/* Loading text */}
        <div className="flex min-h-45 items-center justify-center rounded-2xl border border-[#252a33] bg-[#15181e]">
          <p className="text-sm font-oswald font-medium text-[#8A92A0]">
            Loading workouts…
          </p>
        </div>
      </div>
    </main>
  );
};

export default Loading;
