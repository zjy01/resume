/**
 * Created by zjy on 16-3-10.
 */
import React from 'react';
import { connect } from 'react-redux'
import {app_open} from '../../actions';

class NavBtn extends React.Component {
    handleClick(e){
        if(this.props){
            this.props.dispatch(app_open(this.props.app_id));
        }
    }
    render(){
        //const { icon, title } = this.props;
        return(
            <div className="app-icon" onClick={e => this.handleClick(e)}>
                <div className={"icon icon-"+this.props.app}></div>
                <div className="app-title">{this.props.app_title}</div>
            </div>
        )
    }
}

export default connect(()=>{return {}})(NavBtn);