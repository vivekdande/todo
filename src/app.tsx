import React, { PureComponent, ReactNode } from 'react'

import Todo from './container/Todo';
import { Container, Header } from './style-components';


class App extends PureComponent {
    constructor(props: any) {
        super(props)
    }

    render(): ReactNode {
        return (
            <Container direction={'column'}>
                <Header>Todo App</Header>
                <Todo />
            </Container>
        )
    }
}

export default App