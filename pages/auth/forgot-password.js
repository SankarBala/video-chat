import Head from 'next/head';

export default function forgetPassword() {
    return (
        <>
            <Head>
            </Head>


            <div>
                <div className="main-wrapper account-wrapper">
                    <div className="account-page">
                        <div className="account-center">
                            <div className="account-box">
                                <form className="form-signin" action="#">
                                    <div className="account-logo">
                                        <a href="index.html"><img src="assets/img/logo-dark.png" alt /></a>
                                    </div>
                                    <div className="form-group">
                                        <label>Type your email address</label>
                                        <input type="text" className="form-control" autofocus />
                                    </div>
                                    <div className="form-group text-center">
                                        <button className="btn btn-primary account-btn" type="submit">Reset Password</button>
                                    </div>
                                    <div className="text-center register-link">
                                        <a href="login.html">Back to Login</a>
                                    </div>
                                </form>
                            </div>
                        </div>
                    </div>
                </div>

            </div>


        </>
    )
}