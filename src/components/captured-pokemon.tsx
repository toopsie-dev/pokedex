import { NavBar } from "./layout/navigation-bar";
import { SearchToggleView } from "./layout/search-toggle-view";

export const CapturedPokemon = () => {
  return (
    <>
      <div className="app">
        <div className="container border m-20">
          {/* NavBar Component */}
          <NavBar />

          <h1 className="uppercase text-center">Captured Pokemon</h1>

          {/* Search Toggle View Component */}
          <SearchToggleView />
        </div>
      </div>
    </>
  );
};
