import React from 'react';
import axios from 'axios';

import MonsterList from './MonsterList';

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
                <div className='jumbotron'>
                    <div className='container'>
                        <h1 className='display-4'>MHW Field Guide</h1>
                        <h3>Search Monsters, Parts &amp; Rewards.</h3>
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
