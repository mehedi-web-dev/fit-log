"use client";

import TodayPlanCard from "@/component/MyPlanCard/TodayPlanCard";
import { workContex } from "@/contex/workContex";
import Link from "next/link";
import { useContext } from "react";

const MyPlanPage = () => {
  const { addPlan } = useContext(workContex);

  const totalMinutes = addPlan.reduce(
    (total, work) => total + Number(work.duration || 0),
    0,
  );

  const totalCalories = addPlan.reduce(
    (total, work) => total + Number(work.caloriesBurned || 0),
    0,
  );

  return (
    <main className="min-h-screen bg-[#0f1115] px-4 py-8 sm:px-6 lg:px-0">
      <div className="mx-auto max-w-290">
        {/* Header */}
        <div className="mb-6">
          <h1 className="text-3xl font-black uppercase tracking-tight text-white">
            My Plan
          </h1>

          <p className="mt-1 text-sm text-[#8A92A0]">
            Cap of five lifts for today. Finish them, then load more.
          </p>
        </div>

        {/* Stats */}
        <div className="mb-7 grid grid-cols-1 overflow-hidden rounded-2xl border border-[#252a33] bg-[#15181e] sm:grid-cols-3">
          {/* Exercises */}
          <div className="border-b border-[#252a33] px-5 py-5 sm:border-b-0 sm:border-r">
            <p className="text-[11px] text-[#8A92A0]">Exercises</p>

            <h3 className="mt-1 text-4xl font-black leading-none text-[#CCFF00]">
              {addPlan.length}
            </h3>
          </div>

          {/* Minutes */}
          <div className="border-b border-[#252a33] px-5 py-5 sm:border-b-0 sm:border-r">
            <p className="text-[11px] text-[#8A92A0]">Minutes</p>

            <h3 className="mt-1 text-4xl font-black leading-none text-white">
              {totalMinutes}
            </h3>
          </div>

          {/* Calories */}
          <div className="px-5 py-5">
            <p className="text-[11px] text-[#8A92A0]">Calories</p>

            <h3 className="mt-1 text-4xl font-black leading-none text-white">
              {totalCalories}
            </h3>
          </div>
        </div>

        <div className="mb-5 flex items-center justify-between">
          <div className="tabs tabs-lift">
            {/* Today's Plan */}
            <input
              type="radio"
              name="my_tabs_3"
              className="tab"
              aria-label="Today's Plan"
              defaultChecked
            />

            <div className="tab-content border-[#252a33] bg-[#15181e] p-4 sm:p-5">
              <div className="space-y-3">
                {addPlan.length > 0 ? (
                  addPlan.map((work, ind) => (
                    <TodayPlanCard work={work} key={work.id ?? ind} />
                  ))
                ) : (
                  <div className="flex min-h-45 flex-col items-center justify-center px-4 text-center">
                    <h3 className="text-sm font-extrabold tracking-wide text-white">
                      NOTHING HERE YET
                    </h3>

                    <p className="mt-1 max-w-md text-center text-xs leading-5 text-[#777d89]">
                      Browse the library and add a lift to get today moving.
                    </p>

                    <Link
                      href="/"
                      className="mt-5 inline-flex h-9 items-center gap-2 rounded-full bg-[#caff00] px-5 text-[11px] font-bold text-[#101217] transition-all duration-200 hover:bg-[#b9ed00] hover:shadow-[0_0_20px_rgba(202,255,0,0.12)]"
                    >
                      Go to workout
                    </Link>
                  </div>
                )}
              </div>
            </div>

            {/* Saved */}
            <input
              type="radio"
              name="my_tabs_3"
              className="tab"
              aria-label="Saved"
            />

            <div className="tab-content border-[#252a33] bg-[#15181e] p-5">
              <p className="text-sm text-[#777d89]">
                Saved workouts will appear here.
              </p>
            </div>
          </div>
        </div>
      </div>
    </main>
  );
};

export default MyPlanPage;
