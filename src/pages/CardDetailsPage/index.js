import React, { useState, useEffect } from 'react'
import { useParams } from 'react-router-dom';
import { getCards } from '../../services/Api'
import {
    ContainerImages,
    ErrorImg,
    LoadingIMG,
} from '../../styles/globalStyles'
import {
    Container,
    Title,
    CardImage,
    ContainerDescription,
    ContainerInfo,
    Description,
    Level,
    Attribute,
    Race,
    Type,
    Attack,
    Defense,
    Price,
    ContainerButtons,
    AddCartIcon,
    AddFavIcon
} from './elements'

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
            <Container>
                <Title>{cardInfo[0].name}</Title>
                <ContainerInfo>
                    <CardImage alt={`Card ${cardInfo[0].name}`} src={cardInfo[0].card_images[0].image_url} />
                    <ContainerDescription>
                        <Description>{`Descrição: ${cardInfo[0].desc}`}</Description>
                        <Level>{`Carta de nível ${cardInfo[0].level}`}</Level>
                        <Race>{`Raça: ${cardInfo[0].race}`}</Race>
                        <Attribute>{`Atributo: ${cardInfo[0].attribute}`}</Attribute>
                        <Type>{`Tipo: ${cardInfo[0].type}`}</Type>
                        <Attack>{`Ataque: ${cardInfo[0].atk}`}</Attack>
                        <Defense>{`Defesa: ${cardInfo[0].def}`}</Defense>
                        <Price>{`Preço: R$ ${cardInfo[0].card_prices[0].amazon_price}`}</Price>
                        <ContainerButtons>
                            <AddCartIcon />
                            <AddFavIcon />
                        </ContainerButtons>
                    </ContainerDescription>
                </ContainerInfo>
            </Container>
        )
    }
}

export default CardDetailsPage
