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
                    <h1>Charts</h1>
                    <p>These charts don't really show anything useful except that fire wyverns are overused.</p>
                    <p>Browse, say 'neat', and go back to the useful part of this app.</p>
                </Jumbotron>
                <ChartsContainer />
            </div>
        );
    }
}

export default ChartsPage;
