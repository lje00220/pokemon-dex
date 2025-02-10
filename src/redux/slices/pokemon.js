import { createSlice } from "@reduxjs/toolkit";
import { toast } from "react-toastify";

/**
 * 포켓몬 관련 상태 관리를 위한 Redux Slice
 *
 */

const pokemonSlice = createSlice({
  name: "pokemon",
  initialState: {
    pokemon: [],
  },
  reducers: {
    // 포켓몬 추가 동작
    addPokemon: (state, action) => {
      // 선택한 포켓몬이 6개가 넘어갈 경우 에러 메세지 출력
      if (state.pokemon.length === 6) {
        toast.error("포켓몬은 6개까지만 선택할 수 있어요.");
        return;
      }
      toast.success("추가되었습니다!");
      state.pokemon = [...state.pokemon, action.payload];
    },
    // 포켓몬 삭제 동작
    deletePokemon: (state, action) => {
      state.pokemon = state.pokemon.filter((x) => x.id !== action.payload);
      toast.success("삭제되었습니다!");
    },
  },
});

export const { addPokemon, deletePokemon } = pokemonSlice.actions;
export default pokemonSlice.reducer;
