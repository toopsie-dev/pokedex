import { usePokedexContext } from "../../context/pokedex";

export const Pagination = () => {
  // Fetch context properties with custom context provider
  const { limit, offset, setOffset } = usePokedexContext();

  return (
    <div className="flex justify-between mt-4">
      <button
        className="p-2 bg-gray-500 text-white rounded-md disabled:opacity-50"
        onClick={() => setOffset(Math.max(0, offset - limit))}
        disabled={offset === 0}
      >
        Previous
      </button>
      <button
        className="p-2  bg-teal-900 text-white rounded-md"
        onClick={() => setOffset(offset + limit)}
      >
        Next
      </button>
    </div>
  );
};
