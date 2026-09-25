import Image from "next/image";
import { IWork } from "@/type";
import { FiClock } from "react-icons/fi";
import { FaFire, FaStar } from "react-icons/fa";
import Link from "next/link";
import RemoveButton from "../Button/removeButton";
import MarkDoneButton from "../Button/markDoneButton";

export interface TodayPlanCardProps {
  work: IWork;
}

const TodayPlanCard = ({ work }: TodayPlanCardProps) => {
  const { name, image, equipment, duration, caloriesBurned, rating } = work;

  return (
    <div className="grid grid-cols-1 md:grid-cols-2 w-full items-center gap-4 rounded-2xl border border-[#252a33] bg-[#15181e] p-3">
      {/* Left */}

      <div className="grid grid-cols-1 md:grid-cols-2 gap-0 ">
        <div className="relative h-17 w-31.25 shrink-0 overflow-hidden rounded-xl">
          <Image
            src={image}
            alt={name}
            width={250}
            height={200}
            className="object-cover"
          />
        </div>
        <div className="min-w-0 flex-1 mt-3.5 md:mt-0 md:-ml-28">
          {/* Name */}
          <h3 className="truncate text-sm font-extrabold uppercase text-[#f5f5f5]">
            {name}
          </h3>

          {/* Equipment */}
          <p className="mt-0.5 text-[11px] font-medium text-[#9da2ad]">
            {equipment}
          </p>

          {/* Stats */}
          <div className="mt-1.5 flex items-center gap-3 text-[11px] text-[#c4c7ce]">
            {/* Duration */}
            <span className="flex items-center gap-1">
              <FiClock size={13} className="text-[#caff00]" />
              {duration} min
            </span>

            {/* Calories */}
            <span className="flex items-center gap-1">
              <FaFire size={11} className="text-[#caff00]" />
              {caloriesBurned} kcal
            </span>

            {/* Rating */}
            <span className="flex items-center gap-1">
              <FaStar size={11} className="text-[#caff00]" />
              {rating}
            </span>
          </div>
        </div>
      </div>

      {/* Right */}
      <div className="flex shrink-0 items-center justify-start md:justify-end gap-2">
        {/* View Details */}
        <Link href={`/AllWork/${work.id}`}>
          <button
            type="button"
            className=" h-9 cursor-pointer items-center rounded-full border border-[#343b47] px-4 text-[11px] font-medium text-[#d4d6dc] transition hover:border-[#626b7a] hover:text-white sm:flex"
          >
            View Details
          </button>
        </Link>

        <MarkDoneButton id={work.id}></MarkDoneButton>
        <RemoveButton id={work.id}></RemoveButton>
      </div>
    </div>
  );
};

export default TodayPlanCard;
