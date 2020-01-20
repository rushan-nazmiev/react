import React, {Component} from 'react';

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

export default FeaturedTheme;