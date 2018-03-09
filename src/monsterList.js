import React from 'react';

class MonsterPartTableElement extends React.Component {
    render() {
        const part = this.props.part;
        return(
            <tr>
                <td>{part.name}</td>
                <td>{part.carveRarity}</td>
                <td>{part.rewardRarity}</td>
            </tr>
        );
    }
}

// props rank = 'lowRankParts' || 'highRankParts
// props parts = {name, carveRarity, rewardRarity, _id}
class PartsRewardsTable extends React.Component {
    render() {
        const parts = this.props.parts;
        const title = this.props.rank === 'highRankRewards' ? 'High Rank Rewards:' : 'Low Rank Rewards:';
        const tableRows = parts.map(part => {
            return( <MonsterPartTableElement key={part._id} part={part} /> );
        });
        return(
            <div>
                <table>
                    <thead>
                        <tr><td>{title}</td></tr>
                        <tr>
                            <td>Name</td><td>Carves Rarity</td><td>Rewards Rarity</td>
                        </tr>
                    </thead>
                    <tbody>
                        {tableRows}
                    </tbody>
                </table>
            </div>
        );
    }
}

class WeakStatuses extends React.Component {
    render() {
        const stats = this.props.monster;
        return (
            <div>
                <table>
                    <thead>
                        <tr><td>Status Weakness:</td></tr>
                    </thead>
                    <tbody>
                        <tr>
                            <td>Poison</td><td>{stats.poison}</td>
                        </tr>
                        <tr>
                            <td>Sleep</td><td>{stats.sleep}</td>
                        </tr>
                        <tr>
                            <td>Paralysis</td><td>{stats.paralysis}</td>
                        </tr>
                        <tr>
                            <td>Blast</td><td>{stats.blast}</td>
                        </tr>
                        <tr>
                            <td>Stun</td><td>{stats.stun}</td>
                        </tr>
                    </tbody>
                </table>
            </div>
        );
    }
}

class WeakElements extends React.Component {
    render() {
        const elems = this.props.monster;
        return (
            <div>
                <table>
                    <thead>
                        <tr><td>Elemental Weakness:</td></tr>
                    </thead>
                    <tbody>
                        <tr>
                            <td>Fire</td><td>{elems.fire}</td>
                        </tr>
                        <tr>
                            <td>Water</td><td>{elems.water}</td>
                        </tr>
                        <tr>
                            <td>Thunder</td><td>{elems.thunder}</td>
                        </tr>
                        <tr>
                            <td>Ice</td><td>{elems.ice}</td>
                        </tr>
                        <tr>
                            <td>Dragon</td><td>{elems.dragon}</td>
                        </tr>
                    </tbody>
                </table>
            </div>
        );
    }
}

class MonsterIcon extends React.Component {
    render() {
        return (
            <div className='media'>
                <img src={this.props.icon} />
            </div>
        );
    }
}

class Monster extends React.Component {
    render() {
        return (
            <div className='container'>
                <div className='row'>
                    <div className='col-4'>
                        <MonsterIcon icon={this.props.monster.icon} />
                    </div>
                    <div className='col-8'>
                        <h1>{this.props.monster.name}</h1>
                        <div className='container'>
                            <div className='row'>
                                <div className='col-6'>
                                    <WeakStatuses monster={this.props.monster} />
                                </div>
                                <div className='col-6'>
                                    <WeakElements monster={this.props.monster} />
                                </div>
                            </div>
                        </div>
                        <div className='container'>
                            <div className='row'>
                                <div className='col-6'>
                                    <PartsRewardsTable rank='lowRankParts' parts={this.props.monster.lowRankParts} />
                                </div>
                                <div className='col-6'>
                                    <PartsRewardsTable rank='highRankParts' parts={this.props.monster.highRankParts} />
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}

class MonsterList extends React.Component {
    render() {
        const monsters = this.props.monsters;
        const listItems = monsters.map(monster => {
            return ( <Monster monster={monster} key={monster._id} /> );
        });
        return (
            <div>
                {listItems}
            </div>
        );
    }
}

export default MonsterList;
