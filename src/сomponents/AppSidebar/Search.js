import React, {Component} from 'react';

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



export default SearchBox;