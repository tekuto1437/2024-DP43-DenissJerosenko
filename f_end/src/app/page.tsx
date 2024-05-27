import Hero from "./home/Hero";
import FeaturingSection from "./home/Featuring";

export default function Home() {
  return (
    <main className="py-10 px-10 lg:px-20 xl:px-60">
      <Hero />
      <hr className="my-10 xl:my-12 w-full h-0.5 border-t-0 bg-neutral-100 dark:bg-white/10" />
      <div className="">
        <FeaturingSection />
      </div>
    </main>
  );
}
