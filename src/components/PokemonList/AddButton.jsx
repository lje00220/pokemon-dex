import { useDispatch } from "react-redux";
import { addPokemon, deletePokemon } from "../../redux/slices/pokemon";
import S from "./Button.style";

const AddButton = ({ card, type }) => {
  const dispatch = useDispatch();

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
      onClick={type === "added" ? addHandler : removeHandler}
    >
      {type === "added" ? "추가" : "삭제"}
    </S.Button>
  );
};

export default AddButton;
