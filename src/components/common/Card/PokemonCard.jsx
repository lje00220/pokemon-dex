import { useNavigate } from "react-router-dom";
import Button from "../Button/Button";
import S from "./PokemonCard.style";

/**
 * 포켓몬 카드를 출력하는 컴포넌트
 *
 * @component
 * @param {Object} props
 * @param {Object} props.card - 목데이터의 각각 카드 객체
 * @returns {JSX.Element}
 */

export const PokemonCard = ({ card }) => {
  const navigate = useNavigate();

  return (
    <S.CardContainer
      onClick={(e) => {
        if (!e.target.className.includes("btn")) {
          // 카드 div에서 버튼 외의 부분 클릭 시 상세정보 페이지로 이동
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
