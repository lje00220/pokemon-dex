import styled from "styled-components";
import MyPokeBall from "./MyPokeBall";

export const Dashboard = () => {
  return (
    <DivStyle>
      <H2Style>나만의 포켓몬</H2Style>
      <MyPokeBall />
    </DivStyle>
  );
};

const DivStyle = styled.div`
  display: flex;
  flex-direction: column;
  width: 85%;
  height: auto;
  background-color: rgb(248, 248, 248);
  border-radius: 10px;
  margin: 0 auto;
  overflow: visible;
  flex-grow: 1;
  padding: 20px 0;
  transition: height 0.3s ease-in-out;
`;

const H2Style = styled.h2`
  margin: 30px auto;
  color: red;
`;
