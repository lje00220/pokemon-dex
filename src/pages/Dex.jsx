import { useState } from "react";
import { Dashboard } from "../components/Dashboard/Dashboard";
import { PokemonList } from "../components/PokemonList/PokemonList";
import { useEffect } from "react";

const Dex = () => {
  const [selected, setSelected] = useState(
    JSON.parse(localStorage.getItem("pokemon")) || []
  );
  useEffect(() => {
    localStorage.setItem("pokemon", JSON.stringify(selected));
  }, [selected]);
  return (
    <div>
      <Dashboard selected={selected} setSelected={setSelected} />
      <PokemonList selected={selected} setSelected={setSelected} />
    </div>
  );
};

export default Dex;
