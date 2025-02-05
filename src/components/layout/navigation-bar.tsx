import { Link } from "react-router-dom";

export const NavBar = () => {
  return (
    <div className="flex gap-5 justify-end mb-15">
      <Link to="/" className="link bg-teal-900  text-white">
        All
      </Link>
      <Link to="/captured" className="link bg-teal-900 text-white">
        Captured
      </Link>
    </div>
  );
};
