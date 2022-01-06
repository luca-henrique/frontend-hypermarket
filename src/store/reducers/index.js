import { combineReducers } from 'redux'

import { userReducer } from './user.reducer'
import { cartReducer } from './cart.reducer'
import { productReducer } from './product.reducer'
import { orderReducer } from './order.reducer'

import { connectRouter } from 'connected-react-router'

const createRootReducer = history =>
  combineReducers({
    router: connectRouter(history),
    user: userReducer,
    product: productReducer,
    cart: cartReducer,
    order: orderReducer,
  })
export default createRootReducer
