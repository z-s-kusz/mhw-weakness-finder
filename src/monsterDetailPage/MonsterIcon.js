import React from 'react';

// we will work with this later, lets just get basic text flowing right now
// <MonsterIcon icon={this.props.monster.icon} /> place this guy into the Monster class where aplicable
class MonsterIcon extends React.Component {
    render() {
        return (
            <div className='media'>
                <img src={this.props.icon} />
            </div>
        );
    }
}

export default MonsterIcon;
