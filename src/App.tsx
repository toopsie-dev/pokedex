import { Route, BrowserRouter as Router, Routes } from "react-router-dom";
import { AllPokemon } from "./components/all-pokemon";
import CapturedPokemon from "./components/captured-pokemon";
import { TagAsCapture } from "./components/tag-as-capture";
import { PokedexProvider } from "./context/pokedex";

const App = () => {
  return (
    <>
      <PokedexProvider>
        <TagAsCapture />
        <Router>
          {/* <nav className="flex gap-4 p-4 bg-gray-200 dark:bg-gray-800">
            <Link to="/" className="p-2 bg-blue-500 text-white rounded-md">
              All Pokemon
            </Link>
            <Link
              to="/captured"
              className="p-2 bg-red-500 text-white rounded-md"
            >
              Captured Pokemon
            </Link>
          </nav> */}

          <Routes>
            <Route path="/" element={<AllPokemon />} />
            <Route path="/captured" element={<CapturedPokemon />} />
            <Route path="/tag" element={<TagAsCapture />} />
          </Routes>
        </Router>
      </PokedexProvider>
    </>
  );
};

export default App;
