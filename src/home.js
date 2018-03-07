import React from 'react';
import axios from 'axios';
import { Link } from 'react-router-dom';

import MonsterList from './monsterList';

class NavBar extends React.Component {
    render() {
        return (
            <nav className="navbar-dark fixed-top align-items-end">
                            <Link to='/edit' className='nav-link'>Add/Edit Monsters</Link>
                <form className="form-inline my-2 my-lg-0">
                    <input className="form-control mr-sm-2" type="text" placeholder="Search" />
                    <button className="btn btn-outline-success my-2 my-sm-0" type="submit">Search</button>
                </form>
            </nav>
        );
    }
}

class Header extends React.Component {
    render() {
        return (
            <div className='jumbotron'>
            <div className='container'>
                <h1 className='display-4'>MHW Weakness Finder</h1>
                <p>Search Monster Name, Element, and Status Ailments</p>
            </div>
            </div>
        );
    }
}

class Body extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            monsters: []
        }
    }

    componentDidMount() {
        axios.get('/monsters')
        .then(res => {
            this.setState({
                monsters: res.data
            });
        })
        .catch(err => {
            console.log(err);
        });
    }

    render() {
        return (
            <div className='container'>
                <MonsterList monsters={this.state.monsters}/>
            </div>
        );
    }
}

class MonsterInfoPage extends React.Component {
    render() {
        return (
            <div>
                <NavBar />
                <Header />
                <Body />
            </div>
        );
    }
}

export default MonsterInfoPage;
