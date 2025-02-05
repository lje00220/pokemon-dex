const AddButton = ({ selected, setSelected, id, img, name }) => {
  const buttonStyle = {
    backgroundColor: "red",
    color: "white",
    border: "none",
    width: "40px",
    height: "25px",
    borderRadius: "7px",
    margin: "10px 0",
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
      setSelected([...selected, { img, id, name }]);
    }
  };
  return (
    <button className="btn" style={buttonStyle} value={id} onClick={addHandler}>
      추가
    </button>
  );
};

export default AddButton;
