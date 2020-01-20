
//search box
class SearchBox extends React.Component{
    render() {
        return React.createElement(
            'section',
            {id:'search', className:'alt'},
            React.createElement(
                'form',
                {method:'get', action:'#'},
                React.createElement(
                    'input',
                    {type:'text', name:'search', id:'search', placeholder:'Search...'}
                )
            )
        );
    }
}


//sidebar-li
class SidebarLi extends React.Component{

    render(){
        return React.createElement(
            'li',
            {},
            React.createElement(
                'a',
                {href:'index.tnml'},
                this.props.title
            )
        );
    }
}
class FeaturedTheme extends React.Component{
    render(){
        return React.createElement(
            'a',
            {href:'#'},
            React.createElement(
                'div',
                {className:'featured-item'},
                React.createElement(
                    'img',
                    {src:'assets/images/featured_post_01.jpg', alt:'featured one'}
                ),
                React.createElement(
                    'p',
                    {},
                    'Aliquam egestas convallis eros sed gravida. Curabitur consequat sit.'
                )
            )
        );
    }

}


//Featured Posts
class Featured extends React.Component {
    render() {
        return React.createElement(
            'div',
            {className:'featured-posts'},
            React.createElement(
                'div',
                {className:'heading'},
                React.createElement(
                    'h2',
                    {},
                    'Featured Posts'
                )
            ),
            React.createElement(
                'div',
                {className:'owl-carousel owl-theme owl-loaded owl-drag'},
                React.createElement(
                    FeaturedTheme,
                    {}
                )
            )
        );
    }
}

//footer
class FooterTheme extends React.Component{
    render() {
        return React.createElement(
            'footer',
            {id:'footer'},
            React.createElement(
                'p',
                {className:'copyright'},
                'Copyright &copy; 2019 Company Name<br/>Designed by',
                React.createElement(
                    'a',
                    {rel:'nofollow', href:'https://www.facebook.com/templatemo'},
                    'Template Mo'
                )
            )
        );
    }
}

class Sidebar extends React.Component {
    render() {
        return React.createElement(
            'div',
            {className:'inner'},
            React.createElement(
                SearchBox,
                {}
            ),
            React.createElement(
                'nav',
                {id:'menu'},
                React.createElement(
                    'ul',
                    {},
                    React.createElement(
                        SidebarLi,
                        {title:'Глава 1'}
                    ),
                    React.createElement(
                        SidebarLi,
                        {title:'Глава 2'}
                    ),
                    React.createElement(
                        SidebarLi,
                        {title:'Глава 2'}
                    )
                )
            ),
            React.createElement(
                Featured,
                {}
            ),
            React.createElement(
                FooterTheme,
                {}
            )
        );
    }
}


const place = document.getElementById('sidebar');
ReactDOM.render(
    React.createElement(
        Sidebar
    ),
    place
);