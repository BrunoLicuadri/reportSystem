import '../styles.css'
import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { complaintDTO } from "../../../models/complaint";
import * as complaintService from '../../../services/complaintService'
import NotFoundData from "../../../components/notFoundData";



export default function Complaint() {

    const params = useParams();

    const [complaint, setComplaint] = useState<complaintDTO>();

    useEffect(() => {
        complaintService.findById(Number(params.complaintId))
            .then(response => {
                setComplaint(response.data);
            })
            .catch(() => {
                <NotFoundData />;
            })
    }, [params.complaintId]);

    return (
        complaint && <>
            <h3 className="complaint-id-focus">Reclamação # {params.complaintId}</h3>
            <div className="complain-card-item">
                <div className="dflex">
                    <p className="date">{complaint.date}</p>
                    <p className="time">{complaint.time}</p>
                </div>
                <p>{complaint.text}
                </p>
                <div className="comp-owner">
                    <p>{complaint.resident.name}</p>
                    <p>{complaint.resident.unit}</p>
                </div>
            </div>
        </>

    );
}