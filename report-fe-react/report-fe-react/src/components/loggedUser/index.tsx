import { useContext, useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { CredentialsDTO } from '../../models/auth';
import * as authService from '../../services/authService';
import { ContextToken } from '../../utils/contextTokenPayload';
import './styles.css';

export default function LoggedUser() {

    const [formData, setFormData] = useState<CredentialsDTO>({
        username: "",
        password: ""
    })

    const navigate = useNavigate();

    const { contextTokenPayload, setContextTokenPayload } = useContext(ContextToken);

    
    function handleClick() {
        authService.logout();
        setContextTokenPayload(undefined);
        navigate("/");

    }

    function handleSubmit(event: any) {
        event.preventDefault();
        authService.loginRequest(formData)
            .then((response) => {
                authService.saveAccessToken(response.data.access_token);
                setContextTokenPayload(authService.getAccessTokenPayload());
                //navigate("/reports")
                console.log(authService.getAccessTokenPayload());
                console.log({contextTokenPayload});
            })
            .catch((error) => {
                console.log("erro no login", error)
            })
    }

    function handleInputChange(event: any) {
        const value = event.target.value;
        const name = event.target.name;
        setFormData({ ...formData, [name]: value });
    }

    return (
        contextTokenPayload && authService.isAuthenticated()
            ? (
                <div className="logged-user-container">
                    <p>{contextTokenPayload.user_name}</p>
                    <span onClick={handleClick}>Sair</span>
                </div>
            )
            : (
                <div className="login-container">
                    <h2 className="loginTextClass">Login</h2>
                    <div className="loginInputClass">
                        <div>
                            <input
                                name="username"
                                value={formData.username}
                                id="inputName"
                                className="inputClassName"
                                type="text"
                                placeholder="Nome"
                                onChange={handleInputChange}
                            />
                            <div className="error-message" data-error="name"></div>
                        </div>
                        <div>
                            <input
                                name="password"
                                value={formData.password}
                                id="inputPassword"
                                className="inputClassPassword"
                                type="password"
                                placeholder="Senha"
                                onChange={handleInputChange}
                            />
                            <div className="error-message" data-error="password"></div>
                        </div>
                        <div>
                            <button
                                name="btnSend"
                                id="btnSend"
                                className="btnClassSend"
                                type="submit"
                                onClick={handleSubmit}>
                                Enviar
                            </button>
                        </div>

                    </div>

                </div>
            )
    );
}