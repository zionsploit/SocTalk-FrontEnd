import '../../Layouts/CSS/Register.css';
import registerIcon from '../../../assets/images/registerIcon.svg';
import googleIcon from '../../../assets/images/google.png';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faAt, faLock } from '@fortawesome/free-solid-svg-icons';
import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { Maybe } from '@fpc/maybe';
import { createAccountController } from '../../../controllers/account.controllers';
const Register = () => {


    const [getDataRegister, setDataRegister] = useState({})

    const onChangeHandle = (e) => {
        Maybe(setDataRegister({ ...getDataRegister, [e.target.name]: e.target.value }))
    }

    const onClickHandle = (e) => {
        e.preventDefault()
        createAccountController(getDataRegister)
    }


    return (
        <div>
            <div className="registerBased">
                <div className="leftPanel">
                    <div className="leftContainer">
                        <div>
                            <span className="appTitle">Soctalk.</span>
                        </div>
                        <div className="textBanner">
                            A central hub where teams can work, plan, and achieve amazing things together.
                        </div>
                        <div className="registerImage">
                            <img src={registerIcon} className="imageLeftPanel" alt="register icon" />
                        </div>
                    </div>
                </div>
                <div className="rightPanel">
                    <div className="rigthContainer">
                        <div className="rightText">
                            <span className="signUpTitle">Sign Up to Soctalk.</span>
                            <span className="alreadyAmember">Already a member? <Link to="/login" className="logIn">Log in</Link></span>
                        </div>
                        <form>
                            <div className="formContainer">
                                <div className="formGroup">
                                    <label className="inputLabel">E-mail</label>
                                    <div className="inputForm">
                                        <input type="email" name="email" className="inputControl" placeholder="name@gmail.com" autoComplete="off" onChange={onChangeHandle} /><FontAwesomeIcon className="iconFormLabel" icon={faAt} />
                                    </div>
                                </div>
                                <div className="formGroup">
                                    <label className="inputLabel">Password</label>
                                    <div className="inputForm">
                                        <input type="password" name="pass" className='inputControl' placeholder="6+ Characters, 1 Capital letter" autoComplete="off" onChange={onChangeHandle} /><FontAwesomeIcon className="iconFormLabel" icon={faLock} />
                                    </div>
                                </div>
                            </div>
                            <div className="buttonContainer">
                                <div className="buttonList">
                                    <button className="createAccountBtn" type="button" onClick={onClickHandle}>Create an account</button>
                                    <button className="singUpwithGooglebtn" type="button" style={{ marginTop: '20px' }}><img src={googleIcon} alt="googleIcon" className="googleImg" /><span style={{ marginLeft: '10px' }}>Sign up with Google</span></button>
                                </div>
                            </div>
                        </form>
                        <div className="footerContainer">
                            <div className="footerText">
                                <span className="f-text">This is protected by reCAPTCHA and the Google</span>
                                <span className="f-text"><Link className="f-link" to="privacy">Privacy Policy</Link> and <Link className="f-link" to="termsofservice">Terms of Service</Link> apply.</span>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Register;