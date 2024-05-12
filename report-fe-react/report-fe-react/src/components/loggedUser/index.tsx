/* eslint-disable @typescript-eslint/no-explicit-any */
import './styles.css';
import { useContext, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { ContextToken } from '../../utils/contextTokenPayload';
import FormInput from '../formInput';
import * as authService from '../../services/authService';
import * as forms from '../../utils/forms';


export default function LoggedUser() {

    const [formData, setFormData] = useState<any>({
        username: {
            value: "",
            id: "username",
            name: "username",
            type: "text",
            placeholder: "Email",
            validation: function (value: string) {
                //return /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/.test(value.toLowerCase());
                return /^.{3,15}$/.test(value);
            },
            message: "Informe um usuário válido.",
        },
        password: {
            value: "",
            id: "password",
            name: "password",
            type: "password",
            placeholder: "Senha",
            validation: function (value: string) {
                //return /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/.test(value.toLowerCase());
                return /^.{6,15}$/.test(value);
            },
            message: "Min de 3 e máx de 15 caracteres",
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
        authService.loginRequest(forms.toValues(formData))
            .then((response) => {
                authService.saveAccessToken(response.data.access_token);
                setContextTokenPayload(authService.getAccessTokenPayload());
            })
            .catch((error) => {
                console.log("erro no login", error)
            })
    }

    function handleInputChange(event: any) {
        const result = forms.updateAndValidate(formData, event.target.name, event.target.value);
        setFormData(result);
    }

    function handleTurnDirty(name: string){
        const newFormData = forms.dirtyAndValidate(formData, name);
        setFormData(newFormData);
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
                                onTurnDirty={handleTurnDirty}
                                onChange={handleInputChange}
                            />
                            <div className="error-message" data-error="name" >{formData.username.message}</div>
                        </div>
                        <div>
                            <FormInput
                                {...formData.password}
                                className="inputClassPassword"
                                onTurnDirty={handleTurnDirty}
                                onChange={handleInputChange}
                            />
                            <div className="error-message" data-error="password">{formData.password.message}</div>
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