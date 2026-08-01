import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";


export const CartSlice = createSlice({
    name: "cart",
    initialState: {
        cartIsOpen: false,
        items: [],
        totalQuantity: 0,
        totalAmount: 0,
    },
    reducers: {
        toggleCart: (state) => {
            console.log("toggle cart called");
            state.cartIsOpen = !state.cartIsOpen;
        },
        fetchCartFromStorage: (state) => {
            const storedItems = localStorage.getItem('cartItems');
            if (storedItems) {
                state.items = JSON.parse(storedItems);
            }
        },
        addItemToCart: (state, action) => {
            const newItem = action.payload;
            const storedItems = localStorage.getItem('cartItems');
            if (storedItems) {
                state.items = JSON.parse(storedItems);
                console.log('Stored Items:', state.items);
                const existingItem = state.items.find(item => item.product.id === newItem.product.id);
                if (!existingItem) {
                    state.items.unshift(newItem);
                }
                localStorage.setItem("cartItems", JSON.stringify(state.items));

            }
        },
        removeItemFromCart: (state, action) => {
            const id = action.payload;
            const filteredItems = state.items.filter(item => item.product.id !== id);
            state.items = filteredItems;
            localStorage.setItem('cartItems', JSON.stringify(state.items));
        },
        // clearCart: (state) => {
        //     state.items = [];
        //     state.totalQuantity = 0;
        //     state.totalAmount = 0;
        //     localStorage.removeItem('cartItems');
        // }
    }
});

export const {
    toggleCart,
    fetchCartFromStorage,
    addItemToCart,
       removeItemFromCart, 
    //   clearCart
} = CartSlice.actions;