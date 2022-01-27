import styled from 'styled-components'
import { FaCartPlus } from 'react-icons/fa';

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


export const AddCartIcon = styled(FaCartPlus)`
    color: ${(props) => props.theme.text};
    font-size: 25px;
    cursor: pointer;
`

export const ContainerButtons = styled.div`
    display: flex;
    gap: 25px; 
    padding-top: 10px;
`