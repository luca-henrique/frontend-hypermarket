import { lazy, Suspense } from 'react'
import { Switch, Route, Redirect } from 'react-router-dom'
import Loading from 'src/components/atomic/Loading'

const GenericNotFound = lazy(() =>
  import('src/pages/GenericNotFound/GenericNotFound').then(module => ({
    default: module.GenericNotFound,
  })),
)

const Home = lazy(() =>
  import('src/pages/Home/index').then(module => ({
    default: module.default,
  })),
)

const DashboardProducts = lazy(() =>
  import('src/pages/Menu/index').then(module => ({
    default: module.Home,
  })),
)

const ContainerLoading = () => {
  return (
    <div
      style={{
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'center',
        alignContent: 'center',
        height: '100%',
        width: '100%',
      }}
    >
      <Loading />
    </div>
  )
}

const Routes = () => {
  return (
    <Suspense fallback={<ContainerLoading />}>
      <Switch>
        <Route exact path="/" component={Home} />
        <Route exact path="/produtos" component={DashboardProducts} />
        <Route path="/404" component={GenericNotFound} />
        <Redirect to="/404" />
      </Switch>
    </Suspense>
  )
}

export default Routes
