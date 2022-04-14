import { useState } from 'react';

function LoginForm() {

    const [email, setEmail] = useState();
    const [password, setPassword] = useState()

    const onEmailChanged = (e) => {
        const updatedEmail = e.target.value;
        setEmail(() => updatedEmail);
    };

    const onPasswordChanged = (e) => {
        const updatedPassword = e.target.value;
        setPassword(() => updatedPassword);
    };

    const login = () => {
        console.log('Sign in button was click');
    }

    return (
        <div className="login-body">
            <div className="login-body__form">
                <h1>Sign In</h1>
                <div className="login-body__input mb-16">
                    <input type="text" placeholder="Email or phone number" onChange={onEmailChanged} />
                </div>
                <div className="login-body__input">
                    <input type="password" placeholder="Password" onChange={onPasswordChanged} />
                </div>
                <button className="login-body__submit-btn" onClick={login}>Sign In</button>
                <div className="login-body__options">
                    <span>Remember me</span>
                    <span className="login-body__need-help">Need help?</span>
                </div>
                <div className="login-body__footer">
                    <div className="login-body__fb">
                        <img src="https://assets.nflxext.com/ffe/siteui/login/images/FB-f-Logo__blue_57.png" alt="fb" />
                        <span>Login with Facebook</span>
                    </div>
                    <div className="login-body__new-to-nl">
                        <span>New to Netflix ?</span>
                        <span className="login-body__sign-up">Sign up now.</span>
                    </div>
                    <div className="login-body__google_captcha">
                        This page is protected by Google reCAPTCHA to ensure you're not a bot.
                        <span className="login-body__learn-more">Learn more.</span>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default LoginForm;