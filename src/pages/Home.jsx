import { useNavigate } from "react-router-dom";

const Home = () => {
  const navigate = useNavigate();
  const divStyle = {
    height: "100vh",
    display: "flex",
    flexDirection: "column",
    justifyContent: "center",
    alignItems: "center",
  };

  const imgStyle = {
    width: "40%",
  };

  const btnStyle = {
    backgroundColor: "red",
    border: "none",
    width: "190px",
    height: "40px",
    color: "white",
    borderRadius: "5px",
    fontSize: "18px",
    marginTop: "30px",
  };
  return (
    <div style={divStyle}>
      <img
        src="src/assets/International_Pokémon_logo.png"
        alt=""
        style={imgStyle}
      />
      <button
        onClick={() => {
          navigate("/dex");
        }}
        style={btnStyle}
      >
        포켓몬 도감 시작하기
      </button>
    </div>
  );
};

export default Home;
