import React, { useEffect, useState } from 'react';
import '../../Layouts/CSS/Login3.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faEnvelope, faKey } from '@fortawesome/free-solid-svg-icons';
import loginLogo from '../../../assets/images/login_logo.svg';
import { loginController } from '../../../controllers/account.controllers';
import { Maybe } from '@fpc/maybe';
import { useDispatch } from 'react-redux';
import { getLoginInfo } from '../../../app/features/userSlices';
import { useSelector } from 'react-redux';
import jwt from 'jsonwebtoken';
import { useHistory } from 'react-router';





const Login = () => {
    const [getLogin, setLogin] = useState({ user: '', pass: '' })

    const dispatch = useDispatch()
    const history = useHistory()

    dispatch(getLoginInfo(getLogin))
    const onChangeHandle = e => {
        Maybe(setLogin({ ...getLogin, [e.target.name]: e.target.value }))
    }

    const getToken = useSelector((state) => state.tokenReducer.value)
    const getUserInfoSelector = useSelector((state) => state.userReducer.value)

    const onClickHandle = async e => {
        e.preventDefault()
        await loginController(getUserInfoSelector)
    }
    useEffect(() => {
        const decoded = jwt.decode(getToken)
        if (decoded) {
            history.replace('/')
        }
    })
    return (
        <div>
            <div className="BaseLogin">
                <div className="LoginDiv">
                    <div className="LoginContainer">
                        <div className="d-flex flex-column align-items-center">
                            <span className="SigninLabel">Sign in to SocTalk</span>
                            <div className="d-flex flex-column align-items-center">
                                <div className="d-flex align-items-center mt-3" style={{ marginLeft: '3em' }}>
                                    <span className="iconButton">
                                        <a href="/facebook"><img src="https://img.icons8.com/color/48/000000/facebook-new.png" alt="" className="iconBorder" /></a>
                                    </span>
                                    <span className="iconButton">
                                        <a href="/google"><img src="https://img.icons8.com/fluency/48/000000/google-logo.png" alt="" className="iconBorder" /></a>
                                    </span>
                                    <span className="iconButton">
                                        <a href="/github"><img src="https://img.icons8.com/fluency/48/000000/github.png" alt="" className="iconBorder" /></a>
                                    </span>
                                </div>
                                <div className="mt-4">
                                    <span className="subText">Or use your email address</span>
                                </div>
                            </div>
                        </div>
                        <div className="mt-5 d-flex flex-column align-items-center">
                            <form>
                                <div>
                                    <div className="inputFormLogin">
                                        <div className="iconFormArea">
                                            <FontAwesomeIcon icon={faEnvelope} style={{ fontSize: '2.5em', color: '#454545' }} />
                                        </div>
                                        <div>
                                            <input type="email" name="email" className="inputFormControlLogin" placeholder="Enter your email" onChange={onChangeHandle} />
                                        </div>
                                    </div>
                                    <div className="inputFormLogin" style={{ marginTop: '2em' }}>
                                        <div className="iconFormArea">
                                            <FontAwesomeIcon icon={faKey} style={{ fontSize: '2.5em', color: '#454545' }} />
                                        </div>
                                        <div>
                                            <input type="password" name="pass" className="inputFormControlLogin" placeholder="Enter your password" onChange={onChangeHandle} />
                                        </div>
                                    </div>
                                </div>
                                <div className="d-flex flex-row justify-content-between align-items-center mt-4">
                                    <a href="/" className="forgotPass" style={{ textDecorationLine: 'none' }}>Forgot Password?</a>
                                    <input type="button" onClick={onClickHandle} className="submitButton" value="Login" />
                                </div>
                            </form>
                            <div className="mt-4">
                                <input type="button" className="registerBtn" onClick={() => { history.push('/register') }} value="Create Account" />
                            </div>
                        </div>
                    </div>
                    <div>
                        <div style={{ display: "flex", flexFlow: "column nowrap", alignItems: 'center' }}>
                            <span className="d-flex flex-column align-items-center">
                                <img alt="loginImage" width="650" height="550" src={loginLogo} />
                                <span style={{ fontSize: '40px', letterSpacing: '4px', fontWeight: 'bold', color: '#474747' }}>Join us</span>
                            </span>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Login;