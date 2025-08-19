import React from 'react'
import { useReducer } from 'react'

const initialState = {count : 0}
function counterReducer(state,action) {
    switch(action.type){
        case 'INCREMENT' :
            return { count : state.count + 1}
        case 'DECREMENT':
            return {count : state.count -1}
        case 'RESET':
            return {count :0 }
        default:
            throw new Error()
    }
}

// 
function Counter  (){

    const [state, dispatch] = useReducer(counterReducer, initialState)
    
    return(
        <div>
            <p>count : {state.count}</p>
            <button onClick={() => dispatch({type: 'INCREMENT'})}>INCREMENT</button>
            <button onClick={() => dispatch({type: 'DECREMENT'})}>DECREMENT</button>
            <button onClick={() => dispatch({type: 'RESET'})}>RESET</button>
        </div>
    )
}

export default Counter