import { useNavigate } from "react-router-dom";
import AddButton from "./AddButton";
import styled from "styled-components";

export const PokemonCard = ({ card, type }) => {
  const navigate = useNavigate();

  return (
    <CardStyle
      onClick={(e) => {
        if (!e.target.className.includes("btn")) {
          navigate(`/dex/value?id=${card.id}`);
        }
      }}
    >
      <ImgStyle src={card.img_url} alt="" />
      <NameStyle>{card.korean_name}</NameStyle>
      <PStyle>No. {card.id}</PStyle>
      <AddButton type={type} card={card} />
    </CardStyle>
  );
};

const CardStyle = styled.div`
  width: 150px;
  height: 230px;
  background-color: white;
  border-radius: 10px;
  box-shadow: 0px 3px 3px #d8d8d8;
  text-align: center;
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
