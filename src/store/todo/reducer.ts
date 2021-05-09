
import { produce } from 'immer'
import { Reducer } from 'redux'
import { ITodoState } from '../type'
import { actions, ITodoAction } from './actions'
import { defaultState } from '../default';

export const TodoReducer: Reducer<ITodoState, ITodoAction> = (
    state = defaultState,
    action: ITodoAction
) => {
    return produce<ITodoState>(state, (draft: ITodoState) => {
        switch (action.type) {
            case actions.CREATE_TODO:
                draft.todos.push(action.todo)
                return draft
            case actions.SORT_TODO_BY_NAME:
                draft.todos.sort((a, b) => a.todo.localeCompare(b.todo))
                return draft
            case actions.SORT_TODO_BY_DATE:
                draft.todos.sort((a, b) => a.createdDate.getTime() - b.createdDate.getTime());
                return draft
            case actions.SEARCH_TODO:
                draft.searchTerm = action.searchTerm
                return draft
            case actions.RESET_SEARCH:
                draft.searchTerm = '';
            default:
                return draft;
        }
    })
}