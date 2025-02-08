import styled from "styled-components";

const S = {};

S.DashboardContainer = styled.div`
  display: flex;
  flex-direction: column;
  width: 85%;
  height: auto;
  background: #eff6fd;
  border-radius: 10px;
  border: 10px solid #89b5f2;
  margin: 30px auto;
  overflow: visible;
  flex-grow: 1;
  padding: 20px 0;
  transition: height 0.3s ease-in-out;
`;

S.DashboardTitle = styled.h2`
  font-size: 35px;
  margin: 30px auto;
  color: #3d1830;
`;

export default S;
