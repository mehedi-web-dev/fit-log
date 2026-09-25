import Hero from "@/component/Home/Hero";
import LibraryCardSection from "@/component/Home/LibraryCardSection";
import LibraryCardSkeleton from "@/component/Home/LibraryCardSkeleton";
import { Suspense } from "react";



export default function Home() {
  return (
    <div>
      <Hero></Hero>

      <Suspense fallback={<LibraryCardSkeleton />}>
        <LibraryCardSection />
      </Suspense>
    </div>
  );
}
