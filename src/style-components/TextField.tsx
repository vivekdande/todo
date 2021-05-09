import styled from 'styled-components'

const TextField = styled.input<{ error?: boolean, width?: string }>`
    width: ${props => props.width ? `${props.width}rem` : '25rem'};
    height: 2rem;
    border: ${props => props.error ? '1px solid red' : '1px solid #222'};
    border-radius: 0.6rem;
    padding-left: 10px;
    font-size: 1.2rem;
    font-family: sans-serif;
    font-weight: 300;
`

export { TextField }