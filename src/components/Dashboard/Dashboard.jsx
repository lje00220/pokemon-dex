import MyPokeBall from "./MyPokeBall";
import S from "./Dashboard.style";

/**
 * 선택한 포켓몬 카드를 감싸고 있는 대시보드 컨테이너
 *
 * @returns {JSX.Element}
 */

export const Dashboard = () => {
  return (
    <S.DashboardContainer>
      <S.DashboardTitle>나만의 포켓몬</S.DashboardTitle>
      <MyPokeBall />
    </S.DashboardContainer>
  );
};
