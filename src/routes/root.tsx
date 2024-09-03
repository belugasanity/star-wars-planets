import { useEffect, useState } from "react";
import Nav from "../components/nav"
import getPlanets from "../services/star-wars"
import { Link } from "react-router-dom";
import Breadcrumbs from "../components/breadcrumbs";

export default function Root() {
    const [planets, setPlanets] = useState([]);

    useEffect(() => {
        async function _getPlanets() {
            let res: any = await getPlanets();
            setPlanets(res);
        }

        _getPlanets();
    }, []);

    const PlanetGrid = ({ planet }: any) => {
        return (
            <div className="grid grid-cols-3 bg-slate-700 text-white p-4 my-4 rounded-lg shadow-lg">
                <div className="col-span-2">
                    <h2 className="text-xl font-semibold mb-2">{planet.name}</h2>
                    <p><span className="font-bold">Population:</span> {planet.population}</p>
                    <p><span className="font-bold">Climate:</span> {planet.climate}</p>
                </div>
                <div className="content-center text-center">
                    <Link to={`/planet/${planet.name}`} state={{planet, breadcrumbs: [{crumb: `/planet/${planet.name}`, title: planet.name}]}}>
                        <button className="mx-auto px-4 py-2 bg-white text-slate-700 hover:text-slate-400 cursor-pointer rounded">View Residents</button>
                    </Link>
                </div>
            </div>
        );
      };

    return (
        <>
        <Nav />
        <div className="container mx-auto pt-4">
            <h1 className="text-3xl font-bold text-slate-800">The Planets of Star Wars</h1>
            {/* TODO: implement search */}
            <Breadcrumbs />
            <div className="grid grid-cols-1 md:grid-cols-2 gap-x-4">
                {planets.map((planet, index) => (
                    <PlanetGrid key={index} planet={planet} />
                ))}
            </div>
        </div></>
    )
}