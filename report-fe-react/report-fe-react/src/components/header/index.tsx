import { Link, Outlet } from 'react-router-dom';
import LoggedUser from '../loggedUser';
import './styles.css';


export default function Header() {

    return (
        <>
            <header>
                <nav className="container nav-items">
                    <div>
                        <Link to="/">
                            <h1 className="condoTextClass" >Condomínio Yokay</h1>
                        </Link>
                    </div>
                   <LoggedUser/>
                </nav>
            </header>
            <Outlet />
        </>

    )
}

