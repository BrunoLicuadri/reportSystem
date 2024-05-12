/* eslint-disable @typescript-eslint/no-explicit-any */
import { useEffect, useState } from 'react';
import { useNavigate, useSearchParams } from 'react-router-dom';
import deleteIcon from '../../assets/images/delete.svg';
import editIcon from '../../assets/images/edit.svg';
import { reportDTO } from '../../models/report';
import { AccessTokenPayloadDTO } from '../../services/auth';
import * as authService from '../../services/authService';
import * as reportService from '../../services/reportService';
import ButtonBlue from '../buttonBlue';
import QueryLink from '../queryLinks';
import './styles.css';
import DialogConfirmation from '../dialogConfirmation';
import ButtonNextPage from '../buttonNextPage';
import DialogInfo from '../dialogInfo';


type QueryParams = {
    page: number;
    name: string;
}

export default function ReportCard() {

    const [islastPage, setIsLastPage] = useState(false);

    const [queryParams, setQueryParams] = useState<QueryParams>({
        page: 0,
        name: "",
    });


    const [searchParams, setSearchParams] = useSearchParams();
    const [tokenPayload, setTokenPayload] = useState<AccessTokenPayloadDTO>();
    const [reports, setReports] = useState<reportDTO[]>([]);
    const navigate = useNavigate();

    const user = tokenPayload?.user_name;


    const [dialogInfoData, setDialogInfoData] = useState({
        visible: false,
        message: "Operação com Sucesso!",
    });


    const [dialogConfirmationData, setDialogConfirmationData] = useState({
        visible: false,
        id: 0,
        message: "Tem certeza?"
    })

    useEffect(() => {
        if (authService.isAuthenticated()) {
            const payload = authService.getAccessTokenPayload();
            setTokenPayload(payload);
        }

        reportService.findAll(queryParams.page, queryParams.name)
            .then(response => {
                const nextPage = response.data.content;
                setReports(reports.concat(nextPage));
                setIsLastPage(response.data.last);
            })
    }, [queryParams]);



    function handleResetClick() {
        setSearchParams({});
    }

    function handleOnclickNewReport() {
        navigate("/reports/manage/create")
    }

    function handleUpdateClick(repoId: number) {
        navigate(`/reports/manage/${repoId}`)
    }

    function handleDeleteClick(reportId: number) {
        setDialogConfirmationData({ ...dialogConfirmationData, id: reportId, visible: true });
    }

    function handleDialogInfoClose() {
        setDialogInfoData({ ...dialogInfoData, visible: false });
    }



    function handleDialogConfirmationAnswer(answer: boolean, reportId: number) {

        if (answer) {
            reportService.deleteById(reportId)
                .then(() => {
                    setReports([]);
                    setQueryParams({ ...queryParams, page: 0 });
                })
                .catch(error => {
                    setDialogInfoData({
                        visible: true,
                        message: error.response.data.error
                    })
                }
                )
        }
        setDialogConfirmationData({ ...dialogConfirmationData, visible: false });
    }


    function handleOnNextPageClick() {
        setQueryParams({ ...queryParams, page: queryParams.page + 1 });
    }

    return (
        <main>
            <section id="report-section" className="container">
                <form className='gkr-search-bar'>
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
                    <button type='reset' onClick={handleResetClick}>🗙</button>
                </form>
                <div className="gkr-mb20">
                    <div onClick={handleOnclickNewReport}>
                        <ButtonBlue text='Novo Relatório' />
                    </div>
                </div>
                {reports
                    .filter((report: any) => {
                        const text = searchParams.get("filter");
                        if (!text) return true;
                        const reportText = report.text.toLowerCase();
                        const reportDate = report.date;
                        const reportUser = report.user.name.toLowerCase();
                        return (reportText.startsWith(text.toLowerCase()) || reportDate.startsWith(text)) || reportUser.startsWith(text.toLowerCase());
                    })
                    .map((rep) => (
                        user == rep.user.name || tokenPayload?.authorities.includes("ROLE_ADMIN")
                            ? (<div key={rep.id}>
                                <QueryLink
                                    className={({ isActive }: any) => isActive ? "border-selected dblock" : " "}
                                    to={`/reports/${rep.id}`}
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
                                    <div className="deleteIcon mr20 ml20">
                                        <img onClick={() => handleDeleteClick(rep.id)} src={deleteIcon} />
                                    </div>
                                    <div className="editIcon ml20">
                                        <img onClick={() => handleUpdateClick(rep.id)} src={editIcon} />
                                    </div>
                                </div>
                            </div>


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

                {
                    !islastPage &&
                    <ButtonNextPage onNextPage={handleOnNextPageClick} />
                }
            </section>
            {
                dialogInfoData.visible &&
                <DialogInfo
                    message={dialogInfoData.message}
                    onDialogClose={handleDialogInfoClose}
                />
            }

            {
                dialogConfirmationData.visible &&
                <DialogConfirmation
                    id={dialogConfirmationData.id}
                    message={dialogConfirmationData.message}
                    onDialogAnswer={handleDialogConfirmationAnswer}
                />
            }
        </main>
    )
}