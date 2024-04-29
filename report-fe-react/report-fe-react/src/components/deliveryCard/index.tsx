/* eslint-disable @typescript-eslint/no-explicit-any */
import { useEffect, useState } from 'react';
import { DeliveryDTO } from '../../models/delivery';
import * as deliveryService from '../../services/deliveryService';
import QueryLink from '../queryLinks';
import './styles.css';
import { useSearchParams } from 'react-router-dom';


export default function DeliveryCard() {

    const [searchParams, setSearchParams] = useSearchParams();

    const [delivery, setDelivery] = useState<DeliveryDTO[]>([]);

    useEffect(() => {
        deliveryService.findAll()
            .then(response => {
                setDelivery(response.data.content);
                console.log(response.data)
            })
    }, [])


    return (
        <>
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

            {delivery
                .filter((delivery) => {
                    const text = searchParams.get("filter");
                    if (!text) return true;
                    const deliveryText = delivery.description.toLowerCase();
                    const deliveryDate = delivery.date;
                    const deliveryName = delivery.toUser.name.toLowerCase();
                    return (deliveryText.startsWith(text.toLowerCase()) || deliveryDate.startsWith(text)) || deliveryName.startsWith(text.toLowerCase());
                })
                .map((deli) => (
                    <QueryLink
                        className={({ isActive }: any) => isActive ? "border-selected dblock" : " "}
                        to={`/deliveries/id/${deli.id}`}
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

                                <div id="deliveries-card-description">
                                    <label>Id: </label>
                                    <p className="deliveryId">{deli.id}</p>
                                </div>

                                <div id="status" className="ctlStatus">
                                    <p className="peding-status">{deli.status}</p>
                                </div>

                            </div>
                        </div>
                    </QueryLink >
                ))
            }

        </>
    );
}