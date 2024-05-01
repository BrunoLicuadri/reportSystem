/* eslint-disable @typescript-eslint/no-explicit-any */
import { useEffect, useState } from "react";
import { deliveryDTO } from "../../models/delivery";
import * as deliveryService from '../../services/deliveryService';
import QueryLink from "../queryLinks";
import './styles.css';

export default function DeliveryPreview() {

    const [delivery, setDelivery] = useState<deliveryDTO[]>([]);

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
                    .map((deliver: any) => (
                        <QueryLink
                            className={({ isActive }: any) => isActive ? "border-selected dblock" : " "}
                            to={`/deliveries/${deliver.id}`}
                            key={deliver.id}
                        >
                            <div className="deliveries-card-item">
                                <img className="deliveryBoxImg" src={deliver.imgUrl} alt="Encomendas.png" />
                                <div className="deliveries-card-details">
                                    <div id="deliveries-card-description">
                                        <label>Destino: </label>
                                        <p className="deliveryName">{deliver.toUser.name}
                                        </p>
                                    </div>

                                    <div id="deliveries-card-description">
                                        <label>Descrição: </label>
                                        <p className="deliveryDescription">{deliver.description}
                                        </p>
                                    </div>

                                    <div id="deliveries-card-description">
                                        <label>Id: </label>
                                        <p className="deliveryId">{deliver.id}</p>
                                        <div id="status" className="ctlStatus">
                                            <p className="peding-status">{deliver.status}</p>
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