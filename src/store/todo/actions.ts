import { ITodo } from "../type"

export enum actions {
    CREATE_TODO = 'CREATE_TODO',
    SORT_TODO_BY_NAME = 'SORT_TODO_BY_NAME',
    SORT_TODO_BY_DATE = 'SORT_TODO_BY_DATE',
    SEARCH_TODO = 'SEARCH_TODO',
    RESET_SEARCH = 'RESET_SEARCH'
}

export type ITodoAction =
    | { type: actions.CREATE_TODO, todo: ITodo }
    | { type: actions.SORT_TODO_BY_NAME }
    | { type: actions.SORT_TODO_BY_DATE }
    | { type: actions.SEARCH_TODO, searchTerm: string }
    | { type: actions.RESET_SEARCH }


export const todoActionCreator = {
    createTodo: (todo: ITodo): ITodoAction => ({
        type: actions.CREATE_TODO,
        todo
    }),
    sortTodoByName: (): ITodoAction => ({
        type: actions.SORT_TODO_BY_NAME
    }),
    sortTodoByDate: (): ITodoAction => ({
        type: actions.SORT_TODO_BY_DATE
    }),
    searchTodo: (searchTerm: string): ITodoAction => ({
        type: actions.SEARCH_TODO,
        searchTerm
    }),
    resetSearch: (): ITodoAction => ({
        type: actions.RESET_SEARCH
    })
}