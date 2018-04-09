import React from 'react';
import { Link } from 'react-router-dom';
import { Navbar } from 'react-bootstrap';

import Search from './Search.js';

class FixedNav extends React.Component {
    render() {
        const homeSearch = this.props.location.pathname === '/' ?
            <Navbar.Form pullRight><Search updateParent={this.updateMonsterList} /></Navbar.Form> : null;
        return (
            <Navbar fixedTop fluid inverse>
                <Navbar.Text><Link to='/'>Home</Link></Navbar.Text>
                <Navbar.Text><Link to='/edit'>Add/Edit Monsters</Link></Navbar.Text>
                <Navbar.Text><Link to='/charts'>Random Charts</Link></Navbar.Text>
                {homeSearch}
            </Navbar>
        );
    }
}

export default FixedNav;
