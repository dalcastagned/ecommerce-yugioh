import React from 'react'
import AliceCarousel from 'react-alice-carousel';
import 'react-alice-carousel/lib/alice-carousel.css';
import { useNavigate } from "react-router";
import Card from '../Card';
import {
  Container,
  ContainerTitle,
} from './elements'

const SlideShow = ({ cards }) => {

  const navigate = useNavigate();

  const items =
    cards.map((card, index) => (
      <Card card={card} index={index} />
    ))

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
        <button onClick={() => navigate("/card/" + cards[0].race)}>
          Ver Mais
        </button>
      </ContainerTitle>
      <AliceCarousel mouseTracking disableButtonsControls={true} items={items} responsive={responsive} disableDotsControls={true} paddingRight={10} />
    </Container>
  )
}

export default SlideShow