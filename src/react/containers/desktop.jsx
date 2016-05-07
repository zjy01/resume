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
import { menu_close } from '../actions'

//selector
import selector from '../selectors/shSelector'

require("../../less/normalize.css");
//less
require("../../less/layouts.less");
require("../../less/theme-flatabulous.less");
require("../../less/icon.less");

import Btn from "../components/dumb/menu_btn.jsx";

import { action_menu_react } from '../actions'

class Desktop extends Component {
    handleClick(e){
        this.props.dispatch(menu_close());
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
                {!this.props.working &&
                <div className="blackBox">
                    <div className="sh openBtn" title="开机" onClick={()=>this.props.dispatch(action_menu_react('BOOT'))}>
                    </div>
                </div>
                }
            </div>
        )
    }
}

export default connect(selector)(Desktop);