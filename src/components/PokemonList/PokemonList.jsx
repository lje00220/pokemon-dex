import { PokemonCard } from "../common/Card/PokemonCard";
import MOCK_DATA from "../../assets/mockData";
import S from "./PokemonList.style";

/**
 * 포켓몬 리스트 출력 컴포넌트
 *
 * @returns {JSX.Element}
 */

export const PokemonList = () => {
  return (
    <S.ListContainer>
      {MOCK_DATA.map((card) => {
        return <PokemonCard key={card.id} card={card} />;
      })}
    </S.ListContainer>
  );
};
