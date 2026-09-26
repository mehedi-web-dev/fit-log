"use client";
import { workContex } from "@/contex/workContex";
import React, { useContext } from "react";
import { FiX } from "react-icons/fi";
import { toast } from "react-toastify";

const RemoveButton = ({ id }: { id: number }) => {
  const { addPlan, setAddPlan } = useContext(workContex);
  const { savePlan, setSavePlan } = useContext(workContex);

  const handleRemove = (id: number) => {
    const remainingwork = addPlan.filter((work) => work.id !== id);
    setAddPlan(remainingwork);
    const remainingworks = savePlan.filter((work) => work.id !== id);
    setSavePlan(remainingworks);
    toast.success("Workout removed from your plan!");
  };

  return (
    <div>
      <button
        onClick={() => handleRemove(id)}
        type="button"
        aria-label="Remove workout"
        className="ml-1 flex h-8 w-8 items-center  cursor-pointer justify-center text-[#737985] transition hover:text-white"
      >
        <FiX size={16} />
      </button>
    </div>
  );
};

export default RemoveButton;
