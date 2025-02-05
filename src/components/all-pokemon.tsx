import { usePokedexContext } from "../context/pokedex";
import { NavBar } from "./layout/navigation-bar";
import { Pagination } from "./layout/pagination";
import { SearchToggleView } from "./layout/search-toggle-view";
import { PokemonCard } from "./pokemon-card";

export const AllPokemon = () => {
  // Fetch context properties
  const { isLoading, error, isGridView } = usePokedexContext();

  // Checked API response
  if (isLoading) return <p>Loading...</p>;
  if (error) return <p>Error loading Pokemon.</p>;

  return (
    <div className="app">
      <div className="container border m-20">
        {/* NavBar Component */}
        <NavBar />

        <h1 className="uppercase text-center">Pokedex</h1>

        {/* Search Toggle View Component */}
        <SearchToggleView />
        <div
          className={
            isGridView
              ? "grid grid-cols-2 md:grid-cols-4 gap-4"
              : "flex flex-col space-y-2"
          }
        >
          <PokemonCard />
        </div>
        <Pagination />
      </div>
    </div>
  );
};
