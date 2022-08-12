import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";

const initialState: any = {
  loading: false,
  users: [],
  error: "",
};

export const fetchUsers: any = createAsyncThunk("somethin", async (URL: string) => {
  console.log(URL);
  let data = await fetch(URL);
  data = await data.json();
  return data;
});

const userSlice = createSlice({
  name: "counter",
  initialState,
  reducers: {},
  extraReducers: builder => {
    builder.addCase(fetchUsers.pending, state => {
      state.loading = true;
    });
    builder.addCase(fetchUsers.fulfilled, (state, action) => {
      state.loading = false;
      state.users = action.payload;
    });
    builder.addCase(fetchUsers.rejected, state => {
      state.loading = false;
      state.error = "we got this error";
    });
  },
});

export default userSlice.reducer;
