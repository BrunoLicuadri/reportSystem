import './styles.css'
import coraisDoMar from '../../assets/images/Corais do Mar.jpg'
import decisaoEng from '../../assets/images/decisaoengenharia.jpeg'
import lmk from '../../assets/images/Lamarck.jpg'

export default function Footer(){

    return (
        <footer>

        <div className="footer-container">

            <div className="footer-left-items dflex">
                <div className="footer-items">
                    <a href="https://decisaoengenharia-al.com.br/site/" target="_blank" rel="noopener noreferrer">
                        <img className="decisao-img" src={decisaoEng} alt="decisaoengenharia.png"/>
                    </a>
                </div>
    
                <div className="footer-items">
                    <a className="lamarck-img-link" href="http://lamarckadm.com.br/" target="_blank" rel="noopener noreferrer">
                        <img className="lamarck-img" src={lmk} alt="lamarck.png"/>
                    </a>
                </div>
            </div>
           

            <div className="footer-items">
                <a href="https://decisaoengenharia-al.com.br/site/corais-do-mar/" target="_blank" rel="noopener noreferrer">
                    <img className="cdm-img" src={coraisDoMar} alt="CoraisDoMar.jpg"/>
                </a>
            </div>

            <div className="footer-items">
                <iframe className="cdm-iframe" src="https://www.youtube.com/embed/iR0fJzcfr5g?mute=1" title="CORAIS DO MAR"
                frameBorder="0" allow="accelerometer; 
                        autoplay; 
                        clipboard-write; 
                        encrypted-media; 
                        gyroscope; 
                        picture-in-picture; 
                        web-share" allowFullScreen>
            </iframe>
            </div>
            <div className="condo-address">
                <p>Av. Empresário Carlos da Silva Nogueira, 410 - Jatiúca, Maceió - AL, 57036-540</p>
            </div>
        </div>
        
    </footer>
    );
}