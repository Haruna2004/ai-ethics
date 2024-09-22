/* eslint-disable react/prop-types */

import { useNavigate } from "react-router-dom";

export const CTAButton = ({ text }) => {
  const navigate = useNavigate();
  return (
    <button
      className="bg-black/95 hover:bg-black/95 text-white font-medium px-5 py-2 rounded-md"
      onClick={() => navigate("/questions")}
    >
      {text}
    </button>
  );
};
