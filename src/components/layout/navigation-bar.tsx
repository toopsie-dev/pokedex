import { Link } from "react-router-dom";

export const NavBar = () => {
  return (
    <div className="flex gap-5 justify-end mb-15">
      <Link to="/" className="link">
        All
      </Link>
      <Link to="/captured" className="link">
        Captured
      </Link>
    </div>
  );
};
