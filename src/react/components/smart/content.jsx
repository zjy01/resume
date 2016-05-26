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

//component
import IconList from "../smart/iconlist";
import Task from "./task"
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
                <IconList />
                <Task />
            </div>
        )
    }
}

export default connect(selector)(Content);