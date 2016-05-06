/**
 * Created by zjy on 16-3-11.
 */
import { CLOCK } from "../actions"
export default function clock(state = '00:00', action) {
    switch (action.type) {
        case CLOCK:
            var date = new Date();
            var hour = date.getHours();
            var minute = date.getMinutes();
            hour = hour < 10 ? '0' + hour : '' + hour;
            minute = minute < 10 ? '0' + minute : '' + minute;
            //console.log(date);
            return hour + ":" + minute;
        default:
            return state;
    }
}