import React, { Component } from 'react';
import axios from 'axios';
import { BarChart, XAxis, YAxis, Bar } from 'recharts';

// props monsters = array of all monsters
class WeaknessTotals extends Component {
    render() {
        let data = [
            {name:'Poison', amt:0},
            {name:'Sleep', amt:0},
            {name:'Paralysis', amt:0},
            {name:'Blast', amt:0},
            {name:'Stun', amt:0},
            {name:'Fire', amt:0},
            {name:'Water', amt:0},
            {name:'Thunder', amt:0},
            {name:'Ice', amt:0},
            {name:'Dragon', amt:0}
        ];
        this.props.monsters.forEach(monster => {
            data[0].amt += monster.poison;
            data[1].amt += monster.sleep;
            data[2].amt += monster.paralysis;
            data[3].amt += monster.blast;
            data[4].amt += monster.stun;
            data[5].amt += monster.fire;
            data[6].amt += monster.water;
            data[7].amt += monster.thunder;
            data[8].amt += monster.ice;
            data[9].amt += monster.dragon;
        });

        return(
            <div>
                <h1>Total Amount of Stars by Weakness</h1>
                <BarChart data={data} width={720} height={240}>
                    <XAxis dataKey='name'/>
                    <YAxis/>
                    <Bar dataKey='amt' fill='#8884d8' />
                </BarChart>
            </div>
        );
    }
}

// props 'monsters' = array of all monsters
// props 'weakness' = lowercase string ie: 'poison', 'water'
class BasicStatusWeakness extends Component {
    render() {
        const weakness = this.props.weakness;
        const title = weakness.charAt(0).toUpperCase() + weakness.slice(1) + ' Weakness Distribution';
        let data = [
            {name:'Immune', amt:0},
            {name:'1 Star', amt:0},
            {name:'2 Stars', amt:0},
            {name:'3 Stars', amt:0}
        ];
        this.props.monsters.forEach(monster => {
            if (monster[weakness] === 0) {
                data[0].amt++;
            } else if (monster[weakness] === 1) {
                data[1].amt++;
            } else if (monster[weakness] === 2) {
                data[2].amt++;
            } else if (monster[weakness] === 3) {
                data[3].amt++;
            } else {
                console.log('Bad data on a monster! Value out of range! ' + monster[weakness]);
            }
        });
        return(
            <div>
                <h1>{title}</h1>
                <BarChart data={data} width={360} height={240}>
                    <XAxis dataKey='name' />
                    <YAxis domain={[0,20]} />
                    <Bar dataKey='amt' fill='#8884d8' />
                </BarChart>
            </div>
        );
    }
}

class ChartsContainer extends Component {
    constructor(props) {
        super(props);
        this.state = {
            monsters: []
        };
    }

    componentDidMount() {
        axios.get('/monsters')
        .then(res => {
            this.setState({
                monsters: res.data,
            });
        })
        .catch(err => {
            console.log(err);
        });
    }

    render() {
        return(
            <div>
                <div>
                    <BasicStatusWeakness monsters={this.state.monsters} weakness='poison' />
                    <BasicStatusWeakness monsters={this.state.monsters} weakness='sleep' />
                    <BasicStatusWeakness monsters={this.state.monsters} weakness='paralysis' />
                    <BasicStatusWeakness monsters={this.state.monsters} weakness='blast' />
                    <BasicStatusWeakness monsters={this.state.monsters} weakness='stun' />
                </div>
                <div>
                    <BasicStatusWeakness monsters={this.state.monsters} weakness='fire' />
                    <BasicStatusWeakness monsters={this.state.monsters} weakness='water' />
                    <BasicStatusWeakness monsters={this.state.monsters} weakness='thunder' />
                    <BasicStatusWeakness monsters={this.state.monsters} weakness='ice' />
                    <BasicStatusWeakness monsters={this.state.monsters} weakness='dragon' />
                </div>
                <WeaknessTotals monsters={this.state.monsters} />
            </div>
        );
    }
}

export default ChartsContainer;
