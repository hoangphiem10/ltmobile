import { PayloadAction, createSlice } from "@reduxjs/toolkit";
import { IUser } from "../../../services/auth.service";
import { RootState } from "../../store";

const initialState: IUser = {
  _id: "",
  fullname: "",
  email: "",
};
const authSlice = createSlice({
  name: "auth",
  initialState,
  reducers: {
    userLoggedIn: (state: IUser, action: PayloadAction<IUser>) =>
      (state = action.payload),
  },
});
// Other code such as selectors can use the imported `RootState` type
export const currUser = (state: RootState) => state.auth;
export const { userLoggedIn } = authSlice.actions;
export default authSlice.reducer;
