const redux = require('redux')
const createStore = redux.createStore

const initialState = {
    numOfCakes: 10,
    // anotherProperty:0,
}

const CAKE_ORDERED = 'CAKE_ORDERED';
const CAKE_RESTOCKED = 'CAKE_RESTOCKED'
const orderCake = () => {
    return {
        type: CAKE_ORDERED,
        quantity: 1,
    }
}

const restockedCake = (qty = 1) => {
    return {
        type: CAKE_RESTOCKED,
        quantity: qty,
    }
}



//(previousState, action)=>newState
const reducer = (state = initialState, action) => {

    switch (action.type) {
        case CAKE_ORDERED:
            return {
                ...state,
                numOfCakes: state.numOfCakes - 1,
            }
        case CAKE_RESTOCKED:
            return {
                ...state,
                numOfCakes: state.numOfCakes + action.quantity,
            }
        default:
            return state;
    }

}

const store = createStore(reducer)
console.log('Initial State:', store.getState());

const unsubscribe = store.subscribe(() => console.log('Updated State :', store.getState()))

store.dispatch(orderCake())
store.dispatch(orderCake())
store.dispatch(orderCake())
store.dispatch(orderCake())
store.dispatch(restockedCake(4))
unsubscribe();


