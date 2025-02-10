import { PokemonCard } from "../common/Card/PokemonCard";
import { useSelector } from "react-redux";
import S from "./MyPokeBall.style";
import ballImg from "../../assets/images/Poke_Ball.webp";

/**
 * 대시보드의 포켓볼, 포켓몬 카드를 출력하는 컴포넌트
 *
 * @returns {JSX.Element}
 */

const MyPokeBall = () => {
  const selectedPokemon = useSelector((state) => state.pokemon);

  // 길이가 6인 배열로 만들어주기(선택한 포켓몬이 6개 이하면 나머지는 포켓볼로 채우기)
  const myBall = [
    ...selectedPokemon.pokemon,
    ...Array(6 - selectedPokemon.pokemon.length).fill("ball"),
  ];

  return (
    <S.PokeballContainer>
      {/* "ball" -> 포켓볼 이미지 출력 / 아니면 포켓몬 카드 출력 */}
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
