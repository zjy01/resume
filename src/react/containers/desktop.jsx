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

class Desktop extends Component {
    handleClick(e){
        this.props.dispatch(menu_close());
    }
    render() {
        if (this.props.sh) {
            return (
                <div className="desktop flatabulous" onClick={()=>this.handleClick()}>
                    <div className="menu_top border-shadow">
                        <MenuTop />
                    </div>
                    <Nav/>
                    <Content/>
                </div>
            )
        }
        else {
            return (<div></div>);
        }
    }
}

export default connect(selector)(Desktop);