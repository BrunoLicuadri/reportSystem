import Complain from "../complain";
import Delivery from "../delivery";
import Footer from "../../components/footer";
import ReportPreview from "../../components/reportPreview";

export default function Home() {
    return (
        <>
            <ReportPreview />
            <Complain />
            <Delivery />
            <Footer />
        </>
    );
}