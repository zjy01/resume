/**
 * Created by carvenzhang on 2016/5/25.
 */
import React from 'react'

export default class Window extends React.Component{
    render(){
        return(
            <div className="window-box border-shadow">
                <div className="window-opt">
                    操作栏
                </div>
                <div className="window-body">
                    {this.props.children}
                </div>
            </div>
        )
    }
}