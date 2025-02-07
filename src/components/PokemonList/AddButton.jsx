import styled from "styled-components";
import { useDispatch } from "react-redux";
import { addPokemon, deletePokemon } from "../../redux/slices/pokemon";

const AddButton = ({ card, type }) => {
  const dispatch = useDispatch();

  const removeHandler = () => {
    dispatch(deletePokemon(card.id));
  };

  const addHandler = () => {
    dispatch(addPokemon(card));
  };
  return (
    <ButtonStyle
      className="btn"
      value={card}
      onClick={type === "added" ? addHandler : removeHandler}
    >
      {type === "added" ? "추가" : "삭제"}
    </ButtonStyle>
  );
};

const ButtonStyle = styled.button`
  background-color: red;
  color: white;
  border: none;
  width: 40px;
  height: 25px;
  border-radius: 7px;
  margin: 10px 0;
`;

export default AddButton;
