import React, { useState, useEffect } from 'react'
import { getCards } from '../../services/Api'
import SlideShow from '../SlideShow/SlideShow';
import {
    ContainerImages,
    ErrorImg,
    LoadingIMG,
} from '../../styles/globalStyles'

const CardsCarousel = ({ race, isDarkTheme }) => {

    const [cards, setCards] = useState([]);
    const [loaded, setLoaded] = useState(false)
    const [error, setError] = useState(0);

    useEffect(() => {
        getCards(`?race=${race}&_limit=15`)
            .then((data) => {
                setCards(data);
                setLoaded(true);
            })
            .catch(function (err) {
                setError(true);
                setLoaded(true);
            });
    }, [race]);

    if (error === true) {
        return (
            <ContainerImages>
                <ErrorImg src='https://i.ibb.co/GPBYtqK/error.png' alt='Error!' />
            </ContainerImages>
        )
    }
    else if (loaded === false) {
        return (
            <ContainerImages>
                {isDarkTheme
                    ? <LoadingIMG src='https://i.ibb.co/CmhYx2h/loading-light.gif' alt='loading...' />
                    : <LoadingIMG src='https://i.ibb.co/9cV76wq/loading-dark.gif' alt='loading...' />
                }
            </ContainerImages>
        )
    } else {
        return (
            <SlideShow cards={cards} />
        )
    }
}

export default CardsCarousel
