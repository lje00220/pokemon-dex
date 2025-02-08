import { createSlice } from "@reduxjs/toolkit";
import { toast } from "react-toastify";

const pokemonSlice = createSlice({
  name: "pokemon",
  initialState: {
    pokemon: [],
  },
  reducers: {
    addPokemon: (state, action) => {
      if (state.pokemon.length === 6) {
        toast.error("포켓몬은 6개까지만 선택할 수 있어요.");
        return;
      }
      toast.success("추가되었습니다!");
      state.pokemon = [...state.pokemon, action.payload];
    },
    deletePokemon: (state, action) => {
      state.pokemon = state.pokemon.filter((x) => x.id !== action.payload);
      toast.success("삭제되었습니다!");
    },
  },
});

export const { addPokemon, deletePokemon } = pokemonSlice.actions;
export default pokemonSlice.reducer;
