"use client";
import { IWork } from "@/type";
import {
  createContext,
  useState,
  type Dispatch,
  type ReactNode,
  type SetStateAction,
} from "react";

export interface WorkProviderProps {
  children: ReactNode;
}
interface WorkContextValue {
  addPlan: IWork[];
  setAddPlan: Dispatch<SetStateAction<IWork[]>>;
  savePlan: IWork[];
  setSavePlan: Dispatch<SetStateAction<IWork[]>>;
}

export const workContex = createContext<WorkContextValue>({
  addPlan: [],
  setAddPlan: () => {},
  savePlan: [],
  setSavePlan: () => {},
});

const WorkProvider = ({ children }: WorkProviderProps) => {
  const [addPlan, setAddPlan] = useState<IWork[]>([]);
  const [savePlan, setSavePlan] = useState<IWork[]>([]);

  return (
    <workContex.Provider value={{ addPlan, setAddPlan, savePlan, setSavePlan }}>
      {children}
    </workContex.Provider>
  );
};

export default WorkProvider;
