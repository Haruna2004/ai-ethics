import { featuresList } from "../../constants/landing";
import { FeatureCard } from "./FeatureCard";

export const Features = () => {
  return (
    <section
      id="features"
      className="w-full  mt-5 max-w-4xl mx-auto p-5 space-y-5"
    >
      <h1 className="text-center text-2xl font-medium">
        Empowering organizations with ethical AI governance and peace-centric
        solutions.
      </h1>
      {/* cards */}
      <div className="grid grid-cols-1 md:grid-cols-3 w-full mx-auto  lg:flex-row gap-7 gap-y-10 ">
        {featuresList.map(({ title, description }, index) => (
          <FeatureCard key={index} title={title} desc={description} />
        ))}
      </div>
    </section>
  );
};
