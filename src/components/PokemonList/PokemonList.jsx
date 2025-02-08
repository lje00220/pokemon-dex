import { PokemonCard } from "../common/Card/PokemonCard";
import MOCK_DATA from "../../assets/mockData";
import S from "./PokemonList.style";

export const PokemonList = () => {
  return (
    <S.ListContainer>
      {MOCK_DATA.map((card) => {
        return <PokemonCard key={card.id} card={card} />;
      })}
    </S.ListContainer>
  );
};
