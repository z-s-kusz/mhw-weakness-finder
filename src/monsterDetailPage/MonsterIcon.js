import React from 'react';

// propsicon={this.props.monster.icon}
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
