/* eslint-disable @typescript-eslint/no-explicit-any */
import './styles.css'
import { useEffect, useState } from "react";
import { useNavigate, useSearchParams } from "react-router-dom";
import { complaintDTO } from "../../models/complaint";
import QueryLink from "../queryLinks";
import * as complaintService from '../../services/complaintService'
import { AccessTokenPayloadDTO } from '../../services/auth';
import * as authService from '../../services/authService'
import editIcon from '../../assets/images/edit.svg'
import deleteIcon from '../../assets/images/delete.svg'
import ButtonBlue from '../buttonBlue';
import ButtonNextPage from '../buttonNextPage';
import DialogInfo from '../dialogInfo';
import DialogConfirmation from '../dialogConfirmation';

type QueryParams = {
    page: number;
    name: string;
}

export default function ComplaintCard() {

    const [islastPage, setIsLastPage] = useState(false);

    const [queryParams, setQueryParams] = useState<QueryParams>({
        page: 0,
        name: "",
    });

    const [searchParams, setSearchParams] = useSearchParams();
    const [tokenPayload, setTokenPayload] = useState<AccessTokenPayloadDTO>();
    const [complaints, setComplaints] = useState<complaintDTO[]>([]);


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

        complaintService.findAll(queryParams.page, queryParams.name)
            .then(response => {
                const nextPage = response.data.content;
                setComplaints(complaints.concat(nextPage));
                setIsLastPage(response.data.last);
            })
    }, [queryParams]);


    function handleResetClick() {
        setSearchParams({});
    }

    function handleOnclickNewComplaint() {
        navigate("/complaints/manage/create")
    }

    function handleUpdateClick(compId: number) {
        navigate(`/complaints/manage/${compId}`)
    }

    function handleDeleteClick(compId: number) {
        setDialogConfirmationData({ ...dialogConfirmationData, id: compId, visible: true });
    }

    function handleOnNextPageClick() {
        setQueryParams({ ...queryParams, page: queryParams.page + 1 });
    }

    function handleDialogInfoClose() {
        setDialogInfoData({ ...dialogInfoData, visible: false });
    }

    function handleDialogConfirmationAnswer(answer: boolean, complaintId: number) {

        if (answer) {
            complaintService.deleteById(complaintId)
                .then(() => {
                    setComplaints([]);
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


    return (
        <main>
            <section id="complain-section" className="container">
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
                <div className="gkr-mb20 gkr-mt20">
                    <div onClick={handleOnclickNewComplaint}>
                        <ButtonBlue text='Nova Reclamação' />
                    </div>
                </div>

                {complaints
                    .filter((complaint: any) => {
                        const text = searchParams.get("filter");
                        if (!text) return true;
                        const compText = complaint.text.toLowerCase();
                        const compUnit = complaint.resident.unit.toString();
                        const compUser = complaint.resident.name.toLowerCase();
                        return (compText.startsWith(text.toLowerCase()) || compUnit.startsWith(text)) || compUser.startsWith(text.toLowerCase());
                    })
                    .map((comp) => (
                        user == comp.resident.name || tokenPayload?.authorities.includes("ROLE_ADMIN")
                            ? (<div key={comp.id}>

                                <QueryLink
                                    className={({ isActive }: any) => isActive ? "border-selected dblock" : " "}
                                    to={`/complaints/${comp.id}`}

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
                                    <div className="deleteIcon mr20 ml20">
                                        <img onClick={()=>handleDeleteClick(comp.id)} src={deleteIcon} />
                                    </div>
                                    <div className="editIcon ml20">
                                        <img onClick={() => handleUpdateClick(comp.id)} src={editIcon} />
                                    </div>
                                </div>
                            </div>
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

    );

}