import React from 'react'
import { useSelector, useDispatch } from 'react-redux/es/exports'
import { increament, decrement, reset } from './CounterReduxer'




const Counter = () => {
   const count = useSelector((state)=> state.counter.count)
   const dispatch = useDispatch()

  return (
    <div>
         <p>{count}</p>

         <button onClick={()=>dispatch(increament())} > increment </button>
         <button onClick={()=>dispatch(decrement())} > decrement </button>
         <button onClick={()=>dispatch(reset())} > reset </button>
    </div>
  )
}

export default Counter
