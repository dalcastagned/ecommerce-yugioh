import React from 'react'
import CardsCarousel from '../../components/CardsCarousel'
import {
    Title
} from './elements'

const TYPES = [
    "Aqua",
    "Beast-Warrior",
    "Cyberse",
    "Dinosaur",
    "Dragon",
    "Fairy",
    "Fish",
    "Insect",
    "Machine",
    "Plant",
    "Rock",
    "Warrior",
    "Spellcaster"
];

const HomePage = ({ isDarkTheme }) => {
    return (
        <>
            <Title>Bem-Vindo ao Ecommerce Exclusivo de Cartas do Yu-Gi-Oh!</Title>
            <section>
                {
                    TYPES.map((type, index) =>
                        <CardsCarousel key={index} race={type} isDarkTheme={isDarkTheme} />
                    )
                }
            </section>
        </>
    )
}

export default HomePage
