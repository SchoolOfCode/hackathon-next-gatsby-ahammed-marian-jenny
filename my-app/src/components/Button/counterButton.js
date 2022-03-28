import React, { useReducer } from "react";

const ACTIONS = {
  INCREMENT: "increment",
  DECREMENT: "decrement"
}
function reducer(state, action) {
  switch(action.type){
    case ACTIONS.INCREMENT:
      return {count: state.count + 1}
      case ACTIONS.DECREMENT:
        return {count: state.count -1}
        default:
          return state
  }
  
}

function Button() {
  //const [count, setCount] = useState(0);
  const [state, dispatch] = useReducer(reducer, {count: 0})

  function addCount() {
    //setCount(previusState => previusState + 1)
     dispatch({type: ACTIONS.INCREMENT})
    
  }
  function deductCount() {
    // setCount(previusState => 
    //   {if(previusState > 0){
    //     return previusState - 1;
    //   }else{
    //     return 0;
    //   }
    // });

    dispatch({type: ACTIONS.DECREMENT})
  }

  return (
    <section className="small container">
      <div className="flex-container">
        <div>
          <p className="heading">Counter</p>
        </div>
        <div className="counter">
          <button className="plus" onClick={addCount}>
            +
          </button>
          <p className="digit">{state.count}</p>
          <button className="minus" onClick={deductCount}>
            -
          </button>
        </div>
      </div>
    </section>
  );
}

export default Button;
