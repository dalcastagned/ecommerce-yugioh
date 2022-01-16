import React from 'react'
import AliceCarousel from 'react-alice-carousel';
import 'react-alice-carousel/lib/alice-carousel.css';
import { useNavigate } from "react-router";
import {
  Container,
  ContainerTitle,
  ContainerCarousel,
  AddCartIcon,
  AddFavIcon,
  ContainerButtons,
} from './elements'

const SlideShow = ({ cards }) => {

  const handleDragStart = (e) => e.preventDefault();
  const navigate = useNavigate();

  console.log(cards)

  const items =
    cards.map((card, index) => (
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
          <AddCartIcon />
          <AddFavIcon />
        </ContainerButtons>
      </ContainerCarousel>))

  const responsive = {
    0: { items: 1 },
    530: { items: 2 },
    780: { items: 3 },
    1050: { items: 4 },
    1300: { items: 5 },
    1550: { items: 6 },
    2050: { items: 8 },
  }

  return (

    <Container>
      <ContainerTitle>
        <h1 onClick={() => navigate("/card/" + cards[0].race)}>{`Raça: ${cards[0].race}`}</h1>
        <button onClick={() => navigate("/card/" + cards[0].race)}>Ver Mais</button>
      </ContainerTitle>
      <AliceCarousel mouseTracking disableButtonsControls={true} items={items} responsive={responsive} disableDotsControls={true} paddingRight={10} />
    </Container>
  )
}

export default SlideShow