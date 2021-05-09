import React from 'react'
import { connect } from 'react-redux'

import { Container, Table } from '../style-components';
import { IAppState } from '../store/type';
import { getTodoSelector } from '../selectors/todoSelector';
import { todoActionCreator } from '../store/todo/actions';


const mapStateToProps = (state: IAppState) => ({
    todos: getTodoSelector(state)
})

const mapActionToProps = {
    sortTodoByName: todoActionCreator.sortTodoByName,
    sortTodoByDate: todoActionCreator.sortTodoByDate
}

type IProps = ReturnType<typeof mapStateToProps> & typeof mapActionToProps


const ListTodo = (props: IProps) => {

    return (
        <Container direction={'row'}>
            <Table>
                <thead>
                    <tr>
                        <th onClick={props.sortTodoByName}>Todo Name</th>
                        <th onClick={props.sortTodoByDate}>Create Date</th>
                    </tr>
                </thead>
                <tbody>
                    {props.todos.map(({ todo, createdDate }, index) => (
                        <tr key={index}>
                            <td>{todo}</td>
                            <td>{Intl.DateTimeFormat().format(createdDate)}</td>
                        </tr>
                    ))}
                </tbody>
            </Table>
        </Container>
    )
}

export default connect(mapStateToProps, mapActionToProps)(ListTodo)