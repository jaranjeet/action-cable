import { configureStore } from "@reduxjs/toolkit";
import { channelReducer } from "./channels";

export const store = configureStore({
    reducer: {
        channels: channelReducer,
    },
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;