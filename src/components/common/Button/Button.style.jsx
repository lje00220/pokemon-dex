import styled from "styled-components";

const S = {};

S.Button = styled.button`
  font-family: "DungGeunMo";
  background-color: ${(props) => props.color};
  color: #fbfbfb;
  border: none;
  width: 40px;
  height: 25px;
  border-radius: 7px;
  margin: 5px 0;
`;

export default S;
