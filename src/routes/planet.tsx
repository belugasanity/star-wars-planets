import { Link, useLocation } from "react-router-dom"
import Nav from "../components/nav"
import { useEffect, useState } from "react";
import { getResidents } from "../services/star-wars";
import Head from "../components/head";

export default function Planet() {
    const location = useLocation();
    const state = location.state;

    const [residents, setResidents] = useState([]);

    useEffect(() => {
        async function _getResidents() {
            let res: any = await getResidents(state.planet.residents);
            setResidents(res);
        }

        _getResidents();
    });

    const ResidentGrid = ({ resident }: any) => {
        return (
            <div className="grid grid-cols-3 bg-slate-700 text-white p-4 my-4 rounded-lg shadow-lg">
                <div className="col-span-2">
                    <h2 className="text-xl font-semibold mb-2">{resident.name}</h2>
                    <p><span className="font-bold">Eye Color:</span> {resident.eye_color}</p>
                    <p><span className="font-bold">Hair Color:</span> {resident.hair_color}</p>
                </div>
                <div className="content-center text-center">
                    <Link to={`/resident/${resident.name}`} state={{resident: resident, planet: state.planet, breadcrumbs: [{crumb: `/planet/${state.planet.name}`, title: state.planet.name}, {crumb: `/resident/${resident.name}`, title: resident.name}]}}>
                        <button className="mx-auto px-4 py-2 bg-white text-slate-700 hover:text-slate-400 cursor-pointer rounded">View Resident</button>
                    </Link>
                </div>
            </div>
        );
      };

    return (
        <>
        <Nav />
        <div className="container mx-auto pt-4">
            <Head title={`Hello ${state.planet.name} Residents!`} />
            <div className="grid grid-cols-1 md:grid-cols-2 gap-x-4">
                {residents.map((resident, index) => (
                    <ResidentGrid key={index} resident={resident} />
                ))}
            </div>
        </div>
        </>
    )
}