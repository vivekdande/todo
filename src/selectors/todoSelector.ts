import { createSelector } from 'reselect'
import { IAppState } from "../store/type";

export const getSearchTerm = (state: IAppState) => {
    return state.app.searchTerm
}

export const getTodos = (state: IAppState) => {
    return state.app.todos
}

export const getTodoSelector = createSelector([getSearchTerm, getTodos], (searchTerm, todos) => {
    if (todos?.length > 0 && searchTerm) {
        return todos.filter(({ todo }) => todo.includes(searchTerm))
    }

    return todos?.length > 0 ? todos : []
})

