/* eslint-disable @typescript-eslint/no-explicit-any */
import { useEffect, useState } from "react";
import { Link, useNavigate, useParams } from "react-router-dom";
import Select from "react-select";
import * as complaintService from '../../services/complaintService';
import * as forms from '../../utils/forms';
import FormInput from "../formInput";
import FormTextarea from '../formTextarea';
import {ComplaintStatus} from '../../models/complaint';
import './styles.css';


export default function ComplaintForms() {

    const params = useParams();
    const navigate = useNavigate();


    const isEditing = params.compId !== "create";


    const [formData, setFormData] = useState<any>({
        resident: {
            value: "",
            id: "resident",
            name: "resident",
            type: "text",
            placeholder: "Usuário",
            validation: function (value: any) {
                return /^.{3,15}$/.test(value);
            },
            message: "Nome deve ter min de 3 caracteres e máx de 15"
        },
        unit: {
            value: "",
            id: "unit",
            name: "unit",
            type: "number",
            placeholder: "Apto",
            validation: function (value: any) {
                return /^[1-9][0-9]{2,3}$/.test(value);
            },
            message: "Apto deve ter 3 ou 4 e não pode iniciar com 0"
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
            message: "Descrição deve ter pelo menos 10 caracteres"
        }
    });



    useEffect(() => {
        if (isEditing) {
            complaintService.findById(Number(params.compId))
                .then(response => {
                    setFormData(forms.updateAll(formData, response.data));
                    console.log(response.data);
                    console.log("Resident = ", typeof(response.data.resident));
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
            ? complaintService.updateRequest(requestBody)
            : complaintService.insertRequest(requestBody);

        request.then(() => {
            navigate("/complaints");
        })
        .catch( (error)=> {
            console.log(console.log(requestBody));
            console.log("ERRO -> ", error.response.data);
        })

    }

    const complaintStatus = [ComplaintStatus];

    return (
        <main>
            <section id="report-form-section" className="gkr-container">
                <div className="gkr-report-form-container">
                    <form className="gkr-card gkr-form" onSubmit={handleSubmit}>
                        <h2>Dados da Nova Reclamação</h2>
                        <div className="gkr-form-controls-container">
                            <div>
                                <FormInput
                                    {...formData.resident}
                                    className="gkr-form-control"
                                    onTurnDirty={handleTurnDirty}
                                    onChange={handleInputChange}
                                />
                                <div className='gkr-form-error'>{formData.resident.message}</div>
                            </div>
                            <div>
                                <FormInput
                                    {...formData.unit}
                                    className="gkr-form-control"
                                    onTurnDirty={handleTurnDirty}
                                    onChange={handleInputChange}
                                />
                                <div className='gkr-form-error'>{formData.unit.message}</div>
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
                            <div>
                               <Select options={complaintStatus} />

                            </div>
                        </div>

                        <div className="gkr-report-form-buttons">
                            <Link to="/complaints">
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