/**
 * Created by carvenzhang on 2016/5/25.
 */
import React from 'react'
import Window from '../dumb/window'

export default class Task extends React.Component{
    render(){
        return (
            <div className="task-box">
                <Window>
                    窗体内容
                </Window>
            </div>
        )
    }
}