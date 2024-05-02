import { configureStore } from "@reduxjs/toolkit";
import userReducer from "./userSlice";

const appStore= configureStore ({       // configureStore= The standard method for creating a Redux store.

    reducer:{
        user: userReducer,
    },

});
export default appStore;