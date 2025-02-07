import styled from "styled-components";

const S = {};

S.PokeballContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: flex-start;
  flex-wrap: wrap;
  gap: 30px;
  height: auto;
`;

S.PokeballWrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: flex-start;
  width: 150px;
  height: auto;
`;

S.PokeballDiv = styled.div`
  background-color: white;
  width: 120px;
  height: 120px;
  border: 2px dashed rgb(201, 201, 201);
  border-radius: 10px;
  display: flex;
  justify-content: center;
  align-items: center;
`;

S.PokeballImg = styled.img`
  width: 60px;
  height: 60px;
  object-fit: contain;
`;

export default S;
