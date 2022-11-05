import { useState } from 'react'

import CategoryItem from 'src/components/atomic/CategoryItem'

import { Icons } from 'src/assets'
import { Container } from './style'

const { DrinksIcon, PizzaIcon, BurguersIcon, CombosIcon } = Icons

const CategoriesContainerSwiper = () => {
  const [categories, setCategories] = useState([
    {
      id: 1,
      name: 'Pizza',
      isActive: false,
      icon: <PizzaIcon />,
    },
    {
      id: 2,
      name: 'Bebidas',
      isActive: false,
      icon: <DrinksIcon />,
    },
    {
      id: 3,
      name: 'Sobremesas',
      isActive: false,
      icon: <PizzaIcon />,
    },
    {
      id: 4,
      name: 'Combos',
      isActive: false,
      icon: <CombosIcon />,
    },
    {
      id: 5,
      name: 'Burguers',
      isActive: false,
      icon: <BurguersIcon />,
    },
  ])

  const selectecCategory = id => {
    const index = categories.map(e => e.id).indexOf(id)
    const updateRoutes = [...categories]

    // Verificar se tem outro fora o clicado ativado
    updateRoutes.map(item => {
      if (item.id !== id && item.isActive) {
        const searchOtherActive = categories.map(e => e.id).indexOf(item.id)
        updateRoutes[searchOtherActive].isActive = false
      }
    })

    updateRoutes[index].isActive = !updateRoutes[index].isActive
    setCategories(updateRoutes)
  }

  return (
    <div>
      <h4 style={{ marginBottom: '12px' }}>Promoções</h4>
      <Container>
        {[1].map(item => {
          return (
            <div
              style={{
                width: '100%',
                height: '168px',
                borderRadius: '12px',
                background: '#6ECB9E',
              }}
            ></div>
          )
        })}
      </Container>
    </div>
  )
}

export default CategoriesContainerSwiper
