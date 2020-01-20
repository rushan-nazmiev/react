import React, {Component} from 'react';

//sidebar-li
class SidebarLi extends React.Component{
    render(){
        return(
            <li><a href="index.html">{this.props.title}</a></li>
        );
    }
}

export default SidebarLi;