import Head from "next/head";
import SkySpace from "../layouts/skyspace";

export default function _404() {
    return (
        <>
            <SkySpace>
                <div className="error-box">
                    <h1>404</h1>
                    <h3><i className="fa fa-warning" /> Oops! Page not found!</h3>
                    <p>The page you requested was not found.</p>
                    <a href="index.html" className="btn btn-primary go-home">Go to Home</a>
                </div>
            </SkySpace>
        </>
    )
}