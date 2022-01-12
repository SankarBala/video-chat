import Head from 'next/head';
import SkySpace from '../../layouts/skyspace';

export default function resetPassword() {
    return (
        <>
            <SkySpace>
                <div className="account-box">
                    <div className="account-wrapper">
                        <div className="account-logo">
                            <a href="index.html"><img src="/assets/img/logo.png" alt /></a>
                        </div>
                        <h3 className="account-title">Reset Password</h3>
                        <form action="index.html">
                            <div className="form-group form-focus">
                                <label className="focus-label">New Password</label>
                                <input className="form-control floating" type="password" />
                            </div>
                            <div className="form-group form-focus">
                                <label className="focus-label">New Repeat Password</label>
                                <input className="form-control floating" type="password" />
                            </div>
                            <div className="form-group mb-0 text-center">
                                <button className="btn btn-primary btn-block account-btn" type="submit">Save New Password</button>
                            </div>
                        </form>
                    </div>
                </div>

            </SkySpace>



        </>
    )
}
