import { CTAButton } from "./cta-button";

export const Hero = () => {
  return (
    <div className="w-full text-center  max-w-4xl mx-auto pt-16 px-10 h-[90vh] ">
      <h1 className="text-4xl font-bold tracking-wide leading-relaxed text-left md:text-center ">
        GovernanceAI helps build AI-Powered systems Responsibly
      </h1>
      <p className="text-[1.1rem] mt-5 text-left md:text-center">
        Ensuring AI systems align with ethical standards, mitigating risks, and
        fostering transparency in responsible innovation.
      </p>
      <div className="mt-10">
        <CTAButton text="Get Started" />
      </div>

      <div className="mt-28 ">
        <p>Sponsored by Mircosoft for Startups</p>
      </div>
    </div>
  );
};
