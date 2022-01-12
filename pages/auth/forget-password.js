import SkySpace from '../../layouts/skyspace';

export default function forgetPassword() {
    return (
        <>
            <SkySpace>
                <div className="account-box">
                    <div className="account-wrapper">
                        <div className="account-logo">
                            <a href="index.html"><img src="/assets/img/logo.png" alt /></a>
                        </div>
                        <h3 className="account-title">Forgot Password</h3>
                        <form className="form-signin" action="#">
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
            </SkySpace>
        </>
    )
}