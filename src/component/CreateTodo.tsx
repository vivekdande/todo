import React, { useState } from 'react'
import { connect } from 'react-redux'

import { Container, TextField, ErrorMessage } from '../style-components';
import { todoActionCreator } from '../store/todo/actions'


const mapActionToProps = {
    createTodo: todoActionCreator.createTodo
}

type IProps = typeof mapActionToProps


const CreateTodo = (props: IProps) => {
    const [todo, setTodo] = useState('')

    return (
        <Container direction={'column'}>
            <TextField
                placeholder={'Create todo'}
                onKeyPress={(e) => {
                    setTodo(e.currentTarget.value)
                    if (e.key === 'Enter' && e.currentTarget.value.length <= 30) {
                        props.createTodo({
                            todo: e.currentTarget.value,
                            createdDate: new Date()
                        })

                        e.currentTarget.value = ''
                    }
                }}
                error={todo.length > 30}
            />
            {todo.length > 30 && <ErrorMessage>Only 30 characters allowed</ErrorMessage>}
        </Container>
    )
}

export default connect(undefined, mapActionToProps)(CreateTodo);