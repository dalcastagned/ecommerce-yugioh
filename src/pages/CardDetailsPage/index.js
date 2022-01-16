import React, { useState, useEffect } from 'react'
import { useParams } from 'react-router-dom';
import { getCards } from '../../services/Api'
import {
    ContainerImages,
    ErrorImg,
    LoadingIMG,
} from '../../styles/globalStyles'

const CardDetailsPage = ({ isDarkTheme }) => {

    const params = useParams();
    const [cardInfo, setCardInfo] = useState([]);
    const [loaded, setLoaded] = useState(false)
    const [error, setError] = useState(0);

    useEffect(() => {
        getCards(`?race=${params.race}&id=${params.id}`)
            .then((data) => {
                setCardInfo(data);
                setLoaded(true);
                console.log(data)
            })
            .catch(function (err) {
                setError(true);
                setLoaded(true);
            });
    }, [params.race, params.id]);

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
            <div>
                <h1>{cardInfo[0].name}</h1>
                <img alt={`Card ${cardInfo[0].name}`} src={cardInfo[0].card_images[0].image_url} />
                <p>{`Descrição: ${cardInfo[0].desc}`}</p>
                <p>{`Carta de nível ${cardInfo[0].level}`}</p>
                <p>{`Atributo: ${cardInfo[0].attribute}`}</p>
                <p>{`Raça: ${cardInfo[0].race}`}</p>
                <p>{`Tipo: ${cardInfo[0].type}`}</p>
                <p>{`Ataque: ${cardInfo[0].atk}`}</p>
                <p>{`Defesa: ${cardInfo[0].def}`}</p>
                <p>{`Preço: R$ ${cardInfo[0].card_prices[0].amazon_price}`}</p>
            </div>
        )
    }
}

export default CardDetailsPage
