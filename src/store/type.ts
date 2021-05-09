export interface ITodo {
    todo: string
    createdDate: Date
}

export interface ITodoState {
    todos: ITodo[]
    searchTerm: string
}

export interface IAppState {
    app: ITodoState
}