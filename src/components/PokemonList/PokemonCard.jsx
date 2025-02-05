import { useNavigate } from "react-router-dom";
import AddButton from "./AddButton";
import MOCK_DATA from "./mockData";
import styled from "styled-components";

export const PokemonCard = ({ selected, setSelected }) => {
  const navigate = useNavigate();

  return (
    <ContainerStyle>
      {MOCK_DATA.map((card) => {
        return (
          <CardStyle
            key={card.id}
            onClick={(e) => {
              if (e.target.className !== "btn") {
                navigate(`/dex/value?id=${card.id}`);
              }
            }}
          >
            <ImgStyle src={card.img_url} alt="" />
            <NameStyle>{card.korean_name}</NameStyle>
            <PStyle>No. {card.id}</PStyle>
            <AddButton
              selected={selected}
              setSelected={setSelected}
              id={card.id}
              img={card.img_url}
              name={card.korean_name}
            />
          </CardStyle>
        );
      })}
    </ContainerStyle>
  );
};

const CardStyle = styled.div`
  width: 150px;
  height: 230px;
  background-color: white;
  border-radius: 10px;
  margin-top: 20px;
  box-shadow: 0px 3px 3px #d8d8d8;
  text-align: center;
`;

const ContainerStyle = styled.div`
  display: grid;
  place-items: center;
  align-items: center;
  justify-content: center;
  grid-template-columns: repeat(auto-fit, minmax(150px, auto));
  grid-gap: 20px;
`;

const PStyle = styled.p`
  font-size: 13px;
  color: grey;
`;

const ImgStyle = styled.img`
  width: 60%;
  height: 40%;
  margin: 10px 0;
`;

const NameStyle = styled.div`
  font-size: 15px;
  font-weight: bold;
  margin-top: 5px;
`;
