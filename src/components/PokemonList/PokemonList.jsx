import { PokemonCard } from "./PokemonCard";
import MOCK_DATA from "./mockData";
import S from "./PokemonList.style";

export const PokemonList = () => {
  return (
    <S.ListContainer>
      {MOCK_DATA.map((card) => {
        return <PokemonCard key={card.id} card={card} type="added" />;
      })}
    </S.ListContainer>
  );
};
