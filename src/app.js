import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter as Router, Route } from "react-router-dom";

import MonsterInfoPage from './home.js';
import MonsterEditPage from './EditMonsters.js';
import EditOneMonster from './EditOneMonster.js';
import ChartsPage from './charts/ChartsPage.js';
import './stylesheets/globalStyles.css';

ReactDOM.render(
    <Router>
        <div>
            <Route exact path='/' component={MonsterInfoPage} />
            <Route exact path='/edit' component={MonsterEditPage} />
            <Route path ='/edit/:_id' component={EditOneMonster} />
            <Route exact path='/charts' component={ChartsPage} />
        </div>
    </Router>,
    document.getElementById('root')
);
