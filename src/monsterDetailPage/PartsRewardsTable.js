import React from 'react';
import { Link } from 'react-router-dom';
import { Table, Grid } from 'react-bootstrap';

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

// props rank = 'lowRankParts' || 'highRankParts'
// props parts={this.props.monster.lowRankParts}
class PartsRewardsTable extends React.Component {
    render() {
        const parts = this.props.parts;
        const title = this.props.rank === 'highRankParts' ? 'High Rank Reward' : 'Low Rank Reward';
        const tableRows = parts.map(part => {
            return( <MonsterPartTableElement key={part._id} part={part} /> );
        });
        if (parts.length > 0) {
            return (
                <Table condensed striped>
                    <thead>
                        <tr><td>{title}s:</td></tr>
                        <tr>
                            <td>Name</td><td>Carves Rarity</td><td>Rewards Rarity</td>
                        </tr>
                    </thead>
                    <tbody>
                        {tableRows}
                    </tbody>
                </Table>
            );
        } else {
            return ( <h4>{title} Info Unavailable</h4> );
        }
    }
}

export default PartsRewardsTable;
