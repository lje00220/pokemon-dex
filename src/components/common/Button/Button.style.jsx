import styled from "styled-components";

/**
 * 버튼 스타일
 */
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
  transition: all 0.2s ease;
  &:hover {
    transform: scale(1.1);
  }
`;

export default S;
