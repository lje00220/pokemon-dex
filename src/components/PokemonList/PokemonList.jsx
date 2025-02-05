import styled from "styled-components";
import { PokemonCard } from "./PokemonCard";

export const PokemonList = ({ selected, setSelected }) => {
  return (
    <Container>
      <PokemonCard selected={selected} setSelected={setSelected} />
    </Container>
  );
};

const Container = styled.div`
  width: 85%;
  height: auto;
  margin: 40px auto 0;
  background-color: rgb(248, 248, 248);
  border-radius: 10px;
  overflow: hidden;
`;
