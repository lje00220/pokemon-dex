import styled from "styled-components";

const S = {};

S.ListContainer = styled.div`
  width: 85%;
  height: auto;
  margin: 40px auto 0;
  background-color: rgb(248, 248, 248);
  padding: 30px 0;
  border-radius: 10px;
  overflow: hidden;
  display: grid;
  place-items: center;
  align-items: center;
  justify-content: center;
  grid-template-columns: repeat(auto-fit, minmax(150px, auto));
  grid-gap: 20px;
`;

export default S;
