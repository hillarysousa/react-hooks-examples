import React, {useCallback, useState} from 'react';
import useEventListener from './custom-hooks/event-listener';


export function EventListenerHook() {
    const [coords, setCoords] = useState({ x: 0, y: 0 });

    const handler = useCallback(
      ({ clientX, clientY }) => {
        setCoords({ x: clientX, y: clientY });
      },
      [setCoords]
    );

    useEventListener("click", handler);
  
    return (
      <h1>
        Posição do mouse: ({coords.x}, {coords.y})
      </h1>
    )
}