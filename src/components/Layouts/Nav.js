import React from 'react';
import { Navbar } from 'react-bootstrap';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faGithub, faFacebook } from '@fortawesome/free-brands-svg-icons';
import { faSearch } from '@fortawesome/free-solid-svg-icons';

const pkg = require('../../../package.json');
const APP_VERSION = pkg.version;

const NavFixed = {
    zIndex: '999',
    position: 'fixed',
    width: '100%',
    backgroundColor: '#ffffff',
    borderBottomStyle: 'solid',
    borderBottomWidth: '1px',
    borderBottomColor: '#f2f2f2'
}
const NavHeader = {
    marginLeft: '2.5em'
}

const IconBar = {
    marginRight: '2.5em',
}
const SearchDiv = {
    backgroundColor: '#ededed',
    marginRight: '2em',
    height: '2.5em',
    borderRadius: '4px',
}
const SearchInput = {
    backgroundColor: '#ededed',
    borderStyle: 'none',
    outline: 'none',
    width: '30em',
    height: '2.3em',
    paddingRight: '1em',
    borderRadius: '2px',
    marginLeft: '0.5em',
    marginTop: '0.1em'
}
const Nav = () => {
    return (
        <div>
            <Navbar style={NavFixed} expand="lg" variant="light">
                <Navbar.Brand style={NavHeader} className="fw-bold">SocTalk v{APP_VERSION}</Navbar.Brand>
                <Navbar.Collapse className="justify-content-end">
                    <div style={SearchDiv}>
                        <input type="text" style={SearchInput} name="name" placeholder="Search" />
                        <a type="submit" href="/search" style={{ marginRight: '1.5em', color: '#737373' }}><FontAwesomeIcon icon={faSearch} /></a>
                    </div>
                    <div style={IconBar}>
                        <div style={{ marginTop: '5px' }}>
                            <a href="/github" style={{ color: '#000000', margin: '0 20px 0 0' }}><FontAwesomeIcon className="h4" icon={faGithub} /></a>
                            <a href="/facebook" style={{ color: '#000a78' }} ><FontAwesomeIcon icon={faFacebook} className="h4" /></a>
                        </div>
                    </div>
                </Navbar.Collapse>
            </Navbar>
        </div>
    );
};

export default Nav;