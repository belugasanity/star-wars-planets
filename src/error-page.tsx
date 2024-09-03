import { useRouteError } from "react-router-dom";
import Nav from "./components/nav";

export default function ErrorPage() {
  const error = useRouteError();
  console.error(error);

  return (
    <>
     <Nav />
    <div id="error-page" className="container mx-auto">
      <img src="404.png" alt="Planet" className="object-contain mx-auto" />
    </div>
    </>
  );
}