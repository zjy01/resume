/**
 * Created by zjy on 16-3-10.
 */
import React from 'react';

//redux
import { connect } from 'react-redux'

//actions
import { action_clock,action_menu_react } from '../../actions'

//selector
import selector from '../../selectors/menuSelector'

import BL from "../dumb/menu_list.jsx";

export default class MenuBox extends React.Component {
    render(){
        console.log(this.props);
        const {menu, dispatch} = this.props;
        var $node = menu.list?menu.list.map(function(v,i){
           return(
               <BL list_title={v.menu_title} key={i} clickToDo={()=>dispatch(action_menu_react(v.action))}/>
           );
        }):'';
        return(

            <div className="menu-list-box border-shadow" style={menu.style}>
                {$node}
            </div>
        )
    }
}

export default connect(selector)(MenuBox);