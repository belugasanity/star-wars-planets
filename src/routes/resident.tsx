import { useLocation } from "react-router-dom";
import Nav from "../components/nav"
import Breadcrumbs from "../components/breadcrumbs";

export default function Resident() {
    const location = useLocation();
    const state = location.state;
    return (
        <>
        <Nav />
        <div className="container mx-auto pt-4">
            <div className="flex flex-col p-4 bg-white rounded-lg border-solid border-2 border-slate-800">
                <h1 className="text-3xl font-bold text-slate-800">Hello {state.resident.name}!</h1>
                <div>
                    <Breadcrumbs />
                </div>
            </div>
            <div className="grid grid-cols-1 border-solid border-2 border-slate-800 rounded-lg p-4 mt-4 bg-white">
                <p><span className="font-bold">Height:</span> {state.resident.height}</p>
                <p><span className="font-bold">Mass:</span> {state.resident.mass}</p>
                <p><span className="font-bold">Hair Color:</span> {state.resident.hair_color}</p>
                <p><span className="font-bold">Skin Color:</span> {state.resident.skin_color}</p>
                <p><span className="font-bold">Eye Color:</span> {state.resident.eye_color}</p>
                <p><span className="font-bold">Gender:</span> {state.resident.gender}</p>
            </div>
        </div>
        </>
    )
}