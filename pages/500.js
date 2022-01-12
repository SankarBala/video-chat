﻿import Head from "next/head";

export default function _404() {
    return (
        <>

            <Head>
            </Head>

            <div class="main-wrapper error-wrapper">
                <div class="error-box">
                    <h1>500</h1>
                    <h3><i class="fa fa-warning"></i> Oops! Something went wrong</h3>
                    <p>The page you requested was not found.</p>
                    <a href="index.html" class="btn btn-primary go-home">Go to Home</a>
                </div>
            </div>

        </>
    )
}