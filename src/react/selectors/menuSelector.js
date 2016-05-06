/**
 * Created by zjy on 16-3-11.
 */
import { createSelector } from 'reselect'

const menu = (state) => state.menu;
export default  createSelector(
    [menu],
    (menu) => {
        return {
            menu
        }
    }
)