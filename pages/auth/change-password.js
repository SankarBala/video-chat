import Head from 'next/head';
export default function changePassword() {

    return (
        <>


            <Head>
            </Head>


            <div>

                <div className="main-wrapper account-wrapper">
                    <div className="account-page">
                        <div className="container">
                            <h3 className="account-title">Change Password</h3>
                            <div className="account-box">
                                <div className="account-wrapper">
                                    <div className="account-logo">
                                        <a href="index.html"><img src="assets/img/logo.png" alt /></a>
                                    </div>
                                    <form action="index.html">
                                        <div className="form-group form-focus">
                                            <label className="focus-label">Current Password</label>
                                            <input className="form-control floating" type="password" />
                                        </div>
                                        <div className="form-group form-focus">
                                            <label className="focus-label">New Password</label>
                                            <input className="form-control floating" type="password" />
                                        </div>
                                        <div className="form-group form-focus">
                                            <label className="focus-label">New Repeat Password</label>
                                            <input className="form-control floating" type="password" />
                                        </div>
                                        <div className="form-group mb-0 text-center">
                                            <button className="btn btn-primary btn-block account-btn" type="submit">Change Password</button>
                                        </div>
                                    </form>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}