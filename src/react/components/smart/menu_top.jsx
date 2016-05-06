/**
 * Created by zjy on 16-3-10.
 */
import React from 'react';

//redux
import { connect } from 'react-redux'

//actions
import { action_clock, action_menu, SH } from '../../actions'

//selector
import selector from '../../selectors/topSelector'

import Btn from "../dumb/menu_btn.jsx";

export default class MenuTop extends React.Component {
    componentDidMount(){
        setInterval(function () {
            this.props.dispatch(action_clock())
        }.bind(this),1000);
    }
    render(){
        const {clock, dispatch, menu} = this.props;
        return(
            <div className="menu-top-box">
                <Btn icon="sh" title="张嘉永" menu="SH" clickToDo={(style)=> dispatch(action_menu(SH,style))} {...menu}/>
                <Btn title={clock}/>
            </div>
        )
    }
}

export default connect(selector)(MenuTop);