import { PokemonCard } from "./PokemonCard";

export const PokemonList = ({ selected, setSelected }) => {
  const divStyle = {
    width: "85%",
    height: "auto",
    margin: "40px auto 0",
    backgroundColor: "rgb(248, 248, 248)",
    borderRadius: "10px",
    overflow: "hidden",
  };
  return (
    <div style={divStyle}>
      <PokemonCard selected={selected} setSelected={setSelected} />
    </div>
  );
};
