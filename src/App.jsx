import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import { connect, useDispatch, useSelector } from 'react-redux'
import { increment, incrementAmount } from './Features/Counter/Counter-slice'

function App() {

  // Nova maneira de usar depoois dos hooks
  const count = useSelector(state => state.counter.value)
  const dispatch = useDispatch()

  // function handleOnClick() {
  //   dispatch({type: 'counter/increment'})
  // }

  // function handleOnClickAmount() {
  //   dispatch({type: 'counter/incrementAmount', payload: 5})
  // }

  // ReduxToolkit
  function handleOnClick() {
    dispatch(increment())
  } 

  function handleOnClickAmount() {
    dispatch(incrementAmount())
  }

  return (
    <>
      <div>
        <a href="https://vitejs.dev" target="_blank">
          <img src={viteLogo} className="logo" alt="Vite logo" />
        </a>
        <a href="https://react.dev" target="_blank">
          <img src={reactLogo} className="logo react" alt="React logo" />
        </a>
      </div>
      <h1>Vite + React</h1>
      <div className="card">
        <button onClick={handleOnClick}>
          count is {count}
        </button>
        <button onClick={handleOnClickAmount}>
          Increment Amount
        </button>
        <p>
          Edit <code>src/App.jsx</code> and save to test HMR
        </p>
      </div>
      <p className="read-the-docs">
        Click on the Vite and React logos to learn more
      </p>
    </>
  )
}

export default App

//Old school
// Maneira antiga de usar antes dos hooks

// const mapStateToProps = (state) => {
//   return {
//     count: state.counter.value,
//   }
// }

// const mapDispatchToProps = (dispatch) => {
//   return {
//     increment: () => dispatch({type: 'counter/increment'}),
//     incrementAmount: (amount) => dispatch({type: 'counter/incrementAmount', payload: amount})
//   }
// }

// export default connect(mapStateToProps, mapDispatchToProps)(App)
