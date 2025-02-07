import styled from "styled-components";

const S = {};

S.CardContainer = styled.div`
  width: 150px;
  height: 230px;
  background-color: white;
  border-radius: 10px;
  box-shadow: 0px 3px 3px #d8d8d8;
  text-align: center;
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
`;

export default S;
