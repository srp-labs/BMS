import React from 'react';

import {
    withStyles,
    withTheme,
    Chip,
    Avatar
} from '@material-ui/core';

import styles from './styles';

const ChipsContainer = ({ chips, classes, theme, ...restProps }) => {
    return (
        <div className={classes.container}>
            {
                chips.map((chip, index) => <Chip
                    key={index}
                    label={chip.label}
                    className={classes.chip}
                    style={chip.color && {
                        backgroundColor: chip.color,
                        color: theme.palette.getContrastText(chip.color),
                    }}
                    avatar={chip.avatar && <Avatar src={chip.avatar} className={classes.chipAvatar} />}
                />)
            }
        </div>
    )
}


export default withTheme()(withStyles(styles)(ChipsContainer));