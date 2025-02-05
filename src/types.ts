export type PokedexPropType = {
  pokemonList?: { name: string; url: string }[];
  isLoading: boolean;
  error: unknown;
  searchTerm: string;
  setSearchTerm: (value: string) => void;
  isGridView: boolean;
  setIsGridView: (value: boolean) => void;
  offset: number;
  setOffset: (value: number) => void;
  selectedPokemon: string;
  handleCapture: (name: string) => void;
  capturedPokemon: { [key: string]: { date: string; nickname: string } };
  setCapturedPokemon: (value: object) => void;
};
