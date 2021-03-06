import React, { Component } from 'react';
import { Table } from 'react-bootstrap';

// props drops = low or high rank drops array (this comp doesnt need to know rank)
class PartDrops extends Component {
    render() {
        const dropsList = this.props.drops.map((drop, i) => {
            const styles = drop.rare ? {backgroundColor: '#98ff98'} : {};
            return (
                <tr key={i} style={styles}><td>{drop.name}</td></tr>
            );
        });
        return (
            <tbody>
                {dropsList}
            </tbody>
        );
    }
}

// props rank='lowRankDrops' || 'highRankDrops'
// props breakables = []
class BreakablePartsList extends Component {
    render() {
        const rank = this.props.rank;
        const rankTitle = rank === 'lowRankDrops' ? 'Low Rank' : 'High Rank';
        let title = 'Breakables - ' + rankTitle + ':';

        const drops = this.props.breakables.filter(breakable => {
            return breakable[rank].length > 0;
        }).map((breakable, i) => {
            const destructionType = breakable.severable === true ? 'Severable' : 'Breakable';
            return (
                <div key={i}>
                    <Table condensed striped>
                        <thead>
                            <tr><td>{breakable.name + ' - ' + destructionType}</td></tr>
                        </thead>
                        <PartDrops drops={breakable[rank]} />
                    </Table>
                </div>
            );
        });

        if (drops.length === 0) title = 'Breakables - ' + rankTitle + ': Unavailable';

        return(
            <div>
                <h4>{title}</h4>
                {drops}
            </div>
        );
    }
}

export default BreakablePartsList;
