import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";
import { nanoid } from "nanoid";
const BASE_URL = process.env.NEXT_PUBLIC_BASE_URL;
const storeID = process.env.NEXT_PUBLIC_storeID;
export const fetchStorePaymentMethods = createAsyncThunk(
    "auth/storePaymentMethods",
    async()=>{
        try{
            console.log("storeID from env", storeID);
            const response = await axios.get(`${BASE_URL}/auth/storepaymentmethods/${storeID}`);
            console.log("response.data from payment methods", response.data);
            return response.data;
        } catch (error) {
            if (error.response) {
                throw error.response.data;
            }
            throw error;
        }
    }
)

export const AuthSlice = createSlice({
    name: "auth",
    initialState: {
        user_id: null,
        paymentMethods: [],
        message: "",
        tempID: null,
        status: "idle",
        error: "",
        token: undefined,
    },
    reducers: {
        setUser: (state, action) => {
            const user_id = localStorage.getItem("user_id");
            if (!user_id) {
                const _id = nanoid();
                localStorage.setItem("user_id", _id);
                state.user_id = _id;
            }
            state.user_id = user_id;
        },
        fetchStorePaymentMethodsLocally: (state, action) => {
            const paymentMethods = localStorage.getItem("paymentMethods");
            if (paymentMethods) {
                state.paymentMethods = JSON.parse(paymentMethods);
            }
        }
    },
    extraReducers: (builder) => {
        builder
            .addCase(fetchStorePaymentMethods.pending, (state) => {
                state.status = "loading";
            })
            .addCase(fetchStorePaymentMethods.fulfilled, (state, action) => {
                state.status = "succeeded";
                state.message = action.payload.message;
                localStorage.setItem("paymentMethods", JSON.stringify(action.payload.paymentMethods));
                state.paymentMethods = action.payload.paymentMethods;
            })
            .addCase(fetchStorePaymentMethods.rejected, (state, action) => {
                state.status = "failed";
                state.error = action.error.message;
            });
    }

});

export const { 
    fetchStorePaymentMethodsLocally,
    setUser } = AuthSlice.actions;

export default AuthSlice.reducer;