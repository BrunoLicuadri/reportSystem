/* eslint-disable @typescript-eslint/no-explicit-any */
import './styles.css';
import { useEffect, useState } from "react";
import { DeliveryDTO } from "../../models/delivery";
import * as deliveryService from '../../services/deliveryService'
import QueryLink from "../queryLinks";

export default function DeliveryPreview() {

    const [delivery, setDelivery] = useState<DeliveryDTO[]>([]);

    useEffect(() => {
        deliveryService.deliveryPreview()
            .then(response => {
                setDelivery(response.data.content);
            })
    }, [])


    return (
        <main>
            <section id="delivery-section" className="container">
                <h2>Relatórios de Encomendas</h2>
                {delivery
                    .map((deli) => (
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

                                    <div id="deliveries-card-description">
                                        <label>Id: </label>
                                        <p className="deliveryId">{deli.id}</p>
                                        <div id="status" className="ctlStatus">
                                            <p className="peding-status">{deli.status}</p>
                                        </div>
                                    </div>

                                </div>
                            </div>
                        </QueryLink>
                    ))
                }


            </section >
        </main >
    )
}