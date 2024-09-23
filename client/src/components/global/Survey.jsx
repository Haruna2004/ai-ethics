/* eslint-disable react/prop-types */
import TextareaAutosize from "react-textarea-autosize";
import { survey_questions } from "../../constants";
import { useState } from "react";
import { ActionButton } from "./action-button";
import { useNavigate } from "react-router-dom";

export const Survey = () => {
  const navigate = useNavigate();

  const getAIReport = async () => {
    // process report here
    navigate("/report");
  };

  return (
    <main className="p-5">
      <Quesions />
      <div className="w-full flex items-center justify-end my-5">
        <ActionButton text="Analyze" handleClick={getAIReport} />
      </div>
    </main>
  );
};

export const Quesions = () => {
  // eslint-disable-next-line no-unused-vars
  const [formState, setFormState] = useState({
    fullname: "",
  });

  function handleChange(e) {
    setFormState((prev) => ({ ...prev, [e.target.name]: e.target.value }));
  }

  return (
    <form className="flex flex-col gap-5">
      {survey_questions.map(({ name, placeholder, label }, index) => (
        <div key={name} className="flex flex-col gap-2">
          <label htmlFor={name} className="font-medium">
            <span className="text-xl">{index + 1}. </span>
            {label}
          </label>
          <TextareaAutosize
            className="p-2 border rounded-md resize-none"
            // value={formState.fullname}
            placeholder={placeholder}
            name={name}
            cols={3}
            onChange={handleChange}
          />
        </div>
      ))}
    </form>
  );
};
