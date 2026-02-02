import { createSlice } from "@reduxjs/toolkit";

const initialState = localStorage.getItem("cart")
  ? JSON.parse(localStorage.getItem("cart"))
  : { cartItems: [] };

const cartlice = createSlice({
  name: "cart",
  initialState,
  reducers: {},
});
export default cartlice.reducer;
