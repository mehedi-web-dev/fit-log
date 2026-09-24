import LibraryCard from "@/component/LibraryCard";
import { IWork } from "@/type";

const workDatas = async (): Promise<IWork[]> => {
  const res = await fetch("https://api.abcz.workers.dev/api/fitlog", {
    cache: "no-store",
  });
  if (!res.ok) {
    throw new Error("Failed to fetch workout data");
  }
  const data: IWork[] = await res.json();
  return data;
};

const AllWorkPage = async () => {
  const workData = await workDatas();

  return (
    <section className="bg-[#0b0c0f] px-4 py-10 sm:px-6 md:py-14 lg:px-0 lg:py-16">
      <div className=" mx-auto max-w-290 grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-3">
        {workData.map((work: IWork) => (
          <LibraryCard key={work.id} work={work} />
        ))}
      </div>
    </section>
  );
};

export default AllWorkPage;
