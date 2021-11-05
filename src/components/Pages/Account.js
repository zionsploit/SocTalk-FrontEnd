import React, { useEffect } from 'react';
import { Container } from 'react-bootstrap';
import '../Layouts/CSS/Account.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import profilebg from '../../assets/images/profilebg.jpg';
import avatar1 from '../../assets/images/avatar1.jpg';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faUserPlus, faUserCheck, faEdit, faSortDown } from '@fortawesome/free-solid-svg-icons';
import { BrowserRouter as Router, Switch, Route, Link } from 'react-router-dom';
import Nav from '../Layouts/Nav';
import SideAccountPanel from '../Layouts/SideAccountPanel';
import { useSelector } from 'react-redux';
import jwt from 'jsonwebtoken'
import { useHistory } from 'react-router';

const BIO = `“I’m sick of following my dreams, man. I’m just going to ask where they’re going and hook up with ’em later.”`;
const Account = () => {

    const token = useSelector((state) => state.tokenReducer.value);
    const history = useHistory();

    useEffect(() => {   
        const decoded = jwt.decode(token);
        if(!decoded)
        {
            history.replace('/login')
        }
    }, [])
    return (
        <>
            <Nav />
            <SideAccountPanel />
            <div className="BaseStyle">
                <div className="AccountDiv">
                    <Container>
                        <div>
                            <img src={profilebg} className="bgprofile" alt="Profile Background" />
                            <div className="profileInfo">
                                <div style={{ display: 'flex', flexFlow: 'column wrap' }} className="d-flex align-items-center">
                                    <img src={avatar1} className="profile" alt="Profile" />
                                    <button className="btnProfile"><FontAwesomeIcon icon={faEdit} /></button>
                                </div>
                                <div style={{ marginBottom: '20em', marginLeft: '2em' }}>
                                    <div style={{ display: 'flex', flexFlow: 'column nowrap', justifyContent: 'space-between' }}>
                                        <div className="d-flex justify-content-between align-items-center">
                                            <span className="text-uppercase fw-bold" style={{ color: '#edf6f9', fontSize: '2.6em', letterSpacing: '1.6px' }}>John Mark J. Banisilon</span>
                                            <button className="btnCover"><FontAwesomeIcon icon={faEdit} /> Cover</button>
                                        </div>
                                        <div style={{ display: 'flex', flexFlow: 'row nowrap', marginTop: '1em' }}>
                                            <span className="d-flex align-items-center" style={{ fontSize: '1.2em', color: '#457b9d' }}>
                                                <FontAwesomeIcon icon={faUserPlus} style={{ fontSize: '1.2em' }} />
                                                <span style={{ letterSpacing: '1px', marginLeft: ' 0.5em', fontWeight: 'bold' }}>337.5M Followers</span>
                                            </span>
                                            <span className="d-flex align-items-center" style={{ fontSize: '1.2em', marginLeft: '2em', color: '#457b9d' }}>
                                                <FontAwesomeIcon icon={faUserCheck} style={{ fontSize: '1.2em' }} />
                                                <span style={{ letterSpacing: '1px', marginLeft: '0.5em', fontWeight: 'bold' }}>0 Following</span>
                                            </span>
                                            <span style={{ fontSize: '1em', position: 'relative', left: '20em', color: '#457b9d' }}>
                                                <button className="btnUpdateInfo">UPDATE INFO</button>
                                            </span>
                                        </div><hr />
                                        <div style={{ margin: '0 2em 0 2em', textAlign: 'center', fontSize: '1.2em', color: '#2b2d42' }}>
                                            <span>{BIO}</span>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <Router>
                            <div style={{ bottom: '15em', position: 'relative' }}>
                                <hr />
                                <div className="d-flex justify-content-between">
                                    <Link to="/account" className="semiBtn">Post</Link>
                                    <Link to="/account/about" className="semiBtn" >About</Link>
                                    <Link to="/account/friends" className="semiBtn" >Friends 2247</Link>
                                    <Link to="/account/photos" href="/" className="semiBtn" >Photos</Link>
                                    <Link to="/account/videos" className="semiBtn" >Videos</Link>
                                    <Link to="/account/more" className="semiBtn d-flex" >More <FontAwesomeIcon icon={faSortDown} /></Link>
                                </div>
                            </div>
                            <div>
                                <Switch>
                                    <Route path="/account" component={Post} exact />
                                    <Route path="/account/about" component={About} />
                                    <Route path="/account/friends" component={Friends} />
                                </Switch>
                            </div>
                        </Router>
                    </Container>
                </div>
            </div>
        </>
    );
};

function Post() {
    return <p>This is Post</p>
}

function About() {
    return <p>This is About</p>
}

function Friends() {
    return <p>This is Friends</p>
}

export default Account;