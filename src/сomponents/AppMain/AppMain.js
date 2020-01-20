import React, {Component} from 'react';
import MainHeader from "./MainHeader";
import MainBanner from "./MainBanner";
import MainServices from "./MainServices";
import MainTopImage from "./MainTopImage";
import MainLeftImage from "./MainLeftImage";
import MainRightImage from "./MainRightImage";


//AppMain box

class AppMain extends React.Component{
    render() {
        return (
            <div id="main">
                <div className="inner">
                    <MainHeader/>
                    <MainBanner/>
                    <MainServices/>
                    <MainTopImage/>
                    <MainLeftImage/>
                    <MainRightImage/>
                </div>
            </div>

        );
    }
}

export default AppMain;