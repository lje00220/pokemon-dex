import styled from "styled-components";
import { PokemonCard } from "../PokemonList/PokemonCard";
import { useSelector } from "react-redux";

const MyPokeBall = () => {
  const selected = useSelector((state) => state.pokemon);
  const myBall = [
    ...selected.pokemon,
    ...Array(6 - selected.pokemon.length).fill("ball"),
  ];

  return (
    <ContainerStyle>
      {myBall.map((ball) => (
        <WrapperStyle key={crypto.randomUUID()}>
          {ball === "ball" ? (
            <DivStyle>
              <BallStyle src="src/assets/Poke_Ball.webp" alt="" />
            </DivStyle>
          ) : (
            <PokemonCard card={ball} btn="deleted" />
          )}
        </WrapperStyle>
      ))}
    </ContainerStyle>
  );
};

const WrapperStyle = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: flex-start;
  width: 150px;
  height: auto;
`;

const BallStyle = styled.img`
  width: 60px;
  height: 60px;
  object-fit: contain;
`;
const DivStyle = styled.div`
  background-color: white;
  width: 120px;
  height: 120px;
  border: 2px dashed rgb(201, 201, 201);
  border-radius: 10px;
  display: flex;
  justify-content: center;
  align-items: center;
`;

const ContainerStyle = styled.div`
  display: flex;
  justify-content: center;
  align-items: flex-start;
  flex-wrap: wrap;
  gap: 30px;
  height: auto;
`;

export default MyPokeBall;
