import Image from "next/image";

import { IWork } from "@/type";
import { FaBookmark } from "react-icons/fa6";
import AddButton from "@/component/Button/addButton";
import SavedButton from "@/component/Button/savedButton";

export interface PageProps {
  params: {
    id: string;
  };
}

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

const Page = async ({ params }: PageProps) => {
  const { id } = await params;

  const workData = await workDatas();

  const work = workData.find((item: IWork) => String(item.id) === id);

  if (!work) {
    return (
      <div className="flex min-h-[70vh] items-center justify-center bg-[#0F1115]">
        <h2 className="text-xl font-bold text-white">Workout not found</h2>
      </div>
    );
  }

  return (
    <main className="min-h-screen bg-[#0F1115] px-4 py-10 md:px-6 ">
      <div className="mx-auto grid max-w-300 grid-cols-1 gap-8 md:grid-cols-[1fr_1fr]">
        <div className="relative h-125 overflow-hidden rounded-xl md:h-137 ">
          <Image
            src={work.image}
            alt={work.name}
            width={700}
            height={700}
            className="h-137 w-full rounded-xl object-cover"
          />
        </div>

        <div className="flex flex-col">
          {/* Title */}
          <h1 className="text-[32px] font-black uppercase leading-[0.95] tracking-[-1px] text-[#FFFFFF] md:text-[36px]">
            {work.name}
          </h1>

          {/* Description */}
          <p className="mt-3 max-w-130 text-[13px] leading-normal text-[#969ba6] sm:text-[14px]">
            {work.description}
          </p>

          {/* Muscle Groups */}
          <div className="mt-4 flex flex-wrap gap-2">
            {work.muscleGroups.map((muscle) => (
              <span
                key={muscle}
                className="rounded-full bg-[#caff00] px-3 py-1 text-[10px] font-bold uppercase text-[#101217]"
              >
                {" "}
                {muscle}
              </span>
            ))}
          </div>

          <div className="mt-5 overflow-hidden rounded-xl border border-[#292d35] bg-[#151922]">
            {/* Equipment */}
            <div className="flex items-center justify-between border-b border-[#252a32] px-4 py-3">
              <span className="text-[10px] font-bold uppercase tracking-[0.5px] text-[#8f95a1]">
                Equipment
              </span>

              <span className="text-[12px] text-[#e1e2e5]">
                {work.equipment}
              </span>
            </div>

            {/* Difficulty */}
            <div className="flex items-center justify-between border-b border-[#252a32] px-4 py-3">
              <span className="text-[10px] font-bold uppercase tracking-[0.5px] text-[#8f95a1]">
                Difficulty
              </span>

              <span className="text-[12px] text-[#e1e2e5]">
                {work.difficulty}
              </span>
            </div>

            {/* Sets */}
            <div className="flex items-center justify-between border-b border-[#252a32] px-4 py-3">
              <span className="text-[10px] font-bold uppercase tracking-[0.5px] text-[#8f95a1]">
                Sets
              </span>

              <span className="text-[12px] text-[#e1e2e5]">{work.sets}</span>
            </div>

            {/* Reps */}
            <div className="flex items-center justify-between border-b border-[#252a32] px-4 py-3">
              <span className="text-[10px] font-bold uppercase tracking-[0.5px] text-[#8f95a1]">
                Reps
              </span>

              <span className="text-[12px] text-[#e1e2e5]">{work.reps}</span>
            </div>

            {/* Duration */}
            <div className="flex items-center justify-between border-b border-[#252a32] px-4 py-3">
              <span className="text-[10px] font-bold uppercase tracking-[0.5px] text-[#8f95a1]">
                Duration
              </span>

              <span className="text-[12px] text-[#e1e2e5]">
                {work.duration} min
              </span>
            </div>

            {/* Calories */}
            <div className="flex items-center justify-between border-b border-[#252a32] px-4 py-3">
              <span className="text-[10px] font-bold uppercase tracking-[0.5px] text-[#8f95a1]">
                Calories
              </span>

              <span className="text-[12px] text-[#e1e2e5]">
                {work.caloriesBurned} kcal
              </span>
            </div>

            {/* Rating */}
            <div className="flex items-center justify-between px-4 py-3">
              <span className="text-[10px] font-bold uppercase tracking-[0.5px] text-[#8f95a1]">
                Rating
              </span>

              <span className="text-[12px] text-[#e1e2e5]">{work.rating}</span>
            </div>
          </div>

          <div className="mt-6">
            <h2 className="text-[13px] font-bold uppercase text-white">
              Instructions
            </h2>

            <ol className="mt-3 space-y-3">
              {work.instructions.map((instruction, index) => (
                <li
                  key={index}
                  className="flex gap-3 text-[14px] leading-normal text-[#D1D5DB]"
                >
                  <span className="shrink-0 text-[#D1D5DB]">{index + 1}.</span>

                  <span>{instruction}</span>
                </li>
              ))}
            </ol>
          </div>

          <div className="mt-7 flex flex-wrap gap-3">
            <AddButton work={work}></AddButton>

            <SavedButton work={work}></SavedButton>
          </div>
        </div>
      </div>
    </main>
  );
};

export default Page;
