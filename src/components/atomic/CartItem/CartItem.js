import styles from './CartItem.module.css'

const CartItem = ({ product, isFinish }) => {
  const incrementItem = () => {}
  const decrementItem = () => {}

  const openObs = false

  const openObsBox = () => {}

  return (
    <div className={`${styles.item} ${styles.enterLeft}`}>
      <div className={styles.quantity}>
        {!isFinish && <button onClick={() => decrementItem(product)}>-</button>}
        <p>{product.quantity}</p>
        {!isFinish && <button onClick={() => incrementItem(product)}>+</button>}
      </div>
      <div className={styles.bgImage}>
        <img src={product.img} alt={product.title} />
      </div>
      <div className={styles.product}>
        <h4>{product.title}</h4>
        {!isFinish && (
          <button onClick={openObsBox}>
            {product.obs ? product.obs : 'Adicionar observação'}
          </button>
        )}
      </div>
      <h4 className={styles.price}>R$ {product.currentPrice},00</h4>
    </div>
  )
}

export default CartItem
