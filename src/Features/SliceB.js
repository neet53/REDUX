import { createSlice } from "@reduxjs/toolkit";

const SliceB = createSlice({
  name: "SliceB",
  initialState: {
    data: "Data present SliceB",
    numberData: 123,
    booleanData: true,
  },
  reducers: {
    reducerFunction1: () => {
      console.log(
        "I am reducerFunction1 , which can be performed by the reducer of SliceB"
      );
    },
    reducerFunction2: () => {
      console.log(
        "I am reducerFunction2 , which can be performed by the reducer of SliceB"
      );
    },
  },
});
const ReducerB=SliceB.reducer;
export default ReducerB;
export const{reducerFunction1,reducerFunction2}=SliceB.actions;