/**
 * Created by zjy on 16-3-11.
 */
import $ from 'jquery'
export default function working(state = true, action) {
    switch (action.type) {
        case 'boot':
            return true;
        case 'shutdown':
            return false;
        case 'resize':
            window.__CENTERX__=$(window).width()/2;
            window.__CENTERY__=$(window).height()/2;
            $(".task-box")
                .width($(window).width() - $(".nav_left").width())
                .height($(window).height() - $(".menu-top-box").height());
            return state;
        default:
            return state;
    }
}