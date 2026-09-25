"use client";
import { workContex } from "@/contex/workContex";
import React, { useContext } from "react";
import { FiCheck } from "react-icons/fi";
import { toast } from "react-toastify";

const MarkDoneButton = ({ id }: { id: number }) => {
  const { addPlan, setAddPlan } = useContext(workContex);

  const handleRemove = (id: number) => {
    const remainingwork = addPlan.filter((work) => work.id !== id);
    setAddPlan(remainingwork);
    toast.success(`Workout logged — nice work`);
  };

  return (
    <div>
      <button
        onClick={() => handleRemove(id)}
        type="button"
        className="flex h-9 items-center cursor-pointer gap-1.5 rounded-full bg-[#caff00] px-4 text-[11px] font-bold text-[#101217] transition hover:bg-[#b9ed00]"
      >
        <FiCheck size={14} strokeWidth={3} />
        <span >Mark as Done</span>
      </button>
    </div>
  );
};

export default MarkDoneButton;
