import { exampleReport } from "../../constants/testRep";
import { ActionButton } from "./action-button";
import ReactMarkdown from "react-markdown";
import { useNavigate } from "react-router-dom";

export const Report = () => {
  const navigate = useNavigate();

  return (
    <main className="p-5">
      <div className="w-full flex items-center justify-between my-5">
        <ActionButton
          text="Go Back"
          handleClick={() => navigate("/questions")}
        />
        <ActionButton
          text="Download"
          handleClick={() => alert("Will download report as PDF document")}
        />
      </div>
      <h1 className="text-xl font-medium">Preview Ethics Report</h1>

      <Preview />
    </main>
  );
};

export const Preview = () => {
  return (
    <div className="bg-gray-200 text-black  rounded-md my-5 p-5">
      <ReactMarkdown className="prose" id="divToPrint">
        {exampleReport}
      </ReactMarkdown>
    </div>
  );
};
