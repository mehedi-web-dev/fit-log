import Image from "next/image";
import { IWork } from "@/type";

import { FaFireFlameCurved, FaRegClock, FaRegStar } from "react-icons/fa6";
import Link from "next/link";

export interface LibraryCardProps {
  work: IWork;
}

const LibraryCard = ({ work }: LibraryCardProps) => {
  const {
    name,
    image,
    muscleGroups,
    equipment,
    duration,
    caloriesBurned,
    rating,
  } = work;

  return (
    <Link href={`/AllWork/${work.id}`}>
    <div className="w-full overflow-hidden rounded-[20px] z-0 border border-[#292d35] hover:border-[#C2F800] bg-[#15171d]">

      {/* Image */}
      <div className="relative aspect-[1.78/1] w-full overflow-hidden">
       <Image src={image}alt={name}
  className=" w-full object-cover" width={700} height={400}/></div>

      {/* Content */}
      <div className="px-7 pb-7 pt-7">

        {/* Muscle Groups */}
        <div className="mb-5 flex flex-wrap gap-2">
          {muscleGroups.map((muscle) => (
            <span
              key={muscle}
              className="rounded-full bg-[#caff00] px-3 py-1 text-[11px] font-bold uppercase text-[#000000]"
            >
              {muscle}
            </span>
          ))}
        </div>

        {/* Title */}
        <h2 className="text-[18px] font-black uppercase leading-7 tracking-[-0.3px] text-[#f4f4f5]">
          {name}
        </h2>

        {/* Equipment */}
        <p className="mt-2 text-[12px] leading-4 font-medium text-[#969ba6]">
          {equipment}
        </p>

        {/* Divider */}
        <div className="my-5 h-px w-full bg-[#252930]" />

        {/* Stats */}
        <div className="flex items-center gap-5 text-[#9da2ad]">

          {/* Duration */}
          <div className="flex items-center gap-2">
          
            <FaRegClock size={17} strokeWidth={1.8} />
            <span className="text-[14px]"> {duration} min </span> </div>

          {/* Calories */}
          <div className="flex items-center gap-2">
            <FaFireFlameCurved size={17} strokeWidth={1.8} fill="currentColor"/>

         <span className="text-[14px]"> {caloriesBurned} kcal </span> </div>

          {/* Rating */}
          <div className="flex items-center gap-2">
            <FaRegStar size={17} strokeWidth={1.8} />
            <span className="text-[14px]">{rating} </span> </div>

        </div>
      </div>
    </div></Link>
  );
};

export default LibraryCard;