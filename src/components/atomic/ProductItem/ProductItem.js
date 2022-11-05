import { useDispatch } from 'react-redux'
import styles from './ProductItem.module.css'
import { changerProductSelected } from 'src/store/action/product.action'

import styled from 'styled-components'

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
`

export const Button = styled.button`
  border: 1px solid #fdaa5d;
  border-radius: 12px;
  color: #fdaa5d;
  height: 36px;
  background: #fff;
  width: 100%;
  margin-top: 4px;
`

const Title = styled.span`
  font-size: 14px;
  margin-top: 8px;
  text-align: center;
`

const Price = styled.p`
  font-size: 14px;
  text-align: center;
`

const ProductItem = ({ inputCart, item }) => {
  const dispatch = useDispatch()

  const styleContainer = `${styles.card} ${styles.enterLeft} ${
    item.isSelected && styles.disable
  }`

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
