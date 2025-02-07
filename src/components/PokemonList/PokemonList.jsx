import styled from "styled-components";
import { PokemonCard } from "./PokemonCard";
import MOCK_DATA from "./mockData";

export const PokemonList = () => {
  return (
    <Container>
      <ContainerStyle>
        {MOCK_DATA.map((card) => {
          return <PokemonCard key={card.id} card={card} type="added" />;
        })}
      </ContainerStyle>
    </Container>
  );
};

const ContainerStyle = styled.div`
  display: grid;
  place-items: center;
  align-items: center;
  justify-content: center;
  grid-template-columns: repeat(auto-fit, minmax(150px, auto));
  grid-gap: 20px;
`;

const Container = styled.div`
  width: 85%;
  height: auto;
  margin: 40px auto 0;
  background-color: rgb(248, 248, 248);
  padding: 30px 0;
  border-radius: 10px;
  overflow: hidden;
`;
