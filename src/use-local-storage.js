import React from 'react';
import useLocalStorage from './custom-hooks/local-storage';

export function LocalStorageHook() {

  const [nome, setNome] = useLocalStorage('nome', 'BIT');

  return (
    <div>
      <input
        type="text"
        placeholder="Nome"
        value={nome}
        onChange={e => setNome(e.target.value)}
      />
    </div>
  );
}