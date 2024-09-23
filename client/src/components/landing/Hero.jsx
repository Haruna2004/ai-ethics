import { microsoft_logo } from "../../assets";
import { heroText, subHeroText } from "../../constants/landing";
import { CTAButton } from "./cta-button";

export const Hero = () => {
  return (
    <section
      id="#"
      className="w-full text-center max-w-4xl mx-auto pt-16  px-10 h-[90vh] md:pt-20"
    >
      <h1 className="text-4xl font-bold tracking-wide leading-relaxed text-left md:text-center md:tracking-[0.04] md:leading-[1.4em] md:text-5xl md:font-black md:my-2 md:max-w-2xl mx-auto">
        {heroText}
      </h1>
      <p className="text-[1.1rem] mt-5 md:mt-10 text-left md:text-center w-full ">
        {subHeroText}
      </p>
      <div className="mt-10 md:mt-16">
        <CTAButton text="Get Started" />
      </div>

      <div className="mt-28 flex  flex-col justify-center w-full gap-3 items-center ">
        <p>Sponsored by</p>
        <div className="flex gap-2">
          <img
            src={microsoft_logo}
            alt="Mircosoft Lagos"
            className="w-32 h-auto"
          />
          <p className="text-xl font-bold text-black/60 "> For Startups</p>
        </div>
      </div>
    </section>
  );
};
