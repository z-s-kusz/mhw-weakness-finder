import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter as Router, Route } from "react-router-dom";

import MonsterInfoPage from './home.js';
import MonsterEditPage from './EditMonsters.js';
import EditOneMonster from './EditOneMonster.js';
import './stylesheets/globalStyles.css';

ReactDOM.render(
    <Router>
        <div>
            <Route exact path='/' component={MonsterInfoPage} />
            <Route exact path='/edit' component={MonsterEditPage} />
            <Route path ='/edit/:_id' component={EditOneMonster} />
        </div>
    </Router>,
    document.getElementById('root')
);
