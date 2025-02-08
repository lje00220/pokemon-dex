import styled from "styled-components";
import { Dashboard } from "../components/Dashboard/Dashboard";
import { PokemonList } from "../components/PokemonList/PokemonList";

const Dex = () => {
  return (
    <Container>
      <Dashboard />
      <PokemonList />
    </Container>
  );
};

const Container = styled.div`
  background: #f0f4f8;
  margin: 0;
  padding: 0;
`;
export default Dex;
