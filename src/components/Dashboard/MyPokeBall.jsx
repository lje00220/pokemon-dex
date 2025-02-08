import { PokemonCard } from "../PokemonList/PokemonCard";
import { useSelector } from "react-redux";
import S from "./MyPokeBall.style";

const MyPokeBall = () => {
  const selected = useSelector((state) => state.pokemon);
  const myBall = [
    ...selected.pokemon,
    ...Array(6 - selected.pokemon.length).fill("ball"),
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
