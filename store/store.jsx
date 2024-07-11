const { configureStore } = require("@reduxjs/toolkit");
import multistepfromslice from "../store/slices/formslice";

export default configureStore({
  reducer: {
    stepform: multistepfromslice,
  },
});
