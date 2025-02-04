import MyPokeBall from "./MyPokeBall";

export const Dashboard = ({ selected, setSelected }) => {
  const divStyle = {
    display: "flex",
    flexDirection: "column",
    width: "85%",
    height: "auto",
    backgroundColor: "rgb(248, 248, 248)",
    borderRadius: "10px",
    margin: "0 auto",
    overflow: "hidden",
    padding: "20px 0",
  };

  const h2Style = {
    margin: "30px auto",
    color: "red",
  };

  return (
    <div style={divStyle}>
      <h2 style={h2Style}>나만의 포켓몬</h2>
      <MyPokeBall selected={selected} setSelected={setSelected} />
    </div>
  );
};
