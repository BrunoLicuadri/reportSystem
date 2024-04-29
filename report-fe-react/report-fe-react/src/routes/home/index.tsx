import DeliveryPreview from "../../components/deliveryPreview";
import Footer from "../../components/footer";
import ReportPreview from "../../components/reportPreview";
import Complain from "../complain";

export default function Home() {
    return (
        <>
            <ReportPreview />
            <Complain />
            <DeliveryPreview />
            <Footer />
        </>
    );
}