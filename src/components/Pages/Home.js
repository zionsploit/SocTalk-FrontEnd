import React, { useEffect } from 'react';
import { Card, Container, Badge } from 'react-bootstrap';
import avatar1 from '../../assets/images/avatar1.jpg';
import Code from '../../assets/images/Code.png';
import Node from '../../assets/images/Node.png';
import ReactImg from '../../assets/images/ReactImg.jpg';
import '../Layouts/CSS/Home.css';
import { Maybe } from '@fpc/maybe';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
    faEllipsisH,
    faHeart,
    faComments,
    faShareAlt,
    faImage,
    faCamera,
    faMicrophone,
    faSearch
} from '@fortawesome/free-solid-svg-icons';

import person1 from '../../assets/images/person1.jpg';
import person2 from '../../assets/images/person2.jpg';
import person3 from '../../assets/images/person3.jpg';
import person4 from '../../assets/images/person4.jpg';
import person5 from '../../assets/images/person5.jpg';
import person6 from '../../assets/images/person6.jpg';
import person7 from '../../assets/images/person7.jpg';
import person8 from '../../assets/images/person8.jpg';
import person9 from '../../assets/images/person9.jpg';
import person10 from '../../assets/images/person10.jpg';
import person11 from '../../assets/images/person11.jpg';
import person12 from '../../assets/images/person12.jpg';
import person13 from '../../assets/images/person13.jpg';

import localStorage from 'local-storage';
import { useHistory } from 'react-router';
import jwt from 'jsonwebtoken';
import Nav from '../Layouts/Nav';
import SideAccountPanel from '../Layouts/SideAccountPanel';
import { useDispatch } from 'react-redux';
import { token } from '../../app/features/tokenSlice';

const NAME = 'John Mark';
const Text = `Lorem ipsum dolor sit amet. Qui aliquid eaque At natus sed dicta voluptatem sed velit corrupti! Velit consequuntur aut sint odio sed odit minus aut molestiae doloremque. Ut fugiat quae nam praesentium galisum aut voluptatem molestiae vel tenetur ducimus qui dicta architecto ea quia explicabo.

Ut sint iste et quidem voluptas nam unde quam aut minima officiis et amet omnis. Et deserunt blanditiis est dolorem commodi aut tempora sunt! Quo quia assumenda hic deleniti rerum ut quisquam fugit et blanditiis minima sed quia aspernatur et neque inventore eum consectetur nesciunt.

In ducimus nihil aut galisum cupiditate At molestias eaque sit suscipit necessitatibus sed necessitatibus veniam voluptates consectetur. Aut totam eveniet sit sunt tenetur sed repellendus maiores sed repudiandae deserunt ab laboriosam expedita eos iure molestias.`;
const TextBody = Text.length === 250 ? Text : Text.substring(0, 250);
const StatusPlaceholder = `What do you want to talk about?`;

const BaseLayout = () => {
    const history = useHistory()
    const dispatch = useDispatch();

    useEffect(() => {
        const tokenUser = localStorage.get('token');
        if (Maybe(tokenUser).isEmpty) {
            history.replace('/login')
        }
        if (Maybe(tokenUser).nonEmpty) {
            const decoded = jwt.decode(tokenUser)
            if (!decoded) {
                history.replace('/login')
            }
            else {
                dispatch(token(tokenUser))
            }
        }
    }, [])

    return (
        <>
            <Nav />
            <SideAccountPanel />
            <div className="BaseStyle">
                <div className="TimelineStyle">
                    <Container>
                        <div>
                            <div className="StatusDiv">
                                <div className="Status">
                                    <img src={avatar1} alt="profile" className="StatusPostAvatar" />
                                    <div className="StatusInputDiv">
                                        <input type="text" className="StatusInput" name="name" placeholder={StatusPlaceholder} />
                                    </div>
                                </div>
                                <div className="d-flex justify-content-between">
                                    <div style={{ display: 'flex', flexFlow: 'row nowrap', marginLeft: '5em' }}>
                                        <a href="/" style={{ margin: '.2em .3em', fontSize: '1.5em' }}><FontAwesomeIcon className="StatusImageIcon" icon={faImage} /></a>
                                        <a href="/" style={{ margin: '.3em .3em', fontSize: '1.3em' }}><FontAwesomeIcon className="StatusCameraIcon" icon={faCamera} /></a>
                                        <a href="/" style={{ margin: '.4em .4em', fontSize: '1.2em' }}><FontAwesomeIcon className="StatusMicrophoneIcon" icon={faMicrophone} /></a>
                                    </div>
                                    <div>
                                        <button style={{ width: '5em', fontSize: '12px', margin: '0.5em 3em 0 0' }} className="PostBtn">POST</button>
                                    </div>
                                </div>
                                <hr />
                            </div>
                            <div className="NewsFeed">
                                <div className="mt-5">
                                    <Card className="shadow CardOverride">
                                        <Card.Body>
                                            <div className="d-flex justify-content-between">
                                                <div className="CardHeader">
                                                    <img src={avatar1} alt="profile" className="shadow-lg CardAvatar" />
                                                    <div className="CardName">
                                                        <span style={{ fontSize: '15px', fontStretch: '20%', fontWeight: 'bold', letterSpacing: '1.5px' }} className="text-uppercase fw-bold">{NAME}</span>
                                                        <span style={{ fontSize: '10px', fontStretch: '20%', fontWeight: 'bold', letterSpacing: '1px' }} className="fw-bold">October 6, 2021 - 7:02pm</span>
                                                    </div>
                                                </div>
                                                <div>
                                                    <a href='/delete' className="CardMore"><FontAwesomeIcon icon={faEllipsisH} /></a>
                                                </div>
                                            </div>
                                            <div className="CardBody">
                                                <div>
                                                    <span style={{ fontStretch: '20%', letterSpacing: '0.1px' }}>{TextBody}</span>
                                                </div><hr />
                                                <div className="d-flex justify-content-around align-items-center">
                                                    <div className="footerIcon">
                                                        <div className="_1stFooterIconList">
                                                            <div style={{ display: 'flex', flexFlow: 'column nowrap', textAlign: 'center' }}>
                                                                <a href='/likes' className="IconFooterHeart"><FontAwesomeIcon icon={faHeart} /></a>
                                                                <div style={{ fontSize: '12.5px', fontWeight: 'bold', fontStretch: '20%', letterSpacing: '1px' }}>16.2M Likes</div>
                                                            </div>
                                                        </div>
                                                    </div>
                                                    <div>
                                                        |
                                                    </div>
                                                    <div>
                                                        <div style={{ display: 'flex', flexFlow: 'column nowrap', textAlign: 'center' }}>
                                                            <a href='/comments' className="IconFooterComments"><FontAwesomeIcon icon={faComments} /></a>
                                                            <div style={{ fontSize: '12.5px', fontWeight: 'bold', fontStretch: '20%', letterSpacing: '1px' }}>570.7M Comments</div>
                                                        </div>
                                                    </div>
                                                    <div>
                                                        |
                                                    </div>
                                                    <div>
                                                        <div style={{ display: 'flex', flexFlow: 'column nowrap', textAlign: 'center' }}>
                                                            <a href='/share' className="IconFooterShare"><FontAwesomeIcon icon={faShareAlt} /></a>
                                                            <div style={{ fontSize: '12.5px', fontWeight: 'bold', fontStretch: '20%', letterSpacing: '1px' }}>901.4M Shares</div>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                        </Card.Body>
                                    </Card>
                                </div>
                                <div className="mt-5">
                                    <Card className="shadow CardOverride">
                                        <Card.Body>
                                            <div className="d-flex justify-content-between">
                                                <div className="CardHeader">
                                                    <img src={avatar1} alt="profile" className="shadow-lg CardAvatar" />
                                                    <div className="CardName">
                                                        <span style={{ fontSize: '15px', fontStretch: '20%', fontWeight: 'bold', letterSpacing: '1.5px' }} className="text-uppercase fw-bold">{NAME}</span>
                                                        <span style={{ fontSize: '10px', fontStretch: '20%', fontWeight: 'bold', letterSpacing: '1px' }} className="fw-bold">October 6, 2021 - 7:02pm</span>
                                                    </div>
                                                </div>
                                                <div>
                                                    <a href='/delete' className="CardMore"><FontAwesomeIcon icon={faEllipsisH} /></a>
                                                </div>
                                            </div>
                                            <div className="CardBody">
                                                <div>
                                                    <span style={{ fontStretch: '20%', letterSpacing: '0.1px' }}>{TextBody}</span>
                                                </div><hr />
                                                <div className="d-flex justify-content-around align-items-center">
                                                    <div className="footerIcon">
                                                        <div className="_1stFooterIconList">
                                                            <div style={{ display: 'flex', flexFlow: 'column nowrap', textAlign: 'center' }}>
                                                                <a href='/likes' className="IconFooterHeart"><FontAwesomeIcon icon={faHeart} /></a>
                                                                <div style={{ fontSize: '12.5px', fontWeight: 'bold', fontStretch: '20%', letterSpacing: '1px' }}>16.2M Likes</div>
                                                            </div>
                                                        </div>
                                                    </div>
                                                    <div>
                                                        |
                                                    </div>
                                                    <div>
                                                        <div style={{ display: 'flex', flexFlow: 'column nowrap', textAlign: 'center' }}>
                                                            <a href='/comments' className="IconFooterComments"><FontAwesomeIcon icon={faComments} /></a>
                                                            <div style={{ fontSize: '12.5px', fontWeight: 'bold', fontStretch: '20%', letterSpacing: '1px' }}>570.7M Comments</div>
                                                        </div>
                                                    </div>
                                                    <div>
                                                        |
                                                    </div>
                                                    <div>
                                                        <div style={{ display: 'flex', flexFlow: 'column nowrap', textAlign: 'center' }}>
                                                            <a href='/share' className="IconFooterShare"><FontAwesomeIcon icon={faShareAlt} /></a>
                                                            <div style={{ fontSize: '12.5px', fontWeight: 'bold', fontStretch: '20%', letterSpacing: '1px' }}>901.4M Shares</div>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                        </Card.Body>
                                    </Card>
                                </div>
                                <div className="mt-5">
                                    <Card className="shadow CardOverride">
                                        <Card.Body>
                                            <div className="d-flex justify-content-between">
                                                <div className="CardHeader">
                                                    <img src={avatar1} alt="profile" className="shadow-lg CardAvatar" />
                                                    <div className="CardName">
                                                        <span style={{ fontSize: '15px', fontStretch: '20%', fontWeight: 'bold', letterSpacing: '1.5px' }} className="text-uppercase fw-bold">{NAME}</span>
                                                        <span style={{ fontSize: '10px', fontStretch: '20%', fontWeight: 'bold', letterSpacing: '1px' }} className="fw-bold">October 6, 2021 - 7:02pm</span>
                                                    </div>
                                                </div>
                                                <div>
                                                    <a href='/delete' className="CardMore"><FontAwesomeIcon icon={faEllipsisH} /></a>
                                                </div>
                                            </div>
                                            <div className="CardBody">
                                                <div>
                                                    <span style={{ fontStretch: '20%', letterSpacing: '0.1px' }}>{TextBody}</span>
                                                </div><hr />
                                                <div className="d-flex justify-content-around align-items-center">
                                                    <div className="footerIcon">
                                                        <div className="_1stFooterIconList">
                                                            <div style={{ display: 'flex', flexFlow: 'column nowrap', textAlign: 'center' }}>
                                                                <a href='/likes' className="IconFooterHeart"><FontAwesomeIcon icon={faHeart} /></a>
                                                                <div style={{ fontSize: '12.5px', fontWeight: 'bold', fontStretch: '20%', letterSpacing: '1px' }}>16.2M Likes</div>
                                                            </div>
                                                        </div>
                                                    </div>
                                                    <div>
                                                        |
                                                    </div>
                                                    <div>
                                                        <div style={{ display: 'flex', flexFlow: 'column nowrap', textAlign: 'center' }}>
                                                            <a href='/comments' className="IconFooterComments"><FontAwesomeIcon icon={faComments} /></a>
                                                            <div style={{ fontSize: '12.5px', fontWeight: 'bold', fontStretch: '20%', letterSpacing: '1px' }}>570.7M Comments</div>
                                                        </div>
                                                    </div>
                                                    <div>
                                                        |
                                                    </div>
                                                    <div>
                                                        <div style={{ display: 'flex', flexFlow: 'column nowrap', textAlign: 'center' }}>
                                                            <a href='/share' className="IconFooterShare"><FontAwesomeIcon icon={faShareAlt} /></a>
                                                            <div style={{ fontSize: '12.5px', fontWeight: 'bold', fontStretch: '20%', letterSpacing: '1px' }}>901.4M Shares</div>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                        </Card.Body>
                                    </Card>
                                </div>
                                <div className="mt-5">
                                    <Card className="shadow CardOverride">
                                        <Card.Body>
                                            <div className="d-flex justify-content-between">
                                                <div className="CardHeader">
                                                    <img src={avatar1} alt="profile" className="shadow-lg CardAvatar" />
                                                    <div className="CardName">
                                                        <span style={{ fontSize: '15px', fontStretch: '20%', fontWeight: 'bold', letterSpacing: '1.5px' }} className="text-uppercase fw-bold">{NAME}</span>
                                                        <span style={{ fontSize: '10px', fontStretch: '20%', fontWeight: 'bold', letterSpacing: '1px' }} className="fw-bold">October 6, 2021 - 7:02pm</span>
                                                    </div>
                                                </div>
                                                <div>
                                                    <a href='/delete' className="CardMore"><FontAwesomeIcon icon={faEllipsisH} /></a>
                                                </div>
                                            </div>
                                            <div className="CardBody">
                                                <div>
                                                    <span style={{ fontStretch: '20%', letterSpacing: '0.1px' }}>{TextBody}</span>
                                                </div><hr />
                                                <div className="d-flex justify-content-around align-items-center">
                                                    <div className="footerIcon">
                                                        <div className="_1stFooterIconList">
                                                            <div style={{ display: 'flex', flexFlow: 'column nowrap', textAlign: 'center' }}>
                                                                <a href='/likes' className="IconFooterHeart"><FontAwesomeIcon icon={faHeart} /></a>
                                                                <div style={{ fontSize: '12.5px', fontWeight: 'bold', fontStretch: '20%', letterSpacing: '1px' }}>16.2M Likes</div>
                                                            </div>
                                                        </div>
                                                    </div>
                                                    <div>
                                                        |
                                                    </div>
                                                    <div>
                                                        <div style={{ display: 'flex', flexFlow: 'column nowrap', textAlign: 'center' }}>
                                                            <a href='/comments' className="IconFooterComments"><FontAwesomeIcon icon={faComments} /></a>
                                                            <div style={{ fontSize: '12.5px', fontWeight: 'bold', fontStretch: '20%', letterSpacing: '1px' }}>570.7M Comments</div>
                                                        </div>
                                                    </div>
                                                    <div>
                                                        |
                                                    </div>
                                                    <div>
                                                        <div style={{ display: 'flex', flexFlow: 'column nowrap', textAlign: 'center' }}>
                                                            <a href='/share' className="IconFooterShare"><FontAwesomeIcon icon={faShareAlt} /></a>
                                                            <div style={{ fontSize: '12.5px', fontWeight: 'bold', fontStretch: '20%', letterSpacing: '1px' }}>901.4M Shares</div>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                        </Card.Body>
                                    </Card>
                                </div>
                                <div className="mt-5">
                                    <Card className="shadow CardOverride">
                                        <Card.Body>
                                            <div className="d-flex justify-content-between">
                                                <div className="CardHeader">
                                                    <img src={avatar1} alt="profile" className="shadow-lg CardAvatar" />
                                                    <div className="CardName">
                                                        <span style={{ fontSize: '15px', fontStretch: '20%', fontWeight: 'bold', letterSpacing: '1.5px' }} className="text-uppercase fw-bold">{NAME}</span>
                                                        <span style={{ fontSize: '10px', fontStretch: '20%', fontWeight: 'bold', letterSpacing: '1px' }} className="fw-bold">October 6, 2021 - 7:02pm</span>
                                                    </div>
                                                </div>
                                                <div>
                                                    <a href='/delete' className="CardMore"><FontAwesomeIcon icon={faEllipsisH} /></a>
                                                </div>
                                            </div>
                                            <div className="CardBody">
                                                <div>
                                                    <span style={{ fontStretch: '20%', letterSpacing: '0.1px' }}>{TextBody}</span>
                                                </div><hr />
                                                <div className="d-flex justify-content-around align-items-center">
                                                    <div className="footerIcon">
                                                        <div className="_1stFooterIconList">
                                                            <div style={{ display: 'flex', flexFlow: 'column nowrap', textAlign: 'center' }}>
                                                                <a href='/likes' className="IconFooterHeart"><FontAwesomeIcon icon={faHeart} /></a>
                                                                <div style={{ fontSize: '12.5px', fontWeight: 'bold', fontStretch: '20%', letterSpacing: '1px' }}>16.2M Likes</div>
                                                            </div>
                                                        </div>
                                                    </div>
                                                    <div>
                                                        |
                                                    </div>
                                                    <div>
                                                        <div style={{ display: 'flex', flexFlow: 'column nowrap', textAlign: 'center' }}>
                                                            <a href='/comments' className="IconFooterComments"><FontAwesomeIcon icon={faComments} /></a>
                                                            <div style={{ fontSize: '12.5px', fontWeight: 'bold', fontStretch: '20%', letterSpacing: '1px' }}>570.7M Comments</div>
                                                        </div>
                                                    </div>
                                                    <div>
                                                        |
                                                    </div>
                                                    <div>
                                                        <div style={{ display: 'flex', flexFlow: 'column nowrap', textAlign: 'center' }}>
                                                            <a href='/share' className="IconFooterShare"><FontAwesomeIcon icon={faShareAlt} /></a>
                                                            <div style={{ fontSize: '12.5px', fontWeight: 'bold', fontStretch: '20%', letterSpacing: '1px' }}>901.4M Shares</div>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                        </Card.Body>
                                    </Card>
                                </div>
                            </div>
                        </div>
                    </Container>
                </div>
                <div className="FriendListDiv">
                    <div>
                        <div style={{ marginLeft: '2em', width: '25em' }}>
                            <span className="fw-bold" style={{ color: '#757575', fontSize: '15px', letterSpacing: '.1em' }}>YOUR PAGES</span>
                            <div style={{ marginTop: '.5em' }}>
                                <div className="mt-3">
                                    <a href="/" style={{ textDecorationLine: 'none', color: '#666665' }}>
                                        <span className="d-flex align-items-center">
                                            <img alt="Pages" className="PagesImg" src={Code} height="500+" width="500" />
                                            <span style={{ marginLeft: '1em', fontWeight: 'bold' }}>Coding Ph</span>
                                        </span>
                                    </a>
                                </div>
                                <div className="mt-3">
                                    <a href="/" style={{ textDecorationLine: 'none', color: '#666665' }}>
                                        <span className="d-flex align-items-center">
                                            <img alt="Pages" className="PagesImg" src={Node} height="500+" width="500" />
                                            <span style={{ marginLeft: '1em', fontWeight: 'bold' }}>Node Coding Philippines</span>
                                        </span>
                                    </a>
                                </div>
                                <div className="mt-3">
                                    <a href="/" style={{ textDecorationLine: 'none', color: '#666665' }}>
                                        <span className="d-flex align-items-center">
                                            <img alt="Pages" className="PagesImg" src={ReactImg} height="500+" width="500" />
                                            <span style={{ marginLeft: '1em', fontWeight: 'bold' }}>React Real Ph & Indo</span>
                                        </span>
                                    </a>
                                </div>
                                <div className="mt-2">
                                    <a href="/mypage" style={{ textDecorationLine: 'none', color: '#666665', marginLeft: '.3em', fontSize: '1.5em' }}>
                                        <FontAwesomeIcon icon={faEllipsisH} />
                                    </a>
                                </div><hr />
                            </div>
                            <span className="fw-bold" style={{ color: '#757575', fontSize: '15px', letterSpacing: '.1em' }}>FRIENDS</span>
                            <div className="mt-3">
                                <div className="FriendsSearchDiv">
                                    <input type="text" className="FriendsSearchInput" name="name" placeholder="Search" autoComplete="off" />
                                    <a type="submit" href="/search" style={{ marginRight: '1.5em', color: '#737373' }}><FontAwesomeIcon icon={faSearch} /></a>
                                </div>
                            </div>
                            <div className="mt-3">
                                <div className="mt-3">
                                    <a href="/" style={{ textDecorationLine: 'none', color: '#666665' }}>
                                        <span className="d-flex align-items-center">
                                            <img alt="Pages" className="PersonImg" src={person1} height="500+" width="500" />
                                            <div style={{ width: '80%' }} className="d-flex justify-content-between">
                                                <span style={{ marginLeft: '1em', fontWeight: 'bold' }}>Ikumazo Yosiou</span>
                                                <span style={{ marginLeft: '1em', fontWeight: 'bold' }}><Badge bg="success">New</Badge></span>
                                            </div>
                                        </span>
                                    </a>
                                </div>
                                <div className="mt-3">
                                    <a href="/" style={{ textDecorationLine: 'none', color: '#666665' }}>
                                        <span className="d-flex align-items-center">
                                            <img alt="Pages" className="PersonImg" src={person2} height="500+" width="500" />
                                            <div style={{ width: '80%' }} className="d-flex justify-content-between">
                                                <span style={{ marginLeft: '1em', fontWeight: 'bold' }}>Hirabayashi Avaron</span>
                                                <span style={{ marginLeft: '1em', fontWeight: 'bold' }}><Badge bg="success">New</Badge></span>
                                            </div>
                                        </span>
                                    </a>
                                </div>
                                <div className="mt-3">
                                    <a href="/" style={{ textDecorationLine: 'none', color: '#666665' }}>
                                        <span className="d-flex align-items-center">
                                            <img alt="Pages" className="PersonImg" src={person3} height="500+" width="500" />
                                            <div style={{ width: '80%' }} className="d-flex justify-content-between">
                                                <span style={{ marginLeft: '1em', fontWeight: 'bold' }}>Hamasaki Bunko</span>
                                                <span style={{ marginLeft: '1em', fontWeight: 'bold' }}><Badge bg="success">New</Badge></span>
                                            </div>
                                        </span>
                                    </a>
                                </div>
                                <div className="mt-3">
                                    <a href="/" style={{ textDecorationLine: 'none', color: '#666665' }}>
                                        <span className="d-flex align-items-center">
                                            <img alt="Pages" className="PersonImg" src={person4} height="500+" width="500" />
                                            <span style={{ marginLeft: '1em', fontWeight: 'bold' }}>Ishimoto Izumi</span>
                                        </span>
                                    </a>
                                </div>
                                <div className="mt-3">
                                    <a href="/" style={{ textDecorationLine: 'none', color: '#666665' }}>
                                        <span className="d-flex align-items-center">
                                            <img alt="Pages" className="PersonImg" src={person5} height="500+" width="500" />
                                            <span style={{ marginLeft: '1em', fontWeight: 'bold' }}>Fukushima Tsuyoshi</span>
                                        </span>
                                    </a>
                                </div>
                                <div className="mt-3">
                                    <a href="/" style={{ textDecorationLine: 'none', color: '#666665' }}>
                                        <span className="d-flex align-items-center">
                                            <img alt="Pages" className="PersonImg" src={person6} height="500+" width="500" />
                                            <span style={{ marginLeft: '1em', fontWeight: 'bold' }}>Eto Sakiko</span>
                                        </span>
                                    </a>
                                </div>
                                <div className="mt-3">
                                    <a href="/" style={{ textDecorationLine: 'none', color: '#666665' }}>
                                        <span className="d-flex align-items-center">
                                            <img alt="Pages" className="PersonImg" src={person7} height="500+" width="500" />
                                            <span style={{ marginLeft: '1em', fontWeight: 'bold' }}>Usui Sora</span>
                                        </span>
                                    </a>
                                </div>
                                <div className="mt-3">
                                    <a href="/" style={{ textDecorationLine: 'none', color: '#666665' }}>
                                        <span className="d-flex align-items-center">
                                            <img alt="Pages" className="PersonImg" src={person8} height="500+" width="500" />
                                            <span style={{ marginLeft: '1em', fontWeight: 'bold' }}>Takeshita Satoshi</span>
                                        </span>
                                    </a>
                                </div>
                                <div className="mt-3">
                                    <div style={{ display: 'flex', flexFlow: 'row nowrap' }}>
                                        <a href="/">
                                            <img alt="Pages" className="PersonImgFooter" src={person9} height="500+" width="500" />
                                        </a>
                                        <a href="/">
                                            <img alt="Pages" className="PersonImgFooter" src={person10} height="500+" width="500" />
                                        </a>
                                        <a href="/">
                                            <img alt="Pages" className="PersonImgFooter" src={person11} height="500+" width="500" />
                                        </a>
                                        <a href="/">
                                            <img alt="Pages" className="PersonImgFooter" src={person12} height="500+" width="500" />
                                        </a>
                                        <a href="/">
                                            <img alt="Pages" className="PersonImgFooter" src={person13} height="500+" width="500" />
                                        </a>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
};

export default BaseLayout;