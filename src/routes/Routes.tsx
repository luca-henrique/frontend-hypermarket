import { lazy, Suspense } from 'react'
import { Switch, Route, Redirect } from 'react-router-dom'

import Home from 'src/pages/Home'
import SignIn from 'src/pages/SignIn'
import Menu from 'src/pages/Menu/index.js'

const GenericNotFound = lazy(() =>
  import('src/pages/GenericNotFound/GenericNotFound').then(module => ({
    default: module.GenericNotFound,
  })),
)

const Routes = () => {
  return (
    <Suspense fallback={<p>Carregando...</p>}>
      <Switch>
        <Route exact path="/" component={Home} />
        <Route exact path="/entrar" component={SignIn} />
        <Route exact path="/cardapio" component={Menu} />

        <Route path="/404" component={GenericNotFound} />
        <Redirect to="/404" />
      </Switch>
    </Suspense>
  )
}

export default Routes
