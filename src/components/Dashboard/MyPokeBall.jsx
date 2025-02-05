import { useNavigate } from "react-router-dom";

const MyPokeBall = ({ selected, setSelected }) => {
  const ballStyle = {
    display: "flex",
    width: "60px",
    height: "60px",
    margin: "20px auto", // 간격 하드코딩 수정하기
  };
  const cardStyle = {
    width: "120px",
    height: "200px",
    backgroundColor: "white",
    borderRadius: "10px",
    margin: "20px auto",
    boxShadow: "0px 3px 3px #d8d8d8",
    textAlign: "center",
  };
  const divStyle = {
    backgroundColor: "white",
    width: "120px",
    height: "120px",
    border: "2px dashed rgb(201, 201, 201)",
    borderRadius: "10px",
    margin: "0 50px",
  };

  const pStyle = {
    fontSize: "13px",
    color: "grey",
  };

  const imgStyle = {
    width: "60%",
    height: "40%",
    margin: "10px 0",
  };

  const nameStyle = {
    fontSize: "15px",
    fontWeight: "bold",
    marginTop: "5px",
  };

  const containerStyle = {
    display: "flex",
    justifyContent: "center",
  };

  const myBall = [...selected, ...Array(6 - selected.length).fill(0)];

  const removeHandler = (e) => {
    const targetID = e.target.value;
    const newArr = selected.filter((x) => x.id != targetID);
    setSelected([...newArr]);
  };

  const navigate = useNavigate();
  return (
    <div style={containerStyle}>
      {myBall.map((ball) => {
        if (ball == 0) {
          return (
            <div key={crypto.randomUUID()} style={divStyle}>
              <img style={ballStyle} src="src/assets/Poke_Ball.webp" alt="" />
            </div>
          );
        } else {
          return (
            <div
              key={ball.id}
              style={cardStyle}
              onClick={(e) => {
                if (e.target.className !== "btn") {
                  navigate(`/dex/value?id=${ball.id}`);
                }
              }}
            >
              <img src={ball.img} alt="" style={imgStyle} />
              <div style={nameStyle}>{ball.name}</div>
              <p style={pStyle}>No. {ball.id}</p>
              <button className="btn" value={ball.id} onClick={removeHandler}>
                삭제
              </button>
            </div>
          );
        }
      })}
    </div>
  );
};

export default MyPokeBall;
