import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";
import { nanoid } from "nanoid";
import {toast} from "sonner";
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
export const fetchStoreDeliveryCharges = createAsyncThunk(
    "auth/storeDeliveryCharges",
    async()=>{
        try{
            console.log("storeID from env", storeID);
            const response = await axios.get(`${BASE_URL}/auth/storedeliverycharges/${storeID}`);
            console.log("response.data from delivery charges", response.data);
            return response.data;
        } catch (error) {
            if (error.response) {
                throw error.response.data;
            }
            throw error;
        }
    }
)
export const validateCouponCode = createAsyncThunk(
    "auth/validateCouponCode",
    async (couponCode) => {
        try {
            const response = await axios.post(`${BASE_URL}/coupons/validate/`,
                {
                    storeID: storeID,
                    couponCode: couponCode
                }
            );
            console.log("response.data from validate coupon", response.data);
            return response.data;
        } catch (error) {
            if (error.response) {
                throw error.response.data;
            }
            throw error;
        }
    }
);
export const AuthSlice = createSlice({
    name: "auth",
    initialState: {
        user_id: null,
        paymentMethods: [],
        deliveryCharges: 0,
        message: "",
        tempID: null,
        status: "idle",
        error: "",
        couponDiscount: null,
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
        },
        fetchStoreDeliveryChargesLocally: (state, action) => {
            const storeDeliveryCharges = localStorage.getItem("storeDeliveryCharges");
            if (storeDeliveryCharges) {
                state.deliveryCharges = parseInt(storeDeliveryCharges);
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
        builder
            .addCase(fetchStoreDeliveryCharges.pending, (state) => {
                state.status = "loading";
            })
            .addCase(fetchStoreDeliveryCharges.fulfilled, (state, action) => {
                state.status = "succeeded";
                state.message = action.payload.message;
                localStorage.setItem("storeDeliveryCharges", action.payload.storeDeliveryCharges.toString());
                state.deliveryCharges = action.payload.storeDeliveryCharges;
            })
            .addCase(fetchStoreDeliveryCharges.rejected, (state, action) => {
                state.status = "failed";
                state.error = action.error.message;
            });
        builder
            .addCase(validateCouponCode.pending, (state) => {
                state.status = "loading";
                toast.dismiss();
                toast.loading("Validating coupon...");
            })
            .addCase(validateCouponCode.fulfilled, (state, action) => {
                state.status = "succeeded";
                state.message = action.payload.message;
                state.couponDiscount = action.payload.discount;
                toast.dismiss();
                toast.success("Coupon validated successfully!");
            })
            .addCase(validateCouponCode.rejected, (state, action) => {
                state.status = "failed";
                toast.error(action.error.message || "Error validating coupon");
                console.log("Error validating coupon:", action.error.message);
                state.error = action.error.message;
                toast.dismiss();
                toast.error(state.error || "Error validating coupon");
            });
            
    }

});

export const { 
    fetchStorePaymentMethodsLocally,
    fetchStoreDeliveryChargesLocally,
    setUser } = AuthSlice.actions;

export default AuthSlice.reducer;