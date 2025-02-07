import styled from "styled-components";
import { PokemonCard } from "../PokemonList/PokemonCard";
import { useSelector } from "react-redux";

const MyPokeBall = () => {
  const selected = useSelector((state) => state.pokemon);
  // const myBall = [...selected, ...Array(6 - selected.length).fill(0)];

  return (
    <ContainerStyle>
      {selected.pokemon.map((ball) => {
        if (ball == 0) {
          return (
            <DivStyle key={crypto.randomUUID()}>
              <BallStyle src="src/assets/Poke_Ball.webp" alt="" />
            </DivStyle>
          );
        } else {
          return <PokemonCard key={ball.id} card={ball} btn="deleted" />;
        }
      })}
    </ContainerStyle>
  );
};

const BallStyle = styled.img`
  display: flex;
  width: 60px;
  height: 60px;
  margin: 20px auto; // 간격 하드코딩 수정하기
`;
const DivStyle = styled.div`
  background-color: white;
  width: 120px;
  height: 120px;
  border: 2px dashed rgb(201, 201, 201);
  border-radius: 10px;
  margin: 0 50px;
`;

const ContainerStyle = styled.div`
  display: flex;
  justify-content: center;
`;

export default MyPokeBall;

// const CardStyle = styled.div`
//   width: 120px;
//   height: 200px;
//   background-color: white;
//   border-radius: 10px;
//   margin: 20px auto;
//   box-shadow: 0px 3px 3px #d8d8d8;
//   text-align: center;
// `;
// const PStyle = styled.p`
//   font-size: 13px;
//   color: grey;
// `;

// const ImgStyle = styled.img`
//   width: 60%;
//   height: 40%;
//   margin: 10px 0;
// `;

// const NameStyle = styled.div`
//   font-size: 15px;
//   font-weight: bold;
//   margin-top: 5px;
// `;
