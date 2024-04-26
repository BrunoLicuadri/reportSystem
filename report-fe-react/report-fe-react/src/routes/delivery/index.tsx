import './styles.css'
import deliveryPackage from '../../assets/images/pct-encomenda.jpg'

export default function Delivery() {

    return (
        <main>
            <section id="delivery-section" className="container">
                <h2>Relatórios de Encomendas</h2>
                <div className="deliveries-card-item">
                    <img className="deliveryBoxImg" src={deliveryPackage} alt="Encomendas.png" />
                    <div className="deliveries-card-details">
                        <div id="deliveries-card-description">
                            <label>Destino: </label>
                            <p className="deliveryName">Lorem ipsum dolor sit amet consectetur, adipisicing elit. Corporis quo
                                atque perspiciatis!
                            </p>
                        </div>

                        <div id="deliveries-card-description">
                            <label>Descrição: </label>
                            <p className="deliveryDescription">Lorem ipsum dolor sit amet consectetur, adipisicing elit.
                                Corporis
                                quo
                                atque perspiciatis!
                            </p>
                        </div>

                        <div id="deliveries-card-description">
                            <label>Id: </label>
                            <p className="deliveryId">Lorem ipsum dolor sit amet consectetur adipisicing elit.
                            </p>
                        </div>

                    </div>

                    <div id="status" className="ctlStatus">
                        <p className="peding-status">Pendente</p>
                    </div>
                </div>

                <div className="deliveries-card-item">
                    <img className="deliveryBoxImg" src={deliveryPackage} alt="Encomendas.png" />
                    <div className="deliveries-card-details">
                        <div id="deliveries-card-description">
                            <label>Destino: </label>
                            <p className="deliveryName">Lorem ipsum dolor sit amet consectetur, adipisicing elit. Corporis quo
                                atque perspiciatis!
                            </p>
                        </div>

                        <div id="deliveries-card-description">
                            <label>Descrição: </label>
                            <p className="deliveryDescription">Lorem ipsum dolor sit amet consectetur, adipisicing elit.
                                Corporis
                                quo
                                atque perspiciatis!
                            </p>
                        </div>

                        <div id="deliveries-card-description">
                            <label>Id: </label>
                            <p className="deliveryId">Lorem ipsum dolor sit amet consectetur adipisicing elit.
                            </p>
                        </div>

                    </div>

                    <div id="status" className="ctlStatus">
                        <p className="peding-status">Pendente</p>
                    </div>
                </div>

                <div className="deliveries-card-item">
                    <img className="deliveryBoxImg" src={deliveryPackage} alt="Encomendas.png" />
                    <div className="deliveries-card-details">
                        <div id="deliveries-card-description">
                            <label>Destino: </label>
                            <p className="deliveryName">Lorem ipsum dolor sit amet consectetur, adipisicing elit. Corporis quo
                                atque perspiciatis!
                            </p>
                        </div>

                        <div id="deliveries-card-description">
                            <label>Descrição: </label>
                            <p className="deliveryDescription">Lorem ipsum dolor sit amet consectetur, adipisicing elit.
                                Corporis
                                quo
                                atque perspiciatis!
                            </p>
                        </div>

                        <div id="deliveries-card-description">
                            <label>Id: </label>
                            <p className="deliveryId">Lorem ipsum dolor sit amet consectetur adipisicing elit.
                            </p>
                        </div>

                    </div>

                    <div id="status" className="ctlStatus">
                        <p className="peding-status">Pendente</p>
                    </div>
                </div>
            </section>
        </main>

    );
}