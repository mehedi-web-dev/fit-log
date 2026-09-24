import Image from "next/image";
import Link from "next/link";
import banner from "@/assets/banner.png";

const Hero = () => {
  return (
    <section className=" bg-[#000000] py-10 px-5 md:py-16 md:px-0" >
     <div className="mx-auto max-w-290  overflow-hidden rounded-2xl border bg-[#15171d] border-[#252a32] ">
       <div className="grid md:grid-cols-2 grid-cols-1 min-h-111.25 items-center justify-between px-8 py-10 md:px-12 ">

  
        <div className="max-w-140">
          <h5 className="mb-6 text-[12px] font-bold uppercase tracking-[1.2px] text-[#caff00]">
            Workout Library
          </h5>

          <h1 className="max-w-140 text-[52px] leading-14 font-black uppercase md:leading-15 tracking-[-1.5px] text-[#FFFFFF] md:text-[50px] ">
            Train with intent. Log every set.
          </h1>

   
          <p className="mt-5 max-w-140 text-[16px] font-medium leading-[1.45] text-[#9CA3AF]">
            FitLog is a dark, no-nonsense gym companion: pick a lift, lock it
            into today&apos;s plan, and watch the week&apos;s work add up.
          </p>

     
          <Link
            href="/"
            className="mt-7 inline-flex h-10.25 items-center justify-center rounded-md bg-[#C2F800] px-6 text-[12px] font-extrabold uppercase tracking-[0.3px] text-black transition hover:bg-[#b9ed00]">
            Browse Workouts
          </Link>
        </div>

    
        <div className=" items-center justify-center md:flex md:my-0 my-7  ">
          <Image
            src={banner}
            alt="Workout illustration"
            className="h-auto w-full max-w-82.5 object-contain "
          />
        </div>

      </div>
     </div>
    </section>
  );
};

export default Hero;