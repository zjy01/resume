/**
 * Created by zjy on 16-3-11.
 */
import { SH, OPEN, MENU_CLOSE } from "../actions"
import $ from 'jquery'
export default function menu(state = {}, action) {
    switch (action.type) {
        case "APP_BOOT":
            var newApp = {};
            newApp[action.app_id] = {
                style:{
                    left: __CENTERX__ - 200 + Math.random()*(200),
                    top: __CENTERY__ - 250 + Math.random()*(100)
                },
                isMax: false,
                isMin: false
            };
            return Object.assign({}, state, newApp);
        case "APP_SHOW":
            var app = {};
            app[action.app_id] = Object.assign({}, state[action.app_id], {isMin: false, isMax:false});
            return Object.assign({}, state, app);
        case "APP_MIN":
            var app = {};
            app[action.app_id] = Object.assign({}, state[action.app_id], {isMin: true, isMax:false});
            return Object.assign({}, state, app);
        case "APP_MAX":
            var app = {};
            app[action.app_id] = Object.assign({}, state[action.app_id], {isMin: false, isMax:true});
            return Object.assign({}, state, app);
        case "APP_CLOSE":
            var newState = Object.assign({}, state);
            delete newState[action.app_id];
            return newState;
        default:
            return state;
    }
}