import React from 'react';

class WeakStatuses extends React.Component {
    render() {
        const stats = this.props.monster;
        return (
            <div>
                <table>
                    <thead>
                        <tr><td>Statuses:</td></tr>
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
                        <tr><td>Elements:</td></tr>
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
