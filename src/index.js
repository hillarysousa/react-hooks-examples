import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import * as serviceWorker from './serviceWorker';

import {StateHook as Exemplo} from './use-state';
// import {EffectHook as Exemplo} from './use-effect';
// import {ReducerHook as Exemplo} from './use-reducer';
// import {CallbackHook as Exemplo} from './use-callback';

// import {EventListenerHook as Exemplo} from './use-event-listener';
// import {LocalStorageHook as Exemplo} from './use-local-storage';


ReactDOM.render(<Exemplo />, document.getElementById('root'));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
