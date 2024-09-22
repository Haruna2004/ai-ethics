import { useNavigate } from "react-router-dom";

const Header = () => {
  const navigate = useNavigate();
  return (
    <header className="flex flex-col p-5 border shadow-sm">
      <h1
        className="text-xl font-semibold cursor-pointer"
        onClick={() => navigate("/")}
      >
        AI Ethics
      </h1>
    </header>
  );
};

export default Header;
