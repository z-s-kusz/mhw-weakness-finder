import React from 'react';
import ReactDOM from 'react-dom';
import MonsterInfoPage from './home.js';
import MonsterEditPage from './EditMonsters.js';

ReactDOM.render(
    <div>
        <MonsterInfoPage />
        <MonsterEditPage />
    </div>,
    document.getElementById('root')
);
