import { Outlet } from 'react-router-dom'
import ComplaintCard from '../../components/complaintCard'
import './styles.css'

export default function Complaints() {

    return (
        <>
            <main>
                <section id="complain-section" className="container">
                    <h2>Relatórios de Reclamações</h2>
                    <Outlet />
                    <ComplaintCard />
                </section>
            </main>
        </>
    )
}