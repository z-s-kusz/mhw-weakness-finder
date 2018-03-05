import React from 'react';

class CreateNewMonster extends React.Component {
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
            dragon: 0
        };
        this.clickSubmit = this.clickSubmit.bind(this);
        this.textChange = this.textChange.bind(this);
        this.numberChange = this.numberChange.bind(this);
    }

    clickSubmit(event) {
        event.preventDefault();
    }

    textChange(event) {
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

    render() {
        return (
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

                <button onClick={this.clickSubmit} >Submit</button>
            </form>
        );
    }
}

class MonsterEditPage extends React.Component {
    render() {
        return (
            <div className='container'>
            <div className='row'>
                <p>this is where edits will go!</p>
                <CreateNewMonster />
            </div>
            </div>
        );
    }
}

export default MonsterEditPage;
