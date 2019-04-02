import React from 'react';
import { Redirect } from 'react-router-dom';

import API from '../../../services/api';
import { PageContainer } from '../../../components';

class Logout extends React.Component {
    state = {
        loading: true,
    };

    componentDidMount() {
        // API.post('logout/')
        //     .then(r => {
                localStorage.clear();
            // })
            // .catch(console.error);

    }

    render() {
        const { loading } = this.props;

        return <PageContainer loading={loading}>
            <Redirect to="/login" />
        </PageContainer>
    }        
}

export default Logout;
