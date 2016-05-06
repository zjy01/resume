/**
 * Created by zjy on 16-3-10.
 */
import React from 'react'
import { render } from 'react-dom'
import createStore from './store'
import { Provider } from 'react-redux'
import Desktop from './containers/desktop.jsx'

//reducers
import reducers from './reducers'

let rootElement = document.getElementById('root');
let store = createStore(reducers); //创建store,里面存有state树
render(
    <Provider store = {store}>
        <Desktop />
    </Provider>,
    rootElement
);