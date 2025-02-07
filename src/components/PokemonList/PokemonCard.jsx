import { useNavigate } from "react-router-dom";
import AddButton from "./AddButton";
import S from "./PokemonCard.style";

export const PokemonCard = ({ card, type }) => {
  const navigate = useNavigate();

  return (
    <S.CardContainer
      onClick={(e) => {
        if (!e.target.className.includes("btn")) {
          navigate(`/dex/value?id=${card.id}`);
        }
      }}
    >
      <S.CardImg src={card.img_url} alt="" />
      <S.CardInformation size="15px" weight="bold">
        {card.korean_name}
      </S.CardInformation>
      <S.CardInformation size="12px" color="grey">
        No. {card.id}
      </S.CardInformation>
      <AddButton type={type} card={card} />
    </S.CardContainer>
  );
};
