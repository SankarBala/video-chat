
import Head from 'next/head';
import SkySpace from '../../layouts/skyspace';

export default function register() {
    return (
        <>
            <SkySpace>
                <div className="account-box">
                    <div className="account-wrapper">
                        <div className="account-logo">
                            <a href="index.html"><img src="/assets/img/logo.png" alt /></a>
                        </div>
                        <h3 className="account-title">Register</h3>
                        <form action="index.html" className="form-signin">

                            <div className="form-group">
                                <label>Username</label>
                                <input type="text" className="form-control" />
                            </div>
                            <div className="form-group">
                                <label>Email Address</label>
                                <input type="email" className="form-control" />
                            </div>
                            <div className="form-group">
                                <label>Password</label>
                                <input type="password" className="form-control" />
                            </div>
                            <div className="form-group">
                                <label>Mobile Number</label>
                                <input type="text" className="form-control" />
                            </div>
                            <div className="form-group checkbox">
                                <label>
                                    <input type="checkbox" /> I have read and agree the Terms &amp; Conditions
                                </label>
                            </div>
                            <div className="form-group text-center">
                                <button className="btn btn-primary account-btn" type="submit">Signup</button>
                            </div>
                            <div className="text-center login-link">
                                Already have an account? <a href="login.html">Login</a>
                            </div>
                        </form>
                    </div>
                </div>
            </SkySpace>

        </>
    )
}