import styled from 'styled-components'

export const Footer = styled.div`
    width: 100%;
    height: 40px;
    display: flex;
    justify-content: center;
    align-items: center;
    margin: 25px 0 70px 0;
    
    @media screen and (min-width: 480px){
        margin-bottom: 10px;
    }
`

export const FooterText = styled.p`
    color: ${(props) => props.theme.text}; 
`