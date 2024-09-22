import { Linkedin } from "lucide-react";

export const Footer = () => {
  return (
    <footer className="w-full flex flex-col items-center space-y-4 px-10 my-5  justify-between">
      <div className="flex gap-3 ">
        <Linkedin className="text-blue-600" />
      </div>
      <p className="text-black/90 text-[1.1rem]">Little Rock, Arkansas</p>
      <p>copyright &copy; 2024 EthicsAI Inc. All rights reserved.</p>
    </footer>
  );
};
