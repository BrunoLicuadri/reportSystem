import './styles.css'
import { useEffect, useState } from "react";
import { useSearchParams } from "react-router-dom";
import { complaintDTO } from "../../models/complaint";
import QueryLink from "../queryLinks";
import * as complaintService from '../../services/complaintService'


export default function ComplaintCard() {

    const[searchParams, setSearchParams] = useSearchParams();

    const[complaints, setComplaints] = useState<complaintDTO[]>([]);

    useEffect(()=>{
        complaintService.findAll()
            .then( response =>{
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