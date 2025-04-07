const redux  = require("redux");
const logger = require("redux-logger");
const BUY_CAKE = "BUY_CAKE";
const BUY_IceCream = "BUY_IceCream";
const createStore = redux.createStore;
const combineReducers = redux.combineReducers;
const applyMiddleware = redux.applyMiddleware;
const createLogger = logger.createLogger;

function buyCake(){
    return{
        type : BUY_CAKE,
        info : "info about the buy cake action"
    };
}
function buyIceCream(){
    return{
        type : BUY_IceCream,
        info : "info about the buy IceCream action"
    };
}

const intialState = {
    NumOfCake : 10
}

const intialIceCreamState = {
    NumOfIceCream : 20
};

const cakeReducer = (state = intialState,action) => {
    switch(action.type){
     case BUY_CAKE:
        return{
                ...state,
                NumOfCake : state.NumOfCake - 1,
        };
    default : 
    return state;
    }
};
const iceCreamReducer = (state = intialIceCreamState,action) => {
    switch(action.type){
     case BUY_IceCream:
        return{
                ...state,
                NumOfIceCream : state.NumOfIceCream - 1,
        };
    default : 
    return state;
    }
};
const reducers = combineReducers({
    cake : cakeReducer,
    iceCream : iceCreamReducer
})
const store = createStore(reducers,applyMiddleware(createLogger()));
console.log("initial state", store.getState());
const unSubscribe = store.subscribe(() => {});
store.dispatch(buyCake());
store.dispatch(buyCake());
store.dispatch(buyCake());

store.dispatch(buyIceCream());
store.dispatch(buyIceCream());
unSubscribe();