import '../styles.css'
import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import * as deliveryService from '../../../services/deliveryService'
import NotFoundData from "../../../components/notFoundData";
import { DeliveryDTO } from "../../../models/delivery";

export default function Delivery() {

    const params = useParams();

    const [delivery, setDetivery] = useState<DeliveryDTO>();

    useEffect( ()=>{
        deliveryService.findById(Number(params.deliveryId))
        .then( response =>{
            setDetivery(response.data)
        }
        )
        .catch( ()=>{
            <NotFoundData/>
        })
    }, [params.deliveryId]);

    return (
        delivery &&<>
        <h3 className="delivery-id-focus">Encomenda # {params.deliveryId}</h3>
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

                <div id="deliveries-card-description">
                    <label>Id: </label>
                    <p className="deliveryId">{delivery.id}</p>
                </div>

                <div id="status" className="ctlStatus">
                    <p className="peding-status">{delivery.status}</p>
                </div>

            </div>
        </>
    );
}