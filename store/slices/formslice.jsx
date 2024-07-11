const { createSlice } = require("@reduxjs/toolkit");
const initialState = {
  currentform: 0,
  formdata: {},
};
const multistepfromslice = createSlice({
  name: "multiformstore",
  initialState,
  reducers: {
    setcurrentform: (state, action) => {
      state.currentform = action.payload;
    },

    setformdata: (state, action) => {
      state.formdata = { ...state.formdata, ...action.payload };
    },
  },
});

export const { setcurrentform, setformdata } = multistepfromslice.actions;
export default multistepfromslice.reducer;
