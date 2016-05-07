/**
 * Created by zjy on 16-3-11.
 */
export default function working(state = true, action) {
    switch (action.type) {
        case 'boot':
            return true;
        case 'shutdown':
            return false;
        default:
            return state;
    }
}