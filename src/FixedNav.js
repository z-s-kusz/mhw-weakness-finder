import React from 'react';
import { Link } from 'react-router-dom';
import { Navbar } from 'react-bootstrap';

import Search from './Search';

class FixedNav extends React.Component {
    render() {
        const search = this.props.location.pathname === '/' ?
            <Navbar.Form pullRight><Search updateParent={this.updateMonsterList} /></Navbar.Form> :
            <Link to='/'>MHW Field Guide</Link>;

        return (
            <Navbar fixedTop inverse collapseOnSelect={true}>
            <Navbar.Header>
            <Navbar.Brand>{search}</Navbar.Brand>
                <Navbar.Toggle />
            </Navbar.Header>
            <Navbar.Collapse>
                <Navbar.Text><Link to='/'>Home</Link></Navbar.Text>
                <Navbar.Text><Link to='/charts'>Random Charts</Link></Navbar.Text>
            </Navbar.Collapse>
            </Navbar>
        );
    }
}

export default FixedNav;
