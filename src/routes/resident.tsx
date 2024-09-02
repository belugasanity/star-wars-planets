import { useLocation } from "react-router-dom";
import Nav from "../components/nav"

export default function Resident() {
    const location = useLocation();
    const state = location.state;
    return (
        <>
        <Nav />
        <div className="container mx-auto pt-4">
            <h1 className="text-3xl font-bold text-slate-800">Hello {state.name}!</h1>
            {/* TODO: show resident information/details */}
            {/* TODO: display breadcrumbs */}
        </div>
        </>
    )
}