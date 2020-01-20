import React, {Component} from "react";

function ServiceItem(props) {
    return(
        <div className="col-lg-4 col-md-6 col-sm-12">
            <div className="service-item first-item">
                <div className="icon"></div>
                <h4>{props.title}</h4>
                <p>{props.description}</p>
            </div>
        </div>
    );
}

class MainServices extends React.Component{
    render() {
        return(
            <section className="services">
                <div className="container-fluid">
                    <div className="row">
                        <ServiceItem
                            title = "Web Design"
                            description = "Credit goes to for images used in this template. Thank you."
                        />
                        <ServiceItem
                            title = "Bootstrap 4"
                            description = "Proin aliquam facilisis ante interdum. Sed nulla feugiat tempus aliquam."
                        />
                        <ServiceItem
                            title = "HTML CSS"
                            description = "Proin aliquam facilisis ante interdum. Sed nulla feugiat tempus aliquam."
                        />
                        <ServiceItem
                            title = "Download Free"
                            description = "Credit goes to for images used in this template. Thank you."
                        />
                        <ServiceItem
                            title = "Get in touch"
                            description = "Proin aliquam facilisis ante interdum. Sed nulla feugiat tempus aliquam."
                        />
                        <ServiceItem
                            title = "Spread a word"
                            description = "Proin aliquam facilisis ante interdum. Sed nulla feugiat tempus aliquam."
                        />
                    </div>
                </div>
            </section>
        );
    }
}

export default MainServices