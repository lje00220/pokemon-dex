import { useNavigate } from "react-router-dom";
import S from "./Home.style";
import logoImg from "../assets/images/logo.png";

/**
 * Home을 출력하는 컴포넌트
 * - 버튼 클릭 시 Dex 페이지로 이동
 *
 * @returns {JSX.Element}
 */

const Home = () => {
  const navigator = useNavigate();
  return (
    <S.HomeContainer>
      <S.HomeImg src={logoImg} alt="" />
      <S.GoDexFromHome onClick={() => navigator("/dex")}>
        포켓몬 도감 시작하기
      </S.GoDexFromHome>
    </S.HomeContainer>
  );
};

export default Home;
