import React from "react";
// import ReactDOM from 'react-dom';
import {createRoot} from 'react-dom/client'
import {Provider} from 'react-redux';
import {createStore} from 'redux';

import App from './components/App';
import reducers from './reducers';

// ReactDOM.render(
//     <Provider store={createStore(reducers)} >
//     <App />
//     </Provider>,
//     document.querySelector('#root')
// );
createRoot(document.querySelector('#root')).render(
    <Provider store={createStore(reducers)} >
    <App />
    </Provider>
)