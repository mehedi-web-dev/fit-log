const Loading = () => {
  return (
    <main className="min-h-screen bg-[#0f1115] px-4 py-8 sm:px-6 lg:px-0">
      <div className="mx-auto max-w-290">
        <div className="grid grid-cols-1 gap-8 lg:grid-cols-2">
         
          <div className="h-137.5 w-full animate-pulse overflow-hidden rounded-xl bg-[#1b1f26]" />

       
          <div className="flex flex-col">
            {/* Title */}
            <div className="h-10 w-48 animate-pulse rounded-md bg-[#1b1f26]" />

            {/* Description */}
            <div className="mt-4 space-y-2">
              <div className="h-4 w-full max-w-125 animate-pulse rounded bg-[#1b1f26]" />
              <div className="h-4 w-4/5 max-w-107.5animate-pulse rounded bg-[#1b1f26]" />
            </div>

            {/* Muscle Tags */}
            <div className="mt-5 flex gap-2">
              <div className="h-6 w-16 animate-pulse rounded-full bg-[#1b1f26]" />
              <div className="h-6 w-16 animate-pulse rounded-full bg-[#1b1f26]" />
            </div>

            {/* Stats Card */}
            <div className="mt-5 overflow-hidden rounded-xl border border-[#252a33] bg-[#15181e]">
              {Array.from({ length: 7 }).map((_, index) => (
                <div
                  key={index}
                  className="flex h-43px items-center justify-between border-b border-[#252a33] px-4 last:border-b-0"
                >
                  <div className="h-3 w-20 animate-pulse rounded bg-[#252a33]" />

                  <div className="h-3 w-24 animate-pulse rounded bg-[#252a33]" />
                </div>
              ))}
            </div>

            {/* Instructions */}
            <div className="mt-7">
              <div className="h-4 w-28 animate-pulse rounded bg-[#1b1f26]" />

              <div className="mt-5 space-y-4">
                {Array.from({ length: 4 }).map((_, index) => (
                  <div key={index} className="flex items-start gap-3">
                    <div className="h-4 w-4 shrink-0 animate-pulse rounded bg-[#1b1f26]" />

                    <div className="h-4 w-full max-w-130 animate-pulse rounded bg-[#1b1f26]" />
                  </div>
                ))}
              </div>
            </div>

            {/* Buttons */}
            <div className="mt-7 flex gap-3">
              <div className="h-11 w-44 animate-pulse rounded-lg bg-[#1b1f26]" />

              <div className="h-11 w-36 animate-pulse rounded-lg bg-[#1b1f26]" />
            </div>
          </div>
        </div>
      </div>
    </main>
  );
};

export default Loading;
