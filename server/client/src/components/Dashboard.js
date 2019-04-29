import React, { Component } from 'react';
import PhraseList from './grammar/PhraseList';

class Dashboard extends Component {
    render() {
        return (
            <div className='dashboard'>
                <PhraseList />
                {/* <ButtonList /> */}
                {/* <MemoryList /> */}
            </div>
        )
    }
};

export default Dashboard;
