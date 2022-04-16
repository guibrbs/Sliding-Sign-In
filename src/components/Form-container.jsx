import React from "react";

export default function FormContainer() {
    return(
        <div className="forms-container">
            <div className="signin-signup">
                <form action="" className="sign-in-form">
                    <h2 className="tittle">Sign in</h2>
                    <div className="input-field">
                        <i className="fas fa-user"></i>
                        <input type="text" placeholder="Username"/>
                    </div>
                    <div className="input-field">
                        <i className="fas fa-lock"></i>
                        <input type="password" placeholder="Password"/>
                    </div>
                    <input type="submit" value="Login" className="btn solid" />

                    <p className="social-text">Or sign in with social plataforms</p>
                    <div className="social-media">
                        <a href="#" className="social-icon">
                            <i className="fab fa-facebook-f"></i>
                        </a>
                        <a href="#" className="social-icon">
                            <i className="fab fa-twitter"></i>
                        </a>
                        <a href="#" className="social-icon">
                            <i className="fab fa-google"></i>
                        </a>
                        <a href="#" className="social-icon">
                            <i className="fab fa-linkedin-in"></i>
                        </a>
                    </div>
                </form>
            </div>
        </div>
    )
}