import { useNavigate, useParams } from "react-router-dom";
import MOCK_DATA from "../PokemonList/mockData";

const PokemonDetail = () => {
  const params = useParams();
  const navigate = useNavigate();

  const targetPokemon = MOCK_DATA.find((card) => card.id == params.id);

  const containerStyle = {
    width: "60%",
    height: "100vh",
    margin: "0 auto",
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    justifyContent: "center",
  };

  const imgStyle = {
    width: "200px",
    height: "200px",
  };

  const nameStyle = {
    color: "red",
    fontSize: "20px",
    fontWeight: "bold",
    marginTop: "20px",
  };

  const pStyle = {
    marginTop: "30px",
  };

  const btnStyle = {
    width: "100px",
    height: "40px",
    border: "none",
    fontSize: "15px",
    marginTop: "30px",
    borderRadius: "10px",
    backgroundColor: "#f1f1f1",
  };

  return (
    <div style={containerStyle}>
      <img src={targetPokemon.img_url} alt="" style={imgStyle} />
      <div style={nameStyle}>{targetPokemon.korean_name}</div>
      <p style={pStyle}>타입: {targetPokemon.types}</p>
      <p style={pStyle}>{targetPokemon.description}</p>
      <button style={btnStyle} onClick={() => navigate("/dex")}>
        뒤로 가기
      </button>
    </div>
  );
};

export default PokemonDetail;
