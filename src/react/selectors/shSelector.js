/**
 * Created by zjy on 16-3-11.
 */
import { createSelector } from 'reselect'

const sh = (state) => state.sh;
export default  createSelector(
    [sh],
    (sh) => {
        return {
            sh
        }
    }
)