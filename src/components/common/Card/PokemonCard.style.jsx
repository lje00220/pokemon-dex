import styled from "styled-components";

/**
 * 포켓몬 카드 스타일
 */

const S = {};

S.CardContainer = styled.div`
  width: 150px;
  height: 230px;
  background-color: #ffffff;
  border: 2px solid #64b5f6;
  border-radius: 10px;
  box-shadow: 0px 4px 8px rgba(0, 0, 0, 0.1);
  text-align: center;
  transition: transform 0.2s cubic-bezier(0.25, 0.8, 0.25, 1),
    background-color 0.2s ease;
  &:hover {
    transform: scale(1.05);
    box-shadow: 0px 10px 15px rgba(0, 0, 0, 0.2);
  }
`;

S.CardImg = styled.img`
  width: 60%;
  height: 40%;
  margin: 10px 0;
`;

S.CardInformation = styled.p`
  font-size: ${(props) => props.size};
  color: ${(props) => (props.color ? props.color : (props.color = "black"))};
  font-weight: ${(props) =>
    props.weight ? props.weight : (props.weight = "standard")};
  margin: 10px 0;
`;

export default S;
