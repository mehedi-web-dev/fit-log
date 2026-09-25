import { IWork } from "@/type";
import LibraryCard from "../LibraryCard";

const workDatas = async (): Promise<IWork[]> => {
  const res = await fetch("https://api.abcz.workers.dev/api/fitlog",{cache: "no-store",});
  if (!res.ok) {throw new Error("Failed to fetch workout data"); }
  const data: IWork[] = await res.json();
  return data;
};

const LibraryCardSection = async () => {
  const workData = await workDatas();

  return (
    <section className="bg-[#0b0c0f] px-4 py-10 sm:px-6 md:py-14 lg:px-0 lg:py-16">
      <div className="mx-auto max-w-290">
        {/* Section Heading */}
        <div className="mb-7">
          <h3 className="text-[28px] font-black font-oswald uppercase leading-none tracking-[-0.5px] text-[#f5f5f5] sm:text-[30px]">
            The Library
          </h3>

          <p className="mt-2 text-[14px] font-medium font-inter text-[#9297a2] sm:text-[15px]">
            Twelve lifts covering every major muscle group.
          </p>
        </div>

        {/* Cards */}
        <div className="grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-3">
          {workData.map((work: IWork) => (
            <LibraryCard key={work.id} work={work} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default LibraryCardSection;