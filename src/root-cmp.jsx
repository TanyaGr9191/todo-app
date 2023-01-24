import { Route, Routes } from 'react-router-dom'
import routes from './routes'
import { AppHeader } from './cmps/app-header'
import { AppFooter } from './cmps/app-footer'
import { withAuthenticator } from '@aws-amplify/ui-react';
import './assets/sass/styles.scss'
import { MultiBackend } from 'react-dnd-multi-backend'
import { HTML5toTouch } from 'rdndmb-html5-to-touch'
import { DndProvider } from "react-dnd";

function App({signOut, user}) {
    return (
        <DndProvider  backend={MultiBackend} options={HTML5toTouch} >
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
        </DndProvider>
    )
}

export default withAuthenticator(App)