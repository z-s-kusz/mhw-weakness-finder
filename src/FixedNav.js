import React from 'react';
import { Link } from 'react-router-dom';
import { Navbar } from 'react-bootstrap';

import Search from './Search';


// props updateParent moves the search filter up the chain
// only needed in home page for search
class FixedNav extends React.Component {
    constructor(props) {
        super(props);
        this.updateMonsterList = this.updateMonsterList.bind(this);
    }

    updateMonsterList(search) {
        this.props.updateParent(search);
    }
    render() {
        const search = this.props.pageName === 'home' ?
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
                <Navbar.Text><Link to='/edit'>Add/Edit Monsters</Link></Navbar.Text>
                <Navbar.Text><Link to='/charts'>Random Charts</Link></Navbar.Text>
            </Navbar.Collapse>
            </Navbar>
        );
    }
}

export default FixedNav;
