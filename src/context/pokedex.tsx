/* eslint-disable react-refresh/only-export-components */
import { useQuery } from "@tanstack/react-query";
import axios from "axios";
import { createContext, useContext, useEffect, useState } from "react";
import { AllPokemon } from "../components/all-pokemon";
import { PokedexPropType } from "../types";

// API Resource
const API_URL = "https://pokeapi.co/api/v2/pokemon";

// Fetching data using axios response
const fetchPokemonList = async (limit: number, offset: number) => {
  const response = await axios.get(
    `${API_URL}?limit=${limit}&offset=${offset}`
  );
  return response.data.results;
};

type PokedexContextType = PokedexPropType;

// Created a context with default values
const PokedexContext = createContext<PokedexContextType>({
  pokemonList: [],
  isLoading: true,
  error: null,
  limit: 20,
  searchTerm: "",
  setSearchTerm: () => {},
  isGridView: false,
  setIsGridView: () => {},
  offset: 0,
  setOffset: () => {},
  capturedPokemon: {},
  selectedPokemon: "",
  handleCapture: () => {},
  setCapturedPokemon: () => {},
});

// Represents all elements  that can render
export type PokedexContextProps = {
  children: React.ReactNode;
};

export const PokedexProvider = ({ children }: PokedexContextProps) => {
  const [limit] = useState(32);
  const [offset, setOffset] = useState<number>(0);
  const [searchTerm, setSearchTerm] = useState("");
  const [isGridView, setIsGridView] = useState(true);
  const [selectedPokemon, setSelectedPokemon] = useState("");
  const [capturedPokemon, setCapturedPokemon] = useState(() => {
    return JSON.parse(localStorage.getItem("capturedPokemon") || "{}");
  });

  // Fetching API response to store in pokemonlist data
  const {
    data: pokemonList,
    isLoading,
    error,
  } = useQuery({
    queryKey: ["pokemonList", limit, offset],
    queryFn: () => fetchPokemonList(limit, offset),
  });

  // Render every captured data changes
  useEffect(() => {
    localStorage.setItem("capturedPokemon", JSON.stringify(capturedPokemon));
    <AllPokemon />;
  }, [capturedPokemon]);

  // Render every captured data changes
  useEffect(() => {
    localStorage.setItem("selectedPokemon", JSON.stringify(selectedPokemon));
  }, [selectedPokemon]);

  const handleCapture = (_name: string) => {
    setSelectedPokemon(_name);
  };

  return (
    <PokedexContext.Provider
      value={{
        pokemonList,
        isLoading,
        error,
        limit,
        searchTerm,
        setSearchTerm,
        isGridView,
        setIsGridView,
        offset,
        setOffset,
        capturedPokemon,
        selectedPokemon,
        handleCapture,
        setCapturedPokemon,
      }}
    >
      {children}
    </PokedexContext.Provider>
  );
};

// Create a custom Context for Pokedex
export const usePokedexContext = () => {
  return useContext(PokedexContext);
};
