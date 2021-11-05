import React from 'react';
import avatar1 from '../../assets/images/avatar1.jpg';
import './CSS/SideAccount.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
    faUser,
    faBell,
    faBullseye,
    faLock,
    faHeadset,
    faQuestionCircle,
    faBorderAll,
    faSignOutAlt
} from '@fortawesome/free-solid-svg-icons';
import { NavLink } from 'react-router-dom';

const NAME = 'John Mark';
const NAMEMAIL = '@johnMark';

const SideAccountPanel = () => {
    return (
        <div>
            <div className="AccountStyle">
                <div className="AccountPadding">
                    <div className="d-flex align-items-center AccountHeader">
                        <img src={avatar1} alt="profile" className="shadow-lg AccountAvatar" />
                        <div className="text-uppercase AccountName">
                            <span style={{ fontSize: '15px', fontStretch: '20%', fontWeight: 'bold', letterSpacing: '1.5px' }}>{NAME}</span>
                            <span style={{ fontSize: '10px' }} className="text-lowercase">{NAMEMAIL}</span>
                        </div>
                    </div>
                </div>
                <div style={{ marginTop: '1em', textAlign: 'center' }}>
                    <NavLink to="/" style={{ textDecorationLine: 'none' }}>
                        <div style={{ color: '#666665' }}>
                            <div style={{ padding: '.5em .5em' }} className={`d-flex justify-content-between mt-1 sideBtn`}>
                                <div style={{ display: 'flex', flex: 'row' }} className="d-flex align-items-center">
                                    <FontAwesomeIcon icon={faBorderAll} style={{ fontSize: '1.2em' }} />
                                    <span style={{ marginLeft: '1em' }} className="fw-bold">News feed</span>
                                </div>
                            </div>
                        </div>
                    </NavLink>
                </div><hr />
                <div style={{ marginTop: '1em', textAlign: 'center' }}>
                    <NavLink to="/account" style={{ textDecorationLine: 'none' }}>
                        <div style={{ color: '#666665' }}>
                            <div style={{ padding: '.5em .5em' }} className="d-flex justify-content-between mt-1 sideBtn">
                                <div style={{ display: 'flex', flex: 'row' }} className="d-flex align-items-center">
                                    <FontAwesomeIcon icon={faUser} style={{ fontSize: '1.2em' }} />
                                    <span style={{ marginLeft: '1em' }} className="fw-bold">Account</span>
                                </div>
                            </div>
                        </div>
                    </NavLink>
                    <a href="/notifications" style={{ textDecorationLine: 'none' }}>
                        <div style={{ color: '#666665' }}>
                            <div style={{ padding: '.5em .5em' }} className="d-flex justify-content-between mt-1 sideBtn">
                                <div style={{ display: 'flex', flex: 'row' }} className="d-flex align-items-center ">
                                    <FontAwesomeIcon icon={faBell} style={{ fontSize: '1.2em' }} />
                                    <span style={{ marginLeft: '1em' }} className="fw-bold">Notifications</span>
                                </div>
                            </div>
                        </div>
                    </a>
                    <NavLink to="/appearance" style={{ textDecorationLine: 'none' }}>
                        <div style={{ color: '#666665' }}>
                            <div style={{ padding: '.5em .5em' }} className="d-flex justify-content-between mt-1 sideBtn">
                                <div style={{ display: 'flex', flex: 'row' }} className="d-flex align-items-center">
                                    <FontAwesomeIcon icon={faBullseye} style={{ fontSize: '1.2em' }} />
                                    <span style={{ marginLeft: '1em' }} className="fw-bold">Appearance</span>
                                </div>
                            </div>
                        </div>
                    </NavLink>
                    <NavLink to="/privacy-and-support" style={{ textDecorationLine: 'none' }}>
                        <div style={{ color: '#666665' }}>
                            <div style={{ padding: '.5em .5em' }} className="d-flex justify-content-between mt-1 sideBtn">
                                <div style={{ display: 'flex', flex: 'row' }} className="d-flex align-items-center">
                                    <FontAwesomeIcon icon={faLock} style={{ fontSize: '1.2em' }} />
                                    <span style={{ marginLeft: '1em' }} className="fw-bold">Privacy & Security</span>
                                </div>
                            </div>
                        </div>
                    </NavLink>
                    <NavLink to="/help-and-support" style={{ textDecorationLine: 'none' }}>
                        <div href="/" style={{ color: '#666665' }}>
                            <div style={{ padding: '.5em .5em' }} className="d-flex justify-content-between mt-1 sideBtn">
                                <div style={{ display: 'flex', flex: 'row' }} className="d-flex align-items-center">
                                    <FontAwesomeIcon icon={faHeadset} style={{ fontSize: '1.2em' }} />
                                    <span style={{ marginLeft: '1em' }} className="fw-bold">Help and Support</span>
                                </div>
                            </div>
                        </div>
                    </NavLink>
                    <NavLink to="/about" style={{ textDecorationLine: 'none' }}>
                        <div href="/about" style={{ color: '#666665' }}>
                            <div style={{ padding: '.5em .5em' }} className="d-flex justify-content-between mt-1 sideBtn">
                                <div style={{ display: 'flex', flex: 'row' }} className="d-flex align-items-center">
                                    <FontAwesomeIcon icon={faQuestionCircle} style={{ fontSize: '1.2em' }} />
                                    <span style={{ marginLeft: '1em' }} className="fw-bold">About</span>
                                </div>
                            </div>
                        </div>
                    </NavLink>
                    <NavLink to="/logout" style={{ textDecorationLine: 'none' }}>
                        <div style={{ color: '#666665' }}>
                            <div style={{ padding: '.5em .5em' }} className="d-flex justify-content-between mt-1 sideBtn">
                                <div style={{ display: 'flex', flex: 'row' }} className="d-flex align-items-center">
                                    <FontAwesomeIcon icon={faSignOutAlt} style={{ fontSize: '1.2em' }} />
                                    <span style={{ marginLeft: '1em' }} className="fw-bold">Log Out</span>
                                </div>
                            </div>
                        </div>
                    </NavLink>
                </div>
                <div style={{ bottom: '0', marginTop: '18em', position: 'fixed' }}>
                    <span style={{ fontWeight: 'bold' }}>&copy; 2021 - SocTalk</span>
                </div>
            </div>
        </div>
    );
};

export default SideAccountPanel;