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
            <div className="menuList" onClick={e => this.handleClick(e)}>
                {this.props.list_title}
            </div>
        )
    }
}