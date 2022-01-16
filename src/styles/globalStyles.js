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
    z-index: 1;
    width: 100%;
    max-width: 100vw;
    margin-left: auto;
    margin-right: auto;
    padding-right: 20px;
    padding-left: 20px;

    @media screen and (max-width: 991px) {  
        padding-right: 30px;
        padding-left: 30px; 
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
    height: calc(100vh - 120px);
    width: 100%;
`

export default GlobalStyle