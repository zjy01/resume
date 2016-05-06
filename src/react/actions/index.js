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
    menu_close();
    return dispatch => {
        return fetch(`./json/menu/menu_${type}.json`)
        .then(response => response.json())
        .then(list => dispatch( menu_open(type, style, list) ))
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
    }
}