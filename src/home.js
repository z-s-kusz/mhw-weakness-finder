import React from 'react';
import MonsterList from './monsterList';
import monsters from './monsterData';

class NavBar extends React.Component {
    render() {
        return (
            <nav className="navbar fixed-top align-items-end">
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
    render() {
        return (
            <div className='container'>
                <MonsterList monsters={monsters}/>
            </div>
        );
    }
}

class Page extends React.Component {
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

export default Page;
