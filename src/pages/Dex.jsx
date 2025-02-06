import { useState, useEffect } from "react";
import { Dashboard } from "../components/Dashboard/Dashboard";
import { PokemonList } from "../components/PokemonList/PokemonList";
import { CardContext, PokemonContext } from "../context/PokemonContext";
import { ToastContainer, Bounce } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

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
      <ToastContainer
        position="top-center"
        autoClose={2000}
        hideProgressBar={false}
        newestOnTop={false}
        closeOnClick={false}
        rtl={false}
        pauseOnFocusLoss
        pauseOnHover
        theme="colored"
        transition={Bounce}
      />
    </PokemonContext.Provider>
  );
};

export default Dex;
