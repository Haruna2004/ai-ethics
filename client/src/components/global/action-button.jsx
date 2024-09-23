/* eslint-disable react/prop-types */
export const ActionButton = ({ text, handleClick }) => {
  return (
    <button
      className="bg-black/70 hover:bg-black/90 text-white font-medium px-5 py-2 rounded-md"
      onClick={handleClick}
    >
      {text}
    </button>
  );
};
