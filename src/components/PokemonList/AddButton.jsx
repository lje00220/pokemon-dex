import { useContext } from "react";
import styled from "styled-components";
import { PokemonContext } from "../../context/PokemonContext";
import { toast } from "react-toastify";

const AddButton = ({ card, type }) => {
  const { selected, setSelected } = useContext(PokemonContext);
  const removeHandler = (e) => {
    const targetID = e.target.value;
    const newArr = selected.filter((x) => x.id != targetID);
    setSelected([...newArr]);
  };

  const addHandler = () => {
    let isInclude = false;
    if (selected.length === 6) {
      toast.error("포켓몬은 6개까지만 선택할 수 있어요.");
      return;
    }

    // 만약 이미 있다면 alert
    selected.forEach((x) => {
      if (x.id === card.id) {
        isInclude = true;
      }
    });

    if (isInclude) {
      toast.error("이미 선택한 포켓몬입니다!");
    } else {
      setSelected([
        ...selected,
        { img_url: card.img_url, id: card.id, korean_name: card.korean_name },
      ]);
    }
  };
  return (
    <ButtonStyle
      className="btn"
      value={card.id}
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
