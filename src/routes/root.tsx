import { useEffect, useState } from "react";
import Nav from "../components/nav"
import getPlanets from "../services/star-wars"
import { Link } from "react-router-dom";
import Head from "../components/head";

export default function Root() {
    const [planets, setPlanets] = useState([]);
    const [searchTerm, setSearchTerm] = useState('');

    useEffect(() => {
        async function _getPlanets() {
            let res: any = await getPlanets();
            setPlanets(res);
        }

        _getPlanets();
    }, []);

    const filterPlanets = planets.filter((planet: any) =>
        planet.name.toLowerCase().includes(searchTerm.toLowerCase())
    );

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
            <Head title='The Planets of Star Wars' />
            <div className="my-4">
                <input
                    type="text"
                    placeholder="Search for a planet..."
                    className="w-full p-2 border rounded-lg focus:outline-slate-400"
                    value={searchTerm}
                    onChange={(e) => setSearchTerm(e.target.value)}
                />
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-x-4">
                {filterPlanets.length > 0 ? (
                    filterPlanets.map((planet, index) => (
                        <PlanetGrid key={index} planet={planet} />
                    ))
                ) : (
                    <p className="text-center col-span-2 text-slate-700">
                        No planets match your search.
                    </p>
                )}
            </div>
        </div></>
    )
}