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

export default class Nav extends React.Component {
    componentDidMount(){
        setInterval(function () {
            this.props.dispatch(action_clock())
        }.bind(this),1000);
    }
    render(){
        const {dispatch} = this.props;
        return(
            <div className="nav_left border-shadow"></div>
        )
    }
}

export default connect(selector)(Nav);