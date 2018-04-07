import React from 'react';
import { Link } from 'react-router-dom';
import axios from 'axios';

import AddMonsterParts from './AddMonsterParts.js';
import CreateBreakables from './editBreakables/CreateBreakables.js';

//this page is 'http://.../edit/:_id'
class EditOneMonster extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            _id: '',
            name: '',
            icon: '',
            iconCredits: '',
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
        };        
        this.clickSubmit = this.clickSubmit.bind(this);
        this.textChange = this.textChange.bind(this);
        this.numberChange = this.numberChange.bind(this);
        this.delete = this.delete.bind(this);
        this.updateParts = this.updateParts.bind(this);
        this.updateBreakables = this.updateBreakables.bind(this);
    }

    componentDidMount() {
        axios.get('http://localhost:5000/monsters/' + this.props.match.params._id)
        .then(res => {
            this.setState(res.data[0]);
        })
        .catch(err => {
            console.log(err);
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
        axios.post('/monsters/' + this.state._id, this.state)
        .catch(err => {
            console.log(err);
        });
    }

    delete(event) {
        event.preventDefault();
        axios.delete('/monsters/' + this.state._id)
        .then(res => {
            this.props.history.goBack();
        })
        .catch(err => {
            console.log(err);
        });
    }

    updateParts(parts, rank) {
        this.setState({
            [rank]: parts
        });
    }

    updateBreakables(breakables) {
        this.setState({
            breakables: breakables
        });
    }

    render() {
        return (
            <div>
                <Link to='/edit'>Back to Edit List</Link>
                <h1>Edit Existing Monster</h1>
                <form>
                    <input placeholder='Monster Name'
                        value={this.state.name} name='name' onChange={this.textChange} />
                    <input placeholder='Monster Picture URL'
                        value={this.state.icon} name='icon' onChange={this.textChange} />
                    <input placeholder='Monster Pic Source Credits'
                        value={this.state.iconCredits} name='iconCredits' onChange={this.textChange} />

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

                    <AddMonsterParts rank='lowRankParts' _id={this.props.match.params._id} updateParent={this.updateParts} />
                    <p>-------------------</p>
                    <AddMonsterParts rank='highRankParts' _id={this.props.match.params._id} updateParent={this.updateParts} />
                    <p>-------------------</p>
                    <CreateBreakables updateParent={this.updateBreakables} _id={this.props.match.params._id} />

                    <button onClick={this.clickSubmit}>Submit Monster</button>
                    <button onClick={this.delete}>Delete Monster</button>
                </form>
            </div>
        );
    }
}

export default EditOneMonster;
