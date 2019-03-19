import React from 'react';
import { 
    CssBaseline,
} from '@material-ui/core';
import UI from './ui';

class App extends React.Component {
    render() {
        return (
            <React.Fragment>
                <CssBaseline />

                <UI />
            </React.Fragment>
        )
    }
}

export default App;