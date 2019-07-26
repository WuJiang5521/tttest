import {Component} from 'react';
import {instanceOf} from "prop-types";

class Store {
    //region Data
    count = 0;
    //endregion

    //region GetData
    getData = {
        Count: () => {
            return this.count;
        }
    };
    //endregion

    //region Modify
    handleChange = {
        Add: () => {
            this.count++;
            this.refreshComponent('App');
        },
        Sub: () => {
            this.count--;
            this.refreshComponent('App');
        }
    };
    //endregion

    //region Refresh
    components = {};

    registerComponent(str, component) {
        if (!(component instanceof Component) || !(typeof str === 'string')) return;
        this.components[str] = component;
        if (!component.state || !component.state.storeAutoRefresh)
            component.setState({storeAutoRefresh: true});
    }

    unregisterComponent(str, component) {
        if (!(component instanceof Component) || !(typeof str === 'string')) return;
        if (this.components[str] === component)
            this.components[str] = undefined;
    }

    refreshComponent(str) {
        if (!(typeof str === 'string')) return;
        if (this.components.hasOwnProperty(str))
            this.components[str].setState(state => ({storeAutoRefresh: !state.storeAutoRefresh}));
    }

    //endregion
}

const store = new Store();

export default store;
