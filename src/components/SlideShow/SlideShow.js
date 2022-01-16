import React from 'react'
import AliceCarousel from 'react-alice-carousel';
import 'react-alice-carousel/lib/alice-carousel.css';

const SlideShow = ({ screenshots }) => {

  const handleDragStart = (e) => e.preventDefault();

  const items =
    screenshots.map((screenshots, index) => (
      <img width={"150px"} key={index} src={screenshots} alt="Card" onDragStart={handleDragStart} />
    ))

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
    <AliceCarousel mouseTracking autoPlay={true} autoPlayInterval={3000} disableButtonsControls={true} infinite={true} items={items} responsive={responsive} paddingRight={25} disableDotsControls={true} />
  )
}

export default SlideShow