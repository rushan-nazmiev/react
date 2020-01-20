import React, {Component} from 'react';
import AppSidebar from "./AppSidebar/AppSidebar";
import AppMain from "./AppMain/AppMain";


//App box

class App extends React.Component{
    render() {
        return [
            <AppMain key = "appmain"/>,
            <AppSidebar key = "appsidebar"/>
        ]
    }
}

export default App;


// сборка двух компонентов в массив [] и добавление ключей, да бы избежать ошибки компоновки
// class App extends React.Component{
//     render() {
//         return [
//             <Sidebar key = 'a'/>,
//             <BtnWindow key = 'b'/>
//         ]
//     }
// }
