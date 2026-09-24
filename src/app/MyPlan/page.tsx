'use client'
import { workContex } from '@/contex/workContex';
import { useContext } from 'react';


const MyPlanPage = () => {
  const { addPlan } = useContext(workContex);
  return (
    <div>
      
        <h3>hello:{addPlan.length}</h3>
   
    </div>
  );
};

export default MyPlanPage;