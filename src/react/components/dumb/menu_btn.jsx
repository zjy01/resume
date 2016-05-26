/**
 * Created by zjy on 16-3-10.
 */
import React from 'react';
import Menu from '../smart/menu_box.jsx';

export default class MenuBtn extends React.Component {

    handleClick(e){
        e.preventDefault();

        if(this.props.clickToDo){
            var Style = {};
            var target = e.currentTarget;
            var left = target.getBoundingClientRect().left;
            if(window.innerWidth - 200 < left){
                Style={left : window.innerWidth - 202 - left};
            }
            else{
                Style={left : 0};
            }

            this.props.clickToDo(Style);
        }
    }
    render(){
        const { icon, title, menu, menu_type, list } = this.props;
        return(
            <div className="topBtn">
                <div onClick={e => this.handleClick(e)}>
                    { icon && <span className={"menu-icon "+icon}> </span> }
                    { title && <span className="menu-title">{title}</span>}
                </div>
                { list && menu == menu_type && <Menu />}
            </div>
        )
    }
}