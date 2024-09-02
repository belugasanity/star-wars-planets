import { Link } from "react-router-dom";
export default function Nav() {
    return (
        <nav className="bg-slate-800 p-4">
            <div className="container mx-auto flex justify-between items-center">
                <div className="text-white font-bold text-lg">
                    <Link to={`/`}>Home</Link>
                </div>
            </div>
        </nav>
    )
}