/* eslint-disable react-hooks/exhaustive-deps */
import { useEffect } from "react";
import { Link } from "react-router-dom";
import { usePokedexContext } from "../context/pokedex";

export const TagCapturePokemon = () => {
  const { pokemonList, selectedPokemon } = usePokedexContext();

  const filteredPokemon =
    pokemonList?.filter(
      (pokemon: { name: string }) => pokemon.name === selectedPokemon
    ) || [];

  //   Get last segment of the URL to get image ID
  const lastUrlSegment = () => {
    const usrl = filteredPokemon[0].url.toString();
    const segment = usrl.split("/").filter(Boolean).pop();
    localStorage.setItem("imageId", String(Number(segment)));
    localStorage.setItem("selectedPokemon", JSON.stringify(selectedPokemon));
  };

  useEffect(() => {
    lastUrlSegment();
  }, [selectedPokemon]);

  return (
    <>
      <div className="app">
        <div className="container border m-20">
          <div className="flex gap-5 justify-end mb-15">
            <Link to="/" className="link">
              Go Back
            </Link>
          </div>
          {filteredPokemon.length !== 0 && (
            <div>
              <img
                src={`https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/${localStorage.getItem(
                  "imageId"
                )}.png`}
                alt={filteredPokemon[0].name}
              />
              <h2>{filteredPokemon[0].name}</h2>
            </div>
          )}
        </div>
      </div>
    </>
  );
};
