import React, { Component } from 'react';
import { Table, Grid } from 'react-bootstrap';

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
        let title = 'Breakables Drops: ' + rankTitle;

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

        if (drops.length === 0) title = 'Monster Breakables Drop Info Unavailable For ' + rankTitle;

        return(
            <div>
                <h2>{title}</h2>
                {drops}
            </div>
        );
    }
}

class WeakSpots extends Component {
    render() {
        const allParts = this.props.monsterParts;
        let weakParts = allParts.filter(part => {
            return part.weakPoint === true;
        }).map((part, i) => {
            return (
                <tr key={i}>
                    <td>{part.name}</td>
                    <td>{part.slicing}</td>
                    <td>{part.blunt}</td>
                    <td>{part.ranged}</td>
                </tr>
            );
        });

        return (
            <Table condensed striped>
                <thead>
                    <tr><td>Weak Spots:</td></tr>
                    <tr>
                        <td>Part</td>
                        <td>Slicing</td>
                        <td>Blunt</td>
                        <td>Ranged</td>
                    </tr>
                </thead>
                <tbody>
                    {weakParts}
                </tbody>
            </Table>
        );
    }
}


// props monsterParts = array
class MonsterBreakables extends Component {
    render() {
        return (
            <Grid>
                <WeakSpots monsterParts={this.props.monsterParts} />
                <p>---------------</p>
                <BreakablePartsList breakables={this.props.monsterParts} rank={'lowRankDrops'} />
                <BreakablePartsList breakables={this.props.monsterParts} rank={'highRankDrops'} />

            </Grid>
        );
    }
}

export default MonsterBreakables;
