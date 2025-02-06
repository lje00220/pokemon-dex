import styled from "styled-components";

const AddButton = ({
  selected,
  setSelected,
  id,
  img_url,
  korean_name,
  type,
}) => {
  const removeHandler = (e) => {
    const targetID = e.target.value;
    const newArr = selected.filter((x) => x.id != targetID);
    setSelected([...newArr]);
  };

  const addHandler = () => {
    let isInclude = false;
    if (selected.length === 6) {
      alert("6개 초과");
      return;
    }

    // 만약 이미 있다면 alert
    selected.forEach((x) => {
      if (x.id === id) {
        isInclude = true;
      }
    });

    if (isInclude) {
      alert("이미 소유한 포켓몬입니다.");
    } else {
      setSelected([...selected, { img_url, id, korean_name }]);
    }
  };
  return (
    <ButtonStyle
      className="btn"
      value={id}
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
