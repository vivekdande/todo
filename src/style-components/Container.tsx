import styled from 'styled-components'

const Container = styled.div<{ direction: string, width?: string }>`
    width: ${props => props.width ? props.width : '100'}%;
    display: flex;
    flex-direction: ${props => props.direction ? props.direction : 'row'};
    margin: 3.5rem;
`

export { Container }