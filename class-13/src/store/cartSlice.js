import { createSlice } from '@reduxjs/toolkit';

const cartSlice = createSlice({
    name: 'cart',
    initialState: {
        items: [],
    },
    reducers: {
        // this will be called when an action is dispatched.
        // action : function
        addItem: (state, action) => {
            // Reducer function
            // state->current state
            // action->payload (Data passed when action is dispatched)
            state.items.push(action.payload);
            // It never returns anything, it directly modifies the state
        },
        clearCart: (state, action) => {
            state.items = [];
        },
        removeItem: (state, action) => {
            const index = state.items.indexOf(action.payload);

            if (index !== -1) {
                state.items.splice(action.payload, 1);
            }
        },
    },
});

//export the actions
export const { addItem, clearCart, removeItem } = cartSlice.actions;

// export the reducer
// it will combine all the reducers, make 1 reducer and exports it.
export default cartSlice.reducer;
