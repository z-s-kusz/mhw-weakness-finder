import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter as Router, Route } from "react-router-dom";
import './stylesheets/globalStyles.css';

import MonsterInfoPage from './home.js';
import ChartsPage from './charts/ChartsPage.js';
import MainMonsterPage from './monsterDetailPage/MainMonsterPage.js';

ReactDOM.render(
    <Router>
        <div>
            <Route exact path='/' component={MonsterInfoPage} />
            <Route exact path='/charts' component={ChartsPage} />
            <Route path='/monster/:_id' component={MainMonsterPage} />
        </div>
    </Router>,
    document.getElementById('root')
);
