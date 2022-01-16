import React, { useState, useEffect } from 'react'
import { useParams } from 'react-router-dom';
import { getCards } from '../../services/Api'
import Card from '../../components/Card';
import {
    Container,
    ContainerCards,
    Title
} from './elements'

const MoreCardsPage = () => {

    const params = useParams();
    const [cards, setCards] = useState([]);
    const [currentPage, setCurrentPage] = useState(1);

    useEffect(() => {
        getCards(`?race=${params.race}&_page=${currentPage}&_limit=15`)
            .then((data) => {
                setCards([...cards, ...data]);
            })
    // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [params.race, currentPage]);

    useEffect(() => {
        const intersectionObserver = new IntersectionObserver(entries => {
            if (entries.some(entry => entry.isIntersecting)) {
                setCurrentPage((currentValue) => currentValue + 1);
            }
        })
        intersectionObserver.observe(document.querySelector('#sentinel'));
        return () => intersectionObserver.disconnect();
    }, []);

    return (
        <Container>
            <Title>{`Cartas da Raça: ${params.race}`}</Title>
            <ContainerCards>
                {
                    cards.map((card, index) =>
                        <div key={index}>
                            <Card
                                index={index}
                                card={card}
                            />
                        </div>
                    )
                }
                <p id="sentinel"></p>
            </ContainerCards>
        </Container>
    )
}

export default MoreCardsPage
