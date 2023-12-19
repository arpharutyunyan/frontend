import React, {Component} from "react";
import PropTypes from "prop-types";

class ToursList extends Component {
    render() {
        const {tourData} = this.props;
        return (
            <div className="toursList">
                <div className="image__block">
                    <img src={tourData.img} alt=""/>
                </div>
                <div className="tourInfo">
                    <div className="tourInfo__top">
                        <p className="tourInfo__title">{tourData.title}</p>
                        <div className="tourInfo__price">&#36;{tourData.price}</div>
                    </div>
                    <div className="tourInfo__desc__block">
                        {tourData.desc}
                        <a href="#">Read More</a>
                    </div>
                    <a href="#" className="notInterested">Not Interested</a>
                </div>
            </div>
        );
    }
}

export default ToursList;

ToursList.propTypes = {
    tourData: PropTypes.object.isRequired
};

ToursList.defaultProps = {
    tourData: {}
}
