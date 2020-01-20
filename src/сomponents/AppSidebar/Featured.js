import React, {Component} from 'react';
import FeaturedTheme from "../AppSidebar/FeaturedTheme";

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

export default Featured;