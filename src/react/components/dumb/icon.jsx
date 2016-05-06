/**
 * Created by zjy on 16-3-10.
 */
import React from 'react';

export default class MenuList extends React.Component {
    handleClick(e){
        if(this.props.clickToDo){
            this.props.clickToDo()
        }
    }
    render(){
        //const { icon, title } = this.props;
        return(
            <div className="app-icon" onClick={e => this.handleClick(e)}>
                <div className="app-title">{this.props.app_title}</div>
            </div>
        )
    }
}