import { useNavigate } from "react-router-dom";
import AddButton from "./AddButton";
import MOCK_DATA from "./mockData";

export const PokemonCard = ({ selected, setSelected }) => {
  const cardStyle = {
    width: "150px",
    height: "230px",
    backgroundColor: "white",
    borderRadius: "10px",
    marginTop: "20px",
    boxShadow: "0px 3px 3px #d8d8d8",
    textAlign: "center",
  };

  const containerStyle = {
    display: "grid",
    placeItems: "center",
    alignItems: "center",
    justifyContent: "center",
    gridTemplateColumns: "repeat(auto-fit, minmax(150px, auto))",
    gridGap: "20px",
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

  const navigate = useNavigate();

  return (
    <div style={containerStyle}>
      {MOCK_DATA.map((card) => {
        return (
          <div
            key={card.id}
            style={cardStyle}
            onClick={(e) => {
              if (e.target.className !== "btn") {
                navigate(`/dex/value?id=${card.id}`);
              }
            }}
          >
            <img src={card.img_url} alt="" style={imgStyle} />
            <div style={nameStyle}>{card.korean_name}</div>
            <p style={pStyle}>No. {card.id}</p>
            <AddButton
              selected={selected}
              setSelected={setSelected}
              id={card.id}
              img={card.img_url}
              name={card.korean_name}
            />
          </div>
        );
      })}
    </div>
  );
};
