import React, {useReducer} from 'react';

const estadoInicial = {contador: 0};

function reducer(estado, action) {
  switch (action.type) {
    case 'add':
      return {contador: estado.contador + 1};
    case 'remove':
      return {contador: estado.contador - 1};
    default:
      throw new Error();
  }
}

export function ReducerHook() {
  const [estado, dispatch] = useReducer(reducer, estadoInicial);
  return (
    <div>
      <h1>Contador: {estado.contador}</h1>
      <button onClick={() => dispatch({type: "add"})}>+</button>
      <button onClick={() => dispatch({type: "remove"})}>-</button>
    </div>
  )
}