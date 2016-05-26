/**
 * Created by zjy on 16-3-11.
 */
import { createSelector } from 'reselect'

const apps = (state) => state.apps;
export default  createSelector(
    [apps],
    (apps) => {
        return {
            apps
        }
    }
)