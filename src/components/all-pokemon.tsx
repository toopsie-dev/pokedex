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
    <div className="app bg-white-300 dark:bg-gray-800">
      <div className="container bg-white dark:bg-gray-800 border dark:border-white m-20">
        {/* NavBar Component */}
        <NavBar />

        <h1 className="uppercase text-center text-black dark:text-white">
          Pokedex
        </h1>

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
