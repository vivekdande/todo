import React from 'react'
import { connect } from 'react-redux'

import { Button, Container, TextField } from '../style-components';
import { IAppState } from '../store/type';
import { getSearchTerm } from '../selectors/todoSelector';
import { todoActionCreator } from '../store/todo/actions';


const mapStateToProps = (state: IAppState) => ({
    searchTerm: getSearchTerm(state)
})

const mapActionToProps = {
    searchTodo: todoActionCreator.searchTodo,
    resetSearch: todoActionCreator.resetSearch
}

type IProps = ReturnType<typeof mapStateToProps> & typeof mapActionToProps


const SearchTodo = (props: IProps) => {

    return (
        <Container direction={'row'} width={'50'}>
            <div style={{ marginLeft: 'auto' }}>
                <TextField
                    value={props.searchTerm || ''}
                    onChange={(e) => props.searchTodo(e.target.value)}
                    width={'10'} />
                <Button onClick={props.resetSearch}>Reset</Button>
            </div>
        </Container>
    )
}

export default connect(mapStateToProps, mapActionToProps)(SearchTodo)