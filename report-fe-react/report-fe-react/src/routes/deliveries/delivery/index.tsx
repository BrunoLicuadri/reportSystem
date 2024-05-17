import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import NotFoundData from "../../../components/notFoundData";
import { deliveryDTO } from "../../../models/delivery";
import * as deliveryService from '../../../services/deliveryService';
import '../styles.css';



export default function Delivery() {

    const params = useParams();

    const [delivery, setDelivery] = useState<deliveryDTO>();

    useEffect(() => {
        deliveryService.findById(Number(params.deliveryId))
            .then(response => {
                setDelivery(response.data);
            })
            .catch(() => {
                <NotFoundData />;
            })
    }, [params.deliveryId]);

    return (
        delivery && <>
            <h3 className="delivery-id-focus">Encomenda # {params.deliveryId}</h3>
            <div className="deliveries-card-item">
                <img className="deliveryBoxImg" src={delivery.imgUrl} alt="Encomendas.png" />
                <div className="deliveries-card-details">
                    <div id="deliveries-card-description">
                        <label>Destino: </label>
                        <p className="deliveryName">{delivery.toUser.name}
                        </p>
                    </div>

                    <div id="deliveries-card-description">
                        <label>Descrição: </label>
                        <p className="deliveryDescription">{delivery.description}
                        </p>
                    </div>

                    <div className="dflex">
                        <div id="deliveries-card-description">
                            <label>Id: </label>
                            <p className="deliveryId">{delivery.id}</p>
                            <div id="status" className="ctlStatus">
                                <p className="peding-status">{delivery.status}</p>
                            </div>

                        </div>
                        <div className="date date-rtl">
                            <p>{delivery.date}</p>
                        </div>

                    </div>

                </div>
            </div>
        </>
    )
}