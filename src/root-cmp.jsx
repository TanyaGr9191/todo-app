import { Route, Routes } from 'react-router-dom'
import routes from './routes'
import { AppHeader } from './cmps/app-header'
import { AppFooter } from './cmps/app-footer'
import { withAuthenticator } from '@aws-amplify/ui-react';
import './assets/sass/styles.scss'

function App({signOut, user}) {
    return (
        <section className="app main-layout">
            <AppHeader signOut={signOut} user={user}/>
            <main>
                <Routes>
                    {routes.map(route =>
                        <Route
                            exact
                            key={route.path}
                            path={route.path}
                            element={route.element} />)}
                </Routes>
            </main>
            <AppFooter />
        </section>
    )
}

export default withAuthenticator(App)