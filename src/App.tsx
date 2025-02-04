import { BrowserRouter as Router } from "react-router-dom";
import { PokedexProvider } from "./context/pokedex";
import AppRoutes from "./routes";

const App = () => {
  return (
    <>
      <PokedexProvider>
        <Router>
          <AppRoutes />
        </Router>
      </PokedexProvider>
    </>
  );
};

export default App;
