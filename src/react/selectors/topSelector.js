/**
 * Created by zjy on 16-3-11.
 */
import { createSelector } from 'reselect'

const clock = (state) => state.clock;
const menu = (state) => state.menu;
export default  createSelector(
    [clock, menu],
    (clock, menu) => {
        return {
            clock,
            menu
        }
    }
)