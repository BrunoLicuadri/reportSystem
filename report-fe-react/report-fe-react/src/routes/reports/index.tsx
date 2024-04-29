import { Outlet } from 'react-router-dom';
import ReportCard from '../../components/reportCard';
import './styles.css';



export default function Reports() {

    return (
        <main>
            <section id="report-section" className="container">
                <h2>Relatórios Operacionais</h2>
                <Outlet />
                <ReportCard />
            </section>
        </main>

    )
}