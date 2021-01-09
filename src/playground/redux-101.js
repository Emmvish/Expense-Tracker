import {createStore} from 'redux';

const incrementCount = ({incrementBy = 1} = {})=>{
    return {
        type: 'INCREMENT',
        incrementBy
    }
}

const decrementCount = ({decrementBy = 1} = {})=>(
    {
        type: 'DECREMENT',
        decrementBy
    }
)

const setCount = ({count = 101} = {})=>(
    {
        type: 'SET',
        count
    }
)

const resetCount = ()=>(
    {
        type: 'RESET'
    }
)

// 1. Reducers are pure functions. Output is solely based on inputs to function.
// 2. Reducers do not modify state or action directly.

const countReducer = (state = {count: 0}, action)=>{
    switch (action.type){
        case 'INCREMENT':
            return {
                count: state.count + action.incrementBy
            };
        case 'DECREMENT':
            return {
                count: state.count - action.decrementBy
            };
        case "SET":
            return {
                count: action.count
            }
        case 'RESET':
            return {
                count: 0
            }
        default: 
            return state;
    }
}

const store = createStore(countReducer);

// Make a call to subscribe() method through unsubscribe() anytime and you will not receive updates on state change.

const unsubscribe = store.subscribe(()=>{
    console.log(store.getState());
})

store.dispatch(incrementCount({incrementBy: 5}))

store.dispatch(incrementCount());

// unsubscribe();

store.dispatch(resetCount())

store.dispatch(setCount({count: 100}))

store.dispatch(decrementCount())

store.dispatch(decrementCount({decrementBy: 10}));

