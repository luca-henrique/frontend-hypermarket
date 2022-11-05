import Products from 'src/components/organism/ListProduts/Products'
import Cart from 'src/components/organism/Cart/Cart'

import IconCartHome from 'src/components/molecules/IconCartHome'

import CategoriesContainerSwiper from 'src/components/organism/CategoriesContainerSwiper'

import PromotionContainerSwiper from 'src/components/organism/PromotionContainerSwiper'

import { Container } from './style'

export const Home = () => {
  return (
    <Container>
      <div
        style={{
          display: 'flex',
          flexDirection: 'row',
          justifyContent: 'space-between',
        }}
      >
        <div>
          <h1 style={{ color: '#FDAA5D', fontSize: '28px' }}>
            Hyper<span style={{ color: '#4AB7B6' }}>Market</span>
          </h1>
        </div>
        <IconCartHome />
      </div>
      <div style={{ marginTop: '22px', marginBottom: '28px' }}>
        <input
          style={{
            width: '100%',
            height: '54px',
            border: 'none',
            background: '#EFF1F3',
            borderRadius: '12px',
          }}
        />
      </div>
      <PromotionContainerSwiper />
      <CategoriesContainerSwiper />
      <Products />
      <Cart />
    </Container>
  )
}
