import React, { Component } from 'react';
import axios from 'axios';

// updateParent(breakableID, rank, partID, name, val)
// drop object of a drop item
class BreakDrops extends Component {
    constructor(props) {
        super(props);
        this.inputChange = this.inputChange.bind(this);
    }

    inputChange(event) {
        const rank = this.props.rank;
        const type = event.target.type;
        const name = event.target.name;
        let val = event.target.value;
        if (type === 'checkbox') {
            val = event.target.checked;
        }
        this.props.updateParent(rank, this.props.id, name, val);
    }

    render() {
        const drop = this.props.drop;
        return (
            <div>
                <input type='text' placeholder='Drop Item Name' name='name'
                    onChange={this.inputChange} value={drop.name} />
                <label>Rare?
                    <input type='checkbox' name='rare'
                    onChange={this.inputChange} checked={drop.rare} />
                </label>
            </div>
        );
    }
}

class Breakable extends Component {
    constructor(props) {
        super(props);
        this.inputChange = this.inputChange.bind(this);
        this.addDrop = this.addDrop.bind(this);
        this.deleteDrop = this.deleteDrop.bind(this);
        this.dropInput = this.dropInput.bind(this);
    }

    inputChange(event) {
        const type = event.target.type;
        const name = event.target.name;
        let val = event.target.value;
        if (type === 'number') {
            if (val > 3) val = 3;
        } else if (type === 'checkbox') {
            val = event.target.checked;
        }
        this.props.updateParent(this.props.id, name, val);
    }

    addDrop(event) {
        event.preventDefault();
        const rank = event.target.name; //rank used in object naming, important it doesnt change! //'low' or 'high'
        this.props.parentAddDrop(this.props.id, rank);
    }

    deleteDrop(event) {
        event.preventDefault();
        const rank = event.target.name; //rank used in object naming, important it doesnt change! //'low' or 'high'
        this.props.parentDeleteDrop(this.props.id, rank);
    }

    dropInput(rank, partID, name, val) {
        const breakableID = this.props.id;
        this.props.parentUpdateDrop(breakableID, rank, partID, name, val);
    }

    render() {
        const breakable = this.props.breakable;
        const displayDmg = breakable.weakPoint === true ? { display: 'block' } : { display: 'none' };

        const breakDropsLow = breakable.lowRankDrops.map((drop, i) => {
            return ( <BreakDrops rank='lowRankDrops' drop={drop}
                key={i} id={i} updateParent={this.dropInput} />
            );
        });

        const breakDropsHigh = breakable.highRankDrops.map((drop, i) => {
            return ( <BreakDrops rank='highRankDrops' drop={drop}
                key={i} id={i} updateParent={this.dropInput} />
            );
        });

        return(
            <div className='single-breakable'>
                <input type='text' placeholder='Name' name='name'
                    onChange={this.inputChange} value={breakable.name} />
                <label>Severable?
                    <input type='checkbox' name='severable'
                        onChange={this.inputChange} checked={breakable.severable} />
                </label>
                <label>Weak Point?
                    <input type='checkbox' name='weakPoint'
                        onChange={this.inputChange} checked={breakable.weakPoint} />
                </label>
                <div style={displayDmg}>
                    <label>Slicing Damage
                        <input type='number' name='slicing'
                            onChange={this.inputChange} value={breakable.slicing} />
                    </label>
                    <label>Blunt Damage
                        <input type='number' name='blunt'
                            onChange={this.inputChange} value={breakable.blunt} />
                    </label>
                    <label>Ranged Damage
                        <input type='number' name='ranged'
                            onChange={this.inputChange}  value={breakable.ranged} />
                    </label>
                </div>
                <div>
                    <h5>Low Rank Break Drops</h5>
                    <button onClick={this.addDrop} name='low'>Add new drop(low)</button>
                    <button onClick={this.deleteDrop} name='low'>Delete last drop(low)</button>
                    {breakDropsLow}
                </div>
                <div>
                    <h5>High Rank Break Drops</h5>
                    <button onClick={this.addDrop} name='high'>Add new drop(high)</button>
                    <button onClick={this.deleteDrop} name='high'>Delete last drop(high)</button>
                    {breakDropsHigh}
                </div>
            </div>
        );
    }
}

//props updateParent(breakables)
class CreateBreakables extends Component {
    constructor(props) {
        super(props);
        this.state = {
            breakables: []
        };
        this.addDrop = this.addDrop.bind(this);
        this.deleteDrop = this.deleteDrop.bind(this);
        this.updateDrop = this.updateDrop.bind(this);
        this.addBreakable = this.addBreakable.bind(this);
        this.deleteBreakable = this.deleteBreakable.bind(this);
        this.update = this.update.bind(this);
    }

    addDrop(id, rank) {
        let breakables = this.state.breakables;
        const newDrop = {
            name: '',
            rare: false
        };
        breakables[id][rank + 'RankDrops'].push(newDrop);
        this.setState({
            breakables: breakables
        });
    }

    deleteDrop(id, rank) {
        let breakables = this.state.breakables;
        breakables[id][rank + 'RankDrops'].pop();
        this.setState({
            breakables: breakables
        }, () => {
            this.props.updateParent(this.state.breakables);
        });
    }

    updateDrop(breakbleID, rank, dropID, name, val) {
        let breakables = this.state.breakables;
        breakables[breakbleID][rank][dropID][name] = val;
        this.setState({
            breakables: breakables
        }, () => {
            this.props.updateParent(this.state.breakables);
        });
    }

    addBreakable(event) {
        event.preventDefault();
        let breakables = this.state.breakables;
        const newBreakable = {
            name: '',
            severable: false,
            weakPoint: false,
            slicing: 0,
            blunt: 0,
            ranged: 0,
            lowRankDrops: [],
            highRankDrops: []
        };
        breakables.push(newBreakable);
        this.setState({
            breakables: breakables
        });
    }

    deleteBreakable(event) {
        event.preventDefault();
        let breakables = this.state.breakables;
        if (breakables.length > 0) {
            breakables.pop();
            this.setState({
                breakables: breakables
            }, () => {
                this.props.updateParent(this.state.breakables);
            });
        }
    }

    update(id, name, val) {
        let breakables = this.state.breakables;
        breakables[id][name] = val;
        this.setState({
            breakables: breakables
        }, () => {
            this.props.updateParent(this.state.breakables);
        });
    }

    render() {
        const breakablesList = this.state.breakables.map((breakable, i) => {
            return ( <Breakable key={i} id={i}
                breakable={breakable} updateParent={this.update} parentAddDrop={this.addDrop}
                parentDeleteDrop={this.deleteDrop} parentUpdateDrop={this.updateDrop} />
            );
        });

        return (
            <div>
                <h3>Breakable Parts and Weak Points</h3>
                <button onClick={this.addBreakable}>Add Breakable Part</button>
                {breakablesList}
                <button onClick={this.addBreakable}>Add Breakable Part</button>
                <button onClick={this.deleteBreakable}>Delete Last Breakable Part</button>
            </div>
        );
    }
}

export default CreateBreakables;
