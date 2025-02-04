import { Route, Routes } from "react-router-dom";
import { AllPokemon } from "./components/all-pokemon";
import { CapturedPokemon } from "./components/captured-pokemon";
import { TagCapturePokemon } from "./components/tag-as-capture";

export const AppRoutes = () => {
  return (
    <>
      <Routes>
        <Route path="/" element={<AllPokemon />} />
        <Route path="/captured" element={<CapturedPokemon />} />
        <Route path="/tag" element={<TagCapturePokemon />} />
      </Routes>
    </>
  );
};

export default AppRoutes;
