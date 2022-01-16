import styled from 'styled-components'

export const Container = styled.div`
    padding-left: 16px;
`

export const ContainerTitle = styled.div`
    display: flex;
    width: 100%;
    justify-content: space-between;
    align-items: center;
    padding: 50px 0 20px 0;

    h1 {     
        color: ${(props) => props.theme.text};
        font-size: 25px;
        cursor: pointer;

        @media screen and (max-width: 480px){
            font-size: 18px;
        }
    }

    button{
        margin-right: 8px;
        padding: 8px;
        color: ${(props) => props.theme.buttonThemeTextColor};
        background: ${(props) => props.theme.buttonThemeBackground};
        text-decoration: none;
        border-radius: 5px;
        border: none;
        cursor: pointer;
        font-weight: bold;
    }
`