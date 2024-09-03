import Breadcrumbs from "./breadcrumbs";

export default function Head({title}: any) {
    return (
        <div className="flex flex-col p-4 bg-white rounded-lg border-solid border-2 border-slate-800">
            <h1 className="text-3xl font-bold text-slate-800">{title}</h1>
            <div>
                <Breadcrumbs />
            </div>
        </div>
    )
}