/* eslint-disable @typescript-eslint/no-unused-vars */
/* eslint-disable @typescript-eslint/no-explicit-any */
/* eslint-disable no-prototype-builtins */
import { usePokedexContext } from "../context/pokedex";
import { NavBar } from "./layout/navigation-bar";
import { SearchToggleView } from "./layout/search-toggle-view";

export const CapturedPokemon = () => {
  const {
    pokemonList,
    // searchTerm,
    isGridView,
    offset,
    capturedPokemon,
    handleCapture,
    searchTerm,
    setCapturedPokemon,
  } = usePokedexContext();

  // Filter to show only captured Pokémon
  const capturedPokemonList = pokemonList?.filter((pokemon) =>
    capturedPokemon.hasOwnProperty(pokemon.name)
  );

  // Filtered Pokemon list based on search bar result
  const filteredPokemon =
    capturedPokemonList?.filter((pokemon: { name: string }) =>
      pokemon.name.toLowerCase().includes(searchTerm.toLowerCase())
    ) || [];

  const handleRemoveCapture = (name: string) => {
    // Remove the captured Pokémon from the state
    setCapturedPokemon((prev: any) => {
      const updatedCapturedPokemon = { ...prev };
      delete updatedCapturedPokemon[name]; // Remove the Pokémon by name
      localStorage.setItem(
        "capturedPokemon",
        JSON.stringify(updatedCapturedPokemon)
      ); // Update localStorage
      return updatedCapturedPokemon; // Return the updated state
    });
  };

  return (
    <>
      <div className="app bg-white-300 dark:bg-gray-800">
        <div className="container bg-white dark:bg-gray-800 border dark:border-white m-20">
          {/* NavBar Component */}
          <NavBar />

          <h1 className="uppercase text-center text-black dark:text-white">
            Captured Pokemon
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
            {filteredPokemon.map(
              (pokemon: { name: string; url: string }, index: number) => (
                <div
                  className={`p-4 border dark:border-white rounded-md ${
                    isGridView
                      ? "text-center"
                      : "flex items-center justify-around space-x-4"
                  }`}
                  key={index}
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
                    <p className="capitalize font-semibold dark:text-white">
                      {pokemon.name}
                    </p>
                    {capturedPokemon[pokemon.name] ? (
                      <p className="uppercase text-center text-black dark:text-white">
                        Captured: {capturedPokemon[pokemon.name].nickname} on{" "}
                        {capturedPokemon[pokemon.name].date}
                      </p>
                    ) : (
                      <span className="mt-2 p-1 bg-red-500 text-white rounded-md">
                        Tag as Captured
                      </span>
                    )}
                  </div>
                  <button
                    className="mt-5 rounded-sm px-3 py-2 bg-red-400 self-end"
                    onClick={() => handleRemoveCapture(pokemon.name)}
                  >
                    Remove
                  </button>
                </div>
              )
            )}
          </div>
        </div>
      </div>
    </>
  );
};
