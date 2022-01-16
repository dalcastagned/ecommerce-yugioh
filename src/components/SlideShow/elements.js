import styled from 'styled-components'
import { FaCartPlus, FaHeart } from 'react-icons/fa';

export const Container = styled.div`
    padding-left: 16px;
`

export const ContainerCarousel = styled.div`
    width: 250px;
    display: flex;
    justify-content: flex-start;
    align-items: center;
    flex-direction: column;
    border: 2px solid ${(props) => props.theme.text};
    padding: 10px;
    height: 320px;
  
    @media screen and (max-width: 530px){
            width: 450px;
        }

    @media screen and (max-width: 480px){
            width: 350px;
        }
        
    @media screen and (max-width: 380px){
            width: 250px;
        }

    img{
        width: 120px;
        padding-top: 10px;
        cursor: pointer;
    }

    h1 {
        cursor: pointer;
        color: ${(props) => props.theme.text};
        font-size: 15px;
        text-align: center;
        padding-top: 10px;
    }

    p {
        color: ${(props) => props.theme.text};
        font-weight: bold;
        padding-top: 20px;
    }

    span {
        padding-left: 5px;
    }
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

export const AddCartIcon = styled(FaCartPlus)`
    color: ${(props) => props.theme.text};
    font-size: 25px;
`

export const AddFavIcon = styled(FaHeart)`
    color: ${(props) => props.theme.text};
    font-size: 25px;
`

export const ContainerButtons = styled.div`
    display: flex;
    gap: 25px; 
    padding-top: 20px;
`