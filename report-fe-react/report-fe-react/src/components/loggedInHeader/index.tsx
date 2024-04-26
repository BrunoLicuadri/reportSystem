import { useEffect, useState } from 'react';
import { Link, Outlet, useNavigate } from 'react-router-dom';
import { UserDTO } from '../../models/user';
import * as userService from '../../services/userService';
import * as authService from '../../services/authService';
import './styles.css';



export default function LoggedInHeader() {

    const [user, setUser] = useState<UserDTO>();
    const navigate = useNavigate();

    function handleClick(event: any){
        authService.logout();
        navigate("/");

    }


    useEffect(() => {
        userService.getMe()
            .then(response => {
                setUser(response.data);
                console.log(response.data)
            })
            .catch( error => {
               // if (error.response.status === 401){
               //     navigate("/")
               // }
               return console.log("Login error: ", error)
            })
    }, [])

    return (
        <>
            <header>
                <nav className="container nav-items">
                    <div>
                        <Link to="/">
                            <h1 className="condoTextClass" >Condomínio Yokay</h1>
                        </Link>
                    </div>
                    <div className="logged-user-container">
                        <p>{user?.name}</p>
                        <a onClick={handleClick}>Sair</a>
                    </div>
                </nav>
            </header>
            <Outlet />
        </>
    );
}