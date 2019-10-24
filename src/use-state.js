import React, {useState} from 'react';

export function StateHook() {
    const [contador, contar] = useState(0);

    return (
        <div>
            <h1>Contador</h1>
            <p>valor do contador: {contador}</p>
            <button onClick={() => contar(contador + 1)}>+1</button>
        </div>
    )
}