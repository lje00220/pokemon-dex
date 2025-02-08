import { useLocation, useNavigate } from "react-router-dom";
import MOCK_DATA from "../../assets/mockData";
import Button from "../common/Button/Button";
import S from "./PokemonDetail.style";

const PokemonDetail = () => {
  const location = useLocation();
  const queryParams = new URLSearchParams(location.search);
  const targetId = queryParams.get("id");
  const navigator = useNavigate();

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
      <S.GoDexFromDetail onClick={() => navigator("/dex")}>
        뒤로 가기
      </S.GoDexFromDetail>
    </S.DetailContainer>
  );
};

export default PokemonDetail;
