import { useContext } from 'react';
import { CartContext } from '../../contexts/Cart';
import {
    Container,
    ContainerItem,
    DeleteIcon,
    ContainerInfo
} from './elements'

const CartPage = () => {

    const { cart, removeItem, total } = useContext(CartContext)

    if (cart.length === 0) {
        return (
            <Container>
                <h1>Carrinho Vazio</h1>
            </Container>
        )
    } else {
        return (
            <Container>
                <ContainerInfo>
                    <h1>Carrinho</h1>
                    <p>{`Total R$ ${total.toFixed(2)}`}</p>
                </ContainerInfo>
                {cart.map((cart, index) => (
                    <ContainerItem key={index}>
                        <img alt={`Item ${cart.name} no carrinho`} src={cart.card_images[0].image_url_small} />
                        <h1>{cart.name}</h1>
                        <p>{`R$ ${cart.card_prices[0].amazon_price}`}</p>
                        <DeleteIcon
                            onClick={() => removeItem(cart.idCard)}
                        />
                    </ContainerItem>
                ))}
            </Container>
        )
    }
}

export default CartPage
