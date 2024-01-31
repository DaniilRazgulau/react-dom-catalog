import { NavLink, Outlet } from "react-router-dom";
import './Layout.css';
import { Container } from "./componenets/Container";

export const Layout = () => {
    return (
        <>
            <header className='header'>
                <Container>
                    <nav className='nav'>
                        <ul className="nav__items">
                            <li className="nav__item"><NavLink to="/">Главная</NavLink></li>
                            <li className="nav__item"><NavLink to="/post">Блог</NavLink></li>
                            <li className="nav__item"><NavLink to="/catalog">Каталог</NavLink></li>
                            <li className="nav__item"><NavLink to="/task">Cписок задач</NavLink></li>
                        </ul>
                    </nav>
                </Container>
            </header>
            <main className="main">
                <Container>
                    <Outlet />
                </Container>
            </main>
            <footer className="footer">
                <Container>
                    2024
                </Container>
            </footer>
          
        </>
    )
}