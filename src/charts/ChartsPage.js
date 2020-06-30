import React from 'react';
import { Jumbotron } from 'react-bootstrap';

import ChartsContainer from './ChartsContainer.js';
import FixedNav from '../FixedNav';

class ChartsPage extends React.Component {
    render() {
        return (
            <div>
                <FixedNav pageName='charts' />
                <Jumbotron>
                    <h1 className='jumbo-title'>Charts</h1>
                </Jumbotron>
                <ChartsContainer />
            </div>
        );
    }
}

export default ChartsPage;
