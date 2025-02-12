import styled from "styled-components";

/**
 * 포켓몬 상세페이지 스타일
 */

const S = {};

S.DetailInformation = styled.p`
  margin-top: 30px;
  color: ${(props) => (props.color ? props.color : (props.color = "black"))};
  font-size: ${(props) => (props.size ? props.size : (props.size = "15px"))};
  font-weight: ${(props) =>
    props.weight ? props.weight : (props.weight = "standard")};
  margin-top: 20px;
`;

S.DetailImage = styled.img`
  width: 200px;
  height: 200px;
`;

S.DetailContainer = styled.div`
  width: 60%;
  height: 100vh;
  margin: 0 auto;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
`;

S.GoDexFromDetail = styled.button`
  font-family: "DungGeunMo";
  width: 100px;
  height: 40px;
  border: none;
  font-size: 15px;
  margin-top: 10px;
  border-radius: 10px;
  background-color: #dcdbdb;
  transition: all 0.2s ease;
  &:hover {
    transform: scale(1.1);
  }
`;

export default S;
