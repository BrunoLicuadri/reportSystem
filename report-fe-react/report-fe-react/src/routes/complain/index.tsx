import './styles.css'

export default function Complain() {

    return (
        <main>
            <section id="complain-section" className="container">
                <h2>Relatórios de Reclamações</h2>
                <div className="complain-card-item">
                    <div className="dflex">
                        <p className="date">10/03/23</p>
                        <p className="time">10:23</p>
                    </div>
                    <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Nobis cupiditate inventore, illum
                        reiciendis molestias fuga voluptas commodi ipsam non aliquam deleniti magnam vel esse eos? Nulla
                        dignissimos cum ab adipisci.
                    </p>
                    <div className="comp-owner">
                        <p>Sr. Resmungão</p>
                        <p>Apto 794</p>
                    </div>
                </div>

                <div className="complain-card-item">
                    <div className="dflex">
                        <p className="date">18/05/23</p>
                        <p className="time">17:23</p>
                    </div>
                    <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Nobis cupiditate inventore, illum
                        reiciendis molestias fuga voluptas commodi ipsam non aliquam deleniti magnam vel esse eos? Nulla
                        dignissimos cum ab adipisci.
                    </p>
                    <div className="comp-owner">
                        <p>Sr. Mickey</p>
                        <p>Apto 815</p>
                    </div>
                </div>

                <div className="complain-card-item">
                    <div className="dflex">
                        <p className="date">12/12/23</p>
                        <p className="time">19:23</p>
                    </div>
                    <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Nobis cupiditate inventore, illum
                        reiciendis molestias fuga voluptas commodi ipsam non aliquam deleniti magnam vel esse eos? Nulla
                        dignissimos cum ab adipisci.
                    </p>
                    <div className="comp-owner">
                        <p>Sra. TPM</p>
                        <p>Apto 320</p>
                    </div>
                </div>

                <div className="complain-card-item">
                    <div className="dflex">
                        <p className="date">30/01/24</p>
                        <p className="time">21:23</p>
                    </div>
                    <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Nobis cupiditate inventore, illum
                        reiciendis molestias fuga voluptas commodi ipsam non aliquam deleniti magnam vel esse eos? Nulla
                        dignissimos cum ab adipisci.
                    </p>
                    <div className="comp-owner">
                        <p>Sra. Azolivre</p>
                        <p>Apto 194</p>
                    </div>
                </div>

            </section>
        </main>

    )
}