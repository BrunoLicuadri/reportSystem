/* eslint-disable @typescript-eslint/no-explicit-any */
import { useEffect, useState } from "react";
import { Link, useNavigate, useParams } from "react-router-dom";
import * as reportService from '../../services/reportService';
import * as forms from '../../utils/forms';
import FormInput from "../formInput";
import FormTextarea from '../formTextarea';
import './styles.css';


export default function ReportForms() {

    const params = useParams();
    const navigate = useNavigate();

    const isEditing = params.repoId !== "create";

    const [formData, setFormData] = useState<any>({
        user: {
            value: "",
            id: "user",
            name: "user",
            type: "text",
            placeholder: "Usuário",
            validation: function (value: any) {
                return /^.{3,15}$/.test(value);
            },
            message: "Nome deve ter min de 3 caracteres e máx de 15."
        },
        date: {
            value: "",
            id: "date",
            name: "date",
            type: "text",
            placeholder: "Data",
        },
        time: {
            value: "",
            id: "time",
            name: "time",
            type: "text",
            placeholder: "Hora",
        },
        text: {
            value: "",
            id: "text",
            name: "text",
            type: "text",
            placeholder: "Descrição",
            validation: function (value: any) {
                return /^.{10,}$/.test(value);
            },
            message: "Descrição deve ter pelo menos 10 caracteres."
        }
    });

    useEffect(() => {
        if (isEditing) {
            reportService.findById(Number(params.repoId))
                .then(response => {
                    setFormData(forms.updateAll(formData, response.data));
                    console.log(response.data);
                    console.log("User = ", typeof(response.data.user));
                })
        }
    }, []);


    function handleInputChange(event: any) {
        const result = forms.updateAndValidate(formData, event.target.name, event.target.value);
        setFormData(result);
    }

    function handleTurnDirty(name: string) {
        const newFormData = forms.dirtyAndValidate(formData, name);
        setFormData(newFormData);
    }

    function handleSubmit(event: any) {
        event.preventDefault();

        const formDataValidated = forms.dirtyAndValidateAll(formData);

        if (forms.hasAnyInvalid(formDataValidated)) {
            setFormData(formDataValidated);
            return;
        }

        const requestBody = forms.toValues(formData);
        if (isEditing) {
            requestBody.id = params.repoId;
        }

        const request = isEditing
            ? reportService.updateRequest(requestBody)
            : reportService.insertRequest(requestBody);

        request.then(() => {
            navigate("/reports");
        })
        .catch( (error)=> {
            console.log(console.log(requestBody));
            console.log("ERRO -> ", error.response.data);
        })

    }

    return (
        <main>
            <section id="report-form-section" className="gkr-container">
                <div className="gkr-report-form-container">
                    <form className="gkr-card gkr-form" onSubmit={handleSubmit}>
                        <h2>Dados do Novo Relatório</h2>
                        <div className="gkr-form-controls-container">
                            <div>
                                <FormInput
                                    {...formData.user}
                                    className="gkr-form-control"
                                    onTurnDirty={handleTurnDirty}
                                    onChange={handleInputChange}
                                />
                                <div className='gkr-form-error'>{formData.user.message}</div>
                            </div>
                            <div>
                                <FormInput
                                    {...formData.date}
                                    className="gkr-form-control"
                                    onTurnDirty={handleTurnDirty}
                                    onChange={handleInputChange}
                                />
                                <div className='gkr-form-error'>{formData.date.message}</div>
                            </div>
                            <div>
                                <FormInput
                                    {...formData.time}
                                    className="gkr-form-control"
                                    onTurnDirty={handleTurnDirty}
                                    onChange={handleInputChange}
                                />
                                <div className='gkr-form-error'>{formData.time.message}</div>
                            </div>
                            <div>
                                <FormTextarea
                                    {...formData.text}
                                    className="gkr-form-control gkr-textarea"
                                    onTurnDirty={handleTurnDirty}
                                    onChange={handleInputChange}
                                />
                                <div className='gkr-form-error'>{formData.text.message}</div>
                            </div>
                        </div>

                        <div className="gkr-report-form-buttons">
                            <Link to="/reports">
                                <button type='reset' className="gkr-btn gkr-btn-white">Cancelar</button>
                            </Link>
                            <button type="submit" className="gkr-btn gkr-btn-blue">Salvar</button>
                        </div>
                    </form>
                </div>
            </section>
        </main>
    )
}