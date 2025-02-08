import { PokemonCard } from "../common/Card/PokemonCard";
import { useSelector } from "react-redux";
import S from "./MyPokeBall.style";
import ballImg from "../../assets/images/Poke_Ball.webp";

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
              <S.PokeballImg src={ballImg} alt="" />
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
