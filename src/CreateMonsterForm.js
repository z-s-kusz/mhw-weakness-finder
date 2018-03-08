import React from 'react';
import axios from 'axios';

import AddMonsterParts from './AddMonsterParts.js';

class CreateMonsterForm extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
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
            highRankParts: [],
            searchableParts: ''
        };
        this.updateParts = this.updateParts.bind(this);
        this.clickSubmit = this.clickSubmit.bind(this);
        this.textChange = this.textChange.bind(this);
        this.numberChange = this.numberChange.bind(this);
    }

    updateParts(parts, rank) {
        // might need to transform them here again... needs to be a better way (infomercial)!
        this.setState({
            [rank]: parts
        });
    }

    textChange(event) {
        //need to validate and disable/enable submit here!!!!!
        this.setState({
            [event.target.name]: event.target.value
        });
    }

    numberChange(event) {
        const name = event.target.name;
        const newValue = parseInt(event.target.value);
        if (newValue === 0 || newValue === 1 || newValue === 2 || newValue === 3) {
            this.setState({
                [event.target.name]: newValue
            });
        } else {
            console.log('enter a number >= 0 && <= 3, update FAILED');
        }
    }

    clickSubmit(event) {
        event.preventDefault();
        axios.post('/monsters', this.state)
        .then(res => {
            console.log('post success', res);
        })
        .catch(err => {
            console.log('post ERROR', err);
        });
    }

    render() {
        return (
            <div>
                <h1>Create New Monster</h1>
                <form>
                    <input placeholder='Monster Name'
                        value={this.state.name} name='name' onChange={this.textChange} />
                    <input placeholder='Monster Picture URL'
                        value={this.state.icon} name='icon' onChange={this.textChange} />

                    <h5>Status Weaknesses:</h5>
                    <label>Poison:<input type='number'
                        value={this.state.poison} name='poison' onChange={this.numberChange}/>
                    </label>
                    <label>Sleep:<input type='number'
                        value={this.state.sleep} name='sleep' onChange={this.numberChange}/>
                    </label>
                    <label>Paralysis:<input type='number'
                        value={this.state.paralysis} name='paralysis' onChange={this.numberChange}/>
                    </label>
                    <label>Blast:<input type='number'
                        value={this.state.blast} name='blast' onChange={this.numberChange}/>
                    </label>
                    <label>Stun:<input type='number'
                        value={this.state.stun} name='stun' onChange={this.numberChange}/>
                    </label>

                    <h5>Elemental Weaknesses:</h5>
                    <label>Fire:<input type='number'
                        value={this.state.fire} name='fire' onChange={this.numberChange}/>
                    </label>
                    <label>Water:<input type='number'
                        value={this.state.water} name='water' onChange={this.numberChange}/>
                    </label>
                    <label>Thunder:<input type='number'
                        value={this.state.thunder} name='thunder' onChange={this.numberChange}/>
                    </label>
                    <label>Ice:<input type='number'
                        value={this.state.ice} name='ice' onChange={this.numberChange}/>
                    </label>
                    <label>Drgon:<input type='number'
                        value={this.state.dragon} name='dragon' onChange={this.numberChange}/>
                    </label>

                    <AddMonsterParts rank='lowRankParts' updateParent={this.updateParts} />
                    <p>-------------------</p>
                    <AddMonsterParts rank='highRankParts' updateParent={this.updateParts} />

                    <button onClick={this.clickSubmit} >Submit</button>
                </form>
            </div>
        );
    }
}

export default CreateMonsterForm;
