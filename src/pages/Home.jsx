import { useNavigate } from "react-router-dom";
import S from "./Home.style";

const Home = () => {
  const navigator = useNavigate();
  return (
    <S.HomeContainer>
      <S.HomeImg src="src/assets/International_Pokémon_logo.png" alt="" />
      <S.GoDexFromHome onClick={() => navigator("/dex")}>
        포켓몬 도감 시작하기
      </S.GoDexFromHome>
    </S.HomeContainer>
  );
};

export default Home;
