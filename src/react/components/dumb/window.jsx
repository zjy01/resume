/**
 * Created by carvenzhang on 2016/5/25.
 */
import React from 'react'
import {app_min, app_max, app_close} from '../../actions'
export default class Window extends React.Component{
    render(){
        const {app} = this.props;
        var style = {};
        if(app.isMax){
            style = {
                left: 0,
                top: 0,
                width: "100%",
                height: "100%"
            }
        }
        else if(app.isMin){
            style = {
                width: 0,
                height: 0,
                opacity:0
            }
        }
        else{
            style = app.style
        }
        return(
            <div className="window-box border-shadow" style={style}>
                <div className="window-opt">
                    <div className="opt">
                        <div className="icon-opt-close opt-icon" onClick={()=>this.close()}></div>
                        <div className="icon-opt-min opt-icon" onClick={()=>this.min()}></div>
                        <div className="icon-opt-max opt-icon" onClick={()=>this.max()}></div>
                    </div>
                </div>
                <div className="window-body">
                    {this.props.children}
                </div>
            </div>
        )
    }
    min(){
        this.props.dispatch(app_min(this.props.app_id));
    }
    max(){
        this.props.dispatch(app_max(this.props.app_id))
    }
    close(){
        this.props.dispatch(app_close(this.props.app_id))
    }
}