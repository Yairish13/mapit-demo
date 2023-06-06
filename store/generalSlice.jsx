import { createSlice } from "@reduxjs/toolkit";
import { PayloadAction } from "@reduxjs/toolkit";

const initialState = {
    members: {},
    selectedMembers: [],
    partB: {},
    partC: {},
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
    answeredQuestions: [],
    totalQuestions: 21,
    percentage: 0,
    isFinished: false,
}

// export const getmembers = createAsyncThunk(
//     "products/getmembers",
//     async (id) => {
//       const response = await fetch(`https://fakestoreapi.com/products/${id}`);
//       const product = await response.json();

//       return product;
//     }
//   );
const scrollToTop = () => {
    window.scrollTo({
        top: 0,
        behavior: 'smooth'
    });
};
const generalSlice = createSlice({
    name: "general",
    initialState,
    reducers: {
        setMembers: (state, action) => {
            state.members = action.payload;
        },
        setNextStep: (state, action) => {
            state.activeStep += 1;
            scrollToTop();
        },
        setAnsweredQuestions: (state, action) => {
            if (state.answeredQuestions.some((el => el == action.payload))) return;
            else state.answeredQuestions = [...state.answeredQuestions, action.payload];
            state.percentage = Math.round((state.answeredQuestions.length * 100) / state.totalQuestions);
        },
        filterAnsweredQuestions: (state, action) => {
            state.answeredQuestions = state.answeredQuestions.filter((el) => el !== action.payload);
            state.percentage = Math.round((state.answeredQuestions.length * 100) / state.totalQuestions);
        },
        resetAnsweredQuestions: (state, action) => {
            state.answeredQuestions = [];
            state.percentage = Math.round((state.answeredQuestions.length * 100) / state.totalQuestions);
        },
        setSelectedMembers: (state, action) => {
            state.selectedMembers = action.payload;
        },
        setPartB: (state, action) => {
            state.partB = action.payload;

        },
        setPartC: (state, action) => {
            state.partC = action.payload;
        },
        setIsFinished: (state, action) => {
            state.isFinished = true;
        }

    },
    // extraReducers: {
    //     [counter.actions.increment]: (
    //       state,
    //       action /* action will be inferred as "any", as the map notation does not contain type information */
    //     ) => {
    //       state.perc += 1
    //     },
    //   },
})
export const { setMembers,
    setNextStep,
    setSelectedMembers,
    setPartB,
    setPartC,
    setIsFinished,
    resetAnsweredQuestions,
    filterAnsweredQuestions,
    setAnsweredQuestions } = generalSlice.actions;

export default generalSlice.reducer;