import styled from 'styled-components'
import { FaCartPlus, FaHeart } from 'react-icons/fa';

export const Container = styled.div`
    display: flex;
    flex-direction: column;
    width: 100vw;
    padding: 0 16px;
`

export const ContainerInfo = styled.div`
    display: flex;
    justify-content: center;
    max-width: 800px;
    margin: 0 auto;
    padding-top: 40px;
 
    @media screen and (max-width: 780px){
        flex-direction: column;
        align-items: center;
    }
`

export const Title = styled.h1`
    text-align: center;
    color: ${(props) => props.theme.text};
    padding-top: 40px;
`

export const CardImage = styled.img`
    width: 300px;
    
    @media screen and (max-width: 480px){
        width: 240px;
    }
`

export const ContainerDescription = styled.div`
    display: flex;
    flex-direction: column;
    color: ${(props) => props.theme.text};
    padding-left: 20px;
       
    @media screen and (max-width: 780px){
        padding-left: 0px;
    }
`

export const Description = styled.p`

    @media screen and (max-width: 780px){
        padding-top: 40px;
        }
`

export const Level = styled.p`
    padding-top: 20px;
`

export const Attribute = styled.p`
    padding-top: 20px;
`

export const Race = styled.p`
    padding-top: 20px;
`

export const Type = styled.p`
    padding-top: 20px;
`

export const Attack = styled.p`
    padding-top: 20px;
`

export const Defense = styled.p`
    padding-top: 20px;
`

export const Price = styled.p`
    padding-top: 20px;
`

export const AddCartIcon = styled(FaCartPlus)`
    color: ${(props) => props.theme.text};
    font-size: 25px;
    cursor: pointer;
`

export const AddFavIcon = styled(FaHeart)`
    color: ${(props) => props.theme.text};
    font-size: 25px;
    cursor: pointer;
`

export const ContainerButtons = styled.div`
    display: flex;
    gap: 25px; 
    padding-top: 20px;
`