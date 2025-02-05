import { useLocation, useNavigate } from "react-router-dom";
import MOCK_DATA from "../PokemonList/mockData";
import styled from "styled-components";

const PokemonDetail = () => {
  const location = useLocation();
  const queryParams = new URLSearchParams(location.search);
  const targetId = queryParams.get("id");
  const navigate = useNavigate();

  const targetPokemon = MOCK_DATA.find((card) => card.id == targetId);

  return (
    <ContainerStyle>
      <ImgStyle src={targetPokemon.img_url} alt="" />
      <NameStyle>{targetPokemon.korean_name}</NameStyle>
      <PStyle>타입: {targetPokemon.types}</PStyle>
      <PStyle>{targetPokemon.description}</PStyle>
      <BtnStyle onClick={() => navigate("/dex")}>뒤로 가기</BtnStyle>
    </ContainerStyle>
  );
};

const PStyle = styled.p`
  margin-top: 30px;
`;

const ImgStyle = styled.img`
  width: 200px;
  height: 200px;
`;

const ContainerStyle = styled.div`
  width: 60%;
  height: 100vh;
  margin: 0 auto;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
`;

const NameStyle = styled.div`
  color: red;
  font-size: 20px;
  font-weight: bold;
  margin-top: 20px;
`;

const BtnStyle = styled.button`
  width: 100px;
  height: 40px;
  border: none;
  font-size: 15px;
  margin-top: 30px;
  border-radius: 10px;
  background-color: #f1f1f1;
`;

export default PokemonDetail;
