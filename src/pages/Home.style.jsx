import styled from "styled-components";

/**
 * 홈 스타일
 */

const S = {};

S.HomeContainer = styled.div`
  height: 100vh;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;

S.HomeImg = styled.img`
  width: 40%;
`;

S.GoDexFromHome = styled.button`
  font-family: "DungGeunMo";
  background-color: #f88379;
  border: none;
  width: 210px;
  height: 40px;
  color: #fbfbfb;
  border-radius: 5px;
  font-size: 18px;
  margin-top: 30px;
`;

export default S;
