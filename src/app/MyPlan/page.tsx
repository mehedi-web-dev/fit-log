"use client";

import SavePlanCard from "@/component/MyPlanCard/SavePlanCard";
import TodayPlanCard from "@/component/MyPlanCard/TodayPlanCard";
import { workContex } from "@/contex/workContex";
import Link from "next/link";
import { useContext, useState } from "react";

const MyPlanPage = () => {
  const { addPlan, savePlan } = useContext(workContex);

  const [activeTab, setActiveTab] = useState<"today" | "saved">("today");

  const selectedPlan = activeTab === "today" ? addPlan : savePlan;

  const totalMinutes = selectedPlan.reduce(
    (total, work) => total + Number(work.duration || 0),
    0,
  );

  const totalCalories = selectedPlan.reduce(
    (total, work) => total + Number(work.caloriesBurned || 0),
    0,
  );

  return (
    <main className="min-h-screen bg-[#0f1115] px-4 py-8 md:px-6 lg:px-0">
      <div className="mx-auto max-w-290">
        {/* Header */}
        <div className="mb-6">
          <h1 className="text-3xl font-black font-oswald uppercase tracking-tight text-white">
            My Plan
          </h1>

          <p className="mt-1 text-[14px] font-inter text-[#8A92A0]">
            Cap of five lifts for today. Finish them, then load more.
          </p>
        </div>

        {/* Stats */}
        <div className="mb-7 grid grid-cols-1 overflow-hidden rounded-2xl border border-[#252a33] bg-[#15181e] md:grid-cols-3">
          {/* Exercises */}
          <div className="border-b border-[#252a33] px-5 py-5 md:border-b-0 md:border-r">
            <p className="text-[11px] text-[#8A92A0] font-inter">Exercises</p>

            <h3 className="mt-1 text-4xl font-black font-oswald leading-none text-[#CCFF00]">
              {selectedPlan.length}
            </h3>
          </div>

          {/* Minutes */}
          <div className="border-b border-[#252a33] px-5 py-5 md:border-b-0 md:border-r">
            <p className="text-[11px] font-inter text-[#8A92A0]">Minutes</p>

            <h3 className="mt-1 text-4xl font-black font-oswald leading-none text-white">
              {totalMinutes}
            </h3>
          </div>

          {/* Calories */}
          <div className="px-5 py-5">
            <p className="text-[11px] font-inter text-[#8A92A0]">Calories</p>

            <h3 className="mt-1 text-4xl font-black font-oswald leading-none text-white">
              {totalCalories}
            </h3>
          </div>
        </div>

        {/* Tabs */}
        <div className="mb-5 flex items-center justify-between">
          <div className="tabs tabs-lift w-full">
            <input
              type="radio"
              name="my_tabs_3"
              className="tab"
              aria-label="Today's Plan"
              defaultChecked
              onChange={() => setActiveTab("today")}
            />

            <div className="tab-content w-full border-[#252a33] bg-[#15181e] p-4 md:p-5">
              <div className="space-y-3">
                {addPlan.length > 0 ? (
                  addPlan.map((work, ind) => (
                    <TodayPlanCard work={work} key={work.id ?? ind} />
                  ))
                ) : (
                  <div className="flex min-h-45 flex-col items-center justify-center px-4 text-center">
                    <h3 className="text-[20px] font-extrabold font-oswald tracking-wide text-white">
                      NOTHING HERE YET
                    </h3>

                    <p className="mt-1 max-w-md text-center font-inter text-[12px] leading-5 text-[#A1A1AA]">
                      Browse the library and add a lift to get today moving.
                    </p>

                    <Link
                      href="/"
                      className="mt-5 inline-flex h-9 items-center gap-2 rounded-full bg-[#caff00] px-5 text-[11px] font-bold text-[#101217] transition-all font-inter duration-200 hover:bg-[#b9ed00] hover:shadow-[0_0_20px_rgba(202,255,0,0.12)]"
                    >
                      Go to workout
                    </Link>
                  </div>
                )}
              </div>
            </div>

            <input
              type="radio"
              name="my_tabs_3"
              className="tab font-inter"
              aria-label="Saved"
              onChange={() => setActiveTab("saved")}
            />

            <div className="tab-content w-full border-[#252a33] bg-[#15181e] p-4 md:p-5">
              <div className="space-y-3">
                {savePlan.length > 0 ? (
                  savePlan.map((work, ind) => (
                    <SavePlanCard work={work} key={work.id ?? ind} />
                  ))
                ) : (
                  <div className="flex min-h-45 flex-col items-center justify-center px-4 text-center">
                    <h3 className="text-[20px] font-extrabold font-oswald tracking-wide text-white">
                      NOTHING HERE YET
                    </h3>

                    <p className="mt-1 max-w-md text-center font-inter text-[12px] leading-5 text-[#A1A1AA]">
                      Browse the library and add a lift to get today moving.
                    </p>

                    <Link
                      href="/"
                      className="mt-5 inline-flex h-9 items-center font-inter gap-2 rounded-full bg-[#caff00] px-5 text-[11px] font-bold text-[#101217] transition-all duration-200 hover:bg-[#b9ed00] hover:shadow-[0_0_20px_rgba(202,255,0,0.12)]"
                    >
                      Go to workout
                    </Link>
                  </div>
                )}
              </div>
            </div>
          </div>
        </div>
      </div>
    </main>
  );
};

export default MyPlanPage;
