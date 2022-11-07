import styles from './style.css'

import { Container, Price, Title, Button } from './style'
import { useProduct } from 'src/hook/useProduct'

export const Product = ({ inputCart, item }:any) => {

  const {addProductCart} = useProduct()

  const styleContainer = `${styles.card} ${styles.enterLeft} ${
    item.isSelected && styles.disable
  }`


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
        <Button onClick={() => addProductCart(item,inputCart)}>Adicionar</Button>
      </Container>
    </div>
  )
}

