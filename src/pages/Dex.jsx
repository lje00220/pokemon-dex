import { useState } from "react";
import { Dashboard } from "../components/Dashboard/Dashboard";
import { PokemonList } from "../components/PokemonList/PokemonList";
import { useEffect } from "react";
import { CardContext, PokemonContext } from "../context/PokemonContext";

const Dex = () => {
  // 로컬스토리지 초기값
  const [selected, setSelected] = useState(
    JSON.parse(localStorage.getItem("pokemon")) || []
  );

  // 로컬스토리지
  useEffect(() => {
    localStorage.setItem("pokemon", JSON.stringify(selected));
  }, [selected]);

  return (
    <PokemonContext.Provider value={{ selected, setSelected }}>
      <CardContext.Provider>
        <Dashboard />
        <PokemonList />
      </CardContext.Provider>
    </PokemonContext.Provider>
  );
};

export default Dex;
