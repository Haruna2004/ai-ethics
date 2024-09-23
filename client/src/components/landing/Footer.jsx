import { Linkedin } from "lucide-react";
import { email_logo } from "../../assets";

export const Footer = () => {
  return (
    <footer
      id="contacts"
      className="w-full flex flex-col items-center space-y-4 px-10 my-5  justify-between"
    >
      <div className="flex gap-5 ">
        <Linkedin className="text-blue-600 cursor-pointer" />
        <img
          src={email_logo}
          alt="email"
          className="w-7 h-auto cursor-pointer"
        />
      </div>
      <p className="text-black/90 text-[1.1rem]">Little Rock, Arkansas</p>
      <p>copyright &copy; 2024 Alafai Inc. All rights reserved.</p>
    </footer>
  );
};
