import React, { useState, useCallback } from 'react'

const contadorFuncoes = new Set();

export function CallbackHook() {
  const [contador, contar] = useState(0);
  const [outroContador, contarOutro] = useState(0);

  const adicionar = useCallback(() => {
    contar(contador + 1)
  }, [contador]);

  const remover = useCallback(() => {
    contar(contador - 1)
  }, [contador]);

  const adicionarOutroContador = useCallback(() => {
    contarOutro(outroContador + 1)
  }, [outroContador]);

  contadorFuncoes.add(adicionar);
  contadorFuncoes.add(remover);
  contadorFuncoes.add(adicionarOutroContador);

  return (
    <div>
      <h1>Contador: {contador}</h1>
      <h1>Outro Contador: {outroContador}</h1>
      <h2>Funções instanciadas: {contadorFuncoes.size}</h2>
      <button onClick={adicionar}>+</button>
      <button onClick={remover}>-</button>
      <button onClick={adicionarOutroContador}>adicionar Outro Contador</button>
    </div>
  )
}
