import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { reportDTO } from '../../../models/report';
import * as reportService from '../../../services/reportService';
import NotFoundData from '../../notFoundData';
import './styles.css';



export default function Report() {

    const params = useParams();
    
    const [report, setReport] = useState<reportDTO>();

    
    useEffect(() => {
        reportService.findById(Number(params.reportId))
            .then(response => {
                setReport(response.data);
                console.log(response.data);
            })
            .catch(() => {
                <NotFoundData />;
            })
    }, [params.reportId]);

    return (
        report &&<>
            <h3 className="report-id-focus">Relatório # {params.reportId}</h3>

            <div className="report-card-item-focus">
                <div className="dflex">
                    <p className="date-focus">{report.date}</p>
                    <p className="time-focus">{report.time}</p>
                </div>
                <p>{report.text}</p>
                <div className="rep-owner-focus">
                    <p>{report.user.name}</p>
                </div>
            </div>
        </>
    )
}