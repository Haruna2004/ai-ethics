import { Link, useNavigate } from "react-router-dom";

const Header = () => {
  const navigate = useNavigate();
  return (
    <header className="flex p-5 border shadow-sm sticky top-0 z-10 bg-white justify-between">
      <h1
        className="text-xl font-semibold cursor-pointer"
        onClick={() => navigate("/")}
      >
        AI Ethics
      </h1>

      <div className="flex gap-3 items-center">
        <Link to="#features">Features</Link>
        <Link to="#features">Use Cases</Link>
      </div>
    </header>
  );
};

export default Header;
