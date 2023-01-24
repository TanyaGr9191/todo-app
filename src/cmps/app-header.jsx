import { Link } from "react-router-dom"
import '@aws-amplify/ui-react/styles.css';
import { ImgContainer } from "./img-container";

export const AppHeader = ({ signOut, user }) => (
    <header className="header full main-layout">
        <div className="main-header ">
            <Link to="/" className="logo">
                <ImgContainer src={`https://res.cloudinary.com/dxwlsxl5s/image/upload/v1674466799/to-do-list_wjntht.png`} alt={`logo-icon`} width={`30px`} divStyle={'logo-icon'} />
                <span className="logo-todo">Todo</span>
                <span className="logo-app">app</span>
            </Link>
            <nav className="navbar">
                <span>Hello, {user.username}!</span>
                <button className="btn-navbar" onClick={signOut}>Sign Out</button>
            </nav>
            <div>
            </div>
        </div>
    </header>
)


