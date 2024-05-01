/* eslint-disable @typescript-eslint/no-explicit-any */
import './styles.css';
import { useEffect, useState } from 'react';
import { complaintDTO } from '../../models/complaint';
import QueryLink from '../queryLinks';
import * as compService from '../../services/complaintService';



export default function ComplaintsPreview() {

    const [complaints, setComplaints] = useState<complaintDTO[]>([]);

    useEffect(() => {
        compService.complaintsPreview()
            .then(response => {
                setComplaints(response.data.content)
            })
    }, []);

    return (
        <main>
            <section id="complain-section" className="container">
                <h2>Relatórios de Reclamações</h2>
                {complaints
                    .map((comp) => (
                        <QueryLink
                            className={({ isActive }: any) => isActive ? "border-selected dblock" : " "}
                            to={`/complaints/${comp.id}`}
                            key={comp.id}
                        >
                            <div className="complain-card-item">
                                <div className="dflex">
                                    <p className="date">{comp.date}</p>
                                    <p className="time">{comp.time}</p>
                                </div>
                                <p>{comp.text}
                                </p>
                                <div className="comp-owner">
                                    <p>{comp.resident.name}</p>
                                    <p>{comp.resident.unit}</p>
                                </div>
                            </div>
                        </QueryLink>
                    ))}
            </section>
        </main>
    );
}