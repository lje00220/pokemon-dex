import { createSlice } from "@reduxjs/toolkit";
import { toast } from "react-toastify";

// 로컬스토리지 초기값
// const [selected, setSelected] = useState(
//   JSON.parse(localStorage.getItem("pokemon")) || []
// );

// // 로컬스토리지
// useEffect(() => {
//   localStorage.setItem("pokemon", JSON.stringify(selected));
// }, [selected]);

const pokemonSlice = createSlice({
  name: "pokemon",
  initialState: {
    pokemon: [],
  },
  reducers: {
    addPokemon: (state, action) => {
      let isInclude = false;
      if (state.pokemon.length === 6) {
        toast.error("포켓몬은 6개까지만 선택할 수 있어요.");
        return;
      }
      // 만약 이미 있다면 alert
      state.pokemon.forEach((x) => {
        if (x.id == action.payload.id) {
          isInclude = true;
        }
      });
      if (isInclude) {
        toast.error("이미 선택한 포켓몬입니다!");
        return;
      } else {
        toast.success("추가되었습니다!");
      }
      state.pokemon = [...state.pokemon, action.payload];
    },
    deletePokemon: (state, action) => {
      state.pokemon = state.pokemon.filter((x) => x.id !== action.payload);
    },
  },
});

export const { addPokemon, deletePokemon } = pokemonSlice.actions;
export default pokemonSlice.reducer;
