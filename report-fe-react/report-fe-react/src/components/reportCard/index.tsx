/* eslint-disable @typescript-eslint/no-explicit-any */
import { useEffect, useState } from 'react';
import { useSearchParams } from 'react-router-dom';
import { reportDTO } from '../../models/report';
import * as reportService from '../../services/reportService';
import QueryLink from '../queryLinks';
import './styles.css';
import { AccessTokenPayloadDTO } from '../../services/auth';
import * as authService from '../../services/authService'
import editIcon from '../../assets/images/edit.svg'
import deleteIcon from '../../assets/images/delete.svg'




export default function ReportCard() {

    const [searchParams, setSearchParams] = useSearchParams();
    const [tokenPayload, setTokenPayload] = useState<AccessTokenPayloadDTO>();
    const [reports, setReports] = useState<reportDTO[]>([]);

    const user = tokenPayload?.user_name;

    useEffect(() => {
        if (authService.isAuthenticated()) {
            const payload = authService.getAccessTokenPayload();
            setTokenPayload(payload);
        }

        reportService.findAll()
            .then(response => {
                setReports(response.data.content)
            })
    }, []);

    return (
        <main>
            <section id="report-section" className="container">
                <input className="search-put" placeholder='digite a busca' value={searchParams.get("filter") || ""}
                    onChange={(event) => {
                        const filter = event.target.value;
                        if (filter) {
                            setSearchParams({ filter });
                        } else {
                            setSearchParams({})
                        }
                    }}
                />
                {reports
                    .filter((report: any) => {
                        const text = searchParams.get("filter");
                        if (!text) return true;
                        const reportText = report.text.toLowerCase();
                        const reportDate = report.date;
                        return (reportText.startsWith(text.toLowerCase()) || reportDate.startsWith(text));
                    })
                    .map((rep) => (
                        user == rep.user.name || tokenPayload?.authorities.includes("ROLE_ADMIN")
                            ? (<>
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
                                <div className="editDeleteMenu">
                                    <div className="deleteIcon mr20 ml20"><img src={deleteIcon} /></div>
                                    <div className="editIcon ml20"><img src={editIcon} /></div>
                                </div>
                            </>
                            )
                            : (
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
                            )

                    ))}

            </section>
        </main>
    )
}