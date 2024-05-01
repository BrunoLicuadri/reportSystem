import ComplaintsPreview from "../../components/complaintsPreview";
import DeliveryPreview from "../../components/deliveryPreview";
import Footer from "../../components/footer";
import ReportPreview from "../../components/reportPreview";

export default function Home() {
    return (
        <>
            <ReportPreview />
            <ComplaintsPreview />
            <DeliveryPreview />
            <Footer />
        </>
    );
}