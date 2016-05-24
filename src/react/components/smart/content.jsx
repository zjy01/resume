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
import NavBtn from "../dumb/icon.jsx";

export default class Content extends React.Component {
    componentDidMount(){
        setInterval(function () {
            this.props.dispatch(action_clock())
        }.bind(this),1000);
    }
    render(){
        const {dispatch} = this.props;
        return(
            <div className="content_center">
                <NavBtn app_title="显示桌面" app="desktop" />
                <NavBtn app_title="教育经历" app="education" />
                <NavBtn app_title="社团经验" app="organization" />
                <NavBtn app_title="项目经验" app="project" />
                <NavBtn app_title="了解我" app="myself" />
            </div>
        )
    }
}

export default connect(selector)(Content);