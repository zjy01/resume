/**
 * Created by carvenzhang on 2016/5/25.
 */
import React from 'react'
import Window from '../dumb/window'

//redux
import { connect } from 'react-redux'

//selector
import selector from '../../selectors/taskSelector'

var ReactCSSTransitionGroup = require('react-addons-css-transition-group');

class Task extends React.Component{
    render(){
        const {apps} = this.props;
        var $node = [];
        for(var id in apps){
            var w = (
                <Window app={apps[id]} app_id={id} key={"app" + id} dispatch={this.props.dispatch}>
                    {id}
                </Window>
            );
            $node.push(w);
        }
        return (
            <div className="task-box">
                <ReactCSSTransitionGroup transitionName="app_move">
                    {$node}
                </ReactCSSTransitionGroup>
            </div>
        )
    }
}


export default connect(selector)(Task);