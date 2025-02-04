import { useState } from "react";
import { Dashboard } from "../components/Dashboard/Dashboard";
import { PokemonList } from "../components/PokemonList/PokemonList";

const Dex = () => {
  const [selected, setSelected] = useState([]);
  return (
    <div>
      <Dashboard selected={selected} setSelected={setSelected} />
      <PokemonList selected={selected} setSelected={setSelected} />
    </div>
  );
};

export default Dex;
