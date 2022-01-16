import React, {useContext} from 'react'
import { useNavigate } from "react-router";
import { CartContext } from '../../contexts/Cart';
import {
    ContainerCarousel,
    AddCartIcon,
    AddFavIcon,
    ContainerButtons,
} from './elements'

const Card = ({ card, index }) => {

    const {addItem} = useContext(CartContext)
    const handleDragStart = (e) => e.preventDefault();
    const navigate = useNavigate();

    return (
        <ContainerCarousel>
            <h1 onClick={() => navigate(`/card/${card.race}/${card.id}`)}>
                {card.name.length > 28
                    ? card.name.substring(0, 25) + "..."
                    : card.name
                }
            </h1>
            <img onClick={() => navigate(`/card/${card.race}/${card.id}`)} key={index} src={card.card_images[0].image_url_small} alt="Card" onDragStart={handleDragStart} />
            <p>R$<span>{card.card_prices[0].amazon_price}</span></p>
            <ContainerButtons>
                <AddCartIcon
                    onClick={() => {
                        addItem(card)
                    }}
                />
                <AddFavIcon />
            </ContainerButtons>
        </ContainerCarousel>
    )
}

export default Card


