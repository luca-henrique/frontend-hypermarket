import { useDispatch } from 'react-redux'
import { changerProductSelected } from 'src/store/action/product.action'


export const useProduct = () => {

    const dispatch = useDispatch()

    const addProductCart = (product,inputCart) => {
        if (!product.isSelected) {
          inputCart(product)
          dispatch(changerProductSelected(product.id))
        }
      }


    return {addProductCart}

}