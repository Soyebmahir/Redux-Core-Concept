const redux=require('redux')
const produce =require('immer').produce
const initialState = {
    name: 'Soyeb Mahir',
    address: {
        street: 'Mosque road',
        city: 'Dhaka',
        state: 'Bangladesh'
    }
}

const STREET_UPDATED = 'STREET_UPDATED'
const updatedStreer = (street) => {
    return {
        type: STREET_UPDATED,
        payload: street,
    }
}

const reducer = (state = initialState, action) => {
    switch (action.type) {
        case STREET_UPDATED:
            // return {
            //     ...state,
            //     address: {
            //         ...state.address,
            //         street: action.payload 
            //     },
            // }
            return produce(state,(draft)=>{
                draft.address.street=action.payload
            })
            default:{
                return state
            }
    }
}

const store = redux.createStore(reducer)
console.log('Initial State',store.getState());
const unsubscribe=store.subscribe(()=>{
    console.log('Updated State', store.getState());
})
store.dispatch(updatedStreer('School Road'))
unsubscribe();