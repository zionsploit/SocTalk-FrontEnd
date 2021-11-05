import '../../Layouts/CSS/Login.css';
import loginImgBased from '../../../assets/images/loginbasedLogo.svg';
import facebookLogo from '../../../assets/images/facebook.png';
import googlePlusLogo from '../../../assets/images/google-plus.png';
import twiiterLogo from '../../../assets/images/twitter.png';
import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { Maybe } from '@fpc/maybe';

export const Login = () => {
    return (
        <div>
            <div class="loginContainer">
                <div className="loginLeftContainer">
                    <img src={loginImgBased} alt="loginImage" className="loginImage" />
                    <span className="loginQuote"><i>“Engage rather than sell … Work as a co-creator, not a marketer.”</i></span>
                </div>
                <div className="loginRightContainer">
                    <div class="loginForm">
                        <div className="loginUpperText">
                            <span className="welcomeText">Welcome</span>
                            <span className="signInText">Sign in to SocTalk.</span>
                        </div>
                        <form>
                            <div className="loginFormInputContainer">
                                <div style={{ marginTop: '10px' }}>
                                    <label className="enterDetails">Enter Details</label>
                                    <div className="loginFormInput" style={{ marginTop: '5px' }}>
                                        <input className="loginInput" name="email" type="email" placeholder="Email address" />
                                    </div>
                                    <div className="loginFormInput" style={{ marginTop: '20px' }}>
                                        <input className="loginInput" name="pass" type="password" placeholder="Password" />
                                    </div>
                                    <div className="loginButtonContainer">
                                        <Link className="loginForgotPassword">Forgot Password?</Link>
                                        <button type="button" className="loginformButton">Login</button>
                                    </div>
                                </div>
                                <div style={{ marginTop: '35px' }}>
                                    <span className="loginDontHaveAccount">Don't have an account? <Link to="/register" className="loginSignUp">Sign up</Link></span>
                                </div>
                            </div>
                        </form>
                        <div className="loginFormFooter">
                            <div className="loginFooterThirdParty">
                                <div className="loginOrConnect">
                                    <hr style={{ width: '15vh' }} />
                                    <span style={{ margin: '0 20px', color: '#6c757d', letterSpacing: '1px' }}>or connect using</span>
                                    <hr style={{ width: '15vh' }} />
                                </div>
                                <div className="footerButton">
                                    <button className="facbookBtn">
                                        <img className="facebookLogo" src={facebookLogo} alt="facebookLogo" />
                                    </button>
                                    <button className="googlePlusBtn">
                                        <img className="googlePlusLogo" src={googlePlusLogo} alt="googlePlusLog" />
                                    </button>
                                    <button className="twitterBtn">
                                        <img className="twitterLogo" src={twiiterLogo} alt="twitterLogo" />
                                    </button>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}
