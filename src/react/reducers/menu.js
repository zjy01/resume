/**
 * Created by zjy on 16-3-11.
 */
import { SH, OPEN, MENU_CLOSE } from "../actions"
export default function menu(state = {}, action) {
    switch (action.type) {
        case SH+OPEN:
            return Object.assign({}, state, {menu_type:SH, style: action.style, list: action.list});
        case MENU_CLOSE:
            return {};
        default:
            return state;
    }
}