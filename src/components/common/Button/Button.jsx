import { useDispatch, useSelector } from "react-redux";
import { addPokemon, deletePokemon } from "../../../redux/slices/pokemon";
import S from "./Button.style";

/**
 * 추가, 삭제를 하는 버튼 컴포넌트
 *
 * @component
 * @param {Object} props
 * @param {Object} props.card - 목데이터의 각각 카드 객체
 * @returns {JSX.Element}
 */

const Button = ({ card }) => {
  const dispatch = useDispatch();
  const selectedPokemon = useSelector((state) => state.pokemon);

  // 버튼 타입 지정(만약 고른 포켓몬이라면 삭제 버튼으로)
  let btnType = "added";
  selectedPokemon.pokemon.forEach((x) => {
    if (x.id == card.id) {
      btnType = "deleted";
    }
  });

  // 포켓몬 삭제 핸들러 함수
  const removeHandler = () => {
    dispatch(deletePokemon(card.id));
  };

  // 포켓몬 추가 핸들러 함수
  const addHandler = () => {
    dispatch(addPokemon(card));
  };

  return (
    <S.Button
      className="btn"
      value={card}
      onClick={btnType === "added" ? addHandler : removeHandler}
      color={btnType === "added" ? "#42a5f5" : "#F88379"}
    >
      {btnType === "added" ? "추가" : "삭제"}
    </S.Button>
  );
};

export default Button;
