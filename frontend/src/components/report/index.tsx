import { useParams } from "react-router-dom";

export function Report() {

    const { reportId } = useParams();

    return (
        <>
            <h1>Access {reportId}</h1>
        </>
    );
}
