import MyPokeBall from "./MyPokeBall";
import S from "./Dashboard.style";

export const Dashboard = () => {
  return (
    <S.DashboardContainer>
      <S.DashboardTitle>나만의 포켓몬</S.DashboardTitle>
      <MyPokeBall />
    </S.DashboardContainer>
  );
};
