import { useLocation, useNavigate } from "react-router-dom";
import MOCK_DATA from "../../assets/mockData";
import Button from "../common/Button/Button";
import S from "./PokemonDetail.style";

/**
 * 포켓몬 상세페이지 컴포넌트
 *
 * @returns {JSX.Element}
 */

const PokemonDetail = () => {
  const location = useLocation();
  const queryParams = new URLSearchParams(location.search);
  const targetId = queryParams.get("id");
  const navigator = useNavigate();

  // 목데이터에서 현재 선택한 포켓몬과 id가 같은 포켓몬 가져오기
  const targetPokemon = MOCK_DATA.find((card) => card.id == targetId);

  return (
    <S.DetailContainer>
      <S.DetailImage src={targetPokemon.img_url} alt="" />
      <S.DetailInformation color="red" size="20px" weight="bold">
        {targetPokemon.korean_name}
      </S.DetailInformation>
      <S.DetailInformation>타입: {targetPokemon.types}</S.DetailInformation>
      <S.DetailInformation>{targetPokemon.description}</S.DetailInformation>
      <Button card={targetPokemon} />
      {/* 덱스 페이지로 이동하는 버튼 */}
      <S.GoDexFromDetail onClick={() => navigator("/dex")}>
        뒤로 가기
      </S.GoDexFromDetail>
    </S.DetailContainer>
  );
};

export default PokemonDetail;
