import React from 'react';
import { Table } from 'react-bootstrap';

// props monster={this.props.monster}
class WeakElements extends React.Component {
    render() {
        const elems = this.props.monster;
        return (
            <div>
                <Table condensed striped>
                    <thead>
                        <tr><td>Elemental Weakness:</td></tr>
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
                </Table>
            </div>
        );
    }
}

export default WeakElements;
