import { BgDiv } from "./bg-div";
import { Features } from "./Features";
import { Footer } from "./Footer";
import { Hero } from "./Hero";
// import { Product } from "./Product";

export const Home = () => {
  return (
    <>
      <BgDiv />
      <main className="flex flex-col items-center w-full">
        <Hero />

        <Features />

        {/* <Product /> */}
        <hr className="border w-full" />
        <Footer />
      </main>
    </>
  );
};
