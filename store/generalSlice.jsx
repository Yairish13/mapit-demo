import { createSlice } from "@reduxjs/toolkit";
import { PayloadAction } from "@reduxjs/toolkit";

const initialState = {
    members: {},
    selectedMembers: [],
    steps: [{
        step: 1,
    }, {
        step: 2,
    },
    {
        step: 3,
    },
    {
        step: 4,
    },
    {
        step: 5,
    },
    {
        step: 6,
    },
    {
        step: 7,
    },
],
    activeStep: 1,
    percentage:0,
}

// export const getmembers = createAsyncThunk(
//     "products/getmembers",
//     async (id) => {
//       const response = await fetch(`https://fakestoreapi.com/products/${id}`);
//       const product = await response.json();

//       return product;
//     }
//   );

const generalSlice = createSlice({
    name: "general",
    initialState,
    reducers: {
        setMembers: (state, action) => {
            state.members = action.payload;
        },
        setNextStep: (state, action) => {
            state.activeStep += 1;
        },
        setPercentage: (state, action) => {
            state.percentage += 4;
        },
        setSelectedMembers:(state,action) =>{
            state.selectedMembers = action.payload;
        }
        
    },
    // extraReducers: {
    //     [counter.actions.increment]: (
    //       state,
    //       action /* action will be inferred as "any", as the map notation does not contain type information */
    //     ) => {
    //       state.age += 1
    //     },
    //   },
})
export const { setMembers, setNextStep, setPercentage, setSelectedMembers } = generalSlice.actions;

export default generalSlice.reducer;