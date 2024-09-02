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
            {/* TODO: display breadcrumbs */}
            <div className="grid grid-cols-1 border-solid border-2 border-slate-800 rounded-lg p-4 mt-4">
                <p><span className="font-bold">Height:</span> {state.height}</p>
                <p><span className="font-bold">Mass:</span> {state.mass}</p>
                <p><span className="font-bold">Hair Color:</span> {state.hair_color}</p>
                <p><span className="font-bold">Skin Color:</span> {state.skin_color}</p>
                <p><span className="font-bold">Eye Color:</span> {state.eye_color}</p>
                <p><span className="font-bold">Gender:</span> {state.gender}</p>
            </div>
        </div>
        </>
    )
}