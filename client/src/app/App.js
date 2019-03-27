import React from 'react';
import { 
    CssBaseline,
} from '@material-ui/core';
import { BrowserRouter as Router } from 'react-router-dom';
import UI from './ui';
import Routing from './routing';

class App extends React.Component {
    render() {
        return (
            <React.Fragment>
                <CssBaseline />


                <Router>
                    <UI>
                        <Routing />
                    </UI>
                </Router>
            </React.Fragment>
        )
    }
}

export default App;