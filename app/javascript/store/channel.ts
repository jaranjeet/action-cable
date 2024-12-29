import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import type { RootState } from "./store";

interface channelState {
    subscriptions: Array<string>;
    messages: Record<string, string[]>;
}

const initialState: channelsState = {
    subscriptions: [],
    messages: {},
};

export const channelsSlice = createSlice({
    name: "channels",
    initialState,
    reducers: {
        addChannel: (state, action: PayloadAction<{ id: string }>) => {
            state.subscriptions.push(action.payload.id);
        },
        addMessageToChannel: (
            state,
            action: PayloadAction<{ id: string; message: string }>
        ) => {
            if (state.messages[action.payload.id] !== undefined) {
                state.messages[action.payload.id].push(action.payload.message);
            } else {
                state.messages[action.payload.id] = [action.payload.message];
            }
        },
        removeChannel: (state, action: PayloadAction<{ id: string }>) => {
            state.subscriptions = state.subscriptions.filter(
                (subscriptionId) => subscriptionId !== action.payload.id
            );
        },
    },
});

export const { addChannel, addMessageToChannel, removeChannel } =
 channelsSlice.actions;

 export const selectSubscriptionById = (state: RootState, id: string) =>
    state.channels.subscriptions[id] ?? [];

 export const selectMessagesById = (state: RootState, id: string) =>
    state.channels.messages[id] ?? [];

 export const channelReducer = channelsSlice.reducer;