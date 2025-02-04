import { FaMoon } from "react-icons/fa";
import { MdGridView } from "react-icons/md";
import { RiListView } from "react-icons/ri";
import { usePokedexContext } from "../../context/pokedex";

export const SearchToggleView = () => {
  const { searchTerm, setSearchTerm, setIsGridView } = usePokedexContext();

  return (
    <div className="flex justify-between gap-20 p-6 items-center">
      <input
        type="text"
        placeholder="Search Pokemon"
        className="p-2 border w-full rounded-md"
        value={searchTerm}
        onChange={(e) => setSearchTerm(e.target.value)}
      />

      {/* Toggle View Icons */}
      <div className="flex justify-center items-center gap-4">
        <RiListView size={30} onClick={() => setIsGridView(false)} />
        <MdGridView size={30} onClick={() => setIsGridView(true)} />
        <FaMoon size={30} />
      </div>
    </div>
  );
};
