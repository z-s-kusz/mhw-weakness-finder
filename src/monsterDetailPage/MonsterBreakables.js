import React, { Component } from 'react';
import { Table, Grid } from 'react-bootstrap';

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

        return(
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
            </Grid>
        );
    }
}

export default MonsterBreakables;
