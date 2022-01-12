
import Head from "next/head";

export default function locked() {
    return (
        <>

            <Head>
            </Head>

            <div className="main-wrapper error-wrapper">
                <div className="error-box">
                    <form action="index.html">
                        <div className="lock-user">
                            <img className="rounded-circle" src="assets/img/user.jpg" alt />
                            <h6>John Doe</h6>
                        </div>
                        <div className="form-group">
                            <input className="form-control" placeholder="Enter Password" type="password" />
                        </div>
                        <div className="form-group">
                            <a href="index.html" class="btn btn-primary go-home">Unlock</a>
                        </div>
                        <div className="text-center">
                            <a href="login.html">Sign in as a different user?</a>
                        </div>
                    </form>
                </div>
            </div>

        </>
    )
}