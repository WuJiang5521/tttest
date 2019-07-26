import React, {Component} from 'react';
import {withStyles, Button} from '@material-ui/core';
import store from '../store/store';

const styles = {
    root: {
        width: '100%',
    },
    count: {
        fontSize: '40px',
        textAlign: 'center',
    }
};

class App extends Component {
    componentDidMount() {
        store.registerComponent('App', this);
    }

    componentWillUnmount() {
        store.unregisterComponent('App', this);
    }

    render() {
        const {classes} = this.props;
        return (
            <div className={classes.root}>
                <div className={classes.count}>
                    {store.getData.Count()}
                </div>
                <Button onClick={store.handleChange.Add}>Add 1</Button>
                <Button onClick={store.handleChange.Sub}>Sub 1</Button>
            </div>
        );
    }
}

export default withStyles(styles)(App);
