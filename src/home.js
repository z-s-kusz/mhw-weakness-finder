import React from 'react';
import axios from 'axios';
import { Link } from 'react-router-dom';

import MonsterList from './monsterList';
import Search from './Search.js';
import { Navbar } from 'react-bootstrap';

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
                <Navbar fixedTop>
                    <Navbar.Text><Link to='/edit'>Add/Edit Monsters</Link></Navbar.Text>
                    <Navbar.Form pullRight><Search updateParent={this.updateMonsterList} /></Navbar.Form>
                </Navbar>

                <div className='jumbotron'>
                    <div className='container'>
                        <h1 className='display-4'>MHW Field Guide</h1>
                        <p>Search monster name or part/reward name.</p>
                        <p>Weaknesses: 0(immune) - 3(very weak).</p>
                        <p>Part/rewards: 0(unavailable) - 5(very common).</p>
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
