import React, { Component } from 'react';
import axios from 'axios';
import { Grid } from 'react-bootstrap';

import MonsterIcon from './MonsterIcon';
import WeakElements from './WeakElements';
import WeakStatuses from './WeakStatuses';
import PartsRewardsTable from './PartsRewardsTable';
import MonsterBreakables from './MonsterBreakables';
import MonsterWeakSpots from './MonsterWeakSpots';
import FixedNav from '../FixedNav';
import '../stylesheets/mainMonsterPage.css';

// http://.../monster/:_id
// props _id from route params
class MainMonsterPage extends Component {
    constructor(props) {
        super(props);
        this.state = {
            monster: {
                _id: '',
                name: '',
                icon: '',
                poison: 0,
                sleep: 0,
                paralysis: 0,
                blast: 0,
                stun: 0,
                fire: 0,
                water: 0,
                thunder: 0,
                ice: 0,
                dragon: 0,
                lowRankParts: [],
                highRankParts:[],
                searchableParts: '',
                breakables: []
            }
        }; 
    }

    componentDidMount() {
        const routeID = this.props.match.params._id;
        if (routeID) {
            axios.get('/monsters/' + routeID)
            .then(res => {
                this.setState({
                    monster: res.data[0]
                });
            })
            .catch(err => {
                console.log(err);
            });
        }
    }

    render() {
        const monster = this.state.monster;
        return (
            <div>
                <FixedNav pageName='monster/_id' />
                <Grid>
                    <div className='flexContainer'>
                        <div className='flexItem icon-center'>
                            <h1 className='icon-item'>{monster.name}</h1>
                            <MonsterIcon icon={monster.icon} className='icon-item' />
                        </div>
                        <div className='flexItem monster-detail-top'>
                            <MonsterWeakSpots monsterParts={monster.breakables}/>
                        </div>
                    </div>

                    <div className='flexContainer'>
                        <div className='flexItem'>
                            <WeakStatuses monster={monster} />
                        </div>
                        <div className='flexItem'>
                            <WeakElements monster={monster} />
                        </div>
                    </div>

                    <div className='flexContainer'>
                        <div className='flexItem'>
                            <PartsRewardsTable parts={monster.lowRankParts} rank='lowRankParts' />
                        </div>
                        <div className='flexItem'>
                            <PartsRewardsTable parts={monster.highRankParts} rank='highRankParts' />
                        </div>
                    </div>

                    <div className='flexContainer'>
                        <div className='flexItem'>
                            <MonsterBreakables breakables={monster.breakables} rank={'lowRankDrops'} />
                        </div>
                        <div className='flexItem'>
                            <MonsterBreakables breakables={monster.breakables} rank={'highRankDrops'} />
                        </div>
                    </div>

                </Grid>
            </div>
        );
    }
}

export default MainMonsterPage;
