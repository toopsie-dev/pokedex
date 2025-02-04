import { usePokedexContext } from "../context/pokedex";

export default function CapturedPokemon() {
  const { capturedPokemon } = usePokedexContext();

  const capturedList = Object.keys(capturedPokemon);

  return (
    <div className="p-4">
      <h2 className="text-2xl font-bold mb-4">Captured Pokémon</h2>

      {capturedList.length === 0 ? (
        <p>No Pokémon captured yet!</p>
      ) : (
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
          {capturedList.map((name) => (
            <div key={name} className="p-4 border rounded-md text-center">
              <p className="capitalize font-semibold">{name}</p>
              <p className="text-sm text-green-600">
                Nickname: {capturedPokemon[name].nickname} <br />
                Date: {capturedPokemon[name].date}
              </p>
            </div>
          ))}
        </div>
      )}
    </div>
  );
}
