import React from 'react';
import PropTypes from 'prop-types';
import { withStyles, Fade, Typography } from '@material-ui/core';
import classnames from 'classnames';

import Loader from '../loader';
import styles from './styles';

const PageContainer = ({ className, classes, loading, title, ...props }) => {
    
    return (
        loading ?
        <Fade in={true}>
            <div className={classnames(className, classes.root)} {...props}>
                <Loader />
            </div>
        </Fade> :
        <Fade in={true}>
            <div className={classnames(className, classes.root)} {...props}>
                {props.children}
            </div>
        </Fade>
    )
}

PageContainer.propTypes = {
    loading: PropTypes.bool,
}


PageContainer.defaultProps = {
    loading: false,
}

export default withStyles(styles)(PageContainer);