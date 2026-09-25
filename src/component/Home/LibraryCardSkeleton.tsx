const LibraryCardSkeleton = () => {
  return (
    <section className="bg-[#0f1115] px-4 py-12 sm:px-6 lg:px-0">
      <div className="mx-auto max-w-290">
        {/* Heading Skeleton */}
        <div className="mb-7">
          <div className="h-8 w-36 animate-pulse rounded bg-[#1b1f26]" />

          <div className="mt-2 h-4 w-72 animate-pulse rounded bg-[#1b1f26]" />
        </div>

        {/* Cards */}
        <div className="grid grid-cols-1 gap-5 md:grid-cols-2 lg:grid-cols-3">
          {Array.from({ length: 6 }).map((_, index) => (
            <div
              key={index}
              className="overflow-hidden rounded-2xl border border-[#252a33] bg-[#15181e]"
            >
              {/* Image */}
              <div className="h-52.5 w-full animate-pulse bg-[#1b1f26]" />

              <div className="p-5">
                {/* Tags */}
                <div className="flex gap-2">
                  <div className="h-6 w-16 animate-pulse rounded-full bg-[#252a33]" />
                  <div className="h-6 w-14 animate-pulse rounded-full bg-[#252a33]" />
                </div>

                {/* Title */}
                <div className="mt-5 h-5 w-44 animate-pulse rounded bg-[#1b1f26]" />

                {/* Equipment */}
                <div className="mt-2 h-3 w-28 animate-pulse rounded bg-[#252a33]" />

                {/* Divider */}
                <div className="my-5 h-px bg-[#252a33]" />

                {/* Stats */}
                <div className="flex gap-5">
                  <div className="h-4 w-16 animate-pulse rounded bg-[#252a33]" />
                  <div className="h-4 w-20 animate-pulse rounded bg-[#252a33]" />
                  <div className="h-4 w-12 animate-pulse rounded bg-[#252a33]" />
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default LibraryCardSkeleton;
