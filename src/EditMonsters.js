import React from 'react';
import { Link } from 'react-router-dom';
import axios from 'axios';

import CreateMonsterForm from './CreateMonsterForm.js';
import FixedNav from './FixedNav';

// http://.../edit
class EditItem extends React.Component {
    render() {
        return(
            <div>
                <h4>{this.props.name}</h4>
                <Link to={'/edit/' + this.props._id}>Edit {this.props.name}</Link>
            </div>
        );
    }
}

class EditList extends React.Component {
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
                monsters: res.data
            });
        })
        .catch(err => {
            console.log(err);
        });
    }

    render() {
        const monsters = this.state.monsters;
        const listItems = monsters.map(monster => {
            return ( <EditItem name={monster.name} _id={monster._id} key={monster._id} /> );
        });
        return (
            <div>
                {listItems}
            </div>
        );
    }
}

class MonsterEditPage extends React.Component {
    render() {
        return (
            <div className='container'>
                <FixedNav pageName='edit' />
                <div className='row'>
                    <CreateMonsterForm />
                </div>
                <EditList />
            </div>
        );
    }
}

export default MonsterEditPage;
