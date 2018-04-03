import React from 'react';

import MainMonsterPage from './monsterDetailPage/MainMonsterPage';
import BasicMonsterInfo from './BasicMonsterInfo';

class MonsterList extends React.Component {
    render() {
        const monsters = this.props.monsters;
        const listItems = monsters.map(monster => {
            return ( <BasicMonsterInfo monster={monster} key={monster._id} /> );
        });
        return (
            <div>
                {listItems}
            </div>
        );
    }
}

export default MonsterList;
