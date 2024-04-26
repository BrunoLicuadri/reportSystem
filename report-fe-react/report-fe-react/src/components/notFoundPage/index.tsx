import notfound from '../../assets/images/pageNotFound.jpg';
import Footer from '../footer';
import { Link } from 'react-router-dom';

export default function NotFoundPage() {

    return (
        <>
            <div className="container img-control">
                <Link to="/">
                    <img className="image-size" src={notfound} alt="Página não encontrada" />
                </Link>
            </div>
            <Footer />
        </>

    );
}