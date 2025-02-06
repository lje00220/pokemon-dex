import { useNavigate } from "react-router-dom";
import styled from "styled-components";

const Home = () => {
  const navigate = useNavigate();
  return (
    <DivStyle>
      <ImgStyle src="src/assets/International_Pokémon_logo.png" alt="" />
      <BtnStyle
        onClick={() => {
          navigate("/dex");
        }}
      >
        포켓몬 도감 시작하기
      </BtnStyle>
    </DivStyle>
  );
};

const DivStyle = styled.div`
  height: 100vh;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;

const ImgStyle = styled.img`
  width: 40%;
`;

const BtnStyle = styled.button`
  background-color: red;
  border: none;
  width: 190px;
  height: 40px;
  color: white;
  border-radius: 5px;
  font-size: 18px;
  margin-top: 30px;
`;

export default Home;
