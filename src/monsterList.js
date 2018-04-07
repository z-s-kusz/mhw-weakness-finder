import React from 'react';
import { Link } from 'react-router-dom';
import { Grid } from 'react-bootstrap';

import WeakElements from './monsterDetailPage/WeakElements';
import WeakStatuses from './monsterDetailPage/WeakStatuses';
import PartsRewardsTable from './monsterDetailPage/PartsRewardsTable';

class MonsterList extends React.Component {
    render() {
        const monsters = this.props.monsters;
        const listItems = monsters.map((monster, i) => {
            const title = (
                <Link to={'/monster/' + monster._id}>{monster.name}</Link>
            );
            return (
                <Grid key={i}>
                <h1>{title}</h1>

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
                        <PartsRewardsTable rank='lowRankParts' parts={monster.lowRankParts} />
                    </div>
                    <div className='flexItem'>
                        <PartsRewardsTable rank='highRankParts' parts={monster.highRankParts} />
                    </div>
                </div>
            </Grid>
            );
        });
        return (
            <div>
                {listItems}
            </div>
        );
    }
}

export default MonsterList;
