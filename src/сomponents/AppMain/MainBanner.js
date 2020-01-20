import React, {Component} from "react";

function BannerCaption(props) {
    return (
        <div className="banner-caption">
            <h4>{props.title}</h4>
            <span>{props.span}</span>
            <p>{props.description}</p>
            <div className="primary-button">
                <a href={props.url}>Читать далее</a>
            </div>
        </div>
    );
}

class MainBanner extends React.Component{

    render() {
        return(
            <section className="main-banner">
                <div className="container-fluid">
                    <div className="row">
                        <div className="col-md-12">
                            <div className="banner-content">
                                <div className="row">
                                    <div className="col-md-12">
                                        <BannerCaption
                                            title = "История ислама"
                                            span = "AWESOME HTML5 &amp; CSS3 TEMPLATE"
                                            description = "Краткое описание"
                                            url = "#"/>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        );
    }

}

export default MainBanner;