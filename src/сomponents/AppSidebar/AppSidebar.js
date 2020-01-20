import React, {Component} from 'react';
import Sidebar from "./Sidebar";
import BtnWindow from "./BtnWindow";


//AppSidebar box

class AppSidebar extends React.Component{
    render() {
        return (
            <div id="sidebar">
                <Sidebar key = 'a'/>
                <BtnWindow key = 'b'/>
            </div>

        );
    }
}

export default AppSidebar;