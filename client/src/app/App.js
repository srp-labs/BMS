import React from 'react';
import { BrowserRouter as Router } from 'react-router-dom';
import UI from './ui';
import Routing from './routing';


class App extends React.Component {
    render() {
        return (
            <Router>
                <UI>
                    <Routing />
                </UI>
            </Router>
        )
    }
}

export default App;