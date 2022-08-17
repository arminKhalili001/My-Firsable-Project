import { createSlice , createAsyncThunk } from "@reduxjs/toolkit";


import axios from '../axios/Base';


const initialState = {

    user:  null,
    isLoading: false,
    private: false,
    isSuccess: false,
    isError: null,
    errorMassage: ''
  }
export const login = createAsyncThunk('auth/login', async (user, thunkAPI) => {
  console.log('redux-credential', user.password)
    try {
      const username = user.username;
      const password = user.password;
      return await axios.post('/login',
      {
        username,
        password
      }).
      then(response => {
        localStorage.setItem('token',response.data.token)
        window.location.reload(false);
        return{token : response.data.token }

      })
    } catch (error) {
      const message =
        (error.response && error.response.data && error.response.data.message) ||
        error.message ||
        error.toString()
      return thunkAPI.rejectWithValue(message)
    }
  })

  export const logout = createAsyncThunk ('auth/logOut', async() => {

   
    localStorage.clear()
  

  } )

 


const authSlice = createSlice({
    name: 'auth',
    initialState,
    reducers: {
      reset: (state) => {
        state.user = null
        state.isLoading = false
        state.isError = null
       
      },
    },
    extraReducers :  (builder) => {
      builder
      .addCase(login.pending, (state) => {
        state.isSuccess = false
        state.isLoading = true
        state.private = false
        state.isError = false
        
      })
      .addCase(login.fulfilled, (state, action) => {
        state.isSuccess = true
        state.isLoading = false
        state.private = true
        state.isError = false
        state.user = action.payload
      })
      .addCase(login.rejected, (state, action) => {
        state.isLoading = false
        state.user = null
        state.isError = true
        state.errorMassage = action.payload
      })
      .addCase(logout.fulfilled,(state) => {
        state.user = null
        state.isLoading = false
        state.isError = null
        state.isSuccess= false
        state.private = false
        state.errorMassage = ''
      })


      
      
    }
    
})

export const { reset } = authSlice.actions

export default authSlice.reducer;