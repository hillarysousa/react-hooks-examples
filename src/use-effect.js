import React, {useState, useEffect} from 'react';

export function EffectHook() {
    const [contador, contar] = useState(0);

    useEffect(() => {
        document.title = contador;
    })

    return (
        <div>
            <h1>Contador</h1>
            <p>valor do contador: {contador}</p>
            <button onClick={() => contar(contador + 1)}>+1</button>
        </div>
    )
}