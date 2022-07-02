const redux = require('redux')
const createStore = redux.createStore
const bindActionCreators = redux.bindActionCreators;

const initialState = {
    numOfCakes: 10,
    numOfIceCream: 20,
    // anotherProperty:0,
}

const CAKE_ORDERED = 'CAKE_ORDERED';
const CAKE_RESTOCKED = 'CAKE_RESTOCKED'
const ICECREAM_ORDERED ='ICECREAM_ORDERED'
const ICECREAM_RESTOCKED ='ICECREAM_RESTOCKED'


const orderCake = () => {
    return {
        type: CAKE_ORDERED,
        payload: 1,
    }
}

const restockedCake = (qty = 1) => {
    return {
        type: CAKE_RESTOCKED,
        payload: qty,
    }
}

const orderIceCream =(qty = 1)=>{
    return {
        type : ICECREAM_ORDERED,
        payload:qty
    }
}

const restockedIceCream =(qty = 1)=>{
    return{
        type:ICECREAM_RESTOCKED,
        payload:qty
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
                numOfCakes: state.numOfCakes + action.payload,
            }
        case ICECREAM_ORDERED:
            return {
                ...state,
                numOfIceCream: state.numOfIceCream - 1,
            }
        case ICECREAM_RESTOCKED:
            return {
                ...state,
                numOfIceCream: state.numOfIceCream + action.payload,
            }
        default:
            return state;
    }

}

const store = createStore(reducer)
console.log('Initial State:', store.getState());

const unsubscribe = store.subscribe(() => console.log('Updated State :', store.getState()))

// store.dispatch(orderCake())
// store.dispatch(orderCake())
// store.dispatch(orderCake())
// store.dispatch(orderCake())
// store.dispatch(restockedCake(4))

const actions =bindActionCreators({orderCake,restockedCake,orderIceCream,restockedIceCream},
    store.dispatch)

actions.orderCake()
actions.orderCake()
actions.orderCake()
actions.orderCake()
actions.orderCake()
actions.restockedCake(5)
actions.orderIceCream()
actions.orderIceCream()
actions.orderIceCream()
actions.restockedIceCream(3)
unsubscribe();


