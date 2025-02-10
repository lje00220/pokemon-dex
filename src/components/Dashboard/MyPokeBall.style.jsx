import styled from "styled-components";

/**
 * 포켓볼 컨테이너 스타일
 */

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
  background-color: #fbfbfb;
  width: 120px;
  height: 120px;
  border: 2px dashed #64b5f6;
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
