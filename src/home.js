import React from 'react';
import axios from 'axios';
import { Link } from 'react-router-dom';

import MonsterList from './monsterList';
import Search from './Search.js';

class MonsterInfoPage extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            monsters: [],
            filteredMonsters: []
        }
        this.updateMonsterList = this.updateMonsterList.bind(this);
    }

    componentDidMount() {
        axios.get('/monsters')
        .then(res => {
            this.setState({
                monsters: res.data,
                filteredMonsters: res.data
            });
        })
        .catch(err => {
            console.log(err);
        });
    }

    updateMonsterList(searchString) {
        //when search is cleared reset whole list
        if (searchString === '') {
            this.setState({
                filteredMonsters: this.state.monsters
            });
        } else if (searchString.length > 0) {
            const filteredMonsters = this.state.monsters.filter(monster => {
                return (
                    (monster.name.toLowerCase().indexOf(searchString) !== -1) ||
                    (monster.searchableParts.toLowerCase().indexOf(searchString) !== -1)
                );
            });
            this.setState({
                filteredMonsters: filteredMonsters
            });
        }
    }

    render() {
        return (
            <div>
                <nav className="navbar-dark fixed-top align-items-end">
                    <Link to='/edit' className='nav-link'>Add/Edit Monsters</Link>
                    <div className="form-inline my-2 my-lg-0">
                        <Search updateParent={this.updateMonsterList} />
                    </div>
                </nav>

                <div className='jumbotron'>
                    <div className='container'>
                        <h1 className='display-4'>MHW Weakness Finder</h1>
                        <p>Search Monster Name, Element, and Status Ailments</p>
                    </div>
                </div>

                <div className='container'>
                    <MonsterList monsters={this.state.filteredMonsters}/>
                </div>
            </div>
        );
    }
}

export default MonsterInfoPage;
