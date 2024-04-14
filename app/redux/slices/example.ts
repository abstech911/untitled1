import {createSlice} from "@reduxjs/toolkit";

type ExampleConfig = {

}

type SliceState = {
    value: String
}

const initialState:SliceState={
    value:""
}

export const exampleSlice = createSlice({
    name: "input",
    initialState,
    reducers:{
        exampleHandler: (state, action)=>{
            state.value = action.payload
        }
    }
});

export const {exampleHandler} = exampleSlice.actions;


export default exampleSlice.reducer;


