import React from 'react';
import axios from'axios';

// props 'updateParent' = function(id, part) to save paprent part list state
// props 'id' is equal to key value
// props 'part' to set state with when editing an existing monster
class Part extends React.Component {
    constructor(props) {
        super(props);
        this.state = this.props.part; // will include _id if it was given
        this.inputChange = this.inputChange.bind(this);
    }

    inputChange(event) {
        const field = event.target.name;
        let newValue = event.target.value;

        // change number strings to numbers and ignore if nothing is entered
        if ((field === 'carveRarity' || field === 'rewardRarity') && newValue) {
            newValue = parseInt(event.target.value);
        }
        this.setState({
            [field]: newValue
        }, () => {
            this.props.updateParent(this.props.id, this.state);
        });
    }

    render() {
        return (
            <div>
                <input placeholder='Name' type='text'
                    onChange={this.inputChange} value={this.state.name} name='name' />
                <label>Carve Rarity<input type='number'
                    onChange={this.inputChange} value={this.state.carveRarity} name='carveRarity' /></label>
                <label>Rewards Rarity<input type='number'
                    onChange={this.inputChange} value={this.state.rewardRarity} name='rewardRarity'/></label>
            </div>
        );
    }
}

// takes props 'rank':string = 'lowRankParts' or 'highRankParts'
// props 'updateParent(parts, rank)' to send parts list to parent component
// props '_id' the mongo._id if its passed for an existing monster
class AddMonsterParts extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            parts: []
        };
        this.addPart = this.addPart.bind(this);
        this.deletePart = this.deletePart.bind(this);
        this.update = this.update.bind(this);
    }

    componentDidMount() {
        if (this.props._id) {
            axios.get('http://localhost:5000/monsters/' + this.props._id)
            .then(res => {
                const parts = res.data[0][this.props.rank];
                this.setState({
                    parts: parts
                });
            })
            .catch(err => {
                console.log(err);
            });
        }
    }

    // currently only removes last item, limitation of using index as key, maybe use RNG to make keys?
    deletePart(event) {
        event.preventDefault();
        let parts = this.state.parts;
        if (parts.length > 0) { //prevent removing when theres nothing to remove
            parts.pop();
            this.setState({
                parts: parts
            }, () => {
                this.props.updateParent(this.state.parts, this.props.rank);
            });
        }
    }

    update(id, part) {
        let parts = this.state.parts;
        parts[id] = part;
        this.setState({
            parts: parts
        }, () => {
            this.props.updateParent(this.state.parts, this.props.rank);
        });
    }

    addPart(event) {
        event.preventDefault();
        let parts = this.state.parts;
        const newPart = {
            name: '',
            carveRarity: 0,
            rewardRarity:0
        };
        parts.push(newPart);
        this.setState({
            parts: parts
        });
    }

    render() {
        const message = this.props.rank === 'highRankParts' ? 'High Rank Rewards' : 'Low Rank Rewards';
        const partList = this.state.parts.map((part, i) => {
            return ( <Part deletePart={this.deletePart} updateParent={this.update} part={part} key={i} id={i} /> );
        });
        return(
            <div>
                <h3>{message}</h3>
                <button onClick={this.addPart}>+ New Part</button>
                {partList}
                <button onClick={this.deletePart}>Remove Last Part</button>
                <button onClick={this.addPart}>+ New Part</button>
                <p>Set Reward/Carve Rarity to 0 if it is available from one and not the other.</p>
            </div>
        );
    }
}

export default AddMonsterParts;
