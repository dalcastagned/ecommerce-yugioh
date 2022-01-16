import styled, { createGlobalStyle } from "styled-components";

const GlobalStyle = createGlobalStyle`
*{
    box-sizing: border-box;
    padding: 0;
    margin: 0;
    font-family: Poppins, sans-serif;
    -webkit-tap-highlight-color: transparent;
}

body {
    background: ${(props) => props.theme.background};
    margin-top: 80px;

    @media screen and (max-width: 480px){
        margin-bottom: 60px;
    }
}

`;

export const Container = styled.div`
    min-height: calc(100vh - 155px);
  
    @media screen and (max-width: 480px){
        min-height: calc(100vh - 215px);
    }
`

export const LoadingIMG = styled.img`
    height: 100px;
    width: 100px;
`
export const ErrorImg = styled.img`
    height: 100px;
    width: 100px;
`

export const ContainerImages = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    height: calc(100vh - 155px);
    width: 100%;
    
    @media screen and (max-width: 480px){
        height: calc(100vh - 215px);
    }
`

export default GlobalStyle