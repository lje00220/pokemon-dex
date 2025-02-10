import styled from "styled-components";

/**
 * 포켓몬 리스트 스타일
 */

const S = {};

S.ListContainer = styled.div`
  width: 85%;
  height: auto;
  margin: 40px auto 0;
  background-color: #f4f9ff;
  padding: 30px 0;
  border-radius: 10px;
  overflow: hidden;
  display: grid;
  place-items: center;
  align-items: center;
  justify-content: center;
  grid-template-columns: repeat(auto-fit, minmax(150px, auto));
  border: 10px solid #89b5f2;
  grid-gap: 20px;
`;

export default S;
