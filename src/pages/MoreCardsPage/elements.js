import styled from 'styled-components'


export const Container = styled.div`
    display: flex;
    flex-direction: row;
    flex-wrap: wrap;
    justify-content: center;
    align-items: center;
`

export const ContainerCards = styled.div`
    display: flex;
    flex-direction: row;
    flex-wrap: wrap;
    justify-content: center;
    align-items: center;
    padding: 40px 16px 0 16px;

    div {
        margin: 5px;
    }
`


export const Title = styled.h1`
    text-align: center; 
    color: ${(props) => props.theme.text};
    padding-top: 40px;
`