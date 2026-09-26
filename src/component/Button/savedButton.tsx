"use client";

import { workContex } from "@/contex/workContex";
import { IWork } from "@/type";
import { useContext } from "react";
import { FaBookmark } from "react-icons/fa6";
import { toast } from "react-toastify";

export interface AddButtonProps {
  work: IWork;
}

const SavedButton = ({ work }: AddButtonProps) => {
  const { savePlan, setSavePlan } = useContext(workContex);

  const handleSaveBtn = (): void => {
    const alreadyWork = savePlan.some((item: IWork) => item.id === work.id);

    if (alreadyWork) {
      toast.info(`This item already added`);
      return;
    }

    setSavePlan([...savePlan, work]);

    toast.success(`Workout saved for later!`);
  };

  return (
    <button
      onClick={handleSaveBtn}
      type="button"
      className="flex h-10.5 items-center gap-2 cursor-pointer rounded-lg border border-[#343943] px-5 text-[12px] font-medium text-[#d2d4d9] font-inter transition hover:border-[#555b67] hover:text-white"
    >
      <FaBookmark size={15} />
      {savePlan.some((item: IWork) => item.id === work.id)? " Saved": "Save for later"}
    </button>
  );
};

export default SavedButton;
