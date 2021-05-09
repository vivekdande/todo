import React, { ReactNode, PureComponent } from 'react'
import CreateTodo from '../component/CreateTodo'
import ListTodo from '../component/ListTodo'
import SearchTodo from '../component/SearchTodo'


export default class Todo extends PureComponent {
    constructor(props: any) {
        super(props)
    }

    public render(): ReactNode {
        return (<div>
            <CreateTodo />
            <SearchTodo />
            <ListTodo />
        </div>
        )
    }
}