const store =require("./App/store")
const cakeActions=require("./features/cake/cakeSlice").cakeActions
const iceCreamActions =require("./features/icecream/icecreamSlice").iceCreamActions

console.log("initialState",store.getState())

const unsubscribe =store.subscribe(()=>{
    console.log("updated ",store.getState())

})
store.dispatch(cakeActions.ordered())
store.dispatch(cakeActions.ordered())
store.dispatch(cakeActions.ordered())
store.dispatch(cakeActions.restocked(3))
store.dispatch(iceCreamActions.ordered())
store.dispatch(iceCreamActions.restocked(4))

unsubscribe()