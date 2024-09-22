import { FeatureCard } from "./FeatureCard";
import { Footer } from "./Footer";
import { Hero } from "./Hero";

export const Home = () => {
  return (
    <main className="flex flex-col items-center w-full">
      <Hero />

      {/* features */}

      <section
        id="features"
        className="w-full  mt-5 max-w-4xl mx-auto p-5 space-y-5"
      >
        <h1 className="text-center text-3xl font-medium">
          Scale your product knowledge and brand voice to every visitor
        </h1>
        {/* cards */}
        <div className="flex flex-col lg:flex-row gap-7 gap-y-10">
          {[1, 2, 3].map((index) => (
            <FeatureCard key={index} />
          ))}
        </div>
      </section>

      {/* use cases */}
      <hr />

      {/* footer */}
      <Footer />
    </main>
  );
};
