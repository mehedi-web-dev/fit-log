"use client";

import SavePlanCard from "@/component/MyPlanCard/SavePlanCard";
import TodayPlanCard from "@/component/MyPlanCard/TodayPlanCard";
import { workContex } from "@/contex/workContex";
import Link from "next/link";
import { useContext, useState } from "react";

const MyPlanPage = () => {
  const { addPlan, savePlan } = useContext(workContex);

  const [activeTab, setActiveTab] = useState<"today" | "saved">("today");

  const [sortBy, setSortBy] = useState<"duration" | "calories" | "rating">(
    "duration",
  );

  const selectedPlan = activeTab === "today" ? addPlan : savePlan;

  const totalMinutes = selectedPlan.reduce(
    (total, work) => total + Number(work.duration || 0),
    0,
  );

  const totalCalories = selectedPlan.reduce(
    (total, work) => total + Number(work.caloriesBurned || 0),
    0,
  );

  const sortedAddPlan = [...addPlan].sort((a, b) => {
    if (sortBy === "duration") {
      return Number(b.duration || 0) - Number(a.duration || 0);
    }

    if (sortBy === "calories") {
      return Number(b.caloriesBurned || 0) - Number(a.caloriesBurned || 0);
    }

    if (sortBy === "rating") {
      return Number(b.rating || 0) - Number(a.rating || 0);
    }

    return 0;
  });

  const sortedSavePlan = [...savePlan].sort((a, b) => {
    if (sortBy === "duration") {
      return Number(a.duration || 0) - Number(b.duration || 0);
    }

    if (sortBy === "calories") {
      return Number(a.caloriesBurned || 0) - Number(b.caloriesBurned || 0);
    }

    if (sortBy === "rating") {
      return Number(b.rating || 0) - Number(a.rating || 0);
    }

    return 0;
  });

  return (
    <main className="min-h-screen bg-[#0f1115] px-4 py-8 sm:px-6 lg:px-0">
      <div className="mx-auto w-full max-w-290">
        <div className="mb-6">
          <h1 className="font-oswald text-3xl font-black uppercase tracking-tight text-white sm:text-4xl">
            My Plan
          </h1>

          <p className="mt-1 font-inter text-[13px] leading-5 text-[#8A92A0] sm:text-[14px]">
            Cap of five lifts for today. Finish them, then load more.
          </p>
        </div>

        <div className="mb-7 grid grid-cols-1 overflow-hidden rounded-2xl border border-[#252a33] bg-[#15181e] md:grid-cols-3">
          {/* Exercises */}
          <div className="border-b border-[#252a33] px-5 py-5 md:border-b-0 md:border-r">
            <p className="font-inter text-[11px] text-[#8A92A0]">Exercises</p>

            <h3 className="mt-1 font-inter text-4xl font-black leading-none text-[#CCFF00]">
              {selectedPlan.length}
            </h3>
          </div>

          {/* Minutes */}
          <div className="border-b border-[#252a33] px-5 py-5 md:border-b-0 md:border-r">
            <p className="font-inter text-[11px] text-[#8A92A0]">Minutes</p>

            <h3 className="mt-1 font-inter text-4xl font-black leading-none text-white">
              {totalMinutes}
            </h3>
          </div>

          {/* Calories */}
          <div className="px-5 py-5">
            <p className="font-inter text-[11px] text-[#8A92A0]">Calories</p>

            <h3 className="mt-1 font-inter text-4xl font-black leading-none text-white">
              {totalCalories}
            </h3>
          </div>
        </div>

        <div className="mb-5">
          <div className="flex flex-col gap-3 w-full md:items-start ">
            {/* shortby */}
            <div className="flex w-full shrink-0 items-center justify-start my-4 gap-2 md:w-auto">
              <span className="whitespace-nowrap font-inter text-xs text-[#8A92A0]">
                Sort By
              </span>

              <select
                value={sortBy}
                onChange={(e) =>
                  setSortBy(
                    e.target.value as "duration" | "calories" | "rating",
                  )
                }
                className="h-9 min-w-28 cursor-pointer rounded-lg border border-[#252a33] bg-[#15181e] px-3 font-inter text-xs font-medium text-white outline-none transition hover:border-[#3a414d] focus:border-[#caff00]"
              >
                <option value="duration">Duration</option>
                <option value="calories">Calories</option>
                <option value="rating">Rating</option>
              </select>
            </div>
            <div className="w-full">
              {/* tab */}
              <div className="tabs tabs-lift w-full sm:flex-1">
                {/* Today's Plan */}
                <input
                  type="radio"
                  name="my_tabs_3"
                  className="tab font-inter"
                  aria-label="Today's Plan"
                  defaultChecked
                  onChange={() => setActiveTab("today")}
                />

                <div className="tab-content w-full border-[#252a33] bg-[#15181e] p-3 sm:p-4 md:p-5">
                  <div className="space-y-3">
                    {sortedAddPlan.length > 0 ? (
                      sortedAddPlan.map((work, index) => (
                        <TodayPlanCard key={work.id ?? index} work={work} />
                      ))
                    ) : (
                      <EmptyState />
                    )}
                  </div>
                </div>

                {/* Saved */}
                <input
                  type="radio"
                  name="my_tabs_3"
                  className="tab font-inter"
                  aria-label="Saved"
                  onChange={() => setActiveTab("saved")}
                />

                <div className="tab-content w-full border-[#252a33] bg-[#15181e] p-3 sm:p-4 md:p-5">
                  <div className="space-y-3">
                    {sortedSavePlan.length > 0 ? (
                      sortedSavePlan.map((work, index) => (
                        <SavePlanCard key={work.id ?? index} work={work} />
                      ))
                    ) : (
                      <EmptyState />
                    )}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </main>
  );
};



const EmptyState = () => {
  return (
    <div className="flex min-h-45 flex-col items-center justify-center px-4 py-8 text-center">
      <h3 className="font-oswald text-[18px] font-extrabold tracking-wide text-white sm:text-[20px]">
        NOTHING HERE YET
      </h3>

      <p className="mt-1 max-w-md font-inter text-[12px] leading-5 text-[#A1A1AA]">
        Browse the library and add a lift to get today moving.
      </p>

      <Link
        href="/"
        className="mt-5 inline-flex h-9 items-center justify-center rounded-full bg-[#caff00] px-5 font-inter text-[11px] font-bold text-[#101217] transition-all duration-200 hover:bg-[#b9ed00] hover:shadow-[0_0_20px_rgba(202,255,0,0.12)]"
      >
        Go to workouts
      </Link>
    </div>
  );
};

export default MyPlanPage;
