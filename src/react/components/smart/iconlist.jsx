/**
 * Created by carvenzhang on 2016/5/25.
 */
import React from 'react'
import Icon from '../dumb/icon'

export default class IconList extends React.Component{
    render() {
        return (
            <div>
                <Icon app_title="显示桌面" app="desktop" app_id="0"/>
                <Icon app_title="教育经历" app="education" app_id="1"/>
                <Icon app_title="社团经验" app="organization" app_id="2"/>
                <Icon app_title="项目经验" app="project" app_id="3"/>
                <Icon app_title="了解我" app="myself" app_id="4"/>
            </div>
        )
    }
}