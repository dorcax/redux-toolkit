const { isAction } = require("redux")

const createSlice =require("@reduxjs/toolkit").createSlice
const initialState={
    numOfIceCream:20
}
const icecreamSlice =createSlice({
    name:"icecream",
    initialState,
    reducers:{
      ordered:(state)=>{
        state.numOfIceCream --
      }
       ,
       restocked:(state,action)=>{
        state.numOfIceCream +=action.payload
       }
    }
})
module.exports =icecreamSlice.reducer
module.exports.iceCreamActions =icecreamSlice.actions