import React, {Component} from 'react';
import SearchBox from "./Search";
import SidebarLi from "./SidebarLi";
import Featured from "./Featured";
import FooterTheme from "./Footer";



class Sidebar extends React.Component {

    test(){
        console.log("да");
    }


    render() {
        return(
            <div className="inner" onScrollCapture={this.test}>
                <SearchBox/>
                <nav id="menu">
                    <ul>
                        <SidebarLi title = "Глава 1"/>
                        <SidebarLi title = "Глава 2"/>
                        <SidebarLi title = "Глава 3"/>
                    </ul>
                </nav>
                <Featured/>
                <FooterTheme/>
            </div>
        );
    }
}

export default Sidebar;



