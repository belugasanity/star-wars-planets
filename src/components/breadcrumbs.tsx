import { Link, useLocation } from "react-router-dom";

export default function Breadcrumbs() {
    const location = useLocation();
    const state = location.state;

    if (state) {
        const stateCrumbs = location.state.breadcrumbs;
            if (stateCrumbs.length > 1) {
                const state1 = {resident: state.resident, planet: state.planet, breadcrumbs: [state.breadcrumbs[0]]}
                return (
                    <>
                    <Link to={'/'}>All Planets</Link>&nbsp; | &nbsp;
                    <Link to={stateCrumbs[0].crumb} state={state1}>{decodeURIComponent(stateCrumbs[0].title)}</Link>&nbsp; | &nbsp;
                    <Link to={stateCrumbs[1]} state={state}>{decodeURIComponent(stateCrumbs[1].title)}</Link>
                    </>
                )
            } else {
                console.log(state);
                return (
                    <>
                    <Link to={'/'}>All Planets</Link>&nbsp; | &nbsp;
                    <Link to={stateCrumbs[0].crumb} state={state}>{decodeURIComponent(stateCrumbs[0].title)}</Link>
                    </>
                )
            }
    } else {
        return null;
    }
}

