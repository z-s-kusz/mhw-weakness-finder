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

// props monster = entire monster object
// class BasicMonsterInfo extends React.Component {
//     render() {
//         const monster = this.props.monster;
//         const title = (
//             <Link to={'/monster/' + monster._id}>{monster.name}</Link>
//         );

//         return (
//             <Grid>
//                 <h1>{title}</h1>

//                 <div className='flexContainer'>
//                     <div className='flexItem'>
//                         <WeakStatuses monster={this.props.monster} />
//                     </div>
//                     <div className='flexItem'>
//                         <WeakElements monster={this.props.monster} />
//                     </div>
//                 </div>

//                 <div className='flexContainer'>
//                     <div className='flexItem'>
//                         <PartsRewardsTable rank='lowRankParts' parts={this.props.monster.lowRankParts} />
//                     </div>
//                     <div className='flexItem'>
//                         <PartsRewardsTable rank='highRankParts' parts={this.props.monster.highRankParts} />
//                     </div>
//                 </div>
//             </Grid>
//         );
//     }
// }
