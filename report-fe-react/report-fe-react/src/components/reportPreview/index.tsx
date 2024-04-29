/* eslint-disable @typescript-eslint/no-explicit-any */
import { useEffect, useState } from 'react';
import { reportDTO } from '../../models/report';
import * as reportService from '../../services/reportService';
import QueryLink from '../queryLinks';
import './styles.css';



export default function ReportPreview() {

    const [reports, setReports] = useState<reportDTO[]>([]);

    useEffect(() => {
        reportService.reportPreview()
            .then(response => {
                setReports(response.data.content)
            })
    }, []);

    return (
        <main>
            <section id="report-section" className="container">
                <h2>Relatórios Operacionais</h2>
                {reports
                    .map((rep: any) => (
                        <QueryLink
                            className={({ isActive }: any) => isActive ? "border-selected dblock" : " "}
                            to={`/reports/${rep.id}`}
                            key={rep.id}
                        >
                            <div className="report-card-item">
                                <div className="dflex">
                                    <p className="date">{rep.date}</p>
                                    <p className="time">{rep.time}</p>
                                </div>
                                <p>{rep.text}</p>
                                <div className="rep-owner">
                                    <p>{rep.user.name}</p>
                                </div>
                            </div>
                        </QueryLink >

                    ))}

            </section>
        </main>
    )
}