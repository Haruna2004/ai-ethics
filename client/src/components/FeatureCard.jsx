import { Smile } from "lucide-react";

export const FeatureCard = () => {
  return (
    <div className="flex flex-col space-y-2 p-10 rouned-lg shadow-md">
      <Smile className="w-10 h-10 text-blue-600" />
      <h1 className="text-xl font-semibold">Intelligent Interuptions</h1>
      <p className="text-[1.1rem]">
        Chat will only pop up when the AI thinks it can help.
      </p>
    </div>
  );
};
