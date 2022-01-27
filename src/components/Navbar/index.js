import React from 'react'
import { FaHome, FaShoppingCart } from 'react-icons/fa'
import {
    NavDesktop,
    NavbarContainerDesktop,
    NavLogo,
    NavIcon,
    NavMenuDesktop,
    NavItemDesktop,
    NavLinksDesktop,
    ThemeButton,
    DarkIcon,
    LightIcon,
    NavMobile,
    NavLinksMobile,
    NavMenuMobile,
    NavItemMobile,
} from './elements'

const Navbar = ({ isDarkTheme, setIsDarkTheme }) => {

    const changeTheme = () => {
        setIsDarkTheme(!isDarkTheme)
        localStorage.setItem("theme", !isDarkTheme);
    }

    return (
        <>
            <NavDesktop>
                <NavbarContainerDesktop>
                    <NavLogo to="/">
                        <NavIcon src='https://i.ibb.co/zPsLYHV/Yu-Gi-Oh.png' />Yu-Gi-Oh
                    </NavLogo>
                    <NavMenuDesktop>
                        <NavItemDesktop>
                            <NavLinksDesktop to='/'>
                                <div>
                                    <FaHome className='icon' />
                                </div>
                            </NavLinksDesktop>
                        </NavItemDesktop>
                        <NavItemDesktop>
                            <NavLinksDesktop to='/carrinho'>
                                <div>
                                    <FaShoppingCart className='icon' />
                                </div>
                            </NavLinksDesktop>
                        </NavItemDesktop>
                        <NavItemDesktop>
                            {isDarkTheme
                                ? <ThemeButton onClick={changeTheme}><LightIcon /></ThemeButton>
                                : <ThemeButton onClick={changeTheme}><DarkIcon /> </ThemeButton>
                            }
                        </NavItemDesktop>
                    </NavMenuDesktop>
                </NavbarContainerDesktop>
            </NavDesktop>
            <NavMobile>
                    <NavMenuMobile>
                        <NavItemMobile $border={true}>
                            <NavLinksMobile to='/'>
                                <div>
                                    <FaHome className='icon' />
                                </div>
                            </NavLinksMobile>
                        </NavItemMobile>
                        <NavItemMobile $border={true}>
                            <NavLinksMobile to='/carrinho'>
                                <div>
                                    <FaShoppingCart className='icon' />
                                </div>
                            </NavLinksMobile>
                        </NavItemMobile>
                        <NavItemMobile $border={false}>
                            {isDarkTheme
                                ? <ThemeButton onClick={changeTheme}><LightIcon /></ThemeButton>
                                : <ThemeButton onClick={changeTheme}><DarkIcon /> </ThemeButton>
                            }
                        </NavItemMobile>
                    </NavMenuMobile>
            </NavMobile>
        </>
    )
}

export default Navbar

