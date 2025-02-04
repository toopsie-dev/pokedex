import { Link, Route, BrowserRouter as Router, Routes } from "react-router-dom";
import { AllPokemon } from "./all-pokemon";
import CapturedPokemon from "./captured-pokemon";

export const TagAsCapture = () => {
  return (
    <div className=" max-w-full flex justify-center">
      <Router>
        <nav className="flex gap-4 p-4 bg-gray-200 dark:bg-gray-800">
          <Link to="/" className="p-2 bg-blue-500 text-white rounded-md">
            All Pokemon
          </Link>
          <Link to="/captured" className="p-2 bg-red-500 text-white rounded-md">
            Captured Pokemon
          </Link>
        </nav>
        <Routes>
          <Route path="/" element={<AllPokemon />} />
          <Route path="/captured" element={<CapturedPokemon />} />
          <Route path="/tag" element={<TagAsCapture />} />
        </Routes>
      </Router>
    </div>
  );
};
