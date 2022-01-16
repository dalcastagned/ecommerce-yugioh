import styled from 'styled-components'
import { MdDelete } from "react-icons/md";

export const Container = styled.div`
    width: 100vw;
    max-width: 800px;
    margin: 0 auto;
    padding: 30px 16px;

    h1{ 
        color: ${(props) => props.theme.text}; 
        text-align: center;
    }
`

export const ContainerInfo = styled.div`
    margin-bottom: 30px;
    display: flex;
    justify-content: space-between;
    align-items: center;

    h1 { 
        color: ${(props) => props.theme.text}; 

          
        @media screen and (max-width: 480px){
            font-size: 20px;
        }
    }

    p {
        color: ${(props) => props.theme.text}; 
        font-size: 24px;    
        
        @media screen and (max-width: 480px){
            font-size: 16px;
        }
    }
`


export const ContainerItem = styled.div`
    display: grid;
    grid-template-columns: 50px 1fr 110px 25px;
    border: 2px solid ${(props) => props.theme.border};
    padding: 10px;
    margin-top: 10px;
             
    @media screen and (max-width: 350px){
        grid-template-columns: 50px 1fr 70px 25px;
        }

    img {
        width: 50px;
        display: flex;
        align-items: center;
        cursor: pointer;  

    @media screen and (max-width: 350px){
        width: 40px;
    }
    }

    h1 {     
        color: ${(props) => props.theme.text}; 
        font-size: 16px;
        padding-left: 20px;
        display: flex;
        align-items: center;
        cursor: pointer;

         
        @media screen and (max-width: 350px){
            font-size: 12px;
            padding-left: 10px;
        }
    }

    p {
        color: ${(props) => props.theme.text}; 
        font-size: 16px;
        display: flex;
        align-items: center;
        padding-left: 20px; 

        @media screen and (max-width: 350px){
            font-size: 12px;
            padding-left: 10px;
        }
    }
`

export const DeleteIcon = styled(MdDelete)`
    color: ${(props) => props.theme.text}; 
    font-size: 25px;
    margin: auto;
    cursor: pointer;
`