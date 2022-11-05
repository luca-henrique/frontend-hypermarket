import { useDispatch } from 'react-redux'
import styles from './ProductItem.module.css'
import { changerProductSelected } from 'src/store/action/product.action'

import { Container, Price, Title, Button } from './style'

const ProductItem = ({ inputCart, item }) => {
  const dispatch = useDispatch()

  const styleContainer = `${styles.card} ${styles.enterLeft} ${
    item.isSelected && styles.disable
  }`

  //Criar hook
  const addItemCart = () => {
    if (!item.isSelected) {
      inputCart(item)
      dispatch(changerProductSelected(item.id))
    }
  }

  return (
    <div className={styleContainer} key={item.id}>
      <img src={item.img} alt={item.title} />
      <Container>
        <Title>{item.title}</Title>
        <Price>
          {item.price.toLocaleString('pt-br', {
            style: 'currency',
            currency: 'BRL',
          })}
        </Price>
        <Button onClick={addItemCart}>Adicionar</Button>
      </Container>
    </div>
  )
}

export default ProductItem
