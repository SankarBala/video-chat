
import Head from "next/head";
import SkySpace from "../../layouts/skyspace";

export default function locked() {
    return (
        <>
            <SkySpace>
                <div className="error-box">
                    <form action="index.html">
                        <div className="lock-user">
                            <img className="rounded-circle" src="/assets/img/user.jpg" alt />
                            <h6>John Doe</h6>
                        </div>
                        <div className="form-group">
                            <input className="form-control" placeholder="Enter Password" type="password" />
                        </div>
                        <div className="form-group">
                            <a href="index.html" class="btn btn-success go-home">Unlock</a>
                        </div>
                        <div className="text-center">
                            <a className="text-info" href="login.html">Sign in as a different user?</a>
                        </div>
                    </form>
                </div>
            </SkySpace>


        </>
    )
}