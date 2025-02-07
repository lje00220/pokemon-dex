import { Dashboard } from "../components/Dashboard/Dashboard";
import { PokemonList } from "../components/PokemonList/PokemonList";

const Dex = () => {
  // // 로컬스토리지 초기값
  // const [selected, setSelected] = useState(
  //   JSON.parse(localStorage.getItem("pokemon")) || []
  // );

  // // 로컬스토리지
  // useEffect(() => {
  //   localStorage.setItem("pokemon", JSON.stringify(selected));
  // }, [selected]);

  return (
    <>
      <Dashboard />
      <PokemonList />
    </>
  );
};

export default Dex;
