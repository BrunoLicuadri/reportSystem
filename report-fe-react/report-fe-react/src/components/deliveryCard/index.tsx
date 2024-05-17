/* eslint-disable @typescript-eslint/no-explicit-any */
import { useEffect, useState } from 'react';
import { useSearchParams } from 'react-router-dom';
import { deliveryDTO } from '../../models/delivery';
import * as deliveryService from '../../services/deliveryService';
import QueryLink from '../queryLinks';
import './styles.css';
import { AccessTokenPayloadDTO } from '../../services/auth';
import * as authService from '../../services/authService'
import editIcon from '../../assets/images/edit.svg'
import deleteIcon from '../../assets/images/delete.svg'



export default function DeliveryCard() {

    const [searchParams, setSearchParams] = useSearchParams();
    const [tokenPayload, setTokenPayload] = useState<AccessTokenPayloadDTO>();
    const [deliveries, setDeliveries] = useState<deliveryDTO[]>([]);

    const user = tokenPayload?.user_name;

    useEffect(() => {
        if (authService.isAuthenticated()) {
            const payload = authService.getAccessTokenPayload();
            setTokenPayload(payload);
        }

        deliveryService.findAll()
            .then(response => {
                setDeliveries(response.data.content);
            })
    }, [])


    return (
        <main>
            <section id="delivery-section" className="container">
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

                {deliveries
                    .filter((delivery) => {
                        const text = searchParams.get("filter");
                        if (!text) return true;
                        const deliveryText = delivery.description.toLowerCase();
                        const deliveryDate = delivery.date;
                        const deliveryName = delivery.toUser.name.toLowerCase();
                        return (deliveryText.startsWith(text.toLowerCase()) || deliveryDate.startsWith(text)) || deliveryName.startsWith(text.toLowerCase());
                    })
                    .map((deli) => (
                        user == deli.toUser.name || tokenPayload?.authorities.includes("ROLE_ADMIN")
                            ? (<>
                                <QueryLink
                                    className={({ isActive }: any) => isActive ? "border-selected dblock" : " "}
                                    to={`/deliveries/${deli.id}`}
                                    key={deli.id}
                                >
                                    <div className="deliveries-card-item">
                                        <img className="deliveryBoxImg" src={deli.imgUrl} alt="Encomendas.png" />
                                        <div className="deliveries-card-details">
                                            <div id="deliveries-card-description">
                                                <label>Destino: </label>
                                                <p className="deliveryName">{deli.toUser.name}
                                                </p>
                                            </div >

                                            <div id="deliveries-card-description">
                                                <label>Descrição: </label>
                                                <p className="deliveryDescription">{deli.description}
                                                </p>
                                            </div>

                                            <div className="dflex">
                                                <div id="deliveries-card-description">
                                                    <label>Id: </label>
                                                    <p className="deliveryId">{deli.id}</p>
                                                    <div id="status" className="ctlStatus">
                                                        <p className="peding-status">{deli.status}</p>
                                                    </div>

                                                </div>
                                                <div className="date date-rtl">
                                                    <p>{deli.date}</p>
                                                </div>

                                            </div>

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
                                    to={`/deliveries/${deli.id}`}
                                    key={deli.id}
                                >
                                    <div className="deliveries-card-item">
                                        <img className="deliveryBoxImg" src={deli.imgUrl} alt="Encomendas.png" />
                                        <div className="deliveries-card-details">
                                            <div id="deliveries-card-description">
                                                <label>Destino: </label>
                                                <p className="deliveryName">{deli.toUser.name}
                                                </p>
                                            </div>

                                            <div id="deliveries-card-description">
                                                <label>Descrição: </label>
                                                <p className="deliveryDescription">{deli.description}
                                                </p>
                                            </div>

                                            <div className="dflex">
                                                <div id="deliveries-card-description">
                                                    <label>Id: </label>
                                                    <p className="deliveryId">{deli.id}</p>
                                                    <div id="status" className="ctlStatus">
                                                        <p className="peding-status">{deli.status}</p>
                                                    </div>

                                                </div>
                                                <div className="date date-rtl">
                                                    <p>{deli.date}</p>
                                                </div>

                                            </div>

                                        </div>
                                    </div>
                                </QueryLink >
                            )
                    ))
                }
            </section>
        </main>
    );
}