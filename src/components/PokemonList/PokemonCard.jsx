import { useNavigate } from "react-router-dom";
import Button from "./Button";
import S from "./PokemonCard.style";

export const PokemonCard = ({ card }) => {
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
      <S.CardInformation size="16px" weight="bold">
        {card.korean_name}
      </S.CardInformation>
      <S.CardInformation size="15px" color="grey">
        No. {card.id}
      </S.CardInformation>
      <Button card={card} />
    </S.CardContainer>
  );
};
