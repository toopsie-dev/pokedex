/* eslint-disable @typescript-eslint/no-unused-vars */
import { useEffect, useState } from "react";
import { FaMoon } from "react-icons/fa";
import { IoSunnyOutline } from "react-icons/io5";
import { MdGridView } from "react-icons/md";
import { RiListView } from "react-icons/ri";
import { usePokedexContext } from "../../context/pokedex";

export const SearchToggleView = () => {
  const { searchTerm, setSearchTerm, setIsGridView } = usePokedexContext();

  const [theme, setTheme] = useState(
    () => localStorage.getItem("theme") || "light"
  );

  useEffect(() => {
    document.documentElement.classList.toggle("dark", theme === "dark");
    localStorage.setItem("theme", theme);
  }, [theme]);

  return (
    <div className="flex justify-between gap-20 p-6 items-center">
      <input
        type="text"
        placeholder="Search Pokemon"
        className="p-2 border w-full rounded-md dark:border-white-500 dark:text-white dark:outline-white"
        value={searchTerm}
        onChange={(e) => setSearchTerm(e.target.value)}
      />

      {/* Toggle View Icons */}
      <div className="flex justify-center items-center gap-4">
        <RiListView
          size={30}
          fill={theme === "dark" ? "white" : "black"}
          onClick={() => setIsGridView(false)}
        />
        <MdGridView
          size={30}
          fill={theme === "dark" ? "white" : "black"}
          onClick={() => setIsGridView(true)}
        />
        {theme === "light" ? (
          <FaMoon size={30} color="black" onClick={() => setTheme("dark")} />
        ) : (
          <IoSunnyOutline
            size={30}
            color="white"
            onClick={() => setTheme("light")}
          />
        )}
      </div>
    </div>
  );
};
