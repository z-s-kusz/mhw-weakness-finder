import React, { Component } from 'react';
import axios from 'axios';

import BasicMonsterInfo from '../BasicMonsterInfo';

// http://.../monster/:_id
// props _id from route params
class MainMonsterPage extends Component {
    constructor(props) {
        super(props);
        this.state = {
            monster: {
                _id: '',
                name: '',
                icon: '',
                poison: 0,
                sleep: 0,
                paralysis: 0,
                blast: 0,
                stun: 0,
                fire: 0,
                water: 0,
                thunder: 0,
                ice: 0,
                dragon: 0,
                lowRankParts: [],
                highRankParts:[],
                searchableParts: '',
                breakables: []
            }
        }; 
    }

    componentDidMount() {
        const routeID = this.props.match.params._id;
        if (routeID) {
            axios.get('http://localhost:5000/monsters/' + routeID)
            .then(res => {
                this.setState({
                    monster: res.data[0]
                });
            })
            .catch(err => {
                console.log(err);
            });
        }
    }

    render() {
        return (
            <div>
                <h1>hi its the single monster page!</h1>
                <BasicMonsterInfo monster={this.state.monster} />
            </div>
        );
    }
}

export default MainMonsterPage;
