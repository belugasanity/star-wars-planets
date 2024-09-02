import { useEffect, useState } from "react";
import Nav from "../components/nav"
import getPlanets from "../services/star-wars"

export default function Root() {
    const [planets, setPlanets] = useState([]);

    useEffect(() => {
        async function _getPlanets() {
            let res: any = await getPlanets();
            setPlanets(res);
        }

        _getPlanets();
    }, []);

    function List () {
        const listItems = planets.map((planet: any, index: any) =>
            <li key={index}>{planet.name}</li>
        );
        return <ul>{listItems}</ul>;
    }

    return (
        <>
        <Nav />
        <div className="container mx-auto pt-4">
            <h1 className="text-3xl font-bold underline">Hello World!</h1>
            <List />
        </div></>
    )
}