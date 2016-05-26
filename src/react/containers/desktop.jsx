/**
 * Created by zjy on 16-3-10.
 */
import React,{ Component, PropTypes } from 'react'
//redux
import { connect } from 'react-redux'

//selector
//import selector from '../selectors'

//components
import MenuTop from "../components/smart/menu_top.jsx";
import Nav from "../components/smart/nav.jsx";
import Content from "../components/smart/content.jsx";

//actions
import { menu_close, action_menu_react,task_resize } from '../actions'

//selector
import selector from '../selectors/shSelector'

//jq
import $ from 'jquery'

require("../../less/normalize.css");
//less
require("../../less/layouts.less");
require("../../less/theme-flatabulous.less");
require("../../less/icon.less");
require("../../less/animation.less");

import Btn from "../components/dumb/menu_btn.jsx";

var ReactCSSTransitionGroup = require('react-addons-css-transition-group');

class Desktop extends Component {
    handleClick(e){
        this.props.dispatch(menu_close());
    }
    componentDidMount(){
        this.props.dispatch(action_menu_react("BOOT"));
        $(window).on('resize',() => {
            this.props.dispatch(task_resize());
        })
    }
    render() {
        console.log(this.props.working );
        return (
            <div className="pc">
                <div className="desktop flatabulous" onClick={()=>this.handleClick()}>
                    <div className="menu_top border-shadow">
                        <MenuTop />
                    </div>
                    <Nav/>
                    <Content/>
                </div>
                <ReactCSSTransitionGroup transitionName="closing" transitionEnterTimeout={1000} transitionLeaveTimeout={1000}>
                    {!this.props.working &&
                    <div className="blackBox" key="0">
                        <div className="sh openBtn" title="开机" onClick={()=>this.props.dispatch(action_menu_react('BOOT'))}>
                        </div>
                    </div>
                    }
                </ReactCSSTransitionGroup>
            </div>
        )
    }
}

export default connect(selector)(Desktop);