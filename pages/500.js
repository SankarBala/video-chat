import Head from "next/head";
import SkySpace from "../layouts/skyspace";

export default function _500() {
    return (
        <>
            <SkySpace>
                <div class="error-box">
                    <h1>500</h1>
                    <h3><i class="fa fa-warning"></i> Oops! Something went wrong</h3>
                    <p>Refresh page again</p>
                    <a href="index.html" class="btn btn-info go-home">Go to Home</a>
                </div>
            </SkySpace>

        </>
    )
}