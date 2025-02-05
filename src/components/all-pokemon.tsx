import { useState } from "react";
import { Link } from "react-router-dom";
import { usePokedexContext } from "../context/pokedex";
import { NavBar } from "./layout/navigation-bar";
import { SearchToggleView } from "./layout/search-toggle-view";

export const AllPokemon = () => {
  const {
    pokemonList,
    isLoading,
    error,
    limit,
    searchTerm,
    isGridView,
    capturedPokemon,
    handleCapture,
  } = usePokedexContext();

  const [offset, setOffset] = useState<number>(0);

  // Checked API response
  if (isLoading) return <p>Loading...</p>;
  if (error) return <p>Error loading Pokemon.</p>;

  // Filtered Pokemon list based on search bar result
  const filteredPokemon =
    pokemonList?.filter((pokemon: { name: string }) =>
      pokemon.name.toLowerCase().includes(searchTerm.toLowerCase())
    ) || [];

  return (
    <>
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
            {filteredPokemon.map(
              (pokemon: { name: string; url: string }, index: number) => (
                <Link to="/tag" key={index}>
                  <div
                    className={`p-4 border rounded-md ${
                      isGridView ? "text-center" : "flex items-center space-x-4"
                    }`}
                    onClick={() => handleCapture(pokemon.name)}
                  >
                    <img
                      src={`https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/${
                        offset + index + 1
                      }.png`}
                      alt={pokemon.name}
                      className={isGridView ? "w-16 h-16 m-auto" : "w-16 h-16 "}
                    />
                    <div>
                      <p className="capitalize font-semibold">{pokemon.name}</p>
                      {capturedPokemon[pokemon.name] ? (
                        <p className="text-sm text-green-600">
                          Captured: {capturedPokemon[pokemon.name].nickname} on{" "}
                          {capturedPokemon[pokemon.name].date}
                        </p>
                      ) : (
                        <span className="mt-2 p-1 bg-red-500 text-white rounded-md">
                          Tag as Captured
                        </span>
                      )}
                    </div>
                  </div>
                </Link>
              )
            )}
          </div>
          <div className="flex justify-between mt-4">
            <button
              className="p-2 bg-gray-500 text-white rounded-md disabled:opacity-50"
              onClick={() =>
                setOffset((prev: number) => Math.max(0, prev - limit))
              }
              disabled={offset === 0}
            >
              Previous
            </button>
            <button
              className="p-2 bg-green-500 text-white rounded-md"
              onClick={() => setOffset((prev: number) => prev + limit)}
            >
              Next
            </button>
          </div>
        </div>
      </div>
    </>
  );
};
