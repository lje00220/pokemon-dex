import { PokemonCard } from "../common/Card/PokemonCard";
import { useSelector } from "react-redux";
import S from "./MyPokeBall.style";

const MyPokeBall = () => {
  const selectedPokemon = useSelector((state) => state.pokemon);
  const myBall = [
    ...selectedPokemon.pokemon,
    ...Array(6 - selectedPokemon.pokemon.length).fill("ball"),
  ];

  return (
    <S.PokeballContainer>
      {myBall.map((ball) => (
        <S.PokeballWrapper key={crypto.randomUUID()}>
          {ball === "ball" ? (
            <S.PokeballDiv>
              <S.PokeballImg src="src/assets/Poke_Ball.webp" alt="" />
            </S.PokeballDiv>
          ) : (
            <PokemonCard card={ball} />
          )}
        </S.PokeballWrapper>
      ))}
    </S.PokeballContainer>
  );
};

export default MyPokeBall;
