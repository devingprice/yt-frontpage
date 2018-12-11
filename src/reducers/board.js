import { combineReducers } from 'redux'
import {
    sampleCollectionsObject, 
    sampleItems,
    channels
} from '../data';
//import uuid from 'uuid/v4';

import { boardConstants } from '../actions/actionTypes';


//**********************  Board */

const columns = sampleCollectionsObject;
const ordered = Object.keys(columns);

export function board(state = {
    columns: columns
}, action) {
    switch (action.type) {
        case boardConstants.SET_COLUMN:
            console.log("set columns");
            console.log(action.columns);
            return { columns: action.columns };

        default:
            return state;
    }
}

//**********************  Ordered */


export function boardOrder(state = {
    ordered: ordered
}, action) {
    switch (action.type) {
        case boardConstants.SET_ORDERED:
            console.log("set ordered");
            console.log(action.ordered);
            return { ordered: action.ordered };

        default:
            return state;
    }
}

//**********************  panel */

export function panel(state = {
    quotes: channels //sampleItems
}, action) {
    switch (action.type) {
        default:
            return state;
    }
}
