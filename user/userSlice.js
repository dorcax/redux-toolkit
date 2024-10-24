const createSlice =require("@reduxjs/toolkit").combineSlice

const createAsyncThunk=require("@reduxjs/toolkit").createAsyncThunk

const axios  =require("axios")


const initialState={
    loading:false,
    users:[],
    error:null
} 
const  fetchUser =createAsyncThunk("user/fetchUser",()=>{
    axios.get("https://jsonplaceholder.typicode.com/users").then((response)=>response.data.map((user)=>user.id))
})
const userSlice =createSlice({
    name:"user",
    initialState
})