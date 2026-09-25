"use client";

import { workContex } from "@/contex/workContex";
import { IWork } from "@/type";
import { useContext } from "react";
import { FaRegCalendarPlus } from "react-icons/fa6";
import { toast } from "react-toastify";

export interface AddButtonProps {
  work: IWork;
}

const AddButton = ({ work }: AddButtonProps) => {
  const { addPlan, setAddPlan } = useContext(workContex);

  const handleAddBtn = (): void => {
    const alreadyWork = addPlan.some((item: IWork) => item.id === work.id);

    if (alreadyWork) {
      toast.info(`This item already added`);
      return;
    }

    setAddPlan([...addPlan, work]);

    toast.success(`Added to today's plan`);
  };

  return (
    <button
      onClick={handleAddBtn}
      type="button"
      className="flex h-10.5 cursor-pointer font-inter items-center gap-2 rounded-lg bg-[#caff00] px-5 text-[12px] font-bold text-[#101217] transition hover:bg-[#b9ed00]"
    >
      <FaRegCalendarPlus size={15} />{" "}
      {addPlan.some((item: IWork) => item.id === work.id)
        ? "Added"
        : "Add to today's plan"}
    </button>
  );
};

export default AddButton;
