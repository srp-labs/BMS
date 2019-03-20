import React from 'react';
import PropTypes from 'prop-types';
import { withStyles, Fade, Typography } from '@material-ui/core';
import classnames from 'classnames';

import Loader from '../loader';
import styles from './styles';

const PageContainer = ({ classes, contentClass, loading, title, ...props }) => {
    
    return (
        loading ?
        <div className={classes.root}>
            <Loader />
        </div> :
        <Fade in={true}>
            <div className={classes.root}>
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