import { configureStore } from "@reduxjs/toolkit";
import userReducer from "./userSlice";
import moviesReducer  from "./moviesSlice";

const appStore= configureStore ({       // configureStore= The standard method for creating a Redux store.

    reducer:{
        user: userReducer,
        movies: moviesReducer,
    },

});
export default appStore;