import { useDispatch, useSelector } from "react-redux";
import { addPokemon, deletePokemon } from "../../../redux/slices/pokemon";
import S from "./Button.style";

const AddButton = ({ card }) => {
  const dispatch = useDispatch();
  const selectedPokemon = useSelector((state) => state.pokemon);

  let btnType = "added";
  selectedPokemon.pokemon.forEach((x) => {
    if (x.id == card.id) {
      btnType = "deleted";
    }
  });

  const removeHandler = () => {
    dispatch(deletePokemon(card.id));
  };

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

export default AddButton;
