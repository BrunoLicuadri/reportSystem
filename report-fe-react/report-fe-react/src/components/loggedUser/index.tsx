import { useContext, useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { CredentialsDTO } from '../../models/auth';
import * as authService from '../../services/authService';
import { ContextToken } from '../../utils/contextTokenPayload';
import './styles.css';
import FormInput from '../formInput';

export default function LoggedUser() {

    const [formData, setFormData] = useState<any>({
        username: {
            value: "",
            id: "username",
            name: "username",
            type: "text",
            placeholder: "Email",
            validation: function (value: string) {
                return /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/.test(value.toLowerCase());
            },
            message: "Favor informar um usuário válido",
        },
        password: {
            value: "",
            id: "password",
            name: "password",
            type: "password",
            placeholder: "Senha",
        }
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
        authService.loginRequest({username: formData.username.value, password: formData.password.value})
            .then((response) => {
                authService.saveAccessToken(response.data.access_token);
                setContextTokenPayload(authService.getAccessTokenPayload());
            })
            .catch((error) => {
                console.log("erro no login", error)
            })
    }

    function handleInputChange(event: any) {
        const value = event.target.value;
        const name = event.target.name;
        setFormData({ ...formData, [name]: {...formData[name], value: value} });
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
                            <FormInput
                                {...formData.username}
                                className="inputClassName"
                                onChange={handleInputChange}
                            />
                            <div className="error-message" data-error="name"></div>
                        </div>
                        <div>
                            <FormInput
                                {...formData.password}
                                className="inputClassPassword"
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