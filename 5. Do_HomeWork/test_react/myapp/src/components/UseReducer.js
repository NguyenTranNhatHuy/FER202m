import React, { useReducer } from 'react'

const initialState = {
    count: 0,
}
function CounterReducer(state, action) {
    switch (action.type) {
        case 'increament':
            return { count: state.count + 1 }
        case 'decreament':
            return { count: state.count - 1 }
        default:
            throw new Error();
    }
}
export default function UseReducer() {
    const [state, dispatch] = useReducer(CounterReducer, initialState);
    return (
        <div>
            <h1>Demo UseReducer</h1>
            <h1>Count : {state.count}</h1>
            <button onClick={() => dispatch({ type: 'increament' })}>Increament</button>
            <button onClick={() => dispatch({ type: 'decreament' })}>Decreament</button>

        </div>
    )
}
