import { combineReducers, Reducer } from 'redux'
import { ITodoAction } from './todo/actions'
import { TodoReducer } from './todo/reducer'
import { IAppState } from './type'

function createReducer(): Reducer<IAppState, ITodoAction> {
    return combineReducers<IAppState, ITodoAction>({
        app: TodoReducer
    })
}


export { createReducer }