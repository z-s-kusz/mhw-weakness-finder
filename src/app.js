import React from 'react';
import ReactDOM from 'react-dom';
// import { BrowserRouter as Router, Route } from "react-router-dom";

import MonsterInfoPage from './home.js';
// import MonsterEditPage from './EditMonsters.js';
// import EditOneMonster from './EditOneMonster.js';
import './stylesheets/globalStyles.css';

ReactDOM.render(
    <div>
        <MonsterInfoPage />
    </div>,
    document.getElementById('root')
);

//use this guy when we get routes back into the game!
/* <Router>
    <div>
        <Route exact path='/' component={MonsterInfoPage} />
        <Route exact path='/edit' component={MonsterEditPage} />
        <Route path='/edit/:_id' component={EditOneMonster} />
    </div>
</Router> */
