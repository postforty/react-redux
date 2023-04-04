import "./App.css";
// import { legacy_createStore } from "redux";
import { Provider, useSelector, useDispatch } from "react-redux";
import { createSlice, configureStore } from "@reduxjs/toolkit";

// function reducer(currentState, action) {
//   console.log(currentState);
//   if (currentState === undefined) {
//     return {
//       number: 1,
//     };
//   }
//   const newState = { ...currentState };
//   switch (action.type) {
//     case "PLUS":
//       newState.number++;
//       return newState;
//     case "MINUS":
//       newState.number--;
//       return newState;
//     default:
//       return newState;
//   }
// }

const initialState = { number: 0 };

// const store = legacy_createStore(reducer);

export const counterSlice = createSlice({
  name: "counter",
  initialState,
  reducers: {
    plus: (state, action) => {
      console.log(action);
      // state.number = state.number + action.step; // dispatch({ type: "counter/plus", step: 1 });
      state.number = state.number + action.payload; // {type: 'counter/plus', payload: 1}
    },
    minus: (state, action) => {
      state.number = state.number + action.step;
    },
  },
});

const store = configureStore({
  reducer: {
    counter: counterSlice.reducer,
  },
});

function App() {
  return (
    <div id="container">
      <h1>Root</h1>
      <div id="grid">
        <Provider store={store}>
          <Left1></Left1>
          <Right1></Right1>
        </Provider>
      </div>
    </div>
  );
}

export default App;

function Left1() {
  return (
    <div>
      <h1>Left1</h1>
      <Left2></Left2>
    </div>
  );
}

function Left2() {
  // console.log("2"); // + 클릭시 렌더링 되지 않음
  return (
    <div>
      <h1>Left2</h1>
      <Left3></Left3>
    </div>
  );
}

function Left3() {
  // console.log("3");
  const number = useSelector((state) => state.counter.number);
  return (
    <div>
      <h1>Left3 : {number}</h1>
    </div>
  );
}

function Right1() {
  return (
    <div>
      <h1>Right1</h1>
      <Right2></Right2>
    </div>
  );
}
function Right2() {
  return (
    <div>
      <h1>Right2</h1>
      <Right3></Right3>
    </div>
  );
}
function Right3() {
  const dispatch = useDispatch();
  const count = useSelector((state) => {
    // console.log(state.counter.number);
    return state.counter.number;
  });
  return (
    <div>
      <h1>Right3: {count}</h1>
      <input
        type="button"
        value="+"
        onClick={() => {
          // dispatch({ type: "counter/plus", step: 1 }); // counterSlice의 name: counter의 plus
          dispatch(counterSlice.actions.plus(1));
        }}
      ></input>
      <input
        type="button"
        value="-"
        onClick={() => {
          dispatch({ type: "counter/minus", step: -1 });
        }}
      ></input>
    </div>
  );
}
