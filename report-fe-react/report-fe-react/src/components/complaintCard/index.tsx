import './styles.css'
import { useEffect, useState } from "react";
import { useSearchParams } from "react-router-dom";
import { complaintDTO } from "../../models/complaint";
import QueryLink from "../queryLinks";
import * as complaintService from '../../services/complaintService'
import { AccessTokenPayloadDTO } from '../../services/auth';
import * as authService from '../../services/authService'
import editIcon from '../../assets/images/edit.svg'
import deleteIcon from '../../assets/images/delete.svg'


export default function ComplaintCard() {

    const [searchParams, setSearchParams] = useSearchParams();

    const [tokenPayload, setTokenPayload] = useState<AccessTokenPayloadDTO>();
    const [complaints, setComplaints] = useState<complaintDTO[]>([]);

    const user = tokenPayload?.user_name;

    useEffect(() => {
        if (authService.isAuthenticated()) {
            const payload = authService.getAccessTokenPayload();
            setTokenPayload(payload);
        }

        complaintService.findAll()
            .then(response => {
                setComplaints(response.data.content)
            })
    }, []);



    return (
        <main>
            <section id="complain-section" className="container">
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

                {complaints
                    .map((comp) => (
                        user == comp.resident.name || tokenPayload?.authorities.includes("ROLE_ADMIN")
                            ? (<>

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
                                <div className="editDeleteMenu">
                                    <div className="deleteIcon mr20 ml20"><img src={deleteIcon} /></div>
                                    <div className="editIcon ml20"><img src={editIcon} /></div>
                                </div>
                            </>
                            )
                            : (
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
                            )
                    ))}
            </section>
        </main>

    );

}