import { useRouteError } from "react-router-dom";
export default function ErrorPage() {
    const error = useRouteError();
    console.error(error);

    return (
        <div id="error-page">
            <h1>Doh! Something Happened!
                <p>Sorry, an there is some kind of unexpected error.</p>
                <p>
                    <i>{error.statusText || error.message}</i>
                </p>
            </h1>
        </div>
    );
}