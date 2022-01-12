import Head from "next/head";

export default function login() {
    return (
        <>
            <Head>
                <title>Login</title>
            </Head>


            <div className="main-wrapper account-wrapper">
                <div className="account-page">
                    <div className="account-center">
                        <div className="account-box">
                            <form action="index.html" className="form-signin">
                                <div className="account-logo">
                                    <a href="index.html"><img src="/assets/img/logo-dark.png" alt /></a>
                                </div>
                                <div className="form-group">
                                    <label>Username or Email</label>
                                    <input type="text" autofocus className="form-control" />
                                </div>
                                <div className="form-group">
                                    <label>Password</label>
                                    <input type="password" className="form-control" />
                                </div>
                                <div className="form-group text-right">
                                    <a href="forgot-password.html">Forgot your password?</a>
                                </div>
                                <div className="form-group text-center">
                                    <button type="submit" className="btn btn-primary account-btn">Login</button>
                                </div>
                                <div className="text-center register-link">
                                    Don’t have an account? <a href="register.html">Register Now</a>
                                </div>
                            </form>
                        </div>
                    </div>
                </div>
            </div>

        </>
    )
}
