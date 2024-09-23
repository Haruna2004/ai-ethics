import { Link, useNavigate } from "react-router-dom";

const Header = () => {
  const navigate = useNavigate();
  return (
    <header className="flex p-5 shadow sticky top-0 z-10 bg-white justify-between">
      <h1
        className="text-xl font-bold cursor-pointer"
        onClick={() => navigate("/")}
      >
        Alafai
      </h1>

      <div className="md:flex gap-3 items-center hidden">
        <Link to="#features">Features</Link>
        <Link to="#features">Products</Link>
        <Link to="#features">Contacts</Link>
      </div>
    </header>
  );
};

export default Header;
