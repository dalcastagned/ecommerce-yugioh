import React from 'react'
import CardsCarousel from '../../components/CardsCarousel'

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
        <section>
            {
                TYPES.map((type, index) =>
                    <CardsCarousel key={index} race={type} isDarkTheme={isDarkTheme} />
                )
            }
        </section>
    )
}

export default HomePage
