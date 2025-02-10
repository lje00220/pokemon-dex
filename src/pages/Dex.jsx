import { Dashboard } from "../components/Dashboard/Dashboard";
import { PokemonList } from "../components/PokemonList/PokemonList";

/**
 * 대시보드와 포켓몬 리스트를 출력하는 컴포넌트 (라우터 역할)
 *
 * @returns {JSX.Element}
 */

const Dex = () => {
  return (
    <>
      <Dashboard />
      <PokemonList />
    </>
  );
};

export default Dex;
