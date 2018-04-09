import React from 'react';
import { Table } from 'react-bootstrap';

// props monster={this.props.monster}
class WeakStatuses extends React.Component {
    render() {
        const stats = this.props.monster;
        return (
            <Table condensed striped>
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
            </Table>
        );
    }
}

export default WeakStatuses;
