import { Outlet } from 'react-router-dom';
import DeliveryCard from '../../components/deliveryCard';
import './styles.css';

export default function Deliveries() {

    return (
        <main>
            <section id="delivery-section" className="container">
                <h2>Relatórios de Encomendas</h2>
                <Outlet />
                <DeliveryCard />
            </section>
        </main>

    );
}