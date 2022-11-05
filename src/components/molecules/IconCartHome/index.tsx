import { useDispatch, useSelector } from 'react-redux'
import { changerVisibleModalCart } from 'src/store/action/cart.action'

import { Button, Badge } from './style'

const style = { color: '#fff', fontSize: '18px' }

const IconCartHome = () => {
  const cart = useSelector(state => state.cart.data)
  const dispatch = useDispatch()

  return (
    <div>
      <Button onClick={() => dispatch(changerVisibleModalCart())}>
        <ion-icon name="cart-outline" style={style} />
        {cart.length !== 0 ? <Badge>{cart.length}</Badge> : ''}
      </Button>
    </div>
  )
}

export default IconCartHome
