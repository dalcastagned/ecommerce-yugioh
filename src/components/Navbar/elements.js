import styled from 'styled-components'
import { FaMoon, FaSun } from 'react-icons/fa'
import { Link } from 'react-router-dom'
import { Container } from '../../styles/globalStyles'

export const NavDesktop = styled.nav`
    background: ${(props) => props.theme.background};
    height: 80px;
    font-size: 20px;
    position: fixed;
    top: 0;
    border-bottom: 2px solid ${(props) => props.theme.border};
    z-index: 999;
    width: 100%;
    padding: 0 16px;
`

export const NavMobile = styled.nav`
    background: ${(props) => props.theme.background};
    height: 80px;
    display: flex;
    justify-content: center;
    align-items: center;
    font-size: 20px;
    position: fixed;
    bottom: 0;
    border-top: 2px solid ${(props) => props.theme.border};
    z-index: 999;
    width: 100%;
 
    @media screen and (min-width: 480px){
        display: none;
    }
`

export const NavbarContainerDesktop = styled.div`
    display: flex;
    justify-content: space-between;
    height: 80px;

    ${Container}
`

export const NavLogo = styled(Link)`
    color: ${(props) => props.theme.text};
    justify-content: center;
    cursor: pointer;
    text-decoration: none;
    font-size: 25px;
    display: flex;
    align-items: center;

    @media screen and (max-width: 480px){
        width: 100%;
    }
`

export const NavIcon = styled.img`
    margin-right: 8px;
    width: 40px;    
`

export const NavMenuDesktop = styled.ul`
    display: flex;
    align-items: center;
    list-style: none;
    text-align: center;
    justify-content: flex-end;

    @media screen and (max-width: 480px){
        display: none;
    }
`

export const NavMenuMobile = styled.ul`
    display: grid;
    list-style: none;
    text-align: center;
    grid-template-columns: 1fr 1fr 1fr 1fr;
    width: 100%;
`

export const NavItemDesktop = styled.li`
    height: 80px;
    border-bottom: 2px solid transparent;

    &:hover{
        border-bottom: 2px solid ${(props) => props.theme.menuItemHover};
    }
`

export const NavItemMobile = styled.li`
    height: 80px;
    display: flex;
    justify-content: center;
    align-items: center;
    border-right: ${({$border, theme}) => ($border ? `2px solid ${theme.border}` : 'none')};
`

export const NavLinksDesktop = styled(Link)`
    color: ${(props) => props.theme.text};
    display: flex;
    align-items: center;
    text-decoration: none;
    padding: 8px 8px;
    height: 100%;

    div {
        border-radius: 50%;
        background: ${(props) => props.theme.buttonThemeBackground};
        height: 40px;
        width: 40px;
        display: flex;
        align-items: center;
        justify-content: center;
    }

    .icon{       
        color: ${(props) => props.theme.buttonThemeTextColor};
    }
`

export const NavLinksMobile = styled(Link)`
    color: ${(props) => props.theme.text};
    display: flex;
    align-items: center;
    text-decoration: none;
    padding: 8px 8px;
    height: 100%;  

    div {
        border-radius: 50%;
        background: ${(props) => props.theme.buttonThemeBackground};
        height: 40px;
        width: 40px;
        display: flex;
        align-items: center;
        justify-content: center;
    }

    .icon{       
        color: ${(props) => props.theme.buttonThemeTextColor};
    }
`

export const ThemeButton = styled.button`
    border-radius: 50%;
    background: ${(props) => props.theme.buttonThemeBackground};
    white-space: nowrap;
    font-size: 20px;
    outline: none;
    border: none;
    cursor: pointer;
    text-decoration: none;
    height: 40px;
    width: 40px;
    margin: 0 8px;
    display: flex;
    justify-content: center;
    align-items: center;

    &:hover{
        transition: all 0.3s easy-out;
    }
`

export const DarkIcon = styled(FaMoon)`
    color: ${(props) => props.theme.buttonThemeTextColor};
`

export const LightIcon = styled(FaSun)`
    color: ${(props) => props.theme.buttonThemeTextColor};
`
