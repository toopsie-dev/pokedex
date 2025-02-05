import { useState } from "react";
import { Link } from "react-router-dom";
import { usePokedexContext } from "../context/pokedex";

export const PokemonCard = () => {
  const {
    pokemonList,
    searchTerm,
    isGridView,
    handleCapture,
    capturedPokemon,
  } = usePokedexContext();

  const [offset] = useState<number>(0);

  // Filtered Pokemon list based on search bar result
  const filteredPokemon =
    pokemonList?.filter((pokemon: { name: string }) =>
      pokemon.name.toLowerCase().includes(searchTerm.toLowerCase())
    ) || [];

  return (
    <>
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
    </>
  );
};
