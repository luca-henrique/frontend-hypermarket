import Lottie from 'react-lottie'
import { useHistory } from 'react-router'
import { isMobile } from 'react-device-detect'
import AnimationBeer from 'src/assets/animation/beer.json'
import { Container } from './styled'

const Home = () => {
  const history = useHistory()

  const defaultOptions = {
    loop: !isMobile,
    speed: 200,
    autoplay: true,
    animationData: AnimationBeer,
    rendererSettings: {
      preserveAspectRatio: 'xMidYMid slice',
    },
  }

  return (
    <Container>
      <Lottie
        options={defaultOptions}
        height={300}
        width={300}
        eventListeners={[
          {
            eventName: 'complete',
            callback: () => {
              if (isMobile) history.push('/produtos')
            },
          },
        ]}
      />
    </Container>
  )
}

export default Home
