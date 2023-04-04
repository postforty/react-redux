import "./App.css";
import { legacy_createStore } from "redux";
import { Provider, useSelector, useDispatch } from "react-redux";

function reducer(currentState, action) {
  console.log(currentState);
  if (currentState === undefined) {
    return {
      number: 1,
    };
  }
  const newState = { ...currentState };
  switch (action.type) {
    case "PLUS":
      newState.number++;
      return newState;
    case "MINUS":
      newState.number--;
      return newState;
    default:
      return newState;
  }
}

const store = legacy_createStore(reducer);

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

function Left1(props) {
  return (
    <div>
      <h1>Left1</h1>
      <Left2></Left2>
    </div>
  );
}

function Left2(props) {
  console.log("2"); // + 클릭시 렌더링 되지 않음
  return (
    <div>
      <h1>Left2</h1>
      <Left3></Left3>
    </div>
  );
}

function Left3() {
  console.log("3");
  const number = useSelector((state) => state.number);
  return (
    <div>
      <h1>Left3 : {number}</h1>
    </div>
  );
}

function Right1(props) {
  return (
    <div>
      <h1>Right1</h1>
      <Right2></Right2>
    </div>
  );
}
function Right2(props) {
  return (
    <div>
      <h1>Right2</h1>
      <Right3></Right3>
    </div>
  );
}
function Right3(props) {
  const dispatch = useDispatch();
  return (
    <div>
      <h1>Right3</h1>
      <input
        type="button"
        value="+"
        onClick={() => {
          dispatch({ type: "PLUS" });
        }}
      ></input>
      <input
        type="button"
        value="-"
        onClick={() => {
          dispatch({ type: "MINUS" });
        }}
      ></input>
    </div>
  );
}
