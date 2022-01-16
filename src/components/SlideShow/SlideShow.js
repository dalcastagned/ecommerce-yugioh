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
  ContainerButtons
} from './elements'

const SlideShow = ({ cards }) => {

  const handleDragStart = (e) => e.preventDefault();
  const navigate = useNavigate();

  console.log(cards)

  const items =
    cards.map((card, index) => (
      <ContainerCarousel>
        <img key={index} src={card.card_images[0].image_url_small} alt="Card" onDragStart={handleDragStart} />
        <h1 onClick={() => navigate(`/card/${card.race}/${card.id}`)}>
          {card.name.length > 15
            ? card.name.substring(0, 12) + "..."
            : card.name
          }
        </h1>
        <p>R$<span>{card.card_prices[0].amazon_price}</span></p>
        <ContainerButtons>
          <AddCartIcon />
          <AddFavIcon />
        </ContainerButtons>
      </ContainerCarousel>))

  const responsive = {
    0: { items: 1 },
    350: { items: 2 },
    550: { items: 3 },
    700: { items: 4 },
    850: { items: 5 },
    1024: { items: 6 },
    1200: { items: 7 },
    1600: { items: 9 },
    2000: { items: 12 },
  }

  return (

    <Container>
      <ContainerTitle>
        <h1 onClick={() => navigate("/card/" + cards[0].race)}>{`Raça: ${cards[0].race}`}</h1>
        <button onClick={() => navigate("/card/" + cards[0].race)}>Ver Mais</button>
      </ContainerTitle>
      <AliceCarousel mouseTracking disableButtonsControls={true} items={items} responsive={responsive} disableDotsControls={true} paddingRight={25} />
    </Container>
  )
}

export default SlideShow