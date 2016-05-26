/**
 * Created by zjy on 16-3-11.
 */
import fetch from 'isomorphic-fetch';
//时钟
export const CLOCK = 'CLOCK';

export function action_clock(){
    return{
        type: CLOCK
    }
}

//菜单
export const SH = 'SH';
export const OPEN = '_OPEN';
export const MENU_CLOSE = 'MENU_CLOSE';
export function action_menu(type, style){
    return dispatch => {
        dispatch(menu_close());
        return fetch(`./json/menu/menu_${type}.json`)
        .then(response => response.json())
        .then(list => dispatch( menu_open(type, style, list) ))
        .then(dispatch(menu_close))
    }
}

function menu_open(type, style, list){
    return {
        type: type+OPEN,
        style,
        list
    }
}

export function menu_close(){
    return {
        type: MENU_CLOSE
    }
}

//菜单选项响应
export function action_menu_react(type){
    switch (type){
        case 'BLOG_OPEN':
            window.open('http://blog.zjy.space');
            return {type:"NULL"};
            break;
        case 'SHUTDOWN':
            return {type:"shutdown"};
            break;
        case 'BOOT':
            return dispatch => {
             dispatch(task_resize());
                dispatch(action_menu_react("LIGHTON"));
            };
        case 'LIGHTON':
            return {type:"boot"};
            break;
    }
}

//task窗口调整
export function task_resize() {
    return {type: 'resize'}
}

//应用启动
export function app_open(app_id) {
    return (dispatch, getState) =>{
        var state = getState();
        console.log(state);
        var app = state.apps[app_id];
        if(app){
            app.isMin && dispatch(app_show(app_id));
            app.isMin || dispatch(app_min(app_id));
        }
        else{
            dispatch(app_boot(app_id))
        }
        
    }
}
export function app_boot(app_id) {
    return{
        type: 'APP_BOOT',
        app_id : app_id
    }
}
//应用打开
export function app_show(app_id) {
    return{
        type: 'APP_SHOW',
        app_id
    }
}
//应用最小化
export function app_min(app_id) {
    return{
        type: 'APP_MIN',
        app_id
    }
}
//应用最大化
export function app_max(app_id) {
    return{
        type: 'APP_MAX',
        app_id
    }
}
//应用关闭
export function app_close(app_id) {
    return{
        type: 'APP_CLOSE',
        app_id
    }
}