/**
 * Created by zjy on 16-3-11.
 */
import { createSelector } from 'reselect'

const working = (state) => state.working;
export default  createSelector(
    [working],
    (working) => {
        return {
            working
        }
    }
)