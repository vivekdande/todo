import styled from 'styled-components'


const Table = styled.table`
    width: 50%;
    font-size: 1.5rem;
    font-family: sans-serif;
    font-weight: 200;

    thead {
        width: 100%;
        text-align: left;
    }

    th:first-child {
        width: 80%;
    }

    tbody {
        width: 100%;
    }

`

export { Table }