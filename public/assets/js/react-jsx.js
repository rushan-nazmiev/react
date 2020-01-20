
//search box

class SearchBox extends React.Component{
    render() {
        return (
            <section id="search" className="alt">
                <form method="get" action="#">
                    <input type="text" name="search" id="search" placeholder="Search..." />
                </form>
            </section>
        );
    }
}


//sidebar-li
class SidebarLi extends React.Component{
    render(){
        return(
            <li><a href="index.html">{this.props.title}</a></li>
        );
    }
}

class FeaturedTheme extends React.Component{
    render(){
        return(
            <a href="#">
                <div className="featured-item">
                        <img src="assets/images/featured_post_01.jpg" alt="featured one"/>
                        <p>Aliquam egestas convallis eros sed gravida. Curabitur consequat sit.</p>
                </div>
            </a>
        );
    }
}


//Featured Posts
class Featured extends React.Component {
    render() {
        return(
            <div className="featured-posts">
                <div className="heading">
                    <h2>Featured Posts</h2>
                </div>
                <div className="owl-carousel owl-theme owl-loaded owl-drag">
                    <FeaturedTheme/>
                </div>
            </div>

         );
    }
}

//footer
class FooterTheme extends React.Component{
    render() {
        return (
            <footer id="footer">
                <p className="copyright">Copyright &copy; 2019 Company Name<br/>Designed by
                    <a rel="nofollow" href="https://www.facebook.com/templatemo">Template Mo</a>
                </p>
            </footer>
        );
    }
}
//btnwindow
class BtnWindow extends React.Component{
    render() {
        return (
            <a href="#sidebar" className="toggle"><span>полный экран</span></a>
        );
    }
}




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

class App extends React.Component{
    render() {
        // сборка двух компонентов в массив [] и добавление ключей, да бы избежать ошибки компоновки
        return [
                <Sidebar key = 'a'/>,
                <BtnWindow key = 'b'/>
        ]
    }
}


const place = document.getElementById('sidebar');
ReactDOM.render(
    <App/>,
    place
);
