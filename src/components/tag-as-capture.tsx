/* eslint-disable react-hooks/exhaustive-deps */
import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { usePokedexContext } from "../context/pokedex";

export const TagCapturePokemon: React.FC = () => {
  const { pokemonList, selectedPokemon, setCapturedPokemon } =
    usePokedexContext();

  const navigate = useNavigate(); // ✅ Initialize navigate

  // Fetch pokemon data with the selected pokemon
  const filteredPokemon =
    pokemonList?.filter(
      (pokemon: { name: string }) => pokemon.name === selectedPokemon
    ) || [];

  //   Get last segment of the URL to get image ID
  const lastUrlSegment = () => {
    const usrl = filteredPokemon[0].url.toString();
    const segment = usrl.split("/").filter(Boolean).pop();
    localStorage.setItem("imageId", String(Number(segment)));
  };

  lastUrlSegment();

  const [formData, setFormData] = useState({
    nickname: "",
    date: "",
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    if (!formData.nickname || !formData.date) {
      alert("Please fill in both fields.");
      return;
    }

    // Update localStorage
    setCapturedPokemon((prev: object) => ({
      ...prev,
      [selectedPokemon]: { date: formData.date, nickname: formData.nickname },
    }));
    alert("Captured Pokémon saved!");
    navigate("/", { replace: true });

    // Optional: Reset form after submission
    // setFormData({ nickname: "", date: "" });
  };

  return (
    <>
      <div className="app bg-white-300 dark:bg-gray-800">
        <div className="container bg-white dark:bg-gray-800 border dark:border-white m-20">
          <div className="flex gap-5 justify-end mb-15">
            <Link to="/" className="link  bg-teal-900  text-white">
              Go Back
            </Link>
          </div>
          <div className="flex justify-between items-center">
            {filteredPokemon.length !== 0 && (
              <div className="flex flex-col items-center justify-between">
                <img
                  src={`https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/${localStorage.getItem(
                    "imageId"
                  )}.png`}
                  alt={filteredPokemon[0].name}
                  className="pokemon-img"
                />
                <h3 className="pokemon-name uppercase bolder dark:text-white">
                  {filteredPokemon[0].name}
                </h3>
              </div>
            )}
            <form
              className="flex flex-col items-start gap-5 dark:bg-gray-900 bg-teal-100"
              onSubmit={handleSubmit}
            >
              <h3 className="text-black dark:text-white">Status</h3>
              <input
                type="text"
                name="nickname"
                value={formData.nickname}
                onChange={handleChange}
                placeholder="Enter Nickname .."
                className="border p-2 dark:text-white"
              />
              <input
                type="date"
                name="date"
                value={formData.date}
                onChange={handleChange}
                className="border p-2 dark:text-white"
              />
              <button
                type="submit"
                className="bg-teal-900  text-white px-4 py-3 rounded-sm"
              >
                Tag as Captured
              </button>
            </form>
          </div>
        </div>
      </div>
    </>
  );
};
