/**
 * Created by carvenzhang on 2016/5/25.
 */
import React from 'React'
import Icon from '../dumb/icon'

export default class IconList extends React.Component{
    render(){
        return(
            <div>
                <Icon app_title="显示桌面" app="desktop" />
                <Icon app_title="教育经历" app="education" />
                <Icon app_title="社团经验" app="organization" />
                <Icon app_title="项目经验" app="project" />
                <Icon app_title="了解我" app="myself" />
            </div>
        );
    }
}