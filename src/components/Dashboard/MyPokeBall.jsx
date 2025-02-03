const MyPokeBall = () => {
  const currentBall = [1, 2, 3, 4, 5, 6];
  const imgStyle = {
    display: "flex",
    width: "60px",
    height: "60px",
    margin: "20px auto", // 간격 하드코딩 수정하기
  };
  const divStyle = {
    backgroundColor: "white",
    width: "100px",
    height: "100px",
    border: "2px dashed rgb(201, 201, 201)",
    borderRadius: "10px",
    margin: "0 50px",
  };

  const containerStyle = {
    display: "flex",
    justifyContent: "center",
  };
  return (
    <div style={containerStyle}>
      {currentBall.map((ball) => {
        return (
          <div key={ball} style={divStyle}>
            <img style={imgStyle} src="src/assets/Poke_Ball.webp" alt="" />
          </div>
        );
      })}
    </div>
  );
};

export default MyPokeBall;
