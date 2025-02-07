import styled from "styled-components";

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

S.GoDexBtn = styled.button`
  width: 100px;
  height: 40px;
  border: none;
  font-size: 15px;
  margin-top: 30px;
  border-radius: 10px;
  background-color: #f1f1f1;
`;

export default S;
