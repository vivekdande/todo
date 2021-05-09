import { createStore, Store } from 'redux'
import { composeWithDevTools } from 'redux-devtools-extension'

import { createReducer } from './rootReducer'
import { ITodoAction } from './todo/actions'
import { IAppState } from './type'


function configureStore(): Store<IAppState, ITodoAction> {
    const rootReducer = createReducer()

    const store = createStore(rootReducer, composeWithDevTools())

    return store
}



export { configureStore }