import { usePokedexContext } from "../context/pokedex";

export const PokedexComponent = () => {
  const {
    pokemonList,
    isLoading,
    error,
    searchTerm,
    setSearchTerm,
    isGridView,
    setIsGridView,
    offset,
    capturedPokemon,
  } = usePokedexContext();

  // Checked API response
  if (isLoading) return <p>Loading...</p>;
  if (error) return <p>Error loading Pokemon.</p>;

  // Filtered Pokemon list based on search bar result
  const filteredPokemon =
    pokemonList?.filter((pokemon: { name: string }) =>
      pokemon.name.toLowerCase().includes(searchTerm.toLowerCase())
    ) || [];

  return (
    <div className="app max-w-full flex justify-center">
      <div className="p-4 max-w-[800px] w-full flex flex-col">
        <div className="flex justify-between mb-4">
          <input
            type="text"
            placeholder="Search Pokemon"
            className="p-2 border rounded-md"
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
          />
          <button
            className="p-2 bg-blue-500 text-white rounded-md"
            onClick={() => setIsGridView(!isGridView)}
          >
            Toggle {isGridView ? "List" : "Grid"} View
          </button>
          {/* <button
            className="p-2 bg-yellow-500 text-white rounded-md"
            onClick={() => setTheme(theme === "light" ? "dark" : "light")}
          >
            Toggle Theme
          </button> */}
        </div>
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
                key={index}
                className={`p-4 border rounded-md ${
                  isGridView ? "text-center" : "flex items-center space-x-4"
                }`}
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
                    <button className="mt-2 p-1 bg-red-500 text-white rounded-md">
                      Tag as Captured
                    </button>
                  )}
                </div>
              </div>
            )
          )}
        </div>
        {/* <div className="flex justify-between mt-4">
        <button
          className="p-2 bg-gray-500 text-white rounded-md disabled:opacity-50"
          onClick={() => setOffset((prev: number) => Math.max(0, prev - limit))}
          disabled={offset === 0}
        >
          Previous
        </button>
        <button
          className="p-2 bg-green-500 text-white rounded-md"
          onClick={() => setOffset((prev: unknown) => prev + limit)}
        >
          Next
        </button>
      </div> */}
      </div>
    </div>
  );
};
